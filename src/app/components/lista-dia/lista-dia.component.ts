import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
interface itemDia {
	project: string;
	category: string;
	color?: string;
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
			project: 'Project',
			category: 'category',
			color: ''
		},
		{
			project: 'Project',
			category: 'category',
			color: ''
		},
		{
			project: 'Project',
			category: 'category',
			color: ''
		}
	];
	@Output() itemDia = new EventEmitter()
	
}
