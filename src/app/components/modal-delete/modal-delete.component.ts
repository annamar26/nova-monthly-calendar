import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceDeleteModalService } from 'src/app/services/delete-modal/service-delete-modal.service';


@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.scss']
})
export class ModalDeleteComponent implements OnInit{
  isVisible:boolean = false;
  modalState$!: Observable<boolean>;

  constructor (private ServiceDeleteModalService: ServiceDeleteModalService){}

  ngOnInit(): void {
    this.modalState$ = this.ServiceDeleteModalService.getState$()
    this.modalState$.subscribe(res => {
      this.isVisible = res;
    })
  }
}
