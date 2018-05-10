export class GridConfig {
    public name: string;
    public title: string = '';
    public enableSorting: boolean = false;

    constructor(name,title,enableSorting) {
        this.name = name;
        this.title = title;
        this.enableSorting = enableSorting;
    }
}
