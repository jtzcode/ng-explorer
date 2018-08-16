import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[craftMan]'
})
export class CraftManDirective {

  private colors: string[] = [
    'darksalmon', 'hotpink', 'lightskyblue', 'goldenrod', 'peachpuff',
    'mediumspringgreen', 'cornflowerblue', 'blanchedalmond', 'lightslategrey'
  ];
  @HostBinding('style.color') color: string;
  @HostBinding('style.border-color') borderColor: string;
  @HostBinding('class.grey-cat') isGrey = true;

  @HostListener('mouseover') newColor() {
    const colorIndex = Math.floor(Math.random() * this.colors.length);
    this.color = this.borderColor = this.colors[colorIndex];
  }

  @Input() set craftMan(value) {
    this.isGrey = value;
  }
  constructor() { }

}
