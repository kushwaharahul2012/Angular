import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormBuilder,Validators } from '@angular/forms';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})



export class EmployeeComponent implements OnInit {
  todaydate = new Date(); 
  months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun',  
    'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']; 
 
 
 
  name = new FormControl('');
  profileForm = this.fb.group({
    firstName: ['',Validators.required],
    lastName: ['',Validators.required],
    Mobile: ['',Validators.required],
    address: this.fb.group({
      street: [''],
      city: [''],
     
    }),
  });
 
 onSubmit() {
  // TODO: Use EventEmitter with form value
  console.warn(this.profileForm.value);
}

  constructor( private fb: FormBuilder) { }

  ngOnInit() {
  }

}
