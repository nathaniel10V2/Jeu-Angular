export class Gamer {
    private _name: string|null;
    private _score: number = 0;
    
    constructor(name: string) {
    	this._name = name;
    }
    
    public get name(): string|null { 
    	return this._name;
    }
    
    public set name(name: string|null) { 
    	this._name = name;
    }
    
    public get score(): number { 
    	return this._score;
    }
    
    public set score(score: number) { 
    	this._score = score;
    }
}