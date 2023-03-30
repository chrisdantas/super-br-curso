import * as JuntadaActions from '../actions/juntada.actions';

export interface JuntadaState {
    entitiesId: number[];
    pagination: {
        limit: number;
        offset: number;
        filter: any;
        listFilter: any;
        populate: any;
        sort: any;
        total: number;
    };
    loading: boolean;
    loaded: any;
    errors: any;
}

export const JuntadaInitialState: JuntadaState = {
    entitiesId: [],
    pagination: {
        limit: 0,
        offset: 0,
        filter: {},
        listFilter: {},
        populate: [],
        sort: {},
        total: 0,
    },
    loading: false,
    loaded: false,
    errors: false
};

export function JuntadaReducer(state = JuntadaInitialState, action: JuntadaActions.JuntadaActionsAll): JuntadaState {
    switch (action.type) {

        case JuntadaActions.GET_JUNTADAS: {
            return {
                ...state,
                loading: true,
                pagination: {
                    limit: action.payload.limit,
                    offset: action.payload.offset,
                    filter: action.payload.filter,
                    listFilter: action.payload.listFilter,
                    populate: action.payload.populate,
                    sort: action.payload.sort,
                    total: state.pagination.total
                }
            };
        }

        case JuntadaActions.GET_JUNTADAS_SUCCESS: {

            const loaded = action.payload.loaded;

            return {
                ...state,
                entitiesId: [...state.entitiesId, ...action.payload.entitiesId],
                pagination: {
                    ...state.pagination,
                    total: action.payload.total
                },
                loading: false,
                loaded
            };
        }

        case JuntadaActions.GET_JUNTADAS_FAILED: {
            return {
                ...state,
                loading: false,
                loaded: false
            };
        }

        case JuntadaActions.UNLOAD_JUNTADAS: {

            if (action.payload.reset) {
                return {
                    ...JuntadaInitialState
                };
            } else {
                return {
                    ...state,
                    entitiesId: [],
                    pagination: {
                        ...state.pagination,
                        limit: 10,
                        offset: 0,
                        total: 0
                    }
                };
            }
        }

        default:
            return state;
    }
}
