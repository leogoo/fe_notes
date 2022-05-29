## 属性修饰符
1. 可选属性
1. readonly 属性
    1. readonly 仅仅表明属性本身是不能被重新写入的
        ```js
        interface Home {
            readonly resident: { name: string; age: number };
        }
        
        function visitForBirthday(home: Home) {
            console.log(`Happy birthday ${home.resident.name}!`);
            // 只读属性是引用类型，自身的属性可修改
            home.resident.age++;
        }
        
        function evict(home: Home) {
            // 和js一样，不能修改引用类型的地址
            home.resident = {
                name: "Victor the Evictor",
                age: 42,
            };
        }
        ```
    1. readonly 的值是可以通过别名修改的
        ```js
        interface Person {
            name: string;
            age: number;
        }
        
        interface ReadonlyPerson {
            readonly name: string;
            readonly age: number;
        }
        let writablePerson: Person = {
            name: "tom",
            age: 42,
        };
        // readonlyPerson的属性都是只读的，通过writablePerson来修改
        let readonlyPerson: ReadonlyPerson = writablePerson;
        console.log(readonlyPerson.age); // prints '42'
        writablePerson.age++;
        console.log(readonlyPerson.age); // prints '43'
        ```
1. 索引签名
    ```js
    interface Type {
        [index: string]: number | string;
        length: number; // ok, length is a number
        name: string; // ok, name is a string
    }
    ```
## 属性继承与交叉类型
1. 继承
    ```js
    interface Colorful {
        color: string;
    }
    interface Circle {
        radius: number;
    }
    interface ColorfulCircle extends Colorful, Circle {
        name: string;
    }
    const cc: ColorfulCircle = {
        name: 'test',
        color: "red",
        radius: 42,
    };
    ```
1. 交叉类型(intersection Type),合并已经存在的对象类型
    ```js
    interface Colorful {
        color: string;
    }
    interface Circle {
        radius: number;
    }
    // 生成新的类型别名
    type ColorfulCircle = Colorful & Circle;

    // 也可直接使用
    function draw(circle: Colorful & Circle) {
        console.log(`Color was ${circle.color}`);
        console.log(`Radius was ${circle.radius}`);
    }
    ```
1. 接口继承与交叉类型很相似，最大差别在于冲突的处理
    ```js
    interface Colorful {
        color: string;
    }
    // color类型会有冲突，继承重写类型会导致编译错误
    interface ColorfulSub extends Colorful {
        color: number;
    }
    // 类型重写不会报错，但是最终的类型是never，取得是string 和 number 的交集
    type ColorfulSub = Colorful & {
        color: number
    }
    ```
## 泛型对象类型
1. 接口泛型
    ```js
    interface Box<Type> {
        contents: Type;
    }
    function setContents<Type>(box: Box<Type>, newContents: Type) {
        box.contents = newContents;
    }
    ```
1. 类型别名也可以写成泛型,类型别名不同于接口，可以描述的不止是对象类型
    ```js
    type Box<Type> = {
        contents: Type;
    }

    type OrNull<Type> = Type | null;
    type OneOrMany<Type> = Type | Type[];
    type OneOrManyOrNull<Type> = OrNull<OneOrMany<Type>>;
    type OneOrManyOrNull<Type> = OneOrMany<Type> | null;
    type OneOrManyOrNullStrings = OneOrManyOrNull<string>;
    type OneOrManyOrNullStrings = OneOrMany<string> | null
    ```
1. Array 类型
1. ReadonlyArray 类型
    1. 函数返回 ReadonlyArray，就是在告诉我们不能去更改其中的内容
    1. 函数支持传入 ReadonlyArray，可以放心的传入数组到函数中，而不用担心会改变数组的内容
    1. 直接将一个常规数组赋值给 ReadonlyArray
        ```js
        const roArray: ReadonlyArray<string> = ["red", "green", "blue"];
        ```
    1. 更简短的写法 readonly Type[]
        ```js
        const array: readonly string[] = ['test']
        ```
    1. Array 和 ReadonlyArray 并不能双向的赋值,不能将ReadonlyArray赋值给Arrays
        ```js
        let x: readonly string[] = [];
        let y: string[] = [];
        
        x = y; // ok
        y = x; // error
        ```
1. 元组类型
    1. 适合明确知道数组包含多少个元素，并且每个位置元素的类型都明确
    1. 可以写一个可选属性,可选属性必须在最后
        ```js
        type Either2dOr3d = [number, number, number?];
        function setCoordinate(coord: Either2dOr3d) {
            const [x, y, z] = coord;            
            //  const z: number | undefined
        }
        ```
    1. Tuples 也可以使用剩余元素语法，但必须是 array/tuple 类型,有剩余元素的元组并不会设置 length
        ```js
        type StringNumberBooleans = [string, number, ...boolean[]];
        type StringBooleansNumber = [string, ...boolean[], number];
        type BooleansStringNumber = [...boolean[], string, number];
        ```
    1. 在参数列表里使用元组
        ```js
        function readButtonInput(...args: [string, number, ...boolean[]]) {
            const [name, version, ...input] = args;
        }
        // 基本等同于
        function readButtonInput(name: string, version: number, ...input: boolean[]) {
        }
        ```
1. readonly 元组类型
    1. 尽可能的将元组设置为 readonly 是一个好习惯
        ```js
        function doSomething(pair: readonly [string, number]) {
            pair[0] = "hello!";
            // Cannot assign to '0' because it is a read-only property.
        }
        ```
    1. 给一个数组字面量 const 断言，也会被推断为 readonly 元组类型
        ```js
        let point = [3, 4] as const;
        function distanceFromOrigin([x, y]: [number, number]) {
            return Math.sqrt(x ** 2 + y ** 2);
        }
        // 报错，readonly [3, 4]和[number number] 并不兼容
        distanceFromOrigin(point);
        ```