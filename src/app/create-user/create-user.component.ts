import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../services/userdata.service';
// import { UserdataService } from './services/userdata.service';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

constructor(private userData:UserdataService) { }

  ngOnInit(): void {
  }
  createUser(data:any){
    console.log(data)
 //   this.userData.saveUser(data).subscribe((create:any)=>{
 //     console.log(create);
  //  })

    }

}
