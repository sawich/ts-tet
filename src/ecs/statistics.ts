export class Statistics {
  private components: number = 0;

  private static instance = new Statistics()

  public static RegisterComponent(): number {
    return Statistics.instance.registerComponent()
  }

  public static get ComponentsCount(): number {
    return Statistics.instance.components
  }

  private registerComponent(): number {
    return this.components++;
  }
}