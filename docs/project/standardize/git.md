### Angular提交规范

Angular提交规范的格式包括Header、Body和Footer三个内容。Header为必填项，Body与Footer为可缺省项
```js
<type>(<scope>): <subject>
# 空一行
<body>
# 空一行
<footer>
```
##### header
该部分仅书写一行，包括三个字段，分别是type、scope和subject。
- type：用于说明commit的提交类型，必选
- scope：用于说明commit的影响范围，可选
- subject：用于说明commit的细节描述，可选
1. type用于说明commit的提交类型
    |类型|功能|描述|
    |--|--|--|
    |feat|功能|新增功能，迭代项目需求|
    |fix|修复|修复缺陷，修复上一版本存在问题|
    |docs|文档|更新文档，仅修改文档不修改代码|
    |style|样式|变动格式，不影响代码逻辑|
    |refactor|重构|重构代码，非新增功能也非修改缺陷|
    |perf|性能|优化性能，提高代码执行性能|
    |test|测试|新增测试，追加测试用例验证代码|
    |build|构建|更新构建，修改构建工具或外部依赖|
    |ci|脚本|更新脚本，修改CI或执行脚本配置|
    |chore|事务|变动事务，修改其他不影响代码的事务|
    |revert|回滚|回滚版本，撤销某次代码提交|
    |merge|合并|合并分支，合并分支代码到其他分支|
    |sync|同步|同步分支，同步分支代码到其他分支|
    |impr|改进|改进功能，升级当前功能模块|
1. scope用于说明commit的影响范围。简要说明本次修改的影响范围，例如根据功能可划分为数据层、视图层和控制层，根据交互可划分为组件、布局、流程、视图和页面
1. subject用于说明commit的细节描述

##### Body
该部分可书写多行，对subject做更详尽的描述，内容应包括修改动机与修改前后对比

##### Footer
该部分只适用两种情况，分别是不兼容变动与问题关闭。
- 不兼容变动：当前代码与上一版本不兼容，则以BREAKING CHANGE开头，关联变动描述、变动理由和迁移方法
- 问题关闭：当前代码已修复某些Issue，则以Closes开头，关联目标Issue

### 部署Git的提交格式化
##### commitizen
1. 全局安装
    ```js
    npm i -g commitizen cz-conventional-changelog-zh
    ```
1. 创建.czrc文件
    - Windows系统：在C:/Users/$USER目录中创建.czrc文件
    - MacOS系统：在~目录中创建.czrc文件
    ```js
    { "path": "cz-conventional-changelog-zh" }
    ```
1. git cz

##### commitlint