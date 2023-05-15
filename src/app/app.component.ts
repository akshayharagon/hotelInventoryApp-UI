import { Component, ViewChild, ViewContainerRef, OnInit, AfterViewInit, ElementRef, Optional, Inject } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { LoggerService } from './logger.service';
import { localStorageToken } from './localStorage.token';
import { InitService } from './init.service';
import { ConfigService } from './services/config.service';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  // template:`<h1>Hello World from Inline template</h1>
  // <p> Angular is awesome</p>`,
  styleUrls: ['./app.component.scss']
  // styles:[`h1 {color:red;}`]
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    // this.router.events.subscribe((event)=>{
    //   console.log(event)
    // })
    this.router.events.pipe(
      filter((event)=>event instanceof NavigationStart)
      ).subscribe((event)=>{
        console.log('Navigation started')
      })

    this.router.events.pipe(
      filter((event)=>event instanceof NavigationEnd)
      ).subscribe((event)=>{
        console.log('Navigation Completed')
      })
    this.loggerService?.log('AppComponent.ngOnInit()');
    this.name.nativeElement.innerText = 'Hilton Hotel';
    this.localStorage.setItem('name', 'Hilton Hotel');
  }
  constructor(@Optional() private loggerService: LoggerService,
  @Inject(localStorageToken) private localStorage: Storage,
  private initService:InitService,
  private configService: ConfigService,
  private router:Router) { 
    console.log(initService.config)
  }
  // ngAfterViewInit(): void {
  //   const componentRef =this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.numberOfRooms=50;
  // }
  title = 'HotelInventoryApp';
  role = 'Use';

  // @ViewChild('user',{read:ViewContainerRef}) vcr!:ViewContainerRef
  @ViewChild('name', { static: true }) name!: ElementRef

}
