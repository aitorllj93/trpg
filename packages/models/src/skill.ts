
import { Damage } from "./common/damage";

export interface Skill {
  id?:               number;
  animationId?:      number;
  damage?:           Damage;
  description?:      string;
  effects?:          any[];
  hitType?:          number;
  iconIndex?:        number;
  message1?:         string;
  message2?:         string;
  mpCost?:           number;
  name?:             string;
  note?:             string;
  occasion?:         number;
  repeats?:          number;
  requiredWtypeId1?: number;
  requiredWtypeId2?: number;
  scope?:            number;
  speed?:            number;
  stypeId?:          number;
  successRate?:      number;
  tpCost?:           number;
  tpGain?:           number;
}