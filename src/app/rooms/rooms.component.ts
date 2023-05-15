import { Component, OnInit, DoCheck, ViewChild, AfterViewInit, AfterViewChecked, ViewChildren, QueryList, OnDestroy, SkipSelf } from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';
import { Observable, Subscription, of, Subject } from 'rxjs';
import { HttpEventType } from '@angular/common/http';
import { catchError, map} from 'rxjs/operators';
import { ConfigService } from '../services/config.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked {

  constructor(@SkipSelf() private roomsService: RoomsService,
  private configService: ConfigService) { }

  ngAfterViewChecked(): void {

  }
  ngAfterViewInit(): void {
    this.headerComponent.title = "Rooms View";
    console.log(this.headerChildrenComponent.last.title = "Last Title")
  }

  ngDoCheck(): void {
    console.log('On changes is called')
  }

  roomList: RoomList[] = []

  stream = new Observable(observer => {
    observer.next('user1');
    observer.next('user2');
    observer.next('user3');
    observer.complete();
    // observer.error('error');
  })

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;
  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>

  totalBytes = 0;

  subscription!: Subscription;
  error$ = new  Subject<string>() 
  getError$ = this.error$.asObservable()

  rooms$ = this.roomsService.getRooms$.pipe(
    catchError((err) => {
      // console.log(err);
      this.error$.next(err.message)
      return of([]);
    })
  );
  roomCount$ = this.roomsService.getRooms$.pipe(
    map((rooms: { length: number; })=>rooms.length)
  )

  priceFilter = new FormControl(0)

  ngOnInit(): void {
    this.roomsService.getPhotos().subscribe((event) => {
      switch (event.type) {
        case HttpEventType.Sent: {
          console.log('Request has been made');
          break;
        }
        case HttpEventType.ResponseHeader: {
          console.log('Request Success');
          break;
        }
        case HttpEventType.DownloadProgress: {
          this.totalBytes += event.loaded
          break;
        }
        case HttpEventType.Response: {
          console.log(event.body)
          break;
        }
      }
    })
    this.stream.subscribe(
      {
        next: (value) => console.log(value),
        complete: () => console.log('complete'),
        error: (err) => console.log(err)
      }
    );
    this.stream.subscribe((data) => console.log(data));
    // this.roomsService.getRooms$.subscribe(rooms => {
    //   this.roomList = rooms;
    // });
  }

  hotelName = 'Hilton Hotel';

  hideRooms = true;

  selectedRoom!: RoomList;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  title = 'Room List';



  numberOfRooms = 10;

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = 'List of Rooms'
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      // roomNumber: '104',
      roomType: "villa",
      amenities: "Ac, fridge, wifi",
      photos: "https://images...",
      price: 1000,
      checkInTime: new Date('12-nov-2022'),
      checkOutTime: new Date('12-nov-2022'),
      rating: 5.5
    }
    // this.roomList.push(room); //due to immutability
    // this.roomList = [...this.roomList, room]
    this.roomsService.addRoom(room).subscribe((data) => {
      this.roomList = data;
    })
  }

  editRoom() {
    const room: RoomList = {
      roomNumber: '2',
      roomType: "Akshay Villa",
      amenities: "Ac, fridge, wifi",
      photos: "https://images...",
      price: 1000,
      checkInTime: new Date('12-nov-2022'),
      checkOutTime: new Date('12-nov-2022'),
      rating: 5.5
    }
    this.roomsService.editRoom(room).subscribe((data) => {
      this.roomList = data;
    })
  }

  deleteRoom() {
    this.roomsService.deleteRoom('3').subscribe((data) => {
      this.roomList = data;
    })
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
