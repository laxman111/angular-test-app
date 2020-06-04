import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-panel',
  templateUrl: './item-panel.component.html',
  styleUrls: ['./item-panel.component.scss']
})
export class ItemPanelComponent implements OnInit {
  @Input() item: any;
  constructor() { }

  ngOnInit(): void {
  }

}
