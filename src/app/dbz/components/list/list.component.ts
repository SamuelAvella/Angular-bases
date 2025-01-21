import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/charcter.interface';

@Component({
  selector: 'dbz-list',
  standalone: false,
  
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character[] = []
  
  @Output()
  public onDeleteCharacterEvent: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string): void{
    if(!id) return

    this.onDeleteCharacterEvent.emit(id);
  }
}
