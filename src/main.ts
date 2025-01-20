import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { provideRouter } from '@angular/router';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { CommonModule } from '@angular/common';

// bootstrapApplication(AppComponent, {
//   providers: [
//     provideRouter(routes), provideAnimations(), provideHttpClient(withFetch()) // Configura el enrutador con las rutas desde app.routes.ts
//   ]
// }).catch((err: any) => console.error(err));


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideAnimations(),
  ]
}).catch((err: any) => console.error(err));