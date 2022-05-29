### ts中的模块
1. 任何包含了一个顶层 import 或者 export 的文件会被认为是一个模块，脚本的变量是全局的
    ```js
    // 将脚本变成模块
    export {};
    ```
1. 接受所有的导出对象，然后使用 * as name 把它们放入一个单独的命名空间
    ```js
    export const pi = 3.14;
    export default class Foo {}

    import * as math from "./maths.js";
    math.pi
    math.default
    ```
1. 导入类型
    ```js
    export type Cat = { breed: string; yearOfBirth: number };

    import type { Cat, Dog } from "./animal.js";
    ```
1. 内置类型导入
    ```js
    import { createCatName, type Cat, type Dog } from "./animal.js";
    ```
