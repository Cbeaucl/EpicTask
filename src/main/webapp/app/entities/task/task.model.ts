import { BaseEntity } from './../../shared';

export class Task implements BaseEntity {
    constructor(
        public id?: number,
        public name?: string,
        public description?: string,
        public finishBy?: any,
        public completed?: boolean,
        public epic?: BaseEntity,
    ) {
        this.completed = false;
    }
}
