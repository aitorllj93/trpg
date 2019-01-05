
import { basePath } from './environment';

import { ActorsModule } from './actors';
import { CommonEventsModule } from './common-events';
import { ItemsModule } from './items';
import { AnimationsModule } from './animations';
import { EnemiesModule } from './enemies';
import { StatesModule } from './states';
import { SkillsModule } from './skills';
import { MapsModule } from './maps';
import { ImagesModule } from './images';

export const modules = [
  ...ActorsModule.forRoot({ basePath }),
  ...StatesModule.forRoot({ basePath }),
  ...CommonEventsModule.forRoot({ basePath }),
  ...ItemsModule.forRoot({ basePath }),
  ...AnimationsModule.forRoot({ basePath }),
  ...SkillsModule.forRoot({ basePath }),
  ...EnemiesModule.forRoot({ basePath }),
  ...MapsModule.forRoot({ basePath }),
  ...ImagesModule.forRoot({ basePath }),
];