# 通用型方法
通用性组件是针对特定场景或功能需求而设计的组件，可以提高代码复用性和可维护性。<br>


## 如何封装一个方法？
在 @/utils 目录下，创建 .js 文件，再创建 index.js 文件。<br>
在 index.js 文件中，通过 export default 导出方法。<br>
在其它 Vue 页面，导入并使用（vue3中直接引入路径即可，）。代码如下：
```
    // utils.js
// 定义一个工具函数
export function greet(name) {
  return `Hello, ${name}!`;
}

    // index.js
// 导入工具函数
import { greet } from '@/utils';

// 使用工具函数
console.log(greet('John')); // 输出：Hello, John!
```



## Confirm {#confirm}
基于它`element-ui`库的`el-messageBox`组件封装的确认框。<br>
接受两个参数：message和okfun。
点击确定就会执行okfun函数，反之无操作。

### 如何使用
```
 proxy.Confirm('你确定要退出吗',async( ) => {
    let result = await proxy.Request({
    url:api.logout,
  });
```


## Verify {#verify}
基于它`element-ui`库的`el-from`组件二次封装的自定义校验贵州。<br>
代码分为三层：

1.正则regs对象：regs 对象包含了四种不同的正则表达式，这些正则在网上都能找到
```
const regs = {
    email: /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/,
    number: /^([0]|[1-9][0-9]*)$/,
    password: /^(?=.*\d)(?=.*[a-zA-Z])[\da-zA-Z~!@#$%^&*_]{8,}$/,
    shareCode: /^[A-Za-z0-9]+$/
}
```
2.验证函数：这个是elment自带，可直接粘贴
verify 函数接收四个参数：rule、value、reg 和 callback。这个函数的主要作用是使用提供的正则表达式 reg 来测试 value 是否符合预期的格式。如果 value 符合规则，则调用 callback 无参，表示验证成功；如果不符或 value 是空值，则调用 callback 并传入一个错误对象，其中包含 rule.message 属性，通常用于显示错误信息。

```
const verify = (rule, value, reg, callback) => {
    if (value) {
        if (reg.test(value)) {
            callback()
        } else {
            callback(new Error(rule.message))
        }
    } else {
        callback()
    }
}
```
3.导出验证方法
```
export default {
    email: (rule, value, callback) => {
        return verify(rule, value, regs.email, callback)
    },
    number: (rule, value, callback) => {
        return verify(rule, value, regs.number, callback)
    },
    password: (rule, value, callback) => {
        return verify(rule, value, regs.password, callback)
    },
    shareCode: (rule, value, callback) => {
        return verify(rule, value, regs.shareCode, callback)
    },
}

```

在调用函数时 email: [{ validator: proxy.Verify.email, message: "请输入正确的邮箱" }],传入此对象。