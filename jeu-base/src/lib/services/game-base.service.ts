import { Injectable } from '@angular/core';
import { Gamer } from '../models/gamer'

@Injectable({
  providedIn: 'root'
})
export abstract class GameBaseService {
	
    protected gamerList: Array<Gamer> = new Array<Gamer>();

    protected gamerCount: number = 0;

    protected activeGamer: Gamer|undefined|null;

	constructor() { }

    public abstract newGamer(gamerName: string): void;

    public addGamer(gamer: Gamer): void {
		this.gamerList.push(gamer);
	}
	
	public deleteGamer(gamer: Gamer): void{
		const indexGamer = this.gamerList.indexOf(gamer);
		if (indexGamer >= 0) {
			this.gamerList.splice(indexGamer,1);
		}	
	}
	
	public abstract startGame(): void;	

    public getFirstGamer(): Gamer {
        return this.gamerList[0];
    }

    public getActiveGamer(): Gamer {
		if(!this.activeGamer) {
			this.activeGamer = this.getFirstGamer();
		}
        return this.activeGamer;
    }

	public resetActiveGamer(): void {
		this.activeGamer = null;		
	}

    public nextGamer(): Gamer|undefined|null {
        if (this.activeGamer != null) {
            let index = this.gamerList.indexOf(this.activeGamer);
            if (index < this.gamerList.length - 1){
                index++;
            }
            else {
                index = 0;                     
            }
            this.activeGamer = this.gamerList[index];
        }
		return this.activeGamer;
    }

    public getGamerCount(): number{
        return this.gamerList.length;
    }

    public getGamerList(): Array<Gamer>{
        return this.gamerList;
    }

    public resetGamerScore(): void{
        for (let gamer of this.gamerList) {
			gamer.score = 0;
		}
    }
	
}
