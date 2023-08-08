import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appClickedOutside]',
})
export class ClickedOutsideDirective {
  // constructor(public el: ElementRef) {}
  // @Output() clickedEvent = new EventEmitter();
  // @HostListener('document:click', ['$event.target'])
  // public onClick(target: any) {
  //   const clickedInside = this.el.nativeElement.contains(target);
  //   if (!clickedInside) {
  //     console.log('directiev');
  //     this.clickedEvent.emit();
  //   }
  // }
}
