## todo......<br>
---
###  阿里OSS知识扩展<br>

#### 1.什么是对象存储OSS 

阿里云对象存储OSS（Object Storage Service）是一款海量、安全、低成本、高可靠的云存储服务，可提供99.9999999999%（12个9）的数据持久性，99.995%的数据可用性。多种存储类型供选择，全面优化存储成本。 OSS具有与平台无关的RESTful API接口，您可以在任何应用、任何时间、任何地点存储和访问任意类型的数据。

#### 2. 上传头像demo

前端不需要做任何事，调用接口返回url链接绑定img标签就可
* 安全问题已编写好的java代码无法上传至github
* 等我再仔细研究下，一并上传



### 其他大文件上传方式<br>

### 网盘的更多可拓展：<br>

---

#### 慢启动策略的动态调整及其优化方案

为了优化CP的慢启动策略，可以进行以下调整：

1. **并发数调整**：
   - 将并发上传的数量限制为3个，尽量避免过多的并发操作。
   - 考虑到用户可能会进行其他操作，这样的调整可以提高系统的响应速度和稳定性。
   - 不再考虑浏览器最大并发数的限制。

2. **抽样策略**：
   - 采用抽样hash的方法，从文件的头、中、尾各取若干片段进行抽样。
   - 通过抽样来提高上传效率，同时在一定程度上保持准确率。
   - 对于10GB的文件，目标是在1分钟内完成计算，这样可以在牺牲少许准确率的情况下大幅提升效率。

3. **大文件处理**：

---

## Md5文档（英文） {#md5Spark }

