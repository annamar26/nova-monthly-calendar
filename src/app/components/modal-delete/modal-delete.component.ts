import { Observable } from 'rxjs';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ServiceDeleteModalService } from 'src/app/services/delete-modal/service-delete-modal.service';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ModalDeleteComponent implements OnInit {
  isVisible: boolean = false;
  modalState$!: Observable<boolean>;

  constructor(private ServiceDeleteModalService: ServiceDeleteModalService) {}

  ngOnInit(): void {
    this.modalState$ = this.ServiceDeleteModalService.getState$();
    this.modalState$.subscribe((res) => {
      this.isVisible = res;
    });
  }
}
