import { CommonModule } from '@angular/common';
import {Input, Component } from '@angular/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  @Input() img!:string;
  @Input()title!:string;
  @Input()p!:string;
  @Input()reverse!:boolean;
  @Input()link!:string;
}
