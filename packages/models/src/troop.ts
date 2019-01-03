
import { List } from "./common/list";

export interface Troop {
  id?:      number;
  members?: Member[];
  name?:    string;
  pages?:   Page[];
}

export interface Member {
  enemyId?: number;
  x?:       number;
  y?:       number;
  hidden?:  boolean;
}

export interface Page {
  conditions?: Conditions;
  list?:       List[];
  span?:       number;
}

export interface Conditions {
  actorHp?:     number;
  actorId?:     number;
  actorValid?:  boolean;
  enemyHp?:     number;
  enemyIndex?:  number;
  enemyValid?:  boolean;
  switchId?:    number;
  switchValid?: boolean;
  turnA?:       number;
  turnB?:       number;
  turnEnding?:  boolean;
  turnValid?:   boolean;
}