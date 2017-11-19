import { BaseEntity, User } from './../../shared';

export class Epic implements BaseEntity {
    constructor(
        public id?: number,
        public name?: string,
        public description?: string,
        public completed?: boolean,
        public user?: User,
    ) {
        this.completed = false;
    }
}
