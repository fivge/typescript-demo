/**
 * 装饰器 √
 */

function sealed(...target) {
  // do something with "target" ...
  console.log(target);
}

class Main {
  @sealed
  main() {
    console.log('main');
  }
}

export { Main };

// [
//     Main {},
//     'main',
//     {
//       value: [Function: main],
//       writable: true,
//       enumerable: false,
//       configurable: true
//     }
// ]
