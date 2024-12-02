import { Component } from '@angular/core';
import { List } from '../../models/list.mdoel';
import { ListService } from '../../services/list.service';

declare var bootstrap : any;

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrl: './add-list.component.css'
})
export class AddListComponent {

  list : List = {
    title : '',
    summary : '',
    completed : false
  };

  constructor(private listService : ListService){}

  addList() : void {
    const data = {
      title : this.list.title,
      summary : this.list.summary,
    }
    this.listService.createList(data).subscribe({
      next : (res) => {
        this.list = {
          title : '',
          summary : '',
          completed : false
        }
        const modalElement = document.getElementById('addModal');
        const modal = new bootstrap.Modal(modalElement);
        modal.show();
      },
      error : (err) => {
        console.error(err)
      }
    })
  }

}
