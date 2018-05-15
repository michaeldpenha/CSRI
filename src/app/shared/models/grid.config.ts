export class GridConfig {
    public name: string;
    public title: string = '';
    public enableSorting: boolean = false;
    public enableClickEvent : boolean = false;
    constructor(name,title,enableSorting,enableClickEvent) {
        this.name = name;
        this.title = title;
        this.enableSorting = enableSorting;
        this.enableClickEvent = enableClickEvent;
    }
}
