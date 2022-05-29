### 类成员
1. 字段
    ```js
    class Point {
        x: number;
        y: number;
    }

    // 初始值
    class Point {
        x = 0;
        y = 0;
    }
    ```
    1. strictPropertyInitialization选项控制了类字段是否需要在构造函数里初始化
        ```js
        class GoodGreeter {
            name: string;
                
            constructor() {
                this.name = "hello";
            }
        }

        // 不在构造函数中初始化，可以使用明确赋值断言操作符
        class OKGreeter {
            // Not initialized, but no error
            name!: string;
        }
        ```
    1. 字段可以配置readonly
1. 构造函数
1. 方法
1. getter、setter
    1. get 存在而 set 不存在，属性会被自动设置为 readonly
    1. setter 参数的类型没有指定，它会被推断为 getter 的返回类型
    1. getters 和 setters 必须有相同的成员可见性
    1. 从 TypeScript 4.3 起，存取器在读取和设置的时候可以使用不同的类型
    ```js
    class Thing {
        _size = 0;
        // 注意这里返回的是 number 类型
        get size(): number {
            return this._size;
        }
        // 注意这里允许传入的是 string | number | boolean 类型
        set size(value: string | number | boolean) {
            let num = Number(value);
            // Don't allow NaN, Infinity, etc
            if (!Number.isFinite(num)) {
                this._size = 0;
                return;
            }
            this._size = num;
        }
    }
    ```
1. 索引签名,和对象类型的索引签名是一样
    ```js
    class MyClass {
        [s: string]: boolean | ((s: string) => boolean);
        
        check(s: string) {
            return this[s] as boolean;
        }
    }
    ```
### 类继承
1. implements
    1. 使用 implements 语句检查一个类是否满足一个特定的 interface
        ```js
        interface Pingable {
            ping(): void;
        }
        
        class Sonar implements Pingable {
            // ts报错
            test() {
                console.log("ping!");
            }
        }
        ```
    1. 实现多个接口，比如 class C implements A, B {}
    1. 并不会改变类的类型或者方法的类型
    1. 实现一个有可选属性的接口，并不会创建这个属性
        ```js
        interface A {
            x: number;
            y?: number;
        }
        class C implements A {
            x = 0;
        }
        const c = new C();
        c.y = 10;
        // Property 'y' does not exist on type 'C'.
        ```
1. extends
    1. extend 一个基类。一个派生类有基类所有的属性和方法，还可以定义额外的成员
        ```js
        class Animal {
            move() {
                console.log("Moving along!");
            }
        }
        class Dog extends Animal {
            woof(times: number) {
                for (let i = 0; i < times; i++) {
                    console.log("woof!");
                }
            }
        }
        const d = new Dog();
        // Base class method
        d.move();
        // Derived class method
        d.woof(3);
        ```
    1. ts强制要求派生类总是它的基类的子类型,派生类需要遵循着它的基类的实现
        ```js
        class Base {
            greet() {
                console.log("Hello, world!");
            }
        }
        
        class Derived extends Base {
            greet(name?: string) {
                if (name === undefined) {
                    super.greet();
                } else {
                    console.log(`Hello, ${name.toUpperCase()}`);
                }
            }
        }
        
        const d = new Derived();
        d.greet();
        d.greet("reader");

        // 错误的覆盖
        class Base {
            greet() {
                console.log("Hello, world!");
            }
        }
        class Derived extends Base {
            // Make this parameter required
            greet(name: string) {
                console.log(`Hello, ${name.toUpperCase()}`);
            }
        }
        ```
    1. 通过一个基类引用指向一个派生类实例，这是非常常见并合法的
        ```js
        const b: Base = d;
        b.greet();
        ```
    1. 初始化顺序
    
        类初始化的顺序，就像在 JavaScript 中定义的那样：
        - 基类字段初始化
        - 基类构造函数运行
        - 派生类字段初始化
        - 派生类构造函数运行
        ```js
        class Base {
            name = "base";
            // 基类构造函数只能看到它自己的 name 的值
            constructor() {
                console.log("My name is " + this.name);
            }
        }
        
        class Derived extends Base {
            name = "derived";
        }
        
        // Prints "base", not "derived"
        const d = new Derived();
        ```
    1. 继承内置类型
        1. Error、Array 等类似内置对象的构造函数，会使用 ECMAScript 6 的 new.target 调整原型链

### 成员可见性
1. public
1. protected
    1. 仅对子类可见
        ```js
        class Greeter {
            public greet() {
                console.log("Hello, " + this.getName());
            }
            protected getName() {
                return "hi";
            }
        }
        class SpecialGreeter extends Greeter {
            public howdy() {
                console.log("Howdy, " + this.getName());
            }
        }
        const g = new SpecialGreeter();
        g.greet(); // OK
        g.getName(); // error
        ```
    1. 派生类需要遵循基类的实现，但是以选择公开拥有更多能力的基类子类型
        ```js
        class Base {
            protected m = 10;
        }
        class Derived extends Base {
            // No modifier, so default is 'public'
            m = 15;
        }
        const d = new Derived();
        console.log(d.m); // OK
        ```
    1. 交叉等级受保护成员访问
        ```js
        class Base {
            protected x: number = 1;
        }
        class Derived1 extends Base {
            protected x: number = 5;
        }
        class Derived2 extends Base {
            f1(other: Derived2) {
                other.x = 10;
            }
            f2(other: Base) {
                other.x = 10;
                // Property 'x' is protected and only accessible through an instance of class 'Derived2'. This is an instance of class 'Base'.
            }
        }
        ```
