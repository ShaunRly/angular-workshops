// creating a model for a shopping item

export class ShoppingItem{
    public get quantity(): number {
        return this._quantity;
    }
    public set quantity(value: number) {
        this._quantity = value;
    }

    public get name(): String {
        return this._name;
    }
    public set name(value: String) {
        this._name = value;
    }

    constructor(private _name: String, private _quantity: number){
        
    }
}