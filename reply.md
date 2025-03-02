---
comment: true
---
# 初心
<span style="font-weight:bolder; color:#5393F6">相信都在使用罗老师的项目进行面试/答辩,那么问题必不可少，所以我在这里汇总一篇，
大家也可以分享自己遇到的问题，也可以分享自己的精彩回答,我都会汇总到这个页面:</span>
<span style="color:#FF0000">👇下面搞了评论区喔~</span>


***

# 问题汇总及回答：
## 1.Q:你的云盘和百度云盘对比，你的优势在哪？
&emsp;&emsp;A:非常感谢您提出这个问题，让我有机会详细阐述我的云盘项目相较于百度云盘的独特之处。首先，我的云盘产品的一大优势在于其精简高效的设计理念。整个系统从零构建，全程由我个人独立开发完成，这意味着研发成本控制得当，使得我可以专注于提供核心云存储服务，剔除了许多非必要但可能增加复杂度的功能，从而为用户提供更为直观、简洁的操作界面和流畅的用户体验。

&emsp;&emsp;其次，在功能性方面，我着重强调用户平等性和数据隐私保护。不同于某些商业云盘产品在下载速度、文件预览等方面对非付费用户的限制，我的云盘服务承诺无论是否充值，所有用户都能享受到无限制的上传下载速度，确保数据传输的高效性。此外，我特别注重用户的隐私保护，设计了严格的数据加密机制，让用户在使用过程中无需担心个人信息和数据的安全性，避免了广告推送带来的潜在隐私泄露风险，并提供实时文件预览服务，进一步提升使用的便利性。

&emsp;&emsp;总之，相比于百度云盘，我的云盘项目致力于打造一个轻量级、高速、无广告干扰且高度尊重用户隐私的云存储环境，力求让每一位用户都能获得卓越且免费的基础云端存储体验。

***

## 2.Q:大文件上传怎么实现的？
&emsp;&emsp;A:对于较大的文件，核心就是调用 slice 方法将其切割成若干个小块。slice 方法接收两个参数，起始位置和结束位置，借助这两个参数和循环结构，可以将大文件切割成一系列小块,后端收到分片组装成完整文件。
每上传一个文件块，就把 chunkIndex 向前移动，一直循环到把文件的所有块上传完毕。实现了大文件分片上传。

***

## 3.Q:断点续传怎么实现的？
&emsp;&emsp;A:对于基于纯网页的上传方式，由于HTTP协议本身的限制，难以直接支持真正的断点续传功能。然而，通过创新性的技术和设计理念，我克服了这一挑战，为用户提供了一种近似断点续传的良好体验。具体来说采取了分块上传和持久化记录的技术方案：

&emsp;&emsp;首先将待上传的文件切割为一系列小文件块，并为每个块赋予独一无二的标识符，这其中不仅包含了全局唯一的文件标识符（UID），还有该文件块在整份文件中的确切索引位置。在上传过程中，每上传成功一个分块，就会更新和记录的已上传分块位置。在出现网络中断或者用户暂停的情况，网页端会在恢复上传时能够准确地定位并跳过已上传的部分，仅需继续上传未完成的文件块，从而实现了类似于断点续传的功能。<br>

&emsp;&emsp;当网络恢复或用户决定继续上传时，前端页面能精确地依据先前保存的状态信息，自动识别并跳过已上传成功的文件块，仅针对尚未完成上传的部分进行操作。如此一来，即使在网络环境不够理想的情况下，也能确保大文件上传任务的连续性和完整性，极大优化了用户在上传大型文件时的体验，使之更为顺畅和高效。
## 3.Q:文件的储存方式是什么,有没有用到云服务？
<span style="font-weight:bolder; color:#FE6C37">tips:</span><span style="color:#898989; font-size: smaller;" >首先可以将头像上传做成阿里OSS，完成了答辩老师的需求。其次说一下云存储的理解：云存储和本地存储取决于你的服务器放哪里，你的程序在服务器上，那么他就是云存储，所以不要纠结上不上云，只要你部署在服务器上，他就是云存储</span><br>
&emsp;&emsp;A:关于文件的存储方式，在本项目的设计与实现中本地开发环境下采用了基本的IO流技术将文件存储在本地硬盘上，这对于个人用户级别的应用场景而言已经足够高效且实用。<br>
而对于云存储，我的思路是不使用云存储服务商所提供的存储服务，以避免高昂的费用和潜在的数据安全性问题。考虑到项目的中心思想是追求简洁、安全并且不收取额外费用，我选择了自建存储解决方案。<br>
&emsp;&emsp;在部署上线后，如果遇到客户量激增的问题，我可以采用分布式存储系统，进行多节点挂载磁盘和文件同步，模拟云存储的架构，提供高可用性和扩展性，同时能够更好地控制数据的物理位置和访问权限，增强了数据安全性。通过这种自主创新的分布式存储技术，兼顾了经济效益、安全防护和用户体验，从而提供了一种切实可行且满足项目定位的文件存储解决方案。<br>

