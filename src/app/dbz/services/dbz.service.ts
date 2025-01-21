import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid'

import { Character } from '../interfaces/charcter.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name:"Krillin",
    power: 1000
  },
  {
    id: uuid(),
    name:"Goku",
    power: 9500
  },
  {
    id: uuid(),
    name:"Trunks",
    power: 10
  }];

  addCharacter(character: Character): void{

    const newCharacter: Character = { id: uuid(), ...character}
    //console.log('Main, onNewCharacter characters before push', character, this.characters );
    this.characters.push(newCharacter)
    //console.log('Main, onNewCharacter characters after push', character, this.characters);
    
  }

  deleteCharacterById(id: string): void{
    this.characters = this.characters.filter(character => character.id !== id);
  }

  constructor() { }
}
