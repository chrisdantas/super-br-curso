import {createSelector} from '@ngrx/store';
import {ComplementarAppState, DocumentosState, getComplementarAppState} from '../reducers';
import {createSchemaSelectors} from '@cdk/ngrx-normalizr';
import {Documento} from '@cdk/models';
import {documento as documentoSchema} from '@cdk/normalizr';


const schemaDocumentoSelectors = createSchemaSelectors<Documento>(documentoSchema);

export const getDocumentosState: any = createSelector(
    getComplementarAppState,
    (state: ComplementarAppState) => state ? state.documentos : null
);

export const getDocumentosId: any = createSelector(
    getDocumentosState,
    (state: DocumentosState) => state.documentosId
);


export const getDocumentos: any = createSelector(
    schemaDocumentoSelectors.getNormalizedEntities,
    getDocumentosId,
    schemaDocumentoSelectors.entitiesProjector
);

export const getDocumentosHasLoaded: any = createSelector(
    getDocumentosState,
    (state: DocumentosState) => state.documentosLoaded
);

export const getSelectedDocumentoIds: any = createSelector(
    getDocumentosState,
    (state: DocumentosState) => state.selectedDocumentosId
);

export const getSelectedDocumentos: any = createSelector(
    schemaDocumentoSelectors.getNormalizedEntities,
    getSelectedDocumentoIds,
    schemaDocumentoSelectors.entitiesProjector
);

export const getConvertendoAllDocumentosId: any = createSelector(
    getDocumentosState,
    (state: DocumentosState) => [
            ...state.convertendoDocumentoIds,
            ...state.convertendoDocumentoHtmlIds
        ]
);

export const getConvertendoDocumentosId: any = createSelector(
    getDocumentosState,
    (state: DocumentosState) => state.convertendoDocumentoIds
);

export const getConvertendoDocumentosHtmlId: any = createSelector(
    getDocumentosState,
    (state: DocumentosState) => state.convertendoDocumentoHtmlIds
);


export const getDeletingDocumentosId: any = createSelector(
    getDocumentosState,
    (state: DocumentosState) => state.deletingDocumentoIds
);

export const getAssinandoDocumentosId: any = createSelector(
    getDocumentosState,
    (state: DocumentosState) => state.assinandoDocumentoIds
);
