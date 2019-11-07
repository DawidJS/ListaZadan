import { Directive, HostListener, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDate]'
})
export class DateDirective {

  @Input()
  private date: Date;
  private paragraph; //<p>

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.paragraph = this.renderer.createElement('p'); //tworze <p>
  }

  @HostListener('mouseenter')
  mouseenter(eventDate: Event){
    this.paragraph.innerHTML = this.date.toLocaleDateString(); // toLocaldat.. metoda do oblusgi dat
    this.renderer.appendChild(this.el.nativeElement/*rodzic czyli li */, this.paragraph); // do elemtnu li dodaje nowy paragraf
  }
  
  @HostListener('mouseleave')
  mouseleave(eventDate: Event){
  this.renderer.removeChild(this.el.nativeElement, this.paragraph); // usuwa date z p
}
}
