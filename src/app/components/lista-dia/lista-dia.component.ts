import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Activity } from 'src/app/services/data-service/data-interfaces';

@Component({
	selector: 'app-lista-dia',
	templateUrl: './lista-dia.component.html',
	styleUrls: [ './lista-dia.component.scss' ]
})
export class ListaDiaComponent {
	@Input()
	arrayDia: Array<Activity> = 	[{
		AccountName: 'Itexico ',
		ActivityDate: '2011-12-19T15:28:46.493Z',
		ActivityID: 0,
		CategoryName: 'Avalaible',
		Comments: 'Comentario de las actividades realizadas',
		EmployeeID: 0,
		ProjectColor: 'blue',
		ProjectID: 0,
		ProjectName: 'Delivery',
		StepID: 0,
		Task: 'Este es un ticket',
		TypeID: 0,
		value: 8,
		activeInProject: false
	},
	{
		AccountName: 'Itexico',
		ActivityDate: '2011-12-19T15:28:46.493Z',
		ActivityID: 0,
		CategoryName: 'Training',
		Comments: 'Comentario de las actividades realizadas',
		EmployeeID: 0,
		ProjectColor: 'blue',
		ProjectID: 0,
		ProjectName: 'Academy JS - Q1 2022',
		StepID: 0,
		Task: 'Este es un ticket',
		TypeID: 0,
		value: 8,
		activeInProject: false
	},

	{
		AccountName: 'Itexico',
		ActivityDate: '2011-12-19T15:28:46.493Z',
		ActivityID: 0,
		CategoryName: 'Training',
		Comments: 'Comentario de las actividades realizadas',
		EmployeeID: 0,
		ProjectColor: 'blue',
		ProjectID: 0,
		ProjectName: 'Laboratoria JS - Q1 2022',
		StepID: 0,
		Task: 'Este es un ticket',
		TypeID: 0,
		value: 8,
		activeInProject: false
	}
];
	
	
}
