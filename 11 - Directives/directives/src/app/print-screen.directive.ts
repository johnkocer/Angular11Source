import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[printScreen]'
})

export class PrintScreenDirective {

  constructor(el: ElementRef) { }

  @Input('printScreen') targetElement: string;
  //el.nativeElement.style.backgroundColor = 'yellow';

  @HostListener('click', ['$event.target']) onClick(e) {
    console.log('targetElement: ' + this.targetElement);
    var target = document.getElementById(this.targetElement);

    var orig = target.className;
    target.className += " print-content";
    window.print();
    target.className = orig;
  }
}
