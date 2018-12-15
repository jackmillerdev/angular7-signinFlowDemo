import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup;
  hobbiesArray;
  hobbyList: any = [];
  displayUserDetail;
  showDetail: boolean = false;
  picturefile;
  constructor(private route:Router, private router:ActivatedRoute){}
  ngOnInit() {
    this.signupForm = new FormGroup({
      'userName': new FormControl(null, Validators.required),
      'password':new FormControl(null, [Validators.required, Validators.minLength(5)]),
      'email': new FormControl(null, [Validators.email, Validators.required]),
      'gender': new FormControl('male', Validators.required),
      'address': new FormControl(null, Validators.required),
      'hobbies': new FormControl(null),
      'country': new FormControl('india', Validators.required),
      'profilePicture': new FormControl(null)
    });

    this.hobbiesArray = ['Dancing', 'Cricket', 'Reading'];
  }

  signupUser() {
    
    let formdata=new FormData();
    let data=this.signupForm.value;
    formdata.append("formdata",JSON.stringify(data));
    formdata.append("photo",this.picturefile);
    this.showDetail = true;
    
    this.displayUserDetail = this.signupForm.value;
    this.displayUserDetail.profilePicture = this.picturefile;
     console.log(this.displayUserDetail);
  }

  hobbiesList(hobby) {
    console.log(hobby.target.checked);
    (hobby.target.checked) ? this.hobbyList.push(hobby.target.value) : this.hobbyList.pop(hobby.target.value);
  }

  onfileupload(picturefile) {
    this.picturefile = picturefile.srcElement.files.item(0);
  }

  goForLogin(){
    this.route.navigate(['../login'],{relativeTo:this.router});
  }
}
