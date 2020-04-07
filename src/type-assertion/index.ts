/**
 * 类型断言
 *
 * 类型断言
 * 双重断言
 *
 * 当 S 类型是 T 类型的子集，或者 T 类型是 S 类型的子集时，S 能被成功断言成 T。
 * 这是为了在进行类型断言时提供额外的安全性，完全毫无根据的断言是危险的，如果你想这么做，你可以使用 any。
 */

/**  */
function handler(event: Event) {
  const mouseEvent = event as MouseEvent;
  // or
  // const mouseEvent = <MouseEvent>event;
  let item: any;
  let str = <string>item;
}
/**  */
function _handler(event: MouseEvent) {
  const mouseEvent = event as Event;
  // or
  // const mouseEvent = <MouseEvent>event;
  let item: any;
  let str = <string>item;
}
// 双重断言
function handlerHtml(event: Event) {
  //   const element = event as HTMLElement; // Error: 'Event' 和 'HTMLElement' 中的任何一个都不能赋值给另外一个
  const element = (event as any) as HTMLElement;
}
