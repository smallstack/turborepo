export const moduleState = $state("test"); // works

export class SampleClass {
  public classState = $state("test"); // does not work
}
