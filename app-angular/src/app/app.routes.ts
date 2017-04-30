import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './componentes/login/login.component';
import { MascotasComponent } from './componentes/mascotas/mascotas.component';
import { PersonasComponent } from './componentes/personas/personas.component';
import { PageNotFoundComponent } from './componentes/page-not-found/page-not-found.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'mascotas', component: MascotasComponent },
    { path: 'personas', component: PersonasComponent },
    { path: '**', component: PageNotFoundComponent} //pathMatch:'full', redirectTo:'page-not-found' }
];

export const routing = RouterModule.forRoot(routes, {useHash:true});