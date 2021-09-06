import {AfterViewChecked, Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[viewIcon]'
})
export class ViewIconDirectives implements AfterViewChecked{
  @Input() url: string = '';
  @Input() viewType: 'icon'| 'img' = 'icon';
  constructor(
    private elementRef: ElementRef
  ) {
  }

  ngAfterViewChecked(): void {
    const nativeElement = this.elementRef.nativeElement as HTMLElement;
    if(this.viewType === 'img'){
      nativeElement.innerHTML = `<img src="${this.url}" alt="" class="wh-100">`
    }
  }
}
