export const name: string = "array";
// 数组深拷贝
//#region 0x01 ...
// 浅拷贝 等同于 Object.assign()

export class ArrayCopy1 {
  public arrayCopy(sourceArray: any[]): any[] {
    let copyArray: any[] = null;
    copyArray = [...sourceArray];
    return copyArray;
  }
}

//#endregion

//#region 0x02 JSON.parse()
// 数组转字符串再转回来

export class ArrayCopy2 {
  public arrayCopy(sourceArray: any[]): any[] {
    let copyArray: any[] = null;
    copyArray = JSON.parse(JSON.stringify(sourceArray));
    return copyArray;
  }
}

//#endregion

//#region 0x03 Notification
// 只在浏览器中适用
function structuralClone(obj) {
  return new Notification("", { data: obj, silent: true }).data;
}

export class ArrayCopy3 {
  public arrayCopy(sourceArray: any[]): any[] {
    let copyArray: any[] = null;
    copyArray = structuralClone(sourceArray);
    return copyArray;
  }
}
