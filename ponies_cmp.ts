import {Component} from 'angular2/core';

@Component({
    selector: 'ponies-cmp',
    template: `
        <bouton (click)="refreshPonies()">Refresh</bouton>
        <ul>            
            <li *ngFor="#pony of ponies; #isEvent=even" [style.color]="isEvent ? 'green' : 'black'">
                {{pony.name}}
            </li>
        </ul>
    `
})
export class PoniesCmp {
    ponies: Array<any> = [{name: 'Rainbow Dash'}, {name: 'Pinkie Pie'}];
    
    refreshPonies() {
        this.ponies = [{name: 'Fluttershy'}, {name: 'Rarity'}];
    }    
}