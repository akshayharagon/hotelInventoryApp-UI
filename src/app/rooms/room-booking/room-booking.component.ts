import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'hinv-room-booking',
  templateUrl: './room-booking.component.html',
  styleUrls: ['./room-booking.component.scss']
})
export class RoomBookingComponent implements OnInit {

  id: number = 0;
  // id$ = this.router.params.pipe(map(params => params['roomId']))
    id$ = this.router.paramMap.pipe(map(params => params.get('roomId')))

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {

    // this.id= this.router.snapshot.params['roomId']

    // this.router.params.subscribe((params)=>{
    //  this.id= params['roomId']
    // })

    // this.router.paramMap.subscribe((params=>{
    //   params.get('roomId')
    // }))

  }




}
