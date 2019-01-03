export interface Map {
  autoplayBgm?:       boolean;
  autoplayBgs?:       boolean;
  battleback1Name?:   string;
  battleback2Name?:   string;
  bgm?:               Bgm;
  bgs?:               Bgm;
  disableDashing?:    boolean;
  displayName?:       string;
  encounterList?:     any[];
  encounterStep?:     number;
  height?:            number;
  note?:              string;
  parallaxLoopX?:     boolean;
  parallaxLoopY?:     boolean;
  parallaxName?:      string;
  parallaxShow?:      boolean;
  parallaxSx?:        number;
  parallaxSy?:        number;
  scrollType?:        number;
  specifyBattleback?: boolean;
  tilesetId?:         number;
  width?:             number;
  data?:              number[];
  events?:            null[];
}

export interface Bgm {
  name?:   string;
  pan?:    number;
  pitch?:  number;
  volume?: number;
}
