
## 函数
1. 调用签名

    函数除了可以被调用，自己也是可以有属性值的。如果想描述一个带有属性的函数，可以在一个对象类型中写一个调用签名
    ```js
    type DescribableFunction = {
      description: string;
      // 跟函数类型表达式稍有不同，在参数列表和返回的类型之间用的是 : 而不是 =>
      (someArg: number): boolean;
    };
    function doSomething(fn: DescribableFunction) {
      console.log(fn.description + " returned " + fn(6));
    }
    ```
1. 构造签名
    ```js
    type SomeConstructor = {
      new (s: string): SomeObject;
    };
    function fn(ctor: SomeConstructor) {
      return new ctor("hello");
    }

    // 调用签名和构造签名合并
    interface CallOrConstruct {
      new (s: string): Date;
      (n?: number): number;
    }
    ```
1. 泛型函数
    1. 泛型就是被用来描述两个值之间的对应关系
        ```js
        function firstElement<Type>(arr: Type[]): Type | undefined {
            return arr[0];
        }

        // s is of type 'string'
        const s = firstElement(["a", "b", "c"]);
        // n is of type 'number'
        const n = firstElement([1, 2, 3]);
        // u is of type undefined
        const u = firstElement([]);
        ```
    1. 写一个好的泛型函数的一些建议
        1. 类型参数下移，直接使用类型参数而不是约束它
            ```js
            // good
            function firstElement1<Type>(arr: Type[]) {
            return arr[0];
            }
            
            function firstElement2<Type extends any[]>(arr: Type) {
            return arr[0];
            }
            ```
        1. 使用更少的类型参数
        1. 类型参数应该出现两次，如果一个类型参数仅仅出现在一个地方，就需要重新考虑是否真的需要它
            ```js
            function greet<Str extends string>(s: Str) {
                console.log("Hello, " + s);
            }
            function greet(s: string) {
                console.log("Hello, " + s);
            }
            ```
1. 推断
    ```js
    function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
      return arr.map(func);
    }
    
    // Parameter 'n' is of type 'string'
    // 'parsed' is of type 'number[]'
    const parsed = map(["1", "2", "3"], (n) => parseInt(n));
    ```
1. 约束
    ```js
    function longest<Type extends { length: number }>(a: Type, b: Type) {
      if (a.length >= b.length) {
        return a;
      } else {
        return b;
      }
    }
    
    // longerArray is of type 'number[]'
    const longerArray = longest([1, 2], [1, 2, 3]);
    // longerString is of type 'alice' | 'bob'
    const longerString = longest("alice", "bob");
    // Error! Numbers don't have a 'length' property
    const notOK = longest(10, 100);
    // Argument of type 'number' is not assignable to parameter of type '{ length: number; }'.
    ```
1. 声明类型参数

    通常能自动推断泛型调用中传入的类型参数，但也并不能总是推断出
    ```js
    function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
      return arr1.concat(arr2);
    }
    const arr = combine([1, 2, 3], ["hello"]);
    // Type 'string' is not assignable to type 'number'.

    // 手动指定type
    const arr = combine<string | number>([1,2,3], ['hello']);
    ```
1. 可选参数
1. 函数重载
    1. 重载签名
    1. 实现签名
    1. 尽可能的使用联合类型替代重载
1. 剩余参数
    1. 剩余参数的类型会被隐式设置为 any[] 而不是 any
    1. TypeScript 并不会假定数组是不变的(immutable)
        ```js
        // 通过 as const 语法将其变为只读元组
        const args = [8, 5] as const;
        const angle = Math.atan2(...args);
        ```
1. 参数解构
1. 函数的可赋值性