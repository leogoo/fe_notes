1. 索引访问类型
    ```js
    type Person = { age: number; name: string; alive: boolean };
    type Age = Person["age"];
    // type Age = number
    ```
1. 使用联合、keyof 或者其他类型
    ```js
    type I1 = Person["age" | "name"];  
    // type I1 = string | number
    type I2 = Person[keyof Person];
    // type I2 = string | number | boolean
    type AliveOrName = "alive" | "name";
    type I3 = Person[AliveOrName];  
    // type I3 = string | boolean
    ```
1. 使用 number 来获取数组元素的类型，结合 typeof 可以方便的捕获数组字面量的元素类型
    ```js
    const MyArray = [
        { name: "Alice", age: 15 },
        { name: "Bob", age: 23 },
        { name: "Eve", age: 38 },
    ];
    type Person = typeof MyArray[number];
    // type Person = {
    //    name: string;
    //    age: number;
    // }

    type Age = typeof MyArray[number]["age"];  
    // type Age = number


    // 使用场景
    const APP = ['TaoBao', 'Tmall', 'Alipay'] as const;
    // const APP: readonly ["TaoBao", "Tmall", "Alipay"]
    type app = typeof APP[number];
    // type app = "TaoBao" | "Tmall" | "Alipay"
    ```
1. 作为索引的只能是类型，不能使用const创建一个变量引用，但可以使用类型别名
    ```js
    const key = "age";
    // error
    type Age = Person[key];

    type key = 'age';
    type Age = Person[key];
    ```