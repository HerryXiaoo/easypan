import{_ as h,E as e,c as p,m as i,a as s,J as n,a5 as l,o as k}from"./chunks/framework.C3zm5dwq.js";const C=JSON.parse('{"title":"通用型组件","description":"","frontmatter":{},"headers":[],"relativePath":"component.md","filePath":"component.md"}'),d={name:"component.md"},r=l(`<h1 id="通用型组件" tabindex="-1">通用型组件 <a class="header-anchor" href="#通用型组件" aria-label="Permalink to &quot;通用型组件&quot;">​</a></h1><p>通用性组件是针对特定场景或功能需求而设计的组件，可以提高代码复用性和可维护性。<br> 在这里，基本都是基于 element-plus 封装的组件,不同的是自定义的样式。<br></p><h2 id="如何封装一个组件" tabindex="-1">如何封装一个组件？ <a class="header-anchor" href="#如何封装一个组件" aria-label="Permalink to &quot;如何封装一个组件？&quot;">​</a></h2><p>在 @/components (opens new window)目录下，创建 .vue 文件，在通过 components 进行注册即可。</p><h3 id="创建使用" tabindex="-1">创建使用 <a class="header-anchor" href="#创建使用" aria-label="Permalink to &quot;创建使用&quot;">​</a></h3><p>新建一个简单的 a 组件来举例子。</p><p>① 在 @/components/ 目录下，创建 test 文件，再创建 a.vue 文件。<br> ② 在其它 Vue 页面，导入并注册后使用（vue3中直接引入路径即可，）。代码如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!-- 父组件 --&gt;</span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div style=&quot;text-align: center; font-size: 20px&quot;&gt;</span></span>
<span class="line"><span>    测试页面</span></span>
<span class="line"><span>    &lt;testa&gt;&lt;/testa&gt; &lt;!-- 3. 使用 --&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import a from &quot;@/components/a&quot;; // 1. 引入</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h4 id="组件通信" tabindex="-1">组件通信 <a class="header-anchor" href="#组件通信" aria-label="Permalink to &quot;组件通信&quot;">​</a></h4><p>在罗老师的组件里，基本都遵循一下知识点</p><h5 id="传递数据" tabindex="-1">传递数据： <a class="header-anchor" href="#传递数据" aria-label="Permalink to &quot;传递数据：&quot;">​</a></h5>`,11),o=i("br",null,null,-1),E=i("br",null,null,-1),c=i("h5",{id:"监听事件",tabindex:"-1"},[s("监听事件： "),i("a",{class:"header-anchor",href:"#监听事件","aria-label":'Permalink to "监听事件："'},"​")],-1),g=i("br",null,null,-1),y=i("br",null,null,-1),u=l(`<h2 id="table" tabindex="-1">table组件 <a class="header-anchor" href="#table" aria-label="Permalink to &quot;table组件 {#table}&quot;">​</a></h2><p>对 element-plus 的 Table 组件进行封装，支持 element-plus 的所有表格组件，支持数据展示、选择、分页等功能。</p><p>Table 组件位于 src/components/Table 内</p><h3 id="基本用法" tabindex="-1">基本用法 <a class="header-anchor" href="#基本用法" aria-label="Permalink to &quot;基本用法&quot;">​</a></h3><p>1.在模板中使用注册的表格组件，并传入必要的属性和数据。</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Table</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;dataTableRef&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">columns</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">columns</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">dataSource</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">tableData</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fetch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">loadDataList</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">initFetch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">options</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">tableOptions</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rowSelected</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">rowSelected</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/table&gt;</span></span></code></pre></div><p>2.在 setup 函数中，定义响应式变量、计算属性和方法，并暴露给模板。</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { ref, reactive, onMounted } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 初始化一个dataTableRef，用于存储表格的引用</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> dataTableRef</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)  </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 初始化一个tableData，用于存储表格的数据</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> tableData</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({})  </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 初始化一个tableOptions，用于存储表格的配置</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> tableOptions</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> reactive</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({})</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 初始化一个columns，用于存储表格的列</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> columns</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> reactive</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([])</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 定义一个loadDataList函数，用于加载数据到表格中</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> loadDataList</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 定义一个rowSelected函数，用于处理行选中事件</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> rowSelected</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">row</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 暴露给模板的属性和方法</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    defineExpose</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="插槽的使用" tabindex="-1">插槽的使用 <a class="header-anchor" href="#插槽的使用" aria-label="Permalink to &quot;插槽的使用&quot;">​</a></h3><p>插槽可以用来替换表格中每一列的内容。可以根据自己的需求定制每一列的展示方式。</p><h5 id="实现方法" tabindex="-1">实现方法 <a class="header-anchor" href="#实现方法" aria-label="Permalink to &quot;实现方法&quot;">​</a></h5><p>在组件中，使用了 v-for 循环遍历列配置对象数组 columns，对于每一列，判断是否存在 scopedSlots 属性，如果存在则说明该列需要使用插槽。如果存在 scopedSlots 属性，则表明该列需要自定义内容</p><h5 id="使用方法" tabindex="-1">使用方法 <a class="header-anchor" href="#使用方法" aria-label="Permalink to &quot;使用方法&quot;">​</a></h5><p>在模板中，使用 <template></template> 标签定义插槽，并使用 name 属性指定插槽的名称。在clumes 配置对象数组中，使用 scopedSlots 属性指定插槽的名称，并在插槽中编写自定义内容。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Table</span></span>
<span class="line highlighted"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">      :columns=&quot;columns&quot;</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">      :showPagination=&quot;true&quot;</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">      :dataSource=&quot;tableData&quot;</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">      :fetch=&quot;loadDataList&quot;</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">      :options=&quot;tableOptions&quot;</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">      @rowSelected=&quot;rowSelected&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &gt;</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> #fileName=&quot;{</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  row</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> }&quot;&gt;</span></span>
<span class="line highlighted"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    &lt;!--</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> 自定义文件名列的内容</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> --&gt;</span></span>
<span class="line highlighted"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  &lt;/template&gt;</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&lt;/Table&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&lt;script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">const columns = [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    label: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;文件名&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    prop: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;fileName&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    scopedSlots: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;fileName&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="基础属性" tabindex="-1">基础属性 <a class="header-anchor" href="#基础属性" aria-label="Permalink to &quot;基础属性&quot;">​</a></h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>columns</td><td>表格列配置，可包含插槽如prop、label、width</td><td>Array</td><td>-</td><td>-</td></tr><tr><td>dataSource</td><td>数据源对象，用于展示表格数据</td><td>Array</td><td>-</td><td>-</td></tr><tr><td>fetch</td><td>获取表格数据的方法</td><td>Function</td><td>-</td><td>-</td></tr><tr><td>initFetch</td><td>是否初始化获取表格数据</td><td>Boolean</td><td>-</td><td>false</td></tr><tr><td>options</td><td>表格配置项</td><td>Object</td><td>-</td><td>-</td></tr><tr><td>showPagination</td><td>是否显示分页</td><td>Boolean</td><td>-</td><td>true</td></tr></tbody></table><h3 id="点击事件" tabindex="-1">点击事件 <a class="header-anchor" href="#点击事件" aria-label="Permalink to &quot;点击事件&quot;">​</a></h3><ul><li>@rowClick: 行点击事件，传递当前点击的行数据。<br></li><li>@rowSelected: 行选中事件，传递当前选中的行数据。<br></li></ul><h3 id="方法" tabindex="-1">方法 <a class="header-anchor" href="#方法" aria-label="Permalink to &quot;方法&quot;">​</a></h3><ul><li>setCurrentRow(rowKey, rowValue): 根据指定的行键和值设置对应行为选中状态。<br></li><li>clearSelection(): 清除所有选中的行。<br></li></ul>`,21);function F(a,b,m,B,D,f){const t=e("my-component");return k(),p("div",null,[r,i("p",null,[s("通过props属性向子组件传递数据，子组件通过props接收数据进行渲染。"),o,s(" 例如在父组件中使用"),n(t,{propName:a.data},null,8,["propName"]),s("，在子组件中通过props: ['propName']接收数据。"),E]),c,i("p",null,[s("在子组件中通过$emit()方法触发事件，父组件通过监听事件的方式响应子组件的行为。"),g,s(" 例如在子组件中使用this.$emit('eventName', eventData)，"),y,s(" 在父组件中使用"),n(t,{onEventName:a.handleEvent},null,8,["onEventName"]),s("。")]),u])}const A=h(d,[["render",F]]);export{C as __pageData,A as default};
