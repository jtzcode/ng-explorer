import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'change-detect-observable',
  changeDetection: ChangeDetectionStrategy.OnPush,
  // 使用Default策略时，angular能够响应observable数据流的改变
  // （在默认策略下，任何对binding的改动都会触发全局检测，无论是value还是reference的改动）
  // 进行变更检测。使用onpush策略的目的是，先让程序不响应数据流变化，因为数据流没有改变observable本身，
  // 然后再在特定时刻进行变更检测，使得程序更灵活
  template: `
        <div>
            <div>Total items: {{counter}}</div>
            <button (click)="refresh()">Refresh</button>
        </div>
    `
})
export class ChangeDetectionComponent implements OnInit {
  title = 'change-detect-observable';
  @Input() items: Observable<number>;
  counter = 0;
  
  constructor(private changeDetector: ChangeDetectorRef) {
  }

  refresh() {
      // Only DOM events can trigger change detection.
      console.log("Refresh counter.");
  }

  ngOnInit() {
    // Such async events will not trigger change detection under onpush policy. Only DOM events can do.
    setInterval(() => console.log(this.counter), 2000);
    this.items.subscribe((v) => {
        this.counter++;
        if(this.counter % 5 == 0) {
            this.changeDetector.markForCheck();
        }
    }, null, () => {
        this.changeDetector.markForCheck();
    });
  }
}