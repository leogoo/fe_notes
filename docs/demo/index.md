
## 文件下载
##### 文件地址
1. 直接用a标签指向文件地址即可
2. 不用a标签时需要点击下载
    ```js
    const a = document.createElement('a');
    a.href = url; // 指定url即可
    body.appendChild(a);
    a.click();
    body.removeChild(a);
    ```

#### Blob（二进制大对象）
> Blob对象可以将文件流转成二进制流
1. blob用法
  ```js
  const str = '124345';
  const myBlob = new Blob([str], {
    type: 'text/plain'
  });
  myBlob.text().then(res => console.log(res));
  ```
2. 下载文件和图片预览
> File对象继承自Blob
  ```js
  file.onchange = (e) => {
    const file = e.target.files[0];
    const a = document.createElement('a');
    const img = document.createElement('img');
    a.href = URL.createObjectURL(file);
    img.src = URL.createObjectURL(file);
    body.appendChild(a);
    a.click();
    body.removeChild(a);
  }
  ```
1. 异步方式下载
> FileReader用来把文件读入内存，并且读取文件中的数据
  ```js
  // 将文件以文本形式读入页面
  function readAsText(file) {
    var fileReader = new FileReader();  
    fileReader.readAsText(file);
    fileReader.onload = function(e) {
        var p = document.createElement('p');
        p.textContent = e.currentTarget.result;
        $('body')[0].appendChild(p);
    }
  }

  // 将文件以Data URL形式读入页面
  function readAsDataURL(file) {
    var fileReader = new FileReader();  
    fileReader.readAsDataURL(file);
    log(fileReader)
    fileReader.onload = function(e) {
        var img = document.createElement('img');
        img.src = e.currentTarget.result;
        img.onload = function() {
            $('body')[0].appendChild(img);
        }
    }
  }

  // 创建对象URL
  function createObjectURL(file) {
    var img = document.createElement('img');
    img.onload = function() {
      // revokeObjectURL() 静态方法用来释放一个之前通过调用 URL.createObjectURL() 创建的已经存在的 URL 对象
      window.URL.revokeObjectURL(img.src); 
    }
    img.src = window.URL.createObjectURL(file);
    $('body')[0].appendChild(img);
  }
  ```

## 文件上传
1. 使用内置对象FormData
    ```js
    const data = new FromData();
    data.append('file', new File());
    data.append('num', 234);

    // FormData不能直接打印，可以通过for of遍历
    for (const k of data) {

    }
    ```
1. 分片上传，后端使用multiparty