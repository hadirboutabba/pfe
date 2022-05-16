import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CrudvolunteerService } from 'src/app/volunteers/crudvolunteer.service';

@Component({
  selector: 'app-volunteer-form',
  templateUrl: './volunteer-form.component.html',
  styleUrls: ['./volunteer-form.component.scss']
})
export class VolunteerFormComponent implements OnInit {

  volunteerform: any;



  constructor(private crudvolunteer: CrudvolunteerService,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.volunteerform =this.formBuilder.group({

      Title:['',],
      CompanyName:['',],
      Description:['',], 
      URL:['',],
    })
  }
  onAdd(){
    console.log("azerty",this.volunteerform.value)
     this.crudvolunteer.ajout(this.volunteerform.value).subscribe(user=>{ this.volunteerform.reset;})
     }
  onMOdify(){
    console.log("azerty",this.volunteerform.value)
    this.crudvolunteer.modify(this.volunteerform.value).subscribe(user=>{ this.volunteerform.reset;})
  }
  
  onDelete(){
    console.log("azerty",this.volunteerform.value)
    this.crudvolunteer.delete(this.volunteerform.value).subscribe(user=>{ this.volunteerform.reset;})
  }



}
