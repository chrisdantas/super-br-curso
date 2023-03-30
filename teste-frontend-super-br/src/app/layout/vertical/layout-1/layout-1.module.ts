import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {CdkSidebarModule} from '@cdk/components';
import {CdkSharedModule} from '@cdk/shared.module';

import {ContentModule} from 'app/layout/components/content/content.module';
import {FooterModule} from 'app/layout/components/footer/footer.module';
import {NavbarModule} from 'app/layout/components/navbar/navbar.module';
import {QuickPanelModule} from 'app/layout/components/quick-panel/quick-panel.module';
import {AjudaPanelModule} from 'app/layout/components/ajuda-panel/ajuda-panel.module';
import {ToolbarModule} from 'app/layout/components/toolbar/toolbar.module';

import {VerticalLayout1Component} from './layout-1.component';
import {ChatPanelModule} from "../../components/chat-panel/chat-panel.module";
import {NotificationModule} from '../../../../notification/notification.module';

@NgModule({
    declarations: [
        VerticalLayout1Component
    ],
    imports: [
        RouterModule,

        CdkSharedModule,
        CdkSidebarModule,

        ContentModule,
        FooterModule,
        NavbarModule,
        QuickPanelModule,
        AjudaPanelModule,
        ChatPanelModule,
        ToolbarModule,
        NotificationModule
    ],
    exports: [
        VerticalLayout1Component
    ]
})
export class VerticalLayout1Module {
}