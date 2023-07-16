import { Entity } from "./entity"

export class Memory {
  public readonly entities: Array<Entity> = []
  public readonly components: Array<Array<object>> = []
  public readonly links: Array<number> = []

  public static instance = new Memory()
}