export class GridConfig {
    public name: string;
    public title: string = '';
    public enableSorting: boolean = false;
    public cellTemplate : string = '';

    constructor(name,title,enableSorting,cellTemplate) {
        this.name = name;
        this.title = title;
        this.enableSorting = enableSorting;
        this.cellTemplate = cellTemplate;
    }
}
