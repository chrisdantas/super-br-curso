import {NgModule} from '@angular/core';
import {MatSidenavModule} from '@cdk/angular/material';

import {CdkSidebarModule, CdkThemeOptionsModule} from '@cdk/components';
import {CdkSharedModule} from '@cdk/shared.module';

import {ContentModule} from 'app/layout/components/content/content.module';
import {FooterModule} from 'app/layout/components/footer/footer.module';
import {NavbarModule} from 'app/layout/components/navbar/navbar.module';
import {QuickPanelModule} from 'app/layout/components/quick-panel/quick-panel.module';
import {ToolbarModule} from 'app/layout/components/toolbar/toolbar.module';

import {HorizontalLayout1Component} from './layout-1.component';
import {AjudaPanelModule} from '../../components/ajuda-panel/ajuda-panel.module';
import {ChatPanelModule} from "../../components/chat-panel/chat-panel.module";
import {NotificationModule} from '../../../../notification/notification.module';

@NgModule({
    declarations: [
        HorizontalLayout1Component
    ],
    imports: [
        MatSidenavModule,

        CdkSharedModule,
        CdkSidebarModule,
        CdkThemeOptionsModule,

        ContentModule,
        FooterModule,
        NavbarModule,
        QuickPanelModule,
        ChatPanelModule,
        AjudaPanelModule,
        ToolbarModule,
        NotificationModule
    ],
    exports: [
        HorizontalLayout1Component
    ]
})
export class HorizontalLayout1Module {
}