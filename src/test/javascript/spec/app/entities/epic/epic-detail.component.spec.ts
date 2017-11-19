/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { JhiDateUtils, JhiDataUtils, JhiEventManager } from 'ng-jhipster';
import { EpicTaskTestModule } from '../../../test.module';
import { MockActivatedRoute } from '../../../helpers/mock-route.service';
import { EpicDetailComponent } from '../../../../../../main/webapp/app/entities/epic/epic-detail.component';
import { EpicService } from '../../../../../../main/webapp/app/entities/epic/epic.service';
import { Epic } from '../../../../../../main/webapp/app/entities/epic/epic.model';

describe('Component Tests', () => {

    describe('Epic Management Detail Component', () => {
        let comp: EpicDetailComponent;
        let fixture: ComponentFixture<EpicDetailComponent>;
        let service: EpicService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [EpicTaskTestModule],
                declarations: [EpicDetailComponent],
                providers: [
                    JhiDateUtils,
                    JhiDataUtils,
                    DatePipe,
                    {
                        provide: ActivatedRoute,
                        useValue: new MockActivatedRoute({id: 123})
                    },
                    EpicService,
                    JhiEventManager
                ]
            }).overrideTemplate(EpicDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(EpicDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(EpicService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new Epic(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.epic).toEqual(jasmine.objectContaining({id: 10}));
            });
        });
    });

});
