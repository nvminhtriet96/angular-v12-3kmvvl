import { Component } from '@angular/core';
import { TabGroupComponent } from './tab-group.component';

@Component({
  selector: 'tab-bs-group',
  template: `
  <ul class="nav nav-tabs">
    <li class="nav-item" *ngFor="let tab of tabPanelList; let idx = index">
      <a class="nav-link" [class.active]="idx === activeIndex" 
      (click)="activeIndexChange.emit(idx)">{{ tab.title }}
      <button class="btn btn-sm btn-danger" (click)=removeTab(tab)>X</button>
    </a>
      

    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" href="#">Disabled</a>
    </li>
</ul>

<div class="tab-body" *ngIf="tabPanelList.length; else noTabs">
      <ng-container *ngTemplateOutlet="tabPanelList[activeIndex].panelBody" ></ng-container>
    </div>

    <ng-template #noTabs>
      No more tabs.
    </ng-template>
  `,
  providers: [
    {
      provide: TabGroupComponent,
      useExisting: TabBsGroupComponent,
    },
  ],
})
export class TabBsGroupComponent extends TabGroupComponent {}
