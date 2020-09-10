import { RouterModule, Routes } from '@angular/router';

import { CameraListComponent } from './components/camera-list/camera-list.component';

export const AppRoutes = RouterModule.forRoot([	
  {
    path: '',
    redirectTo: 'camera-list',
    pathMatch: 'full'
  },
  {
    path: 'camera-list',
    component: CameraListComponent
  }
]);
