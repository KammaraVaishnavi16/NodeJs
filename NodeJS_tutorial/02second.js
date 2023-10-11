//module wrapper function - when ever module is running on node js, firstly the nodejs will erap the module data in the function.
// (function (exports, require, module, __filename, __dirname) {
//   const vaish = {
//     name: "vaishnavi",
//     favNum: 5,
//     developer: true,
//   };

//   module.exports = vaish;
// });

const vaish = {
  name: "vaishnavi",
  favNum: 5,
  developer: true,
};
console.log(exports, require, module, __filename, __dirname);

module.exports = vaish;
