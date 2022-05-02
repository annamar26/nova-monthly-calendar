import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent{

@Input() message: string = "Este es un mensaje predeterminado"
@Input() type!: 'default'|'custom'
success!: boolean 
@Input() backgroundColor!: string 



}
