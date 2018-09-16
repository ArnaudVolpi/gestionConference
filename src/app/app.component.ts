import { Component } from '@angular/core';
import { DataRenderService } from './data-render.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataRenderService]
})
export class AppComponent {
  title = 'gestionConference';
  professions: any[] = [];

  constructor( private dataRenderService: DataRenderService){

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.dataRenderService.allProfessions().subscribe(
      (professions)=>{
       this.professions=professions;
       console.log(this.professions)
      }
    );

    this.dataRenderService.allUsers().subscribe(
      (users)=>{
       console.log(users)
      }
    );

    this.dataRenderService.allSeminaire().subscribe(
      (seminaire)=>{
       console.log(seminaire)
      }
    );


  }
}
