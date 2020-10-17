import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appMiDirectiva]'
})
export class MiDirectivaDirective {

  

  constructor(
    private el: ElementRef
  ) { }
  @Input() colorBase: string;
  @Input('appMiDirectiva') resaltarColor: string;

  @HostListener('mouseenter') onMouseEnter(){
    this.resaltar(this.resaltarColor || this.colorBase || 'green');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.resaltar(null);
  }

  private resaltar(color: string): void {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
