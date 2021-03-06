export class OrderConfig {
    public beforeRedirect : string;
    public redirect : string = '';
    public gridConfigs : any;
    public url : any = '';
    public globalPlaceholder : any ='';
    public perPageArray : any = [];
    public filterForm : any = [];
    public mobileOrderList : any = [];

    constructor(beforeRedirect,globalPlaceholder,redirect,perPageArray,filterForm,gridConfigs,url,mobileOrderList) {
        this.beforeRedirect = beforeRedirect;
        this.redirect = redirect;
        this.gridConfigs = gridConfigs;
        this.url = url;
        this.globalPlaceholder = globalPlaceholder;
        this.perPageArray = perPageArray;
        this.filterForm = filterForm;
        this.mobileOrderList = mobileOrderList;
    }
}
