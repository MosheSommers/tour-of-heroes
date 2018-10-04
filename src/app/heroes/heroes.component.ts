import { Component, OnInit } from  '@angular/core';
import { Hero } from '../hero';
import { Heroes } from '../mock-heroes';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
    constructor(){}

    heroes = Heroes;
    selectedHero: Hero;
    hero: Hero = {
       name: 'Windstorm',
       id:5
    } 
    onSelect(hero:Hero):void{
        this.selectedHero = hero;
    }
    ngOnInit(){}
}