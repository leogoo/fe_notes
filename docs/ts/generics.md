1. 类型参数推断
    ```js
    function identity<Type>(arg: Type): Type {
        return arg;
    }
    let output = identity<string>("myString"); // let output: string
    let output = identity("myString"); // let output: string
    ```
1. 泛型类型
    1. 函数声明
        ```js
        function identity<Type>(arg: Type): Type {
            return arg;
        }
        
        let myIdentity: <Type>(arg: Type) => Type = identity;
        ```
    1. 泛型的类型参数可以使用不同的名字，只要数量和使用方式上一致即
    1. 以对象类型的调用签名的形式，书写这个泛型类型
        ```js
        function identity<Type>(arg: Type): Type {
            return arg;
        }
        
        let myIdentity: { <Type>(arg: Type): Type } = identity;
        ```
    1. 泛型接口
        ```js
        interface GenericIdentityFn {
            <Type>(arg: Type): Type;
        }
         
        function identity<Type>(arg: Type): Type {
            return arg;
        }
        let myIdentity: GenericIdentityFn = identity;
        ```
    1. 泛型参数作为整个接口的参数
        ```js
        interface GenericIdentityFn<Type> {
            (arg: Type): Type;
        }
        
        function identity<Type>(arg: Type): Type {
            return arg;
        }
        let myIdentity: GenericIdentityFn<number> = identity;
        ```
1. 泛型类

    泛型类仅仅对实例部分生效，所以当我们使用类的时候，注意静态成员并不能使用类型参数
    ```js
    class GenericNumber<NumType> {
        zeroValue: NumType;
        add: (x: NumType, y: NumType) => NumType;
    }
    
    let myGenericNumber = new GenericNumber<number>();
    myGenericNumber.zeroValue = 0;
    myGenericNumber.add = function (x, y) {
        return x + y;
    };
    ```
1. 泛型约束
    ```js
    interface Lengthwise {
        length: number;
    }
    
    function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
        console.log(arg.length);
        return arg;
    }
    ```
    1. 在泛型约束中使用类型参数
        ```js
        function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
            return obj[key];
        }
        
        let x = { a: 1, b: 2, c: 3, d: 4 };
        getProperty(x, "a");
        getProperty(x, "m");
        // Argument of type '"m"' is not assignable to parameter of type '"a" | "b" | "c" | "d"'.
        ```
1. 在泛型中使用类类型
    ```js
    class BeeKeeper {
        hasMask: boolean = true;
    }
    class ZooKeeper {
        name: string = "Mike";
    }
    class Animal {
        numLegs: number = 4;
    }
    class Bee extends Animal {
        keeper: BeeKeeper = new BeeKeeper();
    }
    class Lion extends Animal {
        keeper: ZooKeeper = new ZooKeeper();
    }
    
    function createInstance<A extends Animal>(c: new () => A): A {
        return new c();
    }
    
    createInstance(Lion).keeper.name;
    createInstance(Bee).keeper.hasMask;
    ```