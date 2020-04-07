import { ArrayCopy1, ArrayCopy2, ArrayCopy3 } from ".";

const sourceArray1: any[] = [1, 2, 3];
const sourceArray2: any[] = [1, "a", "b", 4, false];
const sourceArray3: any[] = [];
const sourceArray4: any[] = null;
let sourceArray5: any[];
const sourceArray6: any[] = [1, , 3, , 5];
const sourceArray7: any[] = [1, null, 3, null, 5];
const sourceArray8: any[] = [1, undefined, 3, undefined, 5];
const sourceArray9: any[] = [1, null, 3, undefined, 5];
const sourceArray10: any[] = [
  1,
  {
    code: "source",
    value: 2
  },
  {
    code: "source",
    value: 3
  },
  {
    code: "source",
    value: 4
  },
  {
    code: "source",
    value: 6
  }
];
const sourceArray11: any[] = [
  1,
  {
    code: "source",
    value: null
  },
  {
    code: "source",
    value: undefined
  },
  {
    code: "source",
    value: 4
  },
  {
    code: "source",
    value: 6
  }
];

export class ArrayCopyTester {
  testSort(ArrayCopyClass) {
    const copyer = new ArrayCopyClass();

    console.log(`test1 = `, copyer.arrayCopy(sourceArray1));
    console.log(`test2 = `, copyer.arrayCopy(sourceArray2));
    console.log(`test3 = `, copyer.arrayCopy(sourceArray3));
    // console.log(`test4`, copyer.arrayCopy(sourceArray4));
    // console.log(`test5`, copyer.arrayCopy(sourceArray5));
    // console.log(`test6 = `, copyer.arrayCopy(sourceArray6));
    console.log(`test7 = `, copyer.arrayCopy(sourceArray7));
    console.log(`test8 = `, copyer.arrayCopy(sourceArray8));
    let copyArray9: any[] = copyer.arrayCopy(sourceArray9);
    copyArray9[1] = 3;
    copyArray9[3] = { code: "aaa" };
    console.log(`test9 = `, sourceArray9, copyArray9);
    let copyArray10: any[] = copyer.arrayCopy(sourceArray10);
    copyArray10[1] = 3;
    copyArray10[3] = { code: "aaa" };
    copyArray10[4]["value"] = "changed data"; // wrong FIXME: 此处原数组数据发生改变
    console.log(`test10 = `, sourceArray10, copyArray10);
    console.log(`test11 = `, sourceArray11, copyer.arrayCopy(sourceArray11)); // FIXME: 复制的数组参数丢失
  }
}

const test = new ArrayCopyTester();

test.testSort(ArrayCopy2);
