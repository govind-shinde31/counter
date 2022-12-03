import { Component } from '@angular/core';
import { UserdataService } from './services/userdata.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'API-project';
  constructor(private userData:UserdataService){}
  createUser(data:any){
    console.log(data)
    this.userData.saveUser(data).subscribe((create:any)=>{
      console.log(create);
    })

    }

}
