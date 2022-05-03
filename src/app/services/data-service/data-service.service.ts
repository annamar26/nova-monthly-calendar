import { Injectable } from '@angular/core';
import { Activity, Project, User } from './data-interfaces';

@Injectable({
	providedIn: 'root'
})
export class DataServiceService {
	userData: User = {
		EmployeeDetailID: 0,
		EmployeeID: 0,
		EmployeeName: '',
		EmployeeTypeName: '',
		GenderID: 0,
		GenderName: '',
		LastName: '',
		LocationName: '',
		OfficeLocationID: 0,
		RoutePhoto: ''
	};
	projectData: Project = {
		AccountName: 'iTexico',
		ProjectAccountID: 0,
		ProjectId: 0,
		ProjectName: 'Delivery',
		ProjectCategories: [
			{
				CategoryName: 'Available',
				CategoryID: 0
			}
		],
		ProjectColor: 'red',
		ProjectStartDate: '2011-12-19T15:28:46.493Z',
		ProjectEndDate: '2011-12-19T15:28:46.493Z',
		ProjectIsActive: false
	};
	activitiesData: Array<Activity> = [
		{
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

	/* getAPIData() {
		return { user: this.userData, project: this.projectData, activities: this.activitiesData };
	} */
}
