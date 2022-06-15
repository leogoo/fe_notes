## 基础配置
1. 邮箱用户名
    ```js
    $ git config --global user.name gaolee
    $ git config --global user.email xxx@mail.com
    ```
1. EOL设置

    windows系统的编辑器中换行是回车（CR）和换行（LF），一般都会在editorconfig中配置`end_of_line = lf`,但是git提交时还是可能会自动修改为crlf，所以一般设置`git config --global core.autocrlf false`
    ```js
    // 提交时转换为LF，拉取时转换为CRLF
    git config --global core.autocrlf true
    // 提交时转换为LF，拉取时不转换
    git config --global core.autocrlf input
    // 不转换
    git config --global core.autocrlf false
    ```
1. ssh Key
    1. 生成新的 ssh key
        ```bash
        # 生成一个 ssh-key
        # -t: 可选择 dsa | ecdsa | ed25519 | rsa | rsa1，代表加密方式
        # -C: 注释，一般写自己的邮箱
        $ ssh-keygen -t rsa -C "xxx@mail.com"

        # 生成 id_rsa/id_rsa.pub: 配对的私钥与公钥
        $ ls ~/.ssh
        authorized_keys  config  id_rsa  id_rsa.pub  known_hosts
        ```
    1. 新添ssh key
        ```bash
        $ cat ~/.ssh/id_rsa.pub
        ssh-rsa xxxxxxxxxxx
        ```

## 常用命令
1. 命令
- git reflog show --date=iso 很关键，很好用
- git stash -u :缓存所有内容包括新建的
- git stash list
- git stash pop stash@{id}
- git clean -fd:删除untraked files和目录
- git checkout . 删除所有未加入缓存区的文件
- git diff <分支名>:比较当前分支与指定分支代码的差别
- git log filename: 查看单个文件的提交记录
- git show commitID filename: 查看某次提交对文件的修改
- git config core.ignorecase false 区分大小写，项目内运行

1. 命令简写
- gco: git checkout
- gbr: git branch
- gst: git status
- gd: git diff
- gl: git pull
- grb: git rebase
- ga: git add
- gc: git commit
- gcmsg: git commit -m
- gp: git push
- glog: git log --oneline --decorate --graph
- glgg: git log --graph
- gm: git merge
- gsta: git stash
- gstp: git stash pop

## 标签
1. 轻量标签和附注标签
    - 轻量标签只是commit的引用，可以看作是一个commit的别名
    - 附注标签：存储在git仓库中的完整对象，包括打标签者的信息、日期和其他标签信息
1. 本地常用命令
    - git tag： 列出所有标签
    - git tag <标签名>： 在当前commit上添加一个标签
    - git tag <标签名> <commitID>: 在指定commit上打上tag
    - git tag -a <标签名> -m 附注信息 ：直接给当前的提交版本创建一个 【附注标签】
    - git tag -a <标签名> <commitID> -m 附注信息 ：给指定的提交版本创建一个【附注标签】
    - git tag -d 标签名称 : 删除指定名称的标签
1. 远程仓库tag的操作
    - git push origin <标签名称> : 将指定的标签上传到远程仓库
    - git push origin --tags : 将所有不在远程仓库中的标签上传到远程仓库
    - git push origin --delete <标签名>: 删除标签
1. 检出标签，以标签指定的版本为基础版本新建一个分支
    ```js
    git checkout -b 分支名 标签名
    ```

## 常用操作
1. 创建远程分支，其实就是把本地分支，然后push到远端
    ```js
    git checkout -b newBranch
    // 本地分支内容直接推送到远程分支
    git push origin newBranch:newBranch
    ```
1. cherry-pick,用于将其他分支上的commit复制到当前分支来
    1. 首先复制要导入的commitID
    1. 在当前分支执行`git cherry-pick commitId`即可
    1. 导入多个commit时。`git cherry-pick commitId0..commitId100`，需要注意的是不包含commitId0这个提交，将导入(commitId0, commitId100]中的所有commit
1. reset
    - --soft模式：就仅仅将头指针恢复，已经add的缓存以及工作空间的所有东西都不变。
    - --mixed：就将头恢复掉，已经add的缓存也会丢失掉，工作空间的代码什么的是不变的。
    - --hard：那么一切就全都恢复了，头变，aad的缓存消失，代码什么的也恢复到以前状态。
1. rebase
    1. 合并远程分支，用于替代git merge
        1. 使用git merge时，如果本地有新的commit，会多出一个Merge的commit
        1. 使用rebase时，会将本地分支新的commit缓存，然后将指针移动到远程最新的commit，然后在后面添加本地新增的commit
    1. 用于合并commit
        1. 使用方法`git rebase -i commitId`
        1. 将上述**commitId后面**的commit合并，会进入编辑状态处理commit之间怎么合并，且编辑message
1. revert
    - git revert commitId是将指定的commit反转，与reset不同的是会生成一个新的commit，而内容则是反转对应的commit内容。reset需要git push -f强制回退才会改变远程分支
    - 一般冲突时，保留parent版本的内容，执行git revert --continue
    - 如果不想解决冲突的话可以取消撤回：git revert --abort
1. 冲突处理方法
    1. 先全都ci，然后git pull把所有代码都拉下来修改冲突（属于自己的，其他撤回就好了，反正不提交）
    1. (优先）提交前Git stash -> git pull -> git stash pop
    保持本地和远端同步(pull前记得git stash),多出的文件就都是自己本地修改的