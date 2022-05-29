模板字面量的变量要求的类型是 string | number | bigint | boolean | null | undefined

1. 模板字面量类型
    1. 只能用在类型操作中。当使用模板字面量类型时，它会替换模板中的变量，返回一个新的字符串字面量
        ```js
        type World = "world";
        type Greeting = `hello ${World}`;
        // type Greeting = "hello world"
        ```
    1. 模板中的变量是联合类型时
        ```js
        type EmailLocaleIDs = "welcome_email" | "email_heading";
        type FooterLocaleIDs = "footer_title" | "footer_sendoff";
        
        type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;
        // type AllLocaleIDs = "welcome_email_id" | "email_heading_id" | "footer_title_id" | "footer_sendoff_id"
        ```
1. 类型中的字符串联合类型
> 模板字面量最有用的地方在于可以基于一个类型内部的信息，定义一个新的字符串
1. 模板字面量的推断
    ```js
    type PropEventSource<Type> = {
        on<Key extends string & keyof Type>
            (eventName: `${Key}Changed`, callback: (newValue: Type[Key]) => void ): void;
    };
    
    declare function makeWatchedObject<Type>(obj: Type): Type & PropEventSource<Type>;

    const person = makeWatchedObject({
        firstName: "Saoirse",
        lastName: "Ronan",
        age: 26
    });
    person.on("firstNameChanged", newName => {                             
        // (parameter) newName: string
        console.log(`new name is ${newName.toUpperCase()}`);
    });
    ```
### 内置字符操作类型
1. Uppercase
    ```js
    type Greeting = "Hello, world"
    type ShoutyGreeting = Uppercase<Greeting>        
    // type ShoutyGreeting = "HELLO, WORLD"
    
    type ASCIICacheKey<Str extends string> = `ID-${Uppercase<Str>}`
    type MainID = ASCIICacheKey<"my_app">
    // type MainID = "ID-MY_APP"
    ```
1. Lowercase
1. Capitalize把字符串的第一个字符转为大写形式
1. Uncapitalize把字符串的第一个字符转换为小写形式