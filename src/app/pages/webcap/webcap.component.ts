import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { WebcamImage, WebcamInitError } from 'ngx-webcam';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-webcap',
  templateUrl: './webcap.component.html',
  styleUrls: ['./webcap.component.scss']
})
export class WebcapComponent implements OnInit,OnDestroy {
  
  readonly imageTrigger: Subject<void> = new Subject<void>();
  error ?: string;
  constructor(private dialogRef : MatDialogRef<WebcapComponent>) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.imageTrigger.complete();
  }

  public captureImage(webcamImage : WebcamImage):void{
    this.dialogRef.close(webcamImage.imageAsDataUrl);
  }
  public triggerSnapshot():void{
    this.imageTrigger.next();
  }

  public handleInitError(error: WebcamInitError): void {
    console.warn(error);
    this.error = JSON.stringify(error);
  }

  

}
