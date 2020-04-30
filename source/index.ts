import somethingElse from "./somethingElse"; // Just because my app had imports

class Dummy {
  public add(a: number, b: number): number {
    somethingElse();
    return a + b;
  }
}

// Changing to this `export default` doesn't fix the TypeScript test
module.exports = new Dummy();
