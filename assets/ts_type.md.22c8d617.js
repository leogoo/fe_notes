import{_ as n,c as s,o as a,b as t}from"./app.96e179db.js";const m='{"title":"\u5B57\u9762\u91CF\u7C7B\u578B","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B57\u9762\u91CF\u7C7B\u578B","slug":"\u5B57\u9762\u91CF\u7C7B\u578B"}],"relativePath":"ts/type.md"}',p={},o=t(`<h2 id="\u5B57\u9762\u91CF\u7C7B\u578B" tabindex="-1">\u5B57\u9762\u91CF\u7C7B\u578B <a class="header-anchor" href="#\u5B57\u9762\u91CF\u7C7B\u578B" aria-hidden="true">#</a></h2><blockquote><p>\u9664\u4E86\u5E38\u89C1\u7684\u7C7B\u578B string \u548C number \uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u5C06\u7C7B\u578B\u58F0\u660E\u4E3A<strong>\u66F4\u5177\u4F53</strong>\u7684\u6570\u5B57\u6216\u8005\u5B57\u7B26\u4E32</p></blockquote><ol><li>\u5B57\u9762\u91CF\u7C7B\u578B\u672C\u8EAB\u5E76\u6CA1\u6709\u4EC0\u4E48\u592A\u5927\u7528<div class="language-js"><pre><code><span class="token keyword">let</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token string">&quot;hello&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// OK</span>
x <span class="token operator">=</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// Type &#39;&quot;howdy&quot;&#39; is not assignable to type &#39;&quot;hello&quot;&#39;.</span>
x <span class="token operator">=</span> <span class="token string">&quot;howdy&quot;</span><span class="token punctuation">;</span>
</code></pre></div></li><li>\u7ED3\u5408\u8054\u5408\u7C7B\u578B<div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">printText</span><span class="token punctuation">(</span>s<span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">alignment</span><span class="token operator">:</span> <span class="token string">&quot;left&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;right&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;center&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
<span class="token function">printText</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, world&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;left&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">printText</span><span class="token punctuation">(</span><span class="token string">&quot;G&#39;day, mate&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;middle&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Argument of type &#39;&quot;middle&quot;&#39; is not assignable to parameter of type &#39;&quot;left&quot; | &quot;right&quot; | &quot;center&quot;&#39;.</span>
</code></pre></div></li><li>\u6570\u5B57\u5B57\u9762\u91CF\u7C7B\u578B<div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">compare</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">a</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">|</span> <span class="token number">0</span> <span class="token operator">|</span> <span class="token number">1</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a <span class="token operator">===</span> b <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> a <span class="token operator">&gt;</span> b <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></li><li>\u8DDF\u975E\u5B57\u9762\u91CF\u7C7B\u578B\u8054\u5408<div class="language-js"><pre><code><span class="token keyword">interface</span> <span class="token class-name">Options</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">configure</span><span class="token punctuation">(</span>x<span class="token operator">:</span> Options <span class="token operator">|</span> <span class="token string">&quot;auto&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
<span class="token function">configure</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">configure</span><span class="token punctuation">(</span><span class="token string">&quot;auto&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">configure</span><span class="token punctuation">(</span><span class="token string">&quot;automatic&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Argument of type &#39;&quot;automatic&quot;&#39; is not assignable to parameter of type &#39;Options | &quot;auto&quot;&#39;.</span>
</code></pre></div></li><li>\u5B57\u9762\u91CF\u63A8\u65AD<div class="language-js"><pre><code><span class="token comment">// obj.counter\u88AB\u63A8\u65AD\u4E3Anumber\uFF0C name\u88AB\u63A8\u65AD\u4E3Astring</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">counter</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;tom&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>someCondition<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  obj<span class="token punctuation">.</span>counter <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></li><li>as const \u628A\u6574\u4E2A\u5BF9\u8C61\u8F6C\u4E3A\u4E00\u4E2A\u7C7B\u578B\u5B57\u9762\u91CF\uFF0C\u53EF\u4EE5\u786E\u4FDD\u6240\u6709\u7684\u5C5E\u6027\u90FD\u88AB\u8D4B\u4E88\u4E00\u4E2A\u5B57\u9762\u91CF\u7C7B\u578B<div class="language-js"><pre><code>declare <span class="token keyword">function</span> <span class="token function">handleRequest</span><span class="token punctuation">(</span>url<span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&quot;GET&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;POST&quot;</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> req <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;https://example.com&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&quot;GET&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">handleRequest</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>url<span class="token punctuation">,</span> req<span class="token punctuation">.</span>method<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Argument of type &#39;string&#39; is not assignable to parameter of type &#39;&quot;GET&quot; | &quot;POST&quot;&#39;.</span>

<span class="token comment">// \u65B9\u6CD5\u4E00</span>
<span class="token keyword">const</span> req <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;https://example.com&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&quot;GET&quot;</span> <span class="token keyword">as</span> <span class="token string">&quot;GET&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">handleRequest</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>url<span class="token punctuation">,</span> req<span class="token punctuation">.</span>method <span class="token keyword">as</span> <span class="token string">&quot;GET&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u65B9\u6CD5\u4E8C</span>
<span class="token keyword">const</span> req <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;https://example.com&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&quot;GET&quot;</span> <span class="token punctuation">}</span> <span class="token keyword">as</span> <span class="token keyword">const</span><span class="token punctuation">;</span>
<span class="token function">handleRequest</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>url<span class="token punctuation">,</span> req<span class="token punctuation">.</span>method<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></li></ol><h4 id="\u975E\u7A7A\u65AD\u8A00\u64CD\u4F5C\u7B26\uFF08\u540E\u7F00-\uFF09" tabindex="-1">\u975E\u7A7A\u65AD\u8A00\u64CD\u4F5C\u7B26\uFF08\u540E\u7F00 !\uFF09 <a class="header-anchor" href="#\u975E\u7A7A\u65AD\u8A00\u64CD\u4F5C\u7B26\uFF08\u540E\u7F00-\uFF09" aria-hidden="true">#</a></h4><p>\u53EA\u6709\u5F53\u4F60\u660E\u786E\u7684\u77E5\u9053\u8FD9\u4E2A\u503C\u4E0D\u53EF\u80FD\u662F null \u6216\u8005 undefined \u65F6\u624D\u4F7F\u7528 ! <code>js function liveDangerously(x?: number | null) { // No error console.log(x!.toFixed()); } </code></p><h4 id="\u4E0D\u5E38\u89C1\u7684\u539F\u59CB\u7C7B\u578B" tabindex="-1">\u4E0D\u5E38\u89C1\u7684\u539F\u59CB\u7C7B\u578B <a class="header-anchor" href="#\u4E0D\u5E38\u89C1\u7684\u539F\u59CB\u7C7B\u578B" aria-hidden="true">#</a></h4><ol><li>bigInt</li><li>symbol</li></ol><h4 id="\u5176\u4ED6\u7C7B\u578B" tabindex="-1">\u5176\u4ED6\u7C7B\u578B <a class="header-anchor" href="#\u5176\u4ED6\u7C7B\u578B" aria-hidden="true">#</a></h4><ol><li>void\u8868\u793A\u4E00\u4E2A\u51FD\u6570\u5E76\u4E0D\u4F1A\u8FD4\u56DE\u4EFB\u4F55\u503C\uFF0C\u5F53\u51FD\u6570\u5E76\u6CA1\u6709\u4EFB\u4F55\u8FD4\u56DE\u503C\uFF0C\u6216\u8005\u8FD4\u56DE\u4E0D\u4E86\u660E\u786E\u7684\u503C\u7684\u65F6\u5019\uFF0C\u5C31\u5E94\u8BE5\u7528\u8FD9\u79CD\u7C7B\u578B</li><li>object \u53EF\u4EE5\u8868\u793A\u4EFB\u4F55\u4E0D\u662F\u539F\u59CB\u7C7B\u578B\uFF08primitive\uFF09\u7684\u503C (string\u3001number\u3001bigint\u3001boolean\u3001symbol\u3001null\u3001undefined</li><li>unknown \u7C7B\u578B\u53EF\u4EE5\u8868\u793A\u4EFB\u4F55\u503C\u3002\u6709\u70B9\u7C7B\u4F3C\u4E8E any\uFF0C\u4F46\u662F\u66F4\u5B89\u5168\uFF0C\u56E0\u4E3A\u5BF9 unknown \u7C7B\u578B\u7684\u503C\u505A\u4EFB\u4F55\u4E8B\u60C5\u90FD\u662F\u4E0D\u5408\u6CD5\u7684</li><li>never \u7C7B\u578B\u8868\u793A\u4E00\u4E2A\u503C\u4E0D\u4F1A\u518D\u88AB\u89C2\u5BDF\u5230 <ol><li>\u4F5C\u4E3A\u51FD\u6570\u8FD4\u56DE\u65F6\uFF0C\u8868\u793A\u51FD\u6570\u4E00\u5B9A\u4F1A\u8FD4\u56DE\u5F02\u5E38</li><li>\u786E\u5B9A\u5728\u8054\u5408\u7C7B\u578B\u4E2D\u5DF2\u7ECF\u6CA1\u6709\u53EF\u80FD\u662F\u5176\u4E2D\u7684\u7C7B\u578B\u7684\u65F6\u5019\uFF0C\u4E5F\u4F1A\u8FD4\u56DEnever<div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">x</span><span class="token operator">:</span> string <span class="token operator">|</span> number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> x <span class="token operator">===</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// do something</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> x <span class="token operator">===</span> <span class="token string">&quot;number&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// do something else</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        x<span class="token punctuation">;</span> <span class="token comment">// has type &#39;never&#39;!</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre></div></li></ol></li><li>Function\uFF0C\u4E00\u4E2A\u8FD4\u56DEany\u7684\u51FD\u6570\u7C7B\u578B</li></ol>`,9),e=[o];function c(l,r,u,i,k,d){return a(),s("div",null,e)}var y=n(p,[["render",c]]);export{m as __pageData,y as default};
