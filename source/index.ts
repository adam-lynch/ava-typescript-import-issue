import somethingElse from "./somethingElse"; // Just because my app had imports

class Dummy {
  public add(a: number, b: number): number {
    somethingElse();
    return a + b;
  }
}

module.exports = new Dummy();
