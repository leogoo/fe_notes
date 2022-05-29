## keyof
1. keyof 操作符，会返回该对象属性名组成的一个字符串或者数字字面量的联合
    ```js
    type Point = { x: number; y: number };
    type P = keyof Point; // x | y
    ```
1. 对象的属性名会被强制转为一个字符串
    ```js
    type Arrayish = { [n: number]: unknown };
    type A = keyof Arrayish;
    // type A = number

    type Mapish = { [k: string]: boolean };
    type M = keyof Mapish;
    // type M = string | number
    ```
1. 类和接口
    ```js
    class Person {
        name: "test"
    }
    type result = keyof Person;
    // type result = "name"

    class Person {
        [1]: string = "test";
    }
    type result = keyof Person;
    // type result = 1

    interface Person {
        name: "string";
    }

    type result = keyof Person;
    // type result = "name"
    ```

## typeof
1. 用于获取一个变量或者属性的类型
    ```js
    let s = "hello";
    let n: typeof s;
    // let n: string
    ```
1. 获函数的类型
    ```js
    function f() {
        return { x: 10, y: 3 };
    }
    type P = ReturnType<typeof f>;
    // type P = {
    //    x: number;
    //    y: number;
    // }
    ```
1. 只有对标识符（比如变量名）或者他们的属性使用 typeof 才是合法的
1. 对对象使用
    ```js
    const person = { name: "kevin", age: "18" }
    type Kevin = typeof person;
    // type Kevin = {
    // 		name: string;
    // 		age: string;
    // }
    ```
1. 对函数使用
    ```js
    function identity<Type>(arg: Type): Type {
        return arg;
    }
    type result = typeof identity;
    // type result = <Type>(arg: Type) => Type
    ```
1. 对 enum 使用
    ```js
    enum UserResponse {
        No = 0,
        Yes = 1,
    }
    // 编译结果
    var UserResponse;
    (function (UserResponse) {
        UserResponse[UserResponse["No"] = 0] = "No";
        UserResponse[UserResponse["Yes"] = 1] = "Yes";
    })(UserResponse || (UserResponse = {}));

    console.log(UserResponse)
    // [LOG]: {
    //   "0": "No",
    //   "1": "Yes",
    //   "No": 0,
    //   "Yes": 1
    // } 

    type result = typeof UserResponse;
    // {
    //	"No": number,
    //  "YES": number
    // }
    type result = keyof typeof UserResponse;
    // type result = "No" | "Yes"
    ```
