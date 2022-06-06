import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebcapComponent } from './webcap/webcap.component';
import { UserImageComponent } from './user-image/user-image.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { ProfileRoutingModule } from './profile-routing.module';
import { WebcamModule } from 'ngx-webcam';
import { PreviewComponent } from './preview/preview.component';
@NgModule({
  declarations: [
    WebcapComponent,
    UserImageComponent,
    PreviewComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    ProfileRoutingModule,
    WebcamModule
  ],
  exports:[
    UserImageComponent
  ]
})
export class ProfileModule { }
