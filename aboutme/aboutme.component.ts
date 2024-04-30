import { Component } from '@angular/core';
import { SymbolsComponent } from "../symbols/symbols.component";

@Component({
    selector: 'app-aboutme',
    standalone: true,
    templateUrl: './aboutme.component.html',
    styleUrl: './aboutme.component.scss',
    imports: [SymbolsComponent]
})
export class AboutmeComponent {

}
