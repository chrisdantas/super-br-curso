import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnDestroy,
    OnInit,
    ViewEncapsulation
} from '@angular/core';
import {Observable, Subject} from 'rxjs';

import {cdkAnimations} from '@cdk/animations';
import {Coordenador, Pagination} from '@cdk/models';
import {Router} from '@angular/router';
import {select, Store} from '@ngrx/store';
import * as fromStore from './store';
import {getRouterState} from 'app/store/reducers';
import {CdkUtils} from '../../../../../../../@cdk/utils';
import {filter, takeUntil} from 'rxjs/operators';

@Component({
    selector: 'admin-coordenadores-list',
    templateUrl: './admin-coordenadores-list.component.html',
    styleUrls: ['./admin-coordenadores-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    animations: cdkAnimations
})
export class AdminCoordenadoresListComponent implements OnInit, OnDestroy {

    routerState: any;
    coordenadores$: Observable<Coordenador[]>;
    loading$: Observable<boolean>;
    pagination$: Observable<any>;
    pagination: any;
    deletingIds$: Observable<any>;
    deletingErrors$: Observable<any>;
    deletedIds$: Observable<any>;
    usuarioPagination: Pagination = new Pagination();
    orgaoCentralPagination: Pagination = new Pagination();
    unidadePagination: Pagination = new Pagination();
    setorPagination: Pagination = new Pagination();
    lote: string;
    private _unsubscribeAll: Subject<any> = new Subject();

    /**
     * @param _changeDetectorRef
     * @param _router
     * @param _store
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _router: Router,
        private _store: Store<fromStore.CoordenadoresListAppState>,
    ) {
        this.coordenadores$ = this._store.pipe(select(fromStore.getCoordenadoresList));
        this.pagination$ = this._store.pipe(select(fromStore.getPagination));
        this.loading$ = this._store.pipe(select(fromStore.getIsLoading));
        this.deletingIds$ = this._store.pipe(select(fromStore.getDeletingIds));
        this.deletingErrors$ = this._store.pipe(select(fromStore.getDeletingErrors));
        this.deletedIds$ = this._store.pipe(select(fromStore.getDeletedIds));

        this._store.pipe(
            select(getRouterState),
            filter(routerState => !!routerState)
        ).subscribe((routerState) => {
            this.routerState = routerState.state;
        });

        this.usuarioPagination.filter = {};
        this.usuarioPagination.populate = ['populateAll'];
        this.orgaoCentralPagination.filter = {};
        this.orgaoCentralPagination.populate = ['populateAll'];
        this.unidadePagination.filter = {};
        this.unidadePagination.populate = ['populateAll'];
        this.setorPagination.filter = {};
        this.setorPagination.populate = ['populateAll'];
        if (this.routerState.params['usuarioHandle']) {
            this.usuarioPagination.filter = {
                ...this.usuarioPagination.filter,
                id: 'eq:' + this.routerState.params['usuarioHandle']
            };
        }
    }

    ngOnInit(): void {
        this.pagination$.pipe(
            takeUntil(this._unsubscribeAll)
        ).subscribe((pagination) => {
            this.pagination = pagination;
        });
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next(true);
        this._unsubscribeAll.complete();
    }

    reload(params): void {
        this._store.dispatch(new fromStore.GetCoordenadores({
            ...this.pagination,
            filter: {
                ...this.pagination.filter,
            },
            gridFilter: {
                ...params.gridFilter
            },
            sort: params.sort,
            limit: params.limit,
            offset: params.offset,
            populate: this.pagination.populate,
            context: this.pagination.context
        }));
    }

    create(): void {
        this._router.navigate([this.routerState.url.replace('listar', 'editar/criar')]).then();
    }

    edit(coordenadorId: number): void {
        this._router.navigate([this.routerState.url.replace('listar', 'editar/') + coordenadorId]).then();
    }

    delete(coordenadorId: number, loteId: string = null): void {
        const operacaoId = CdkUtils.makeId();
        this._store.dispatch(new fromStore.DeleteCoordenador({
            coordenadorId: coordenadorId,
            operacaoId: operacaoId,
            loteId: loteId,
        }));
    }

    deleteBloco(ids: number[]): void {
        this.lote = CdkUtils.makeId();
        ids.forEach((id: number) => this.delete(id, this.lote));
    }

}