export class OrderFiltersConfig {
    public type : string;
    public subType : string;
    public options : any = [];
    public parentClass : string;
    public label : string;
    public placeHolder : string;
    public dataIndex : string;
    public inputClass : string;
    public key : string;

    constructor (type,subType,options,parentClass,label,key,dataIndex,inputClass){
        this.type = type;
        this.subType = subType;
        this.options = options;
        this.parentClass = parentClass;
        this.label = label;
        this.dataIndex = dataIndex;
        this.inputClass = inputClass;
        this.key = key;
    }
}
