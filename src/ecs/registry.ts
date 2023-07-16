import { Entity } from "./entity";
import { Memory } from "./memory";

export class Registry {
  private readonly memory: Memory = new Memory()

  public createEntity() {
    const entity = new Entity(this.memory.entities.length + 1, this.memory);
    this.memory.entities.push(entity);

    return entity
  }
}