1. private
    1. private 有点像 protected，但是不允许访问成员只能在类里面访问
        ```js
        class Base {
            private x = 0;
        }
        const b = new Base();
        // Can't access from outside the class
        console.log(b.x);

        // 子类也不行
        class Derived extends Base {
            showX() {
                // Can't access in subclasses
                console.log(this.x);
            }
        }
        ```
    1. 通过方括号语法进行访问

### 静态成员
1. 基础
    1. 静态成员跟类实例没有关系，可以通过类本身访问到
        ```js
        class MyClass {
            static x = 0;
            static printX() {
                console.log(MyClass.x);
            }
        }
        console.log(MyClass.x);
        MyClass.printX();
        ```
    1. 可以使用public,protected,private修改符
        ```js
        class MyClass {
            private static x = 0;
        }
        console.log(MyClass.x);
        // Property 'x' is private and only accessible within class 'MyClass'.
        ```
    1. 也可以被继承
        ```js
        class Base {
            static getGreeting() {
                return "Hello world";
            }
        }
        class Derived extends Base {
            myGreeting = Derived.getGreeting();
        }
        ```
1. 特殊静态名称
> 函数属性像 name、length、call 不能被用来定义 static 成员

### 类静态块
独立的作用域，还可以完全获取类中的属性和方法

    ```js
    class Foo {
        static #count = 0;
    
        get count() {
            return Foo.#count;
        }
        static {
            try {
                const lastInstances = loadLastInstances();
                Foo.#count += lastInstances.length;
            }
            catch {}
        }
    }
    ```
### 泛型类
1. 型参数的推断跟函数调用是同样的方式
    ```js
    class Box<Type> {
        contents: Type;
        constructor(value: Type) {
            this.contents = value;
        }
    }
    
    const b = new Box("hello!");
    // const b: Box<string>
    ```
1. 泛型类的静态成员不应该引用类的类型参数
    ```js
    class Box<Type> {
        static defaultValue: Type;
        // Static members cannot reference class type parameters.
    }
    ```
### 类运行时的 this
1. 和js一样，this的值取决于怎么被调用
    ```js
    class MyClass {
        name = "MyClass";
        getName() {
            return this.name;
        }
    }
    const c = new MyClass();
    const obj = {
        name: "obj",
        getName: c.getName,
    };
    
    // Prints "obj", not "MyClass"
    console.log(obj.getName());
    ```
1. 箭头函数
    ```js
    class MyClass {
        name = "MyClass";
        getName = () => {
            return this.name;
        };
    }
    const c = new MyClass();
    const g = c.getName;
    // Prints "MyClass" instead of crashing
    console.log(g());
    ```
1. 会检查一个有 this 参数的函数在调用时是否有一个正确的上下文
1. this 的类型，会动态的引用当前类的类型
    ```js
    class Box {
        content: string = "";
        // 只接受来自同一个派生类的实例
        sameAs(other: this) {
            return other.content === this.content;
        }
    }
    class DerivedBox extends Box {
        otherContent: string = "?";
    }
    const base = new Box();
    const derived = new DerivedBox();
    derived.sameAs(base);
    // Argument of type 'Box' is not assignable to parameter of type 'DerivedBox'.
    ```
1. 基于 this 的类型保护
    1. 在类和接口的方法返回的位置，使用 this is Type

### 参数属性
> 把一个构造函数参数转成一个同名同值的类属性。这些就被称为参数属性
    ```js
    class Params {
        constructor(
            public readonly x: number,
            protected y: number,
            private z: number
        ) {
            // No body necessary
        }
    }
    const a = new Params(1, 2, 3);
    console.log(a.x);
    // (property) Params.x: number

    console.log(a.z);
    // Property 'z' is private and only accessible within class 'Params'.
    ```

### 类表达式
    ```js
    const someClass = class<Type> {
        content: Type;
        constructor(value: Type) {
            this.content = value;
        }
    };
    
    const m = new someClass("Hello, world");  
    // const m: someClass<string>
    ```

### 抽象类和成员
1. 抽象方法或者抽象字段是不提供实现的。这些成员必须存在在一个抽象类中，这个抽象类也不能直接被实例化
    ```js
    abstract class Base {
        abstract getName(): string;
        printName() {
            console.log("Hello, " + this.getName());
        }
    }
    const b = new Base();
    // Cannot create an instance of an abstract class

    // 生成子类，必要要实现抽象成员
    class Derived extends Base {
        getName() {
            return "world";
        }
    }
    const d = new Derived();
    d.printName();
    ```
### 类之间的关系
1. 两个类结构类似，可以用于替代彼此
    ```js
    class Point1 {
        x = 0;
        y = 0;
    }
    class Point2 {
        x = 0;
        y = 0;
    }
    
    // OK
    const p: Point1 = new Point2()
    ```
1. 空类可以看成是其他类的父类
    ```js
    class Person {
        name: string;
        age: number;
    }
    class Employee {
        name: string;
        age: number;
        salary: number;
    }
    
    // OK
    const p: Person = new Employee();
    ```