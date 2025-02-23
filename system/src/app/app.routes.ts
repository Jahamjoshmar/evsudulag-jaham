import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'user',
        loadChildren: () => import('./main/users/users.module').then(m => m.UsersModule)
    },
    {
        path: '',
        redirectTo: 'user',
        pathMatch: 'full'
    }
];
