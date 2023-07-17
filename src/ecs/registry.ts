import { ComponentRegistry } from './component-registry';
import { Entity } from './entity';
import { Memory } from './memory';

export class Registry {
  private readonly memory: Memory = new Memory();

  private readonly components = new ComponentRegistry();

  public createEntity() {
    const entity = new Entity(this.memory.entities.length, this.components);
    this.memory.entities.push(entity);

    return entity;
  }
}
