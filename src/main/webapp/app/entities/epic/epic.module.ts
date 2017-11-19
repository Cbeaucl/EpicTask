import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EpicTaskSharedModule } from '../../shared';
import { EpicTaskAdminModule } from '../../admin/admin.module';
import {
    EpicService,
    EpicPopupService,
    EpicComponent,
    EpicDetailComponent,
    EpicDialogComponent,
    EpicPopupComponent,
    EpicDeletePopupComponent,
    EpicDeleteDialogComponent,
    epicRoute,
    epicPopupRoute,
    EpicResolvePagingParams,
} from './';

const ENTITY_STATES = [
    ...epicRoute,
    ...epicPopupRoute,
];

@NgModule({
    imports: [
        EpicTaskSharedModule,
        EpicTaskAdminModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        EpicComponent,
        EpicDetailComponent,
        EpicDialogComponent,
        EpicDeleteDialogComponent,
        EpicPopupComponent,
        EpicDeletePopupComponent,
    ],
    entryComponents: [
        EpicComponent,
        EpicDialogComponent,
        EpicPopupComponent,
        EpicDeleteDialogComponent,
        EpicDeletePopupComponent,
    ],
    providers: [
        EpicService,
        EpicPopupService,
        EpicResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EpicTaskEpicModule {}
