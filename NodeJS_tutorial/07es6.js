// import simple from "./06es6Module.mjs"; single import
//below we can import multiple by using {}
// import { simple, avinash } from "./06es6Module.mjs";
//using * import everything
import * as a2 from "./06es6Module.mjs";

// console.log(simple());
// console.log(avinash());

//by using *
console.log(a2.simple());
console.log(a2.avinash());
