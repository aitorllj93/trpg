export interface Animation {
  id?:             number;
  animation1Hue?:  number;
  animation1Name?: string;
  animation2Hue?:  number;
  animation2Name?: string;
  frames?:         Array<Array<number[]>>;
  name?:           string;
  position?:       number;
  timings?:        Timing[];
}

export interface Timing {
  flashColor?:    number[];
  flashDuration?: number;
  flashScope?:    number;
  frame?:         number;
  se?:            SE;
}

export interface SE {
  name?:   string;
  pan?:    number;
  pitch?:  number;
  volume?: number;
}
