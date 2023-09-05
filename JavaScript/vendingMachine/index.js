import ColaGenerator from "./js/colaGenerator.js";
import VendingMachineFunc from "./js/vendingMachine.js";

const colorGenerator = new ColaGenerator();
// console.log(await colorGenerator.loadData());
// 최상위 모듈 await
await colorGenerator.setup();

const vendingMachine = new VendingMachineFunc();
// console.log(vendingMachine);
vendingMachine.setup();