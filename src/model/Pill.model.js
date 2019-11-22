import { Scheduler } from "./Scheduler.model";
import { PortionEnum } from "./PortionEnum.ts";

export class Pill {
    constructor(key = 1, name = 'Aspirin', portion = PortionEnum.FULL, scheduler = new Scheduler()) {
        this.key = key;
        this.name = name;
        this.portion = portion;
        this.scheduler = scheduler;
    }
}
