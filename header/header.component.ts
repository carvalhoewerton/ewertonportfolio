import {HttpClient, HttpClientModule } from '@angular/common/http';
import {Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIcon, HttpClientModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() scrollToSection = new EventEmitter<string>();

  @ViewChild('intro')
  introElement!: ElementRef;

  constructor(private http:HttpClient){}

  downloadFile() {
    const url = 'assets/CURRICULO FS.pdf';
    const filename = 'CURRICULO FS.pdf';

    return this.http.get(url, { responseType: 'blob' })
      .subscribe(blob => {
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = filename;
        link.click();
      });
  }

  scrollBy(distance:number) {
    window.scrollBy({
      top: distance,
      behavior: 'smooth'
    });
  }




}
