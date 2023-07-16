import { Registry } from "@/ecs/registry";
import { DungeonZone } from "@/game/zone/dungeon-zone";

const registry = new Registry()

const zone = new DungeonZone(registry)

//
// https://youtu.be/2N4tXf3Ensw?list=RDGMEMJQXQAmqrnmK1SEjY_rKBGA
//