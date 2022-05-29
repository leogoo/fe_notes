
> 条件类型（Conditional types）就是用来描述输入类型和输出类型之间的关系
1. 条件类型, SomeType extends OtherType ? TrueType : FalseType;
    ```js
    interface Animal {
        live(): void;
    }
    interface Dog extends Animal {
        woof(): void;
    }
    type Example1 = Dog extends Animal ? number : string;
    // type Example1 = number
    ```
1. 简化函数重载
    ```js
    interface IdLabel {
        id: number /* some fields */;
    }
    interface NameLabel {
        name: string /* other fields */;
    }
    function createLabel(id: number): IdLabel;
    function createLabel(name: string): NameLabel;
    function createLabel(nameOrId: string | number): IdLabel | NameLabel;
    function createLabel(nameOrId: string | number): IdLabel | NameLabel {
        throw "unimplemented";
    }

    type NameOrId<T extends number | string> = T extends number
        ? IdLabel
        : NameLabel;
    ```
1. 条件类型约束
    ```js
    type Flatten<T> = T extends any[] ? T[number] : T;
    ```
1. 在条件类型里推断,用infer关键字声明了一个新的类型变量Item，根据泛型的值在条件里推断出Item真实类型
    ```js
    type Flatten<Type> = Type extends Array<infer Item> ? Item : Type;
    ```
1. 分发条件类型
    1. 在泛型中使用条件类型的时候，如果传入一个联合类型，就会变成分发的
        ```js
        type ToArray<Type> = Type extends any ? Type[] : never;
        type StrArrOrNumArr = ToArray<string | number>;
        // 泛型是string | number
        // 相当于ToArray<string> | ToArray<number>;     
        // type StrArrOrNumArr = string[] | number[]
        ```
    1. 避免分发，用方括号包裹extends关键字的每一部分
        ```js
        type ToArrayNonDist<Type> = [Type] extends [any] ? Type[] : never;
        type StrArrOrNumArr = ToArrayNonDist<string | number>;
        // 将联合类型当作一个类型整体传入
        // type StrArrOrNumArr = (string | number)[]
        ```
