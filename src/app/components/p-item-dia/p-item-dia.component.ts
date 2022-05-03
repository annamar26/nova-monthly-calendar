import { Component, Input, OnInit } from '@angular/core';
import { Activity } from 'src/app/services/data-service/data-interfaces';

@Component({
  selector: 'app-p-item-dia',
  templateUrl: './p-item-dia.component.html',
  styleUrls: ['./p-item-dia.component.scss']
})
export class PItemDiaComponent {
  @Input() data: Activity = {
    AccountName: "iTexico",
    ProjectName: "Project",
    CategoryName: "Category",
    ProjectColor: "green",
    ActivityDate: "2022-05-02T15:28:46.493Z",
    ActivityID: 0,
    Comments: 'Este es un comentario',
    EmployeeID: 0,
    ProjectID: 0,
    StepID: 0,
    TypeID: 0,
    value: 8,
    activeInProject: false
  }
 

}
