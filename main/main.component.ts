import { Component, Inject, PLATFORM_ID } from '@angular/core';
import ScrollReveal from 'scrollreveal';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AboutmeComponent } from '../aboutme/aboutme.component';
import { HeaderComponent } from "../header/header.component";
import { SkillsComponent } from "../skills/skills.component";
import { ProjectComponent } from "../project/project.component";
import { SymbolsComponent } from "../symbols/symbols.component";
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
    selector: 'app-main',
    standalone: true,
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
    providers: [MatSnackBar],
    imports: [MatInputModule, MatFormFieldModule, FormsModule, CommonModule, MatButtonModule, MatIconModule, AboutmeComponent, HeaderComponent, SkillsComponent, ProjectComponent, SymbolsComponent]
})
export class MainComponent {
  filterName!: string;
  show: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private snack: MatSnackBar) {
    if (isPlatformBrowser(this.platformId)) {
      import('scrollreveal').then(module => {
        const ScrollReveal = module.default;
        ScrollReveal().reveal('.am, .mpj, .contact', {
          delay: 200,
          distance: '20px',
          origin: 'top',
          interval: 150
        });
      }).catch(error => {
        console.error('Erro ao carregar o ScrollReveal:', error);
      });
    }
  }

  toIntro(sectionClass: string) {
    const sectionDiv = document.querySelector(`.${sectionClass}`);
    if (sectionDiv) {
      sectionDiv.scrollIntoView({ behavior: 'smooth' });
    }
  }

  clearInputs(...inputs: HTMLInputElement[]) {
    inputs.forEach(input => input.value = '');
    this.snack.open("Thank you! I'll get in touch soon!", "x", { duration: 7000 });
  }
}
