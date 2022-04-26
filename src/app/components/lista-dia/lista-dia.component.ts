import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
interface itemDia {
	AccountName: string;
	ProjectName: string;
	CategoryName: string,
	ProjectColor?: string;
}
@Component({
	selector: 'app-lista-dia',
	templateUrl: './lista-dia.component.html',
	styleUrls: [ './lista-dia.component.scss' ]
})
export class ListaDiaComponent {
	@Input()
	arrayDia: Array<itemDia> = [
		{
			AccountName: 'iTexico',
			ProjectName: 'Project',
			CategoryName: 'category',
			ProjectColor: ''
		},
		{
			AccountName: 'iTexico',
			ProjectName: 'Project',
			CategoryName: 'category',
			ProjectColor: ''
		},
		{
			AccountName: 'iTexico',
			ProjectName: 'Project',
			CategoryName: 'category',
			ProjectColor: ''
		}
	];
	
	
}
