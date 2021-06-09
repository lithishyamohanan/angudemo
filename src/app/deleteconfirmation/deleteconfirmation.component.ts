import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
// import * as EventEmitter from 'events';

@Component({
  selector: 'app-deleteconfirmation',
  templateUrl: './deleteconfirmation.component.html',
  styleUrls: ['./deleteconfirmation.component.css']
})
export class DeleteconfirmationComponent implements OnInit {
 @Input() item:string | null | undefined;
 @Output() onDelete = new EventEmitter;
 @Output() onCancel = new EventEmitter;
  constructor() { }

  ngOnInit(): void {
  }
delete(){
  alert("deleting....")
  this.onDelete.emit(this.item)
  
}
cancel(){
  alert("Cancelling.....")
  this.onCancel.emit()
}
}
