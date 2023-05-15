import { SimpleChanges, Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, OnChanges, OnDestroy } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit, OnChanges, OnDestroy {

  ngOnDestroy(): void {
    console.log('On destroy is called')
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if(changes['title']){
      this.title = changes['title'].currentValue.toUpperCase();
    }
  }

  @Input() rooms: RoomList[] | null= [];
  @Input() title: string ='';
  @Input() price=0;
  @Output() selectedRoom = new EventEmitter<RoomList>();
  constructor() { }
  ngOnInit(): void {
  }

  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }

}
