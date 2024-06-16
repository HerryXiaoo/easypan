import{_ as a,c as s,o as n,a5 as e}from"./chunks/framework.C3zm5dwq.js";const _=JSON.parse('{"title":"通用型方法","description":"","frontmatter":{},"headers":[],"relativePath":"utils.md","filePath":"utils.md"}'),p={name:"utils.md"},t=e(`<h1 id="通用型方法" tabindex="-1">通用型方法 <a class="header-anchor" href="#通用型方法" aria-label="Permalink to &quot;通用型方法&quot;">​</a></h1><p>通用性组件是针对特定场景或功能需求而设计的组件，可以提高代码复用性和可维护性。<br></p><h2 id="如何封装一个方法" tabindex="-1">如何封装一个方法？ <a class="header-anchor" href="#如何封装一个方法" aria-label="Permalink to &quot;如何封装一个方法？&quot;">​</a></h2><p>在 @/utils 目录下，创建 .js 文件，再创建 index.js 文件。<br> 在 index.js 文件中，通过 export default 导出方法。<br> 在其它 Vue 页面，导入并使用（vue3中直接引入路径即可，）。代码如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>    // utils.js</span></span>
<span class="line"><span>// 定义一个工具函数</span></span>
<span class="line"><span>export function greet(name) {</span></span>
<span class="line"><span>  return \`Hello, \${name}!\`;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // index.js</span></span>
<span class="line"><span>// 导入工具函数</span></span>
<span class="line"><span>import { greet } from &#39;@/utils&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 使用工具函数</span></span>
<span class="line"><span>console.log(greet(&#39;John&#39;)); // 输出：Hello, John!</span></span></code></pre></div><h2 id="confirm" tabindex="-1">Confirm <a class="header-anchor" href="#confirm" aria-label="Permalink to &quot;Confirm {#confirm}&quot;">​</a></h2><p>基于它<code>element-plus</code>库的<code>ElMessageBox</code>组件封装的确认框。<br> 接受两个参数：message和okfun。 点击确定就会执行okfun函数，反之无操作。</p><h3 id="如何使用" tabindex="-1">如何使用 <a class="header-anchor" href="#如何使用" aria-label="Permalink to &quot;如何使用&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span> proxy.Confirm(&#39;你确定要退出吗&#39;,async( ) =&gt; {</span></span>
<span class="line"><span>    let result = await proxy.Request({</span></span>
<span class="line"><span>    url:api.logout,</span></span>
<span class="line"><span>  });</span></span></code></pre></div>`,9),l=[t];function i(o,c,r,d,h,u){return n(),s("div",null,l)}const f=a(p,[["render",i]]);export{_ as __pageData,f as default};
