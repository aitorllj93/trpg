
import { List } from "./common/list";

export interface CommonEvent {
  id?:       number;
  list?:     List[];
  name?:     string;
  switchId?: number;
  trigger?:  number;
}