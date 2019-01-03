
import { Trait } from "./common/trait";

export interface Weapon {
  id?:          number;
  animationId?: number;
  description?: string;
  etypeId?:     number;
  traits?:      Trait[];
  iconIndex?:   number;
  name?:        string;
  note?:        string;
  params?:      number[];
  price?:       number;
  wtypeId?:     number;
}