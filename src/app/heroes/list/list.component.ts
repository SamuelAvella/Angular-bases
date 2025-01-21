import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[]= ['DareDevil', 'The winter soldier', 'Loki', 'Knull', 'War Machine', 'Stard lord'];
  public deletedHero?: string;

  removeLastHero():void{
    this.deletedHero = this.heroNames.pop();
    console.log(this.deletedHero);
  }
}
