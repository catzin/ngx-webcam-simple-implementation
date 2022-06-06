import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserImageComponent } from './user-image/user-image.component';



const routes: Routes = [
    {
        path:'',
        component: UserImageComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}