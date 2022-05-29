## Narrowing 类型收窄
1. typeOf 类型保护
1. 真值收窄
    ```js
    function printAll(strs: string | string[] | null) {
      if (strs && typeof strs === "object") {
        for (const s of strs) {
          console.log(s);
        }
      } else if (typeof strs === "string") {
        console.log(strs);
      }
    }
    ```
1. 等值收窄,使用 switch 语句和等值检查比如 == !== == != 去收窄类型
    ```js
    function printAll(strs: string | string[] | null) {
      if (strs !== null) {
        if (typeof strs === "object") {
          for (const s of strs) {
            console.log(s);
          }
        } else if (typeof strs === "string") {
          console.log(strs);
        }
      }
    }
    ```
1. in 操作符收窄
    ```js
    type Fish = { swim: () => void };
    type Bird = { fly: () => void };
    type Human = { swim?: () => void; fly?: () => void };
    
    function move(animal: Fish | Bird | Human) {
      if ("swim" in animal) {
        animal; // (parameter) animal: Fish | Human
      } else {
        animal; // (parameter) animal: Bird | Human
      }
    }
    ```
1. instanceof 收窄,
1. 赋值语句，TypeScript 可以根据赋值语句的右值，正确的收窄左值
    ```js
    let test = Math.random() < 0.5 ? 1 : '1';
    test = 2;
    test = '2';
    test = true; // 不能将boolean赋值给 number | string;
    ```
1. 控制流分析
    ```js
    let x: number | string | boolean;
    if (Math.random() < 0.5) {
      x = 1;
    } else {
      x = '1';
    }
    return x; // number | string
    ```
1. type predicates
    ```js
    function isFish(pet: Fish | Bird): pet is Fish {
      return (pet as Fish).swim !== undefined;
    }
    ```
1. 可辨别联合

    当联合类型中的每个类型，都包含了一个共同的字面量类型的属性，TypeScript 就会认为这是一个可辨别联合（discriminated union），然后可以将具体成员的类型进行收窄。
    ```js
    // kind类型可能是circle或square，这就导致radius和sideLength也都是可选的
    interface Shape {
      kind: "circle" | "square";
      radius?: number;
      sideLength?: number;
    }
    ```

    即便我们判断 kind 是 circle 的情况，但由于 radius 是一个可选属性，TypeScript 依然会认为 radius 可能是 undefined
    ```js
    function getArea(shape: Shape) {
      if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
        // Object is possibly 'undefined'.
      }
    }

    // 非空断言
    function getArea(shape: Shape) {
      if (shape.kind === "circle") {
        return Math.PI * shape.radius! ** 2;
      }
    }
    ```
    用非空断言可以解决报错，但是有点矛盾，既然设置了可选，这里又是确定非空，而且类型的判断又好像没啥用了。上面的问题在于类型检查器并没有方法根据 kind 属性判断 radius 和 sideLength 属性是否存在
    ```js
    interface Circle {
      kind: "circle";
      radius: number;
    }
    
    interface Square {
      kind: "square";
      sideLength: number;
    }
    // 这样定义就可以通过kind这个共同的字面量类型的属性来判断类型
    type Shape = Circle | Square;

    function getArea(shape: Shape) {
      if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
      }
    }
    ```
1. never 类型
    1. never 类型来表示一个不可能存在的状态
    1. never 类型可以赋值给任何类型，然而，没有类型可以赋值给 never （除了 never 自身）。这就意味着你可以在 switch 语句中使用 never 来做一个穷尽检查
        ```js
        interface Triangle {
            kind: "triangle";
            sideLength: number;
        }
        
        type Shape = Circle | Square | Triangle;
        
        function getArea(shape: Shape) {
            switch (shape.kind) {
            case "circle":
                return Math.PI * shape.radius ** 2;
            case "square":
                return shape.sideLength ** 2;
            default:
                const _exhaustiveCheck: never = shape;
                // Type 'Triangle' is not assignable to type 'never'.
                return _exhaustiveCheck;
            }
        }
        ```
