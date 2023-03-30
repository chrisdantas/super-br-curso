import {NgModule} from '@angular/core';
import {
    MatAutocompleteModule,
    MatButtonModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule
} from '@cdk/angular/material';
import {TranslateModule} from '@ngx-translate/core';

import {CdkSharedModule} from '@cdk/shared.module';
import {VisibilidadesComponent} from './visibilidades.component';
import {RouterModule, Routes} from '@angular/router';
import {MatTooltipModule} from '@angular/material/tooltip';
import {modulesConfig} from 'modules/modules-config';
import {TipoRelatorioService} from '@cdk/services/tipo-relatorio.service';
import {PathModule} from '../../../../../../@cdk/components/path/path.module';

const routes: Routes = [
    {
        path: ':tipoRelatorioHandle',
        component: VisibilidadesComponent,
        children: [
            {
                path       : 'listar',
                loadChildren: () => import('./visibilidade-list/visibilidade-list.module').then(m => m.VisibilidadeListModule),
            },
            {
                path       : 'editar',
                loadChildren: () => import('./visibilidade-edit/visibilidade-edit.module').then(m => m.VisibilidadeEditModule),
            },
            {
                path: '**',
                redirectTo: 'listar'
            }
        ]
    }
];

const path = 'app/main/apps/admin/tipo-relatorio/visibilidades';

modulesConfig.forEach((module) => {
    if (module.routes.hasOwnProperty(path)) {
        module.routes[path].forEach((r => routes[0].children.push(r)));
    }
});

@NgModule({
    declarations: [
        VisibilidadesComponent
    ],
    imports: [
        RouterModule.forChild(routes),

        MatExpansionModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatCheckboxModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,

        TranslateModule,

        CdkSharedModule,
        MatTooltipModule,
        PathModule,
    ],
    providers: [
        TipoRelatorioService
    ],
    exports: [
        VisibilidadesComponent
    ]
})
export class VisibilidadesModule {
}
