
import { Trait } from "./common/trait";

export interface ActorClass {
  id?:        number;
  expParams?: number[];
  traits?:    Trait[];
  learnings?: Learning[];
  name?:      string;
  note?:      string;
  params?:    Array<number[]>;
}

export interface Learning {
  level?:   number;
  note?:    string;
  skillId?: number;
}