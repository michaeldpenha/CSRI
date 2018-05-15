export class MOrderConfig {
    public orderKey : string;
    public orderLabel : string = '';
    
    constructor(orderKey,orderLabel) {
        this.orderKey = orderKey;
        this.orderLabel = orderLabel;
    }
}
