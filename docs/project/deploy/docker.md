### docker基础
1. docker 的架构图如下
    <img src='../../images/deploy/architecture.svg' />

1. 基本概念
    - docker client: 即 docker 命令行工具
    - docker host: 宿主机，docker daemon 的运行环境服务器
    - docker daemon: docker 的守护进程，docker client 通过命令行与 docker daemon 交互
    - container: 最小型的一个操作系统环境，可以对各种服务以及应用容器化
    - image: 镜像，可以理解为一个容器的模板配置，通过一个镜像可以启动多个容器
    - registry: 镜像仓库，存储大量镜像，可以从镜像仓库拉取和推送镜像

1. 安装docker
    windows环境需要在bios开启虚拟化

### 镜像
1. 拉取镜像
    ```bash
    # 加入拉取一个 node:alpine 的镜像
    $ docker pull node:alpine
    ```
1. 查看镜像
    ```bash
    # 查看镜像信息
    $ docker inspect node:alpine
    ```
1. 列举镜像
    ```bash
    $ docker images
    ```
1. 构建新镜像, docker build使用当前目录中的dockerfile构建镜像
    ```bash
    # -t node-base:10: 镜像以及版本号
    # .: 指当前路径
    $ docker build -t node-base:10 .
    ```
1. 推送镜像： docker push

### Dockerfile
> 使用Dockerfile作为配置文件构建镜像
1. FROM, 基于一个已有的镜像
    ```js
    FROM <image> [AS <name>]
    ```
1. ADD: 把目录，或者url地址文件加入到镜像的文件系统中
    ```js
    ADD [--chown=<user>:<group>] <src>... <dest>
    ```
1. RUN: 执行命令，由于 ufs 的文件系统，它会在当前镜像的顶层新增一层
    ```js
    RUN <command>
    ```
1. CMD: 指定容器如何启动,一个Dockerfile 中只允许有一个 CMD
    ```bash
    # exec form, this is the preferred form
    CMD ["executable","param1","param2"] 
    # as default parameters to ENTRYPOINT
    CMD ["param1","param2"]
    # shell form
    CMD command param1 param2
    ```

### 容器
镜像与容器的关系，类似于代码与进程的关系。
- docker run 创建容器
- docker stop 停止容器
- docker rm 删除容器
- docker ps 查看容器启动状态
1. 创建容器
    基于 nginx 镜像创建一个最简单的容器：启动一个最简单的 http 服务
    其中:
    - -d: 启动一个 daemon 进程
    - --name: 为容器指定名称
    - -p host-port:container-port: 宿主机与容器端口映射，方便容器对外提供服务
    - nginx:alpine: 基于该镜像创建容器
    ```bash
    $ docker run -d --name nginx -p 8888:80 nginx:alpine
    ```
1. 容器管理
    - docker ps 列出所有容器
    - docker port 查看容器端口映射
    - docker stats 查看容器资源占用

### 通过Docker部署静态服务器
1. docker-compose.yaml