import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { ViewComponent } from './pages/view/view.component';
import { ramenResolver } from './shared/resolvers/ramen_resolver';
export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' }, 
    { path: 'home', component: HomeComponent }, 
    { path: 'list', component: ListComponent }, 
    { 
        path: 'view/:id', 
        component: ViewComponent,
        resolve: {
            ramen: ramenResolver
        }
    }
];
