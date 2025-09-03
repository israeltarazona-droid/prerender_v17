import { Routes } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { TestPrerenderComponent } from '../test-prerender/test-prerender.component';
import { AppComponent } from './app.component';
import { HomeComponent } from '../home/home.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent  },
  { path: 'testPrerender', component: TestPrerenderComponent  },
  { path: '**', redirectTo: '/home' }  // opcional: redirige rutas no válidas
];
