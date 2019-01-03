export interface System {
  airship?:         Airship;
  armorTypes?:      string[];
  attackMotions?:   AttackMotion[];
  battleBgm?:       BattleBgm;
  battleback1Name?: string;
  battleback2Name?: string;
  battlerHue?:      number;
  battlerName?:     string;
  boat?:            Airship;
  currencyUnit?:    string;
  defeatMe?:        BattleBgm;
  editMapId?:       number;
  elements?:        string[];
  equipTypes?:      string[];
  gameTitle?:       string;
  gameoverMe?:      BattleBgm;
  locale?:          string;
  magicSkills?:     number[];
  menuCommands?:    boolean[];
  optDisplayTp?:    boolean;
  optDrawTitle?:    boolean;
  optExtraExp?:     boolean;
  optFloorDeath?:   boolean;
  optFollowers?:    boolean;
  optSideView?:     boolean;
  optSlipDeath?:    boolean;
  optTransparent?:  boolean;
  partyMembers?:    number[];
  ship?:            Airship;
  skillTypes?:      string[];
  sounds?:          BattleBgm[];
  startMapId?:      number;
  startX?:          number;
  startY?:          number;
  switches?:        string[];
  terms?:           Terms;
  testBattlers?:    TestBattler[];
  testTroopId?:     number;
  title1Name?:      string;
  title2Name?:      string;
  titleBgm?:        BattleBgm;
  variables?:       string[];
  versionId?:       number;
  victoryMe?:       BattleBgm;
  weaponTypes?:     string[];
  windowTone?:      number[];
}

export interface Airship {
  bgm?:            BattleBgm;
  characterIndex?: number;
  characterName?:  string;
  startMapId?:     number;
  startX?:         number;
  startY?:         number;
}

export interface BattleBgm {
  name?:   string;
  pan?:    number;
  pitch?:  number;
  volume?: number;
}

export interface AttackMotion {
  type?:          number;
  weaponImageId?: number;
}

export interface Terms {
  basic?:    string[];
  commands?: Array<null | string>;
  params?:   string[];
  messages?: { [key: string]: string };
}

export interface TestBattler {
  actorId?: number;
  equips?:  number[];
  level?:   number;
}
