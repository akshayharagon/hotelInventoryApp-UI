import { Injectable, Inject } from '@angular/core';
import { RoomList } from '../rooms';
import { environment} from '../../../environments/environment.development';
import { APP_SERVICE_CONFIG } from 'src/app/AppConfig/appconfig.service';
import { AppConfig } from 'src/app/AppConfig/appConfig.interface';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { shareReplay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  // headers = new HttpHeaders({'token':'123ABC'});
  getRooms$ = this.http.get<RoomList[]>('/api/rooms').pipe(shareReplay(1)
  );

  constructor(@Inject(APP_SERVICE_CONFIG) private config:AppConfig,
  private http:HttpClient) { 
    console.log(this.config.apiEndpoint)
    console.log('Rooms Service Initialized')
  }

    roomList: RoomList[] = [
      // {
      //   roomNumber: 101,
      //   roomType: 'Deluxe',
      //   amenities: 'AC, wifi',
      //   price: 500,
      //   photos: 'https://images...',
      //   checkInTime: new Date('12-Nov-2023'),
      //   checkOutTime: new Date('15-Nov-2023'),
      //   rating: 4.5
      // },
      // {
      //   roomNumber: 102,
      //   roomType: 'Private',
      //   amenities: 'AC, wifi, TV',
      //   price: 700,
      //   photos: 'https://images...',
      //   checkInTime: new Date('12-Nov-2023'),
      //   checkOutTime: new Date('15-Nov-2023'),
      //   rating: 4.6
      // },
      // {
      //   roomNumber: 103,
      //   roomType: 'Cottage',
      //   amenities: 'AC, wifi, pool',
      //   price: 1500,
      //   photos: 'https://images...',
      //   checkInTime: new Date('12-Nov-2023'),
      //   checkOutTime: new Date('15-Nov-2023'),
      //   rating: 5.05
      // }
    ]
    getRooms(){
      return this.http.get<RoomList[]>('/api/rooms');
    }

    addRoom(room:RoomList) {
      return this.http.post<RoomList[]>('/api/rooms', room)
    }

    editRoom(room:RoomList){
      return this.http.put<RoomList[]>(`/api/rooms/${room.roomNumber}`, room)
    }

    deleteRoom(id:string){
      return this.http.delete<RoomList[]>(`/api/rooms/${id}`)
    }

    getPhotos(){
      const request = new HttpRequest('GET', `https://jsonplaceholder.typicode.com/photos`, {
        reportProgress:true,
      })
      return this.http.request(request)
    }
}
