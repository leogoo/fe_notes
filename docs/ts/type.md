## 字面量类型
> 除了常见的类型 string 和 number ，我们也可以将类型声明为**更具体**的数字或者字符串
1. 字面量类型本身并没有什么太大用
    ```js
    let x: "hello" = "hello";
    // OK
    x = "hello";
    // Type '"howdy"' is not assignable to type '"hello"'.
    x = "howdy";
    ```
1. 结合联合类型
    ```js
    function printText(s: string, alignment: "left" | "right" | "center") {
      // ...
    }
    printText("Hello, world", "left");
    printText("G'day, mate", "middle");
    // Argument of type '"middle"' is not assignable to parameter of type '"left" | "right" | "center"'.
    ```
1. 数字字面量类型
    ```js
    function compare(a: string, b: string): -1 | 0 | 1 {
      return a === b ? 0 : a > b ? 1 : -1;
    }
    ```
1. 跟非字面量类型联合
    ```js
    interface Options {
      width: number;
    }
    function configure(x: Options | "auto") {
      // ...
    }
    configure({ width: 100 });
    configure("auto");
    configure("automatic");

    // Argument of type '"automatic"' is not assignable to parameter of type 'Options | "auto"'.
    ```
1. 字面量推断
    ```js
    // obj.counter被推断为number， name被推断为string
    const obj = { counter: 0, name: 'tom' };
    if (someCondition) {
      obj.counter = 1;
    }
    ```
1. as const 把整个对象转为一个类型字面量，可以确保所有的属性都被赋予一个字面量类型
    ```js
    declare function handleRequest(url: string, method: "GET" | "POST"): void;
    const req = { url: "https://example.com", method: "GET" };
    handleRequest(req.url, req.method);
    // Argument of type 'string' is not assignable to parameter of type '"GET" | "POST"'.

    // 方法一
    const req = { url: "https://example.com", method: "GET" as "GET" };
    handleRequest(req.url, req.method as "GET");

    // 方法二
    const req = { url: "https://example.com", method: "GET" } as const;
    handleRequest(req.url, req.method);
    ```

#### 非空断言操作符（后缀 !）
只有当你明确的知道这个值不可能是 null 或者 undefined 时才使用 ! 
    ```js
    function liveDangerously(x?: number | null) {
      // No error
      console.log(x!.toFixed());
    }
    ```

#### 不常见的原始类型
1. bigInt
1. symbol

#### 其他类型
1. void表示一个函数并不会返回任何值，当函数并没有任何返回值，或者返回不了明确的值的时候，就应该用这种类型
1. object 可以表示任何不是原始类型（primitive）的值 (string、number、bigint、boolean、symbol、null、undefined
1. unknown 类型可以表示任何值。有点类似于 any，但是更安全，因为对 unknown 类型的值做任何事情都是不合法的
1. never 类型表示一个值不会再被观察到
    1. 作为函数返回时，表示函数一定会返回异常
    1. 确定在联合类型中已经没有可能是其中的类型的时候，也会返回never
        ```js
        function fn(x: string | number) {
            if (typeof x === "string") {
                // do something
            } else if (typeof x === "number") {
                // do something else
            } else {
                x; // has type 'never'!
            }
            }
        ```
1. Function，一个返回any的函数类型