# SparkMD5
**<span style="border-bottom:2px dashed #00ABE3;">下一小节是中文</span>**<br>
SparkMD5 is a fast md5 implementation of the MD5 algorithm.
This script is based in the JKM md5 library which is the [fastest](http://jsperf.com/md5-shootout/7) algorithm around. This is most suitable for browser usage, because `nodejs` version might be faster.

NOTE: Please disable Firebug while performing the test!
      Firebug consumes a lot of memory and CPU and slows the test by a great margin.


**[Demo](http://9px.ir/demo/incremental-md5.html)**

### Install

```sh
npm install --save spark-md5
```

### Improvements over the JKM md5 library

 * Strings are converted to utf8, like most server side algorithms
 * Fix computation for large amounts of data (overflow)
 * Incremental md5 (see below)
 * Support for array buffers (typed arrays)
 * Functionality wrapped in a closure, to avoid global assignments
 * Object oriented library
 * CommonJS (it can be used in node) and AMD integration
 * Code passed through JSHint and JSCS


Incremental md5 performs a lot better for hashing large amounts of data, such as
files. One could read files in chunks, using the FileReader & Blob's, and append
each chunk for md5 hashing while keeping memory usage low. See example below.


### Usage

### Normal usage

```js
var hexHash = SparkMD5.hash('Hi there');        // hex hash
var rawHash = SparkMD5.hash('Hi there', true);  // OR raw hash (binary string)
```

### Incremental usage

```js
var spark = new SparkMD5();
spark.append('Hi');
spark.append(' there');
var hexHash = spark.end();                      // hex hash
var rawHash = spark.end(true);                  // OR raw hash (binary string)
```

### Hash a file incrementally

NOTE: If you test the code bellow using the file:// protocol in chrome you must start the browser with -allow-file-access-from-files argument.
      Please see: http://code.google.com/p/chromium/issues/detail?id=60889

```js
document.getElementById('file').addEventListener('change', function () {
    var blobSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice,
        file = this.files[0],
        chunkSize = 2097152,                             // Read in chunks of 2MB
        chunks = Math.ceil(file.size / chunkSize),
        currentChunk = 0,
        spark = new SparkMD5.ArrayBuffer(),
        fileReader = new FileReader();

    fileReader.onload = function (e) {
        console.log('read chunk nr', currentChunk + 1, 'of', chunks);
        spark.append(e.target.result);                   // Append array buffer
        currentChunk++;

        if (currentChunk < chunks) {
            loadNext();
        } else {
            console.log('finished loading');
            console.info('computed hash', spark.end());  // Compute hash
        }
    };

    fileReader.onerror = function () {
        console.warn('oops, something went wrong.');
    };

    function loadNext() {
        var start = currentChunk * chunkSize,
            end = ((start + chunkSize) >= file.size) ? file.size : start + chunkSize;

        fileReader.readAsArrayBuffer(blobSlice.call(file, start, end));
    }

    loadNext();
});
```

You can see some more examples in the test folder.

### Documentation


### SparkMD5 class

#### SparkMD5#append(str)

Appends a string, encoding it to UTF8 if necessary.

#### SparkMD5#appendBinary(str)

Appends a binary string (e.g.: string returned from the deprecated [readAsBinaryString](https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsBinaryString)).

#### SparkMD5#end(raw)

Finishes the computation of the md5, returning the hex result.
If `raw` is true, the result as a binary string will be returned instead.

#### SparkMD5#reset()

Resets the internal state of the computation.

#### SparkMD5#getState()

Returns an object representing the internal computation state.
You can pass this state to setState(). This feature is useful to resume an incremental md5.

#### SparkMD5#setState(state)

Sets the internal computation state. See: getState().

#### SparkMD5#destroy()

Releases memory used by the incremental buffer and other additional resources.

#### SparkMD5.hash(str, raw)

Hashes a string directly, returning the hex result.
If `raw` is true, the result as a binary string will be returned instead.
Note that this function is `static`.

#### SparkMD5.hashBinary(str, raw)

Hashes a binary string directly (e.g.: string returned from the deprecated [readAsBinaryString](https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsBinaryString)), returning the hex result.
If `raw` is true, the result as a binary string will be returned instead.
Note that this function is `static`.


### SparkMD5.ArrayBuffer class

#### SparkMD5.ArrayBuffer#append(arr)

Appends an array buffer.

#### SparkMD5.ArrayBuffer#end(raw)

Finishes the computation of the md5, returning the hex result.
If `raw` is true, the result as a binary string will be returned instead.

#### SparkMD5.ArrayBuffer#reset()

Resets the internal state of the computation.

#### SparkMD5.ArrayBuffer#destroy()

Releases memory used by the incremental buffer and other additional resources.

#### SparkMD5.ArrayBuffer#getState()

Returns an object representing the internal computation state.
You can pass this state to setState(). This feature is useful to resume an incremental md5.

#### SparkMD5.ArrayBuffer#setState(state)

Sets the internal computation state. See: getState().

#### SparkMD5.ArrayBuffer.hash(arr, raw)

Hashes an array buffer directly, returning the hex result.
If `raw` is true, the result as a binary string will be returned instead.
Note that this function is `static`.



### License

The reason to have two licenses is that some entities refuse to use the master license (WTF2) due to
bad language. If that's also your case, you can choose the alternative license.


### Credits
[Joseph Myers](http://www.myersdaily.org/joseph/javascript/md5-text.html)

---
## Md5文档（中文） 
SparkMD5 是 MD5 算法的一个快速实现。这个脚本基于 JKM md5 库，该库是最快的算法之一。它特别适合在浏览器中使用，尽管 Node.js 版本可能更快。

**注意：** 在进行测试时，请禁用 Firebug！
Firebug 会消耗大量内存和 CPU，并极大地减慢测试速度。

### 安装
使用 npm 安装 SparkMD5：
```sh
npm install --save spark-md5
```

### 相较于 JKM md5 库的改进
- 字符串被转换为 UTF-8，与大多数服务器端算法一致。
- 修正了对大数据量计算的处理（防止溢出）。
- 增量 MD5 计算（见下文）。
- 支持数组缓冲区（类型化数组）。
- 功能封装在一个闭包中，避免全局变量的赋值。
- 面向对象的库。
- CommonJS 和 AMD 集成（可在 Node.js 中使用）。
- 代码通过了 JSHint 和 JSCS 的检测。

### 增量 MD5
增量 MD5 对于散列大量数据（如文件）表现更佳。可以将文件分块读取，使用 FileReader 和 Blob 进行操作，并逐块追加进行 MD5 散列，同时保持较低的内存使用。

### 使用方法
#### 正常使用
```js
var hexHash = SparkMD5.hash('Hi there');        // 十六进制哈希
var rawHash = SparkMD5.hash('Hi there', true);  // 或二进制字符串哈希
```

#### 增量使用
```js
var spark = new SparkMD5();
spark.append('Hi');
spark.append(' there');
var hexHash = spark.end();                      // 十六进制哈希
var rawHash = spark.end(true);                  // 或二进制字符串哈希
```

#### 增量散列文件
**注意：** 如果在 Chrome 中使用 `file://` 协议测试下面的代码，必须以 `-allow-file-access-from-files` 参数启动浏览器。
更多详情请参阅：http://code.google.com/p/chromium/issues/detail?id=60889

```js
document.getElementById('file').addEventListener('change', function () {
    var blobSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice,
        file = this.files[0],
        chunkSize = 2097152,                             // 每次读取 2MB
        chunks = Math.ceil(file.size / chunkSize),
        currentChunk = 0,
        spark = new SparkMD5.ArrayBuffer(),
        fileReader = new FileReader();

    fileReader.onload = function (e) {
        console.log('读取第', currentChunk + 1, '块，共', chunks, '块');
        spark.append(e.target.result); // 追加数组缓冲区
        currentChunk++;
        if (currentChunk < chunks) {
            loadNext();
        } else {
            console.log('加载完成');
            console.info('计算得到的哈希值', spark.end()); // 计算哈希值
        }
    };

    fileReader.onerror = function () {
        console.warn('哎呀，出了点问题。');
    };

    function loadNext() {
        var start = currentChunk * chunkSize,
            end = ((start + chunkSize) >= file.size) ? file.size : start + chunkSize;
        fileReader.readAsArrayBuffer(blobSlice.call(file, start, end));
    }

    loadNext();
});
```

### 文档
#### SparkMD5 类
- `SparkMD5#append(str)`
  追加一个字符串，必要时将其编码为 UTF-8。
- `SparkMD5#appendBinary(str)`
  追加一个二进制字符串（例如：从已废弃的 readAsBinaryString 方法返回的字符串）。
- `SparkMD5#end(raw)`
  完成 MD5 计算并返回十六进制结果。如果 `raw` 为 `true`，则返回二进制字符串形式的结果。
- `SparkMD5#reset()`
  重置内部计算状态。
- `SparkMD5#getState()`
  返回表示内部计算状态的对象。可以传递给 `setState()`。此功能用于恢复增量 MD5。
- `SparkMD5#setState(state)`
  设置内部计算状态。参考：`getState()`。
- `SparkMD5#destroy()`
  释放增量缓冲区和其他额外资源所占用的内存。
- `SparkMD5.hash(str, raw)`
  直接散列字符串并返回十六进制结果。如果 `raw` 为 `true`，则返回二进制字符串形式的结果。注意这是静态函数。
- `SparkMD5.hashBinary(str, raw)`
  直接散列二进制字符串（例如：从已废弃的 readAsBinaryString 方法返回的字符串），返回十六进制结果。如果 `raw` 为 `true`，则返回二进制字符串形式的结果。注意这是静态函数。

#### SparkMD5.ArrayBuffer 类
- `SparkMD5.ArrayBuffer#append(arr)`
  追加一个数组缓冲区。
- `SparkMD5.ArrayBuffer#end(raw)`
  完成 MD5 计算并返回十六进制结果。如果 `raw` 为 `true`，则返回二进制字符串形式的结果。
- `SparkMD5.ArrayBuffer#reset()`
  重置内部计算状态。
- `SparkMD5.ArrayBuffer#destroy()`
  释放增量缓冲区和其他额外资源所占用的内存。
- `SparkMD5.ArrayBuffer#getState()`
  返回表示内部计算状态的对象。可以传递给 `setState()`。此功能用于恢复增量 MD5。
- `SparkMD5.ArrayBuffer#setState(state)`
  设置内部计算状态。参考：`getState()`。
- `SparkMD5.ArrayBuffer.hash(arr, raw)`
  直接散列数组缓冲区并返回十六进制结果。如果 `raw` 为 `true`，则返回二进制字符串形式的结果。注意这是静态函数。