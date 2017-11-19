import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { EpicTaskTaskModule } from './task/task.module';
import { EpicTaskEpicModule } from './epic/epic.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        EpicTaskTaskModule,
        EpicTaskEpicModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EpicTaskEntityModule {}
