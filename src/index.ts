import { Registry } from '@/ecs/registry';
import { DungeonZone } from '@/game/zone/dungeon-zone';

const registry = new Registry();

const zone = new DungeonZone(registry);
zone.battle();

//
// https://youtu.be/AG0YMInp8CY?list=RDMM
//
