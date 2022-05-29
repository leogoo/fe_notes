import{_ as s,c as a,o as n,b as t}from"./app.96e179db.js";const _='{"title":"ts\u4E2D\u7684\u6A21\u5757","description":"","frontmatter":{},"headers":[{"level":3,"title":"ts\u4E2D\u7684\u6A21\u5757","slug":"ts\u4E2D\u7684\u6A21\u5757"}],"relativePath":"ts/module.md"}',p={},o=t(`<h3 id="ts\u4E2D\u7684\u6A21\u5757" tabindex="-1">ts\u4E2D\u7684\u6A21\u5757 <a class="header-anchor" href="#ts\u4E2D\u7684\u6A21\u5757" aria-hidden="true">#</a></h3><ol><li>\u4EFB\u4F55\u5305\u542B\u4E86\u4E00\u4E2A\u9876\u5C42 import \u6216\u8005 export \u7684\u6587\u4EF6\u4F1A\u88AB\u8BA4\u4E3A\u662F\u4E00\u4E2A\u6A21\u5757\uFF0C\u811A\u672C\u7684\u53D8\u91CF\u662F\u5168\u5C40\u7684<div class="language-js"><pre><code><span class="token comment">// \u5C06\u811A\u672C\u53D8\u6210\u6A21\u5757</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div></li><li>\u63A5\u53D7\u6240\u6709\u7684\u5BFC\u51FA\u5BF9\u8C61\uFF0C\u7136\u540E\u4F7F\u7528 * as name \u628A\u5B83\u4EEC\u653E\u5165\u4E00\u4E2A\u5355\u72EC\u7684\u547D\u540D\u7A7A\u95F4<div class="language-js"><pre><code><span class="token keyword">export</span> <span class="token keyword">const</span> pi <span class="token operator">=</span> <span class="token number">3.14</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> math <span class="token keyword">from</span> <span class="token string">&quot;./maths.js&quot;</span><span class="token punctuation">;</span>
math<span class="token punctuation">.</span>pi
math<span class="token punctuation">.</span>default
</code></pre></div></li><li>\u5BFC\u5165\u7C7B\u578B<div class="language-js"><pre><code><span class="token keyword">export</span> type Cat <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">breed</span><span class="token operator">:</span> string<span class="token punctuation">;</span> yearOfBirth<span class="token operator">:</span> number <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> type <span class="token punctuation">{</span> Cat<span class="token punctuation">,</span> Dog <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./animal.js&quot;</span><span class="token punctuation">;</span>
</code></pre></div></li><li>\u5185\u7F6E\u7C7B\u578B\u5BFC\u5165<div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createCatName<span class="token punctuation">,</span> type Cat<span class="token punctuation">,</span> type Dog <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./animal.js&quot;</span><span class="token punctuation">;</span>
</code></pre></div></li></ol>`,2),e=[o];function c(l,r,i,u,k,d){return n(),a("div",null,e)}var y=s(p,[["render",c]]);export{_ as __pageData,y as default};
