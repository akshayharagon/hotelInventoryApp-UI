import { Directive, OnInit, ElementRef, Inject, Renderer2, HostListener, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Directive({
  selector: '[hinvHover]'
})
export class HoverDirective implements OnInit {

  @Input() hinvHover: string = 'red';
  constructor(private element: ElementRef, private renderer: Renderer2) {
    console.log(this.element.nativeElement)
  }

  ngOnInit(): void {
    // this.element.nativeElement.style.backgroundColor=this.color;
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      this.hinvHover
    )
  }

  @HostListener('mouseenter') onmouseenter() {
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      'green'
    )
  }

  @HostListener('mouseleave') onmouseleave() {
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      'white'
    )
  }

}
