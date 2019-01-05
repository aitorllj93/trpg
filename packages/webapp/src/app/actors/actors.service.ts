import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Actor } from '@trpg/models/src/actor';

@Injectable({
  providedIn: 'root'
})
export class ActorsService {

  get path() {
    return 'actors';
  }

  get baseUrl() {
    return `${environment.apiUrl}/${this.path}`;
  }

  constructor (
    private httpClient: HttpClient
  ) {}

  find(filter?: any): any {
    return this.httpClient.get<Promise<Actor>>(`${this.baseUrl}`);
  }

  findById(selectedId: string): any {
    return this.httpClient.get<Actor>(`${this.baseUrl}/${selectedId}`);
  }

  getActorFace(actor: any) {
    return this.getSprite(
      144,
      144,
      4,
      2,
      actor.faceIndex,
      `faces/${actor.faceName}`
    );
  }

  getActorBattler(actor: any) {
    throw new Error('not implemented method getActorBattler');
    return this.getSprite(
      144,
      144,
      4,
      2,
      actor.faceIndex,
      `faces/${actor.faceName}`
    );
  }

  getActorCharacter(actor: any) {
    return this.getSprite(
      144,
      192,
      4,
      2,
      actor.characterIndex,
      `characters/${actor.characterName}`
    );
  }

  private getSprite(frameWidth, frameHeight, columns, rows, spriteIndex, path) {
    const totalSprites = columns * rows;
    const charactersColumnsWidth = frameWidth * columns;
    const charactersRowsHeight = frameHeight * rows;

    const columnsRanges = Array(totalSprites).fill(null)
      .map(
        (value, index) => [
          frameWidth * index,
          frameWidth * index + frameWidth,
          frameHeight * index,
          frameHeight * index + frameHeight,
        ]
      );

    const range = columnsRanges[spriteIndex];

    return {
      width: `${frameWidth}px`,
      height: `${frameHeight}px`,
      background: `url('http://localhost:3000/images/${path}.png') ${range[0]}px 0`
    };

  }
}
