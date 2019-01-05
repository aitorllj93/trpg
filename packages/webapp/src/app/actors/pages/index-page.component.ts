
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actors-index-page',
  template: `

    <div class="container">
      <as-split direction="horizontal">
        <as-split-area size="20">
          <as-split direction="vertical">
            <as-split-area>
              <app-actors-list style="margin: 10px; display: block;"
                (actorClick)="selectedId = $event.id">
              </app-actors-list>
            </as-split-area>
          </as-split>
        </as-split-area>
        <as-split-area size="80">
          <as-split direction="vertical">
            <as-split-area>
              <app-actors-detail style="margin: 10px; display: block;"
                [selectedId]="selectedId">
              </app-actors-detail>
            </as-split-area>
          </as-split>
        </as-split-area>
      </as-split>
    </div>
  `,
  styles: [
    `
      .container {
        width: 98vw;
        height: 98vh;
        margin: auto;
        background: url("https://www.toptal.com/designers/subtlepatterns/patterns/dark-triangles.png");
      }
    `
  ]
})
export class ActorsIndexPageComponent implements OnInit {

  selectedId = 2;

  constructor() { }

  ngOnInit() { }
}
