import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CrudjobService } from 'src/app/jobs/crudjobs.service';

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.scss']
})
export class JobFormComponent implements OnInit {

  jobform:any;

  constructor(private crudjob: CrudjobService,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.jobform =this.formBuilder.group({

      Title:['',],
      CompanyName:['',],
      Description:['',], 
      URL:['',],
    })
  }
  onAdd(){
    console.log("azerty",this.jobform.value)
     this.crudjob.ajout(this.jobform.value).subscribe(user=>{ this.jobform.reset;})
     }

}
