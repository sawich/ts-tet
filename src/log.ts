import { Logger } from 'tslog';

export const Log = {
  ECS: new Logger({ name: 'ECS' }),
  GAME: new Logger({ name: 'Game' }),
  ZONE: new Logger({ name: 'Zone' }),
  DEFAULT: new Logger({ name: 'Default' }),
};
