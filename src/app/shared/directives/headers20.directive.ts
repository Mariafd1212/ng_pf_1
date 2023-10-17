import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHeaders20]'
})
export class Headers20Directive {

  constructor(public ElementRef: ElementRef, public Renderer: Renderer2) {
    this.headers20();
  }


  headers20() {
    this.Renderer.setStyle(
      this.ElementRef.nativeElement,
      'font-size',
      '20px'
    );
  }
}
