1. 映射类型
    ```js
    type OptionsFlags<Type> = {
        // 循环遍历键名
        [Property in keyof Type]: boolean;
    };
    type FeatureFlags = {
        darkMode: () => void;
        newUserProfile: () => void;
    };
    
    type FeatureOptions = OptionsFlags<FeatureFlags>;
    // type FeatureOptions = {
    //    darkMode: boolean;
    //    newUserProfile: boolean;
    // }
    ```
1. 映射修饰符
    1. 只读readonly，可选？
    1. 通过前缀+、-来添加或删除修饰符，默认添加
        ```js
        // 删除属性中的只读属性
        type CreateMutable<Type> = {
            -readonly [Property in keyof Type]: Type[Property];
        };
        type LockedAccount = {
            readonly id: string;
            readonly name: string;
        };
        type UnlockedAccount = CreateMutable<LockedAccount>;
        // type UnlockedAccount = {
        //    id: string;
        //    name: string;
        // }


        // 删除属性中的可选属性
        type Concrete<Type> = {
            [Property in keyof Type]-?: Type[Property];
        };
        
        type MaybeUser = {
            id: string;
            name?: string;
            age?: number;
        };
        
        type User = Concrete<MaybeUser>;
        // type User = {
        //    id: string;
        //    name: string;
        //    age: number;
        // }
        ```
1. 通过 as 实现键名重新映射
    1. 过滤
        ```js
        // Remove the 'kind' property
        type RemoveKindField<Type> = {
            [Property in keyof Type as Exclude<Property, "kind">]: Type[Property]
        };
        interface Circle {
            kind: "circle";
            radius: number;
        }
        type KindlessCircle = RemoveKindField<Circle>;
        // type KindlessCircle = {
        //    radius: number;
        // }
        ```
1. 遍历联合类型
    ```js
    type EventConfig<Events extends { kind: string }> = {
        // E为联合类型中的类型
        [E in Events as E["kind"]]: (event: E) => void;
    }
    type SquareEvent = { kind: "square", x: number, y: number };
    type CircleEvent = { kind: "circle", radius: number };
    
    type Config = EventConfig<SquareEvent | CircleEvent>
    // type Config = {
    //    square: (event: SquareEvent) => void;
    //    circle: (event: CircleEvent) => void;
    // }
    ```
1. 搭配其他功能
    ```js
    type ExtractPII<Type> = {
        [Property in keyof Type]: Type[Property] extends { pii: true } ? true : false;
    };
    type DBFields = {
        id: { format: "incrementing" };
        name: { type: string; pii: true };
    };
    type ObjectsNeedingGDPRDeletion = ExtractPII<DBFields>;
    // type ObjectsNeedingGDPRDeletion = {
    //    id: false;
    //    name: true;
    // }
    ```