## todo......<br>

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
