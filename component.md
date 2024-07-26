# 通用型组件
通用性组件是针对特定场景或功能需求而设计的组件，可以提高代码复用性和可维护性。<br>
在这里，基本都是基于 element-plus 封装的组件,不同的是自定义的样式。<br>

## 如何封装一个组件？
在 @/components (opens new window)目录下，创建 .vue 文件，在通过 components 进行注册即可。

### 创建使用
新建一个简单的 a 组件来举例子。

① 在 @/components/ 目录下，创建 test 文件，再创建 a.vue 文件。<br>
② 在其它 Vue 页面，导入并注册后使用（vue3中直接引入路径即可，）。代码如下：
```
<!-- 父组件 -->
<template>
  <div style="text-align: center; font-size: 20px">
    测试页面
    <testa></testa> <!-- 3. 使用 -->
  </div>
</template>

<script setup>
import a from "@/components/a"; // 1. 引入
</script>
```
#### 组件通信
在罗老师的组件里，基本都遵循一下知识点
##### 传递数据：
通过props属性向子组件传递数据，子组件通过props接收数据进行渲染。<br>
例如在父组件中使用<my-component :propName="data"></my-component>，在子组件中通过props: ['propName']接收数据。<br>

##### 监听事件：
在子组件中通过$emit()方法触发事件，父组件通过监听事件的方式响应子组件的行为。<br>
例如在子组件中使用this.$emit('eventName', eventData)，<br>
在父组件中使用<my-component @eventName="handleEvent"></my-component>。

## table组件 {#table}
对 element-plus 的 Table 组件进行封装，支持 element-plus 的所有表格组件，支持数据展示、选择、分页等功能。

Table 组件位于 src/components/Table 内
### 基本用法
1.在模板中使用注册的表格组件，并传入必要的属性和数据。
```vue
<Table
    ref="dataTableRef"
    :columns="columns" 
    :dataSource="tableData"
    :fetch="loadDataList"
    :initFetch="false"
    :options="tableOptions"
    @rowSelected="rowSelected"
    >
</table>
```
2.在 setup 函数中，定义响应式变量、计算属性和方法，并暴露给模板。
```vue
    <script setup>
    import { ref, reactive, onMounted } from 'vue'
    
    // 初始化一个dataTableRef，用于存储表格的引用
    const dataTableRef = ref(null)  
    // 初始化一个tableData，用于存储表格的数据
    const tableData = ref({})  
    // 初始化一个tableOptions，用于存储表格的配置
    const tableOptions = reactive({})
    // 初始化一个columns，用于存储表格的列
    const columns = reactive([])
    // 定义一个loadDataList函数，用于加载数据到表格中
    const loadDataList = () => {
        
    }
    // 定义一个rowSelected函数，用于处理行选中事件
    const rowSelected = (row) => {
        
    }
    // 暴露给模板的属性和方法
    defineExpose({
    })
    </script>
```
### 插槽的使用
插槽可以用来替换表格中每一列的内容。可以根据自己的需求定制每一列的展示方式。
##### 实现方法
在组件中，使用了 v-for 循环遍历列配置对象数组 columns，对于每一列，判断是否存在 scopedSlots 属性，如果存在则说明该列需要使用插槽。如果存在 scopedSlots 属性，则表明该列需要自定义内容
##### 使用方法

在模板中，使用 <template/> 标签定义插槽，并使用 name 属性指定插槽的名称。在clumes 配置对象数组中，使用 scopedSlots 属性指定插槽的名称，并在插槽中编写自定义内容。


```js{2,9-11,15,19}
   <Table
      :columns="columns"
      :showPagination="true"
      :dataSource="tableData"
      :fetch="loadDataList"
      :options="tableOptions"
      @rowSelected="rowSelected"
    >
  <template #fileName="{  row }">
    <!-- 自定义文件名列的内容 -->
  </template>
</Table>

<script setup>
const columns = [
 {
    label: "文件名",
    prop: "fileName",
    scopedSlots: "fileName",
  },
];
</script>
```



### 基础属性
| 参数          | 说明                           | 类型     | 可选值 | 默认值 |
| ------------- | ------------------------------ | -------- | ------ | ------ |
| columns       | 表格列配置，可包含插槽如prop、label、width | Array | -      | -      |
| dataSource    | 数据源对象，用于展示表格数据   | Array    | -      | -      |
| fetch         | 获取表格数据的方法             | Function | -      | -      |
| initFetch     | 是否初始化获取表格数据         | Boolean  | -      | false  |
| options       | 表格配置项                     | Object   | -      | -      |
| showPagination| 是否显示分页                   | Boolean  | -      | true   |


### 点击事件
* @rowClick: 行点击事件，传递当前点击的行数据。<br>
* @rowSelected: 行选中事件，传递当前选中的行数据。<br>
### 方法
* setCurrentRow(rowKey, rowValue): 根据指定的行键和值设置对应行为选中状态。<br>
* clearSelection(): 清除所有选中的行。<br>

## avatar组件 {#avatar}
如果传入了avatar，就直接使用该url显示头像；如果没有传入avatar，就使用代理globalInfo中的avatarUrl和userId拼接成的url显示头像。如果没有传入userId，则不显示任何内容

Avatar 组件位于 src/components/Avatar 内
### 基本用法
1.在模板中使用注册的 avatar 组件，并传入必要的属性和数据。
```vue
 <Avatar
    :userId="userInfo.userId" 
    :avatar="userInfo.avatar"
    :timestamp="timestamp" 
    :width="46"> 
    </Avatar>
```
### 基础属性
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| userId | 用户唯一标识符 | String | - | - |
| avatar | 用户自定义头像的URL | String | - | - |
| timestamp | 用于强制更新头像缓存的时间戳 | Number | - | 0 |
| width | 头像的宽度和高度 | Number | - | 40 |

* 详细介绍
userId: 用户的唯一标识符，用于从服务器获取默认头像或与用户的其他信息相关联。<br>
avatar: 用户自定义的头像URL，如果提供了这个值，将优先使用自定义头像而不是默认头像。<br>
timestamp: 一个数字类型的值，通常表示时间戳，用于作为URL查询参数，当头像更新时改变此值可以强制浏览器重新加载头像图像，避免使用缓存版本。<br>
width: 设置头像的宽度和高度，单位是像素。这使得头像组件可以在不同场景下具有不同的大小。<br>

## icon组件 {#icon}
显示文件列表的图标，根据不同的类别匹配不同的参数

Avatar 组件位于 src/components/Icon 内
### 基本用法
1.在模板中使用注册的 icon 组件，并传入必要的属性和数据。
```vue
   <Icon 
      iconName="no_data"
      :width="120" 
      fit="fill"
    >
  </Icon>
```
### 基础属性
| 参数    | 说明                                         | 类型    | 可选值           | 默认值 |
| ------- | -------------------------------------------- | ------- | ---------------- | ------ |
| fileType | 文件类型标识符，用于选择显示的图标             | Number  | -                | -      |
| iconName | 自定义图标的名称，如果提供此属性则优先使用     | String  | -                | -      |
| cover   | 图片的 URL，如果提供则使用此 URL 显示图片       | String  | -                | -      |
| width   | 图标的宽度和高度，单位为像素                   | Number  | -                | 32     |
| fit     | 图片的适应方式                                 | String  | cover, contain, fill, none, scale-down | `cover` |

#### 参数说明
在基础属性就有体现