export class RandomUserResponse{
    public get results(): RandomUserInfo[] {
        return this._results;
    }
    public set results(value: RandomUserInfo[]) {
        this._results = value;
    }
    constructor(private _results: RandomUserInfo[]){

    }
}

interface RandomUserInfo {
    name: {
        first: string,
        last: string
    },
    dob: {
        age:number
    },
    email: string,
    gender: string
}




// -- Interface
// The interface describes either a contract for a class or a type
//it's a pure ts emlement

// -- Model
// namely a class -- which is a JS function whichc is used too generate objects