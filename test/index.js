import test from "ava";

test("JavaScript", (t) => {
  // This would actually use proxyquire and mock dependencies
  const dummy = require("../");
  t.is(dummy.add(2, 3), 5);
});
