import { Component, EventEmitter, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PreviewComponent } from '../preview/preview.component';


@Component({
  selector: 'app-user-image',
  templateUrl: './user-image.component.html',
  styleUrls: ['./user-image.component.scss']
})
export class UserImageComponent implements OnInit {
  
  newImage !: string;
  constructor(private matDialog : MatDialog) { }

  ngOnInit(): void {
  }

  public openDialog():void{
    const dialogRef = this.matDialog.open(PreviewComponent,{
      data : this.newImage
    });

    dialogRef.afterClosed().subscribe( res => {
      if(res.status == 1){
        this.newImage = res.image;
      }
    });

  }

}
