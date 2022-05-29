1. 手写一个简易静态资源服务器
    ```js
    const fs = require('fs');
    const http = require('node:http');

    const html = fs.readFileSync('./index.html');
    const server = http.createServer((req, res) => {
        res.end(html);
    });
    server.listen(3000, () => {
        console.log('server running');
    })
    ```
1. 专业的静态资源服务器
    - nginx: 性能好
    - serve： 适合本地开发
1. 静态服务器实例serve-handler

