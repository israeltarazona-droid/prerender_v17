import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
constructor(private meta: Meta, @Inject(DOCUMENT) private doc: Document) {}
  ngOnInit() {
    //Meta Tags- ROBOTS
    // this.meta.updateTag({ name: 'robots', content: 'noindex, nofollow' });

    //Insetar JSON-LD - SHEMA.ORG
    const script = this.doc.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Laboratorio de pruebas - assessment pragma",
      "url": "https://prerender-v17.web.app",
      "logo": "https://prerender-v17.web.app/assets/logo.png",
      "sameAs": [
        "https://facebook.com/assessmentpragma",
        "https://twitter.com/assessmentpragma"
      ]
    });
    this.doc.head.appendChild(script);
  }
}
