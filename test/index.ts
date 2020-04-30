import test from "ava";

test("TypeScript", (t) => {
  // This would actually use proxyquire and mock dependencies
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const dummy = require("../");
  t.is(dummy.add(2, 3), 5);
});
