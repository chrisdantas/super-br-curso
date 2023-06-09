import * as ImmutableUtils from "./ImmutableUtils";

const getDefaultGetId = (idAttribute) => (input) =>
    ImmutableUtils.isImmutable(input) ? input.get(idAttribute) : input[idAttribute];

export default class EntitySchema {
    constructor(key, definition = {}, options = {}) {
        if (!key || typeof key !== "string") {
            throw new Error(`Expected a string key for Entity, but found ${key}.`);
        }

        const {
            idAttribute = "id",
            mergeStrategy = (entityA, entityB) => {
                return {...entityA, ...entityB};
            },
            processStrategy = (input) => ({...input}),
        } = options;

        this._key = key;
        this._getId = typeof idAttribute === "function" ? idAttribute : getDefaultGetId(idAttribute);
        this._idAttribute = idAttribute;
        this._mergeStrategy = mergeStrategy;
        this._processStrategy = processStrategy;
        this.define(definition);
    }

    get key() {
        return this._key;
    }

    get idAttribute() {
        return this._idAttribute;
    }

    define(definition) {
        this.schema = Object.keys(definition).reduce((entitySchema, key) => {
            const schema = definition[key];
            return {...entitySchema, [key]: schema};
        }, this.schema || {});
    }

    getId(input, parent, key) {
        return this._getId(input, parent, key);
    }

    merge(entityA, entityB) {
        return this._mergeStrategy(entityA, entityB);
    }

    normalize(input, parent, key, visit, addEntity, visitedEntities, populate) {
        const id = this.getId(input, parent, key);
        const entityType = this.key;

        if (!(entityType in visitedEntities)) {
            visitedEntities[entityType] = {};
        }
        if (!(id in visitedEntities[entityType])) {
            visitedEntities[entityType][id] = [];
        }
        if (visitedEntities[entityType][id].some((entity) => entity === input)) {
            return id;
        }
        visitedEntities[entityType][id].push(input);

        const processedEntity = this._processStrategy(input, parent, key);
        Object.keys(this.schema).forEach((key) => {
            if (processedEntity.hasOwnProperty(key)) {
                if ((undefined === populate) && (processedEntity[key] === null)) {
                    delete processedEntity[key];
                    return;
                }
                if ((undefined !== populate) && (populate.indexOf(key) === -1) && (processedEntity[key] === null)) {
                    delete processedEntity[key];
                    return;
                }
                if ((undefined !== populate) && (populate.indexOf(key) === -1) && (Array.isArray(processedEntity[key]) && !processedEntity[key].length)) {
                    delete processedEntity[key];
                    return;
                }
                const schema = this.schema[key];
                const resolvedSchema = typeof schema === "function" ? schema(input) : schema;
                processedEntity[key] = visit(
                    processedEntity[key],
                    processedEntity,
                    key,
                    resolvedSchema,
                    addEntity,
                    visitedEntities,
                    (undefined !== populate ? this.supPopulate(populate, key) : undefined)
                );
            }
        });

        addEntity(this, processedEntity, input, parent, key);
        return id;
    }

    supPopulate(populate, property) {
        const subPopulate = [];
        populate.forEach((p) => {
            if (p.indexOf(property + '.') === 0) {
                subPopulate.push(p.replace(property + '.', ''));
            }
        });
        return subPopulate;
    }

    denormalize(entity, unvisit) {
        if (ImmutableUtils.isImmutable(entity)) {
            return ImmutableUtils.denormalizeImmutable(this.schema, entity, unvisit);
        }

        Object.keys(this.schema).forEach((key) => {
            if (entity.hasOwnProperty(key)) {
                const schema = this.schema[key];
                entity[key] = unvisit(entity[key], schema);
            }
        });
        return entity;
    }
}
