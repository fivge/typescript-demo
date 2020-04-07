// export class Sort {
//   constructor(originalCallbacks) {
//     this.callbacks = Sort.initSortingCallbacks(originalCallbacks);
//     this.comparator = new Comparator(this.callbacks.compareCallback);
//   }
//   Comparator;
//   /**
//    * @param {SorterCallbacks} originalCallbacks
//    * @returns {SorterCallbacks}
//    */
//   static initSortingCallbacks(originalCallbacks) {
//     const callbacks = originalCallbacks || {};
//     const stubCallback = () => {};

//     callbacks.compareCallback = callbacks.compareCallback || undefined;
//     callbacks.visitingCallback = callbacks.visitingCallback || stubCallback;

//     return callbacks;
//   }

//   sort() {
//     throw new Error("sort method must be implemented");
//   }
// }