***

## 4.Q:秒传怎么实现的？
&emsp;&emsp;A:当用户上传文件时，前端应用会先行计算该文件的MD5哈希值。这一过程就像是为文件制作了一张独一无二的身份证，即便是文件名相同，内容稍有差异，其哈希值也会截然不同。服务端接到请求后，首先在数据库中进行检索，如果发现数据库中已有相同的哈希值，无需用户再次上传完整的文件数据,服务端可以即时为用户生成一个指向已存储文件的引用或直接在用户账户中创建一个副本。秒传也就实现了。

***

## 5.Q:跟百度网盘比优缺点？
&emsp;&emsp;A:尊敬的评审老师们，感谢您们的关注和指导。不可否认的是，百度网盘凭借其卓越的云存储服务，赢得了广大用户的青睐。它不仅提供了基础的文件管理功能，更以简洁的界面和跨平台的支持，确保了用户的便捷操作。特别是对于付费用户而言，百度网盘提供的高速传输服务，极大地提升了使用效率。<br>
&emsp;&emsp;然而，正是在深度调研和用户反馈中，我发现了百度网盘的一些潜在局限性，这也是项目着力优化的方向。例如，非会员用户在下载速度上的受限，尤其是处理大文件时，痛感更为明显。页面中频繁出现的广告，对非付费用户的功能差异化对待，如在线解压仅限于付费用户，以及对普通用户上传视频和观看分辨率的限制，都是我希望改善的焦点。针对上述痛点，我在项目设计之初便将其列为优先考虑事项。并在最后真正的解决了这些问题，无论是传输速度还是功能使用，都将为所有用户提供无差别的优质体验。无广告干扰、全面的功能覆盖，包括但不限于在线解压和无限制的视频上传与观看。<br>
&emsp;&emsp;当然，我也清醒地认识到，与百度网盘这样的行业巨头相比，我的项目非常理想，没有盈利的思想，并且在存储容量、系统稳定性和跨平台兼容性等方面仍有待提升。但这正是我持续努力探索的目标。在不远的将来，我会继续计划在未来的版本中解决这些问题。相信通过不懈的努力，我能够逐步弥补差距，甚至超越现有的标准，更好地服务于每一位用户。

***

## 6.Q:这个项目的技术点是什么？有什么收获？
&emsp;&emsp;本次项目我基于市场主流的Spring Boot + Vue3框架，整合了MyBatis、MySQL和Redis等技术，构建了稳定高效的后端服务。通过FFmpeg，我实现了视频文件的高效处理，比如生成缩略图和分片处理，显著提高了视频文件的加载速度。我使用Redis作为缓存层，实时计算用户的空间使用情况，确保系统的高并发性能。通过RESTful API与前端进行数据交互，确保了数据传输的稳定性和安全性。前端部分则采用了Vite构建，高效、可维护的前端应用。Vue 3的Composition API提供了更为灵活的代码组织和复用方式，使得前端应用更加易于扩展和维护<br>
在权限管理上，Spring AOP对普通用户和超级管理员进行了区分，并实施了严格的参数校验，保障了系统的安全性。<br>
数据库设计上，我采取了分表策略，有效提升了数据处理的效率和系统的可扩展性。<br>
此次项目之旅，不仅是一次技术的探索，更是个人能力的一次飞跃。我深刻体会到，从前端交互设计到后端逻辑实现，每一环节都需精益求精。通过实战，我不仅巩固了对前端和后端技术栈的掌握，更重要的是，学会了如何在复杂场景下灵活运用技术，解决实际问题。这不仅仅是代码层面的成长，更是思维模式和解决问题能力的全面提升。总之，本项目不仅集合了多元化的技术栈，覆盖了用户界面优化、文件高效处理、权限精细管理及系统整体优化等多个维度，更是一次宝贵的实践经历，让我在理论与实践中找到了完美的平衡点.
***

### TODO
1. 文件上传后文件名称怎么处理？
    按照前端传的来，同名文件加后缀
2. 一个用户同时传1000个文件导致其他人不能传 怎么处理？
   
3. 网盘容量多大
   
4. 用户保存的文件存到电脑哪个磁盘 
   
5. 视频浏览，如何实现
   插件
6. 视频转码类型是什么，具体实现方式
   
7. 多级目录查找怎么实现,文件递归查找
   
8.  文件分享
