
import { basePath } from './environment';

import { commerce } from 'faker';

const linearMap = require('linmap');

export class ActorsModule {

  static defaults = {
    basePath: basePath
  }

  static readonly forRoot = ({
    basePath
  } = ActorsModule.defaults) => [
    /******* REPOSITORIES  ***********************/
    // Actors Repositories
    {
      type: 'Repository', name: 'ActorsRepository',
      config: { adapter: 'LowDB', connection: `${basePath}/data/Actors.json` }
    },
    {
      type: 'Repository', name: 'ActorClassesRepository',
      config: { adapter: 'LowDB', connection: `${basePath}/data/Classes.json` }
    },
    /******* ROUTERS  ***********************/
    // Actors Routers
    {
      type: 'Router', name: 'ActorsRouter',
      deps: [ 'ActorsRepository' ],
      config: { adapter: 'Rest', baseUrl: '/actors' }
    },
    {
      type: 'Router', name: 'ActorClassesRouter',
      deps: [ 'ActorClassesRepository' ],
      config: { adapter: 'Rest', baseUrl: '/classes' }
    }
  ];

  static exponentialGrowths = (
  ) => {
    return Array(100).fill(null)
      .map(
        (value, index) => ActorsModule.classExponentialGrowth(index)
      );
  }
  // https://mathbitsnotebook.com/Algebra2/Exponential/EXGrowthDecay.html
  // https://www.gamedev.net/forums/topic/599819-natural-logarithms-exponential-growth-and-c/
  // passive states http://yanfly.moe/2015/10/17/yep-13-auto-passive-states/
  // class change http://yanfly.moe/2015/11/27/yep-32-class-change-core/
  // subclass http://yanfly.moe/2015/11/29/yep-34-subclass/
  // skill learn http://yanfly.moe/2015/11/14/yep-28-skill-learn-system/
  // multi type skills http://yanfly.moe/2017/05/05/yep-135-multi-type-skills-rpg-maker-mv/
  // job points http://yanfly.moe/2015/11/13/yep-27-job-points/
  // job levels https://forums.rpgmakerweb.com/index.php?threads/jp-levels.51837/
  // actor variables http://yanfly.moe/2015/12/10/yep-41-actor-variables/
  // status menu pages http://yanfly.moe/2017/06/02/yep-140-more-status-menu-pages-rpg-maker-mv/
  // profile http://yanfly.moe/2015/12/20/yep-48-profile-status-page/
  // party system http://yanfly.moe/2015/11/20/yep-29-party-system/
  // stat allocation http://yanfly.moe/2018/11/09/yep-173-stat-allocation-rpg-maker-mv/
  // quest journal http://yanfly.moe/2017/10/13/yep-152-quest-journal-system-rpg-maker-mv/
  static classExponentialGrowth = (
    value: number,
    talent = 5,
    map = [0, 100, 0, 10]
  ) =>{
    const types: {
      [key: string]: (value: number) => boolean;
    } = {
      degenerating: (value: number) => 
        value > 40 && value <= 80,
      increassing: (value: number) => 
        ( value > 0 && value <= 10 ) ||
        ( value > 30 && value <= 40 ),
      fastIncreassing: (value: number) => 
        value > 10 && value <= 30,
      fastDegenerating: (value: number) => 
        value > 80,
    }
  
    const type = Object.keys(types).find(
      (key) => types[key](value)
    );; 
  
    let growth = linearMap(...map, value);
    let average = 100 * growth;
    let min = average;
    let max = average + 10;
  
    switch (type) {
      case 'fastDegenerating' :
        map = [100, 0, 10, 0];
        growth = linearMap(...map, value);
        average = 100 * growth;
        min = average;
        max = average + 10;
        break;
      case 'degenerating' :
        map = [100, 0, 10, 0];
        growth = linearMap(...map, value);
        average = 100 * growth;
        min = average;
        max = average + 10;
        break;
      case 'increassing' :
        map = [0, 100, 0, 10];
        break;
      case 'fastIncreassing' :
        map = [0, 100, 0, 10];
        break;
    }
  
    const reality = commerce.price(min, max);
  
    console.log(`${reality} at level ${value} ${type} ${growth}, average ${average}, min ${min}, max ${max}`);
    
    return reality;
  }
}  