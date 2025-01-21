import { Component } from '@angular/core';
import { Character } from '../../interfaces/charcter.interface';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  standalone: false,
  
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

  constructor(private dbzService: DbzService){ }
  
  get characters(): Character[]{
    return [...this.dbzService.characters]
  }

  onDeleteCharacter(id: string): void{
    this.dbzService.deleteCharacterById(id)
  }

  onNewCharacter(character: Character): void{
    this.dbzService.addCharacter(character)
  }
}
