function f() {
  console.log("f(): evaluated");
  return function(target, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("f(): called");
  };
}

function g() {
  console.log("g(): evaluated");
  return function(target, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("g(): called");
  };
}

class C {
  /** <=> (f∘g)(x) <=> f(g(x)) */
  /** 数学基础
   * f(x) = x^2 -1
   * g(x) = 2*x -3
   * (f∘g)(5)
   * × f(g(5)) = f( 2 * 5 - 3 ) = f(7) = 7^2 - 1 = 48
   * g(): evaluated g(): called f(): evaluated  f(): called
   * √ f(g(5)) = (g(5))^2 -1 = ( 2 * 5 - 3  )^2 - 1 = 7^2 -1 = 48
   * f(): evaluated g(): evaluated g(): called f(): called
   */
  @f()
  @g()
  method() {
    console.info(`method process`);
  }
}
