import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-symbols',
  standalone: true,
  imports: [],
  templateUrl: './symbols.component.html',
  styleUrl: './symbols.component.scss'
})
export class SymbolsComponent {
  @Input() url!: string;
  @Input() img!:string;
  
  navigate(){
  window.open(this.url,'_blank')
  }
}
