import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { routes } from './app.routes';                                                                                         
import { provideRouter, withComponentInputBinding, withRouterConfig } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryApiService } from '../in-memory-api/services/in-memory-api.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    /*provideHttpClient(withInterceptorsFromDi()),
    {
      provide: HttpClientInMemoryWebApiModule,
      useClass: InMemoryApiService,
      multi: true,
    },*/
    provideRouter(routes,
      withComponentInputBinding(),//para los resolvers
      withRouterConfig({
        paramsInheritanceStrategy: 'always'
      })
    )
  ]
};
