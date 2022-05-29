import{_ as n,c as s,o as a,b as t}from"./app.96e179db.js";const g='{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"ts/index.md"}',p={},o=t(`<ol><li>\u7D22\u5F15\u8BBF\u95EE\u7C7B\u578B<div class="language-js"><pre><code>type Person <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">age</span><span class="token operator">:</span> number<span class="token punctuation">;</span> name<span class="token operator">:</span> string<span class="token punctuation">;</span> alive<span class="token operator">:</span> boolean <span class="token punctuation">}</span><span class="token punctuation">;</span>
type Age <span class="token operator">=</span> Person<span class="token punctuation">[</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// type Age = number</span>
</code></pre></div></li><li>\u4F7F\u7528\u8054\u5408\u3001keyof \u6216\u8005\u5176\u4ED6\u7C7B\u578B<div class="language-js"><pre><code>type <span class="token constant">I1</span> <span class="token operator">=</span> Person<span class="token punctuation">[</span><span class="token string">&quot;age&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>  
<span class="token comment">// type I1 = string | number</span>
type <span class="token constant">I2</span> <span class="token operator">=</span> Person<span class="token punctuation">[</span>keyof Person<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// type I2 = string | number | boolean</span>
type AliveOrName <span class="token operator">=</span> <span class="token string">&quot;alive&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">;</span>
type <span class="token constant">I3</span> <span class="token operator">=</span> Person<span class="token punctuation">[</span>AliveOrName<span class="token punctuation">]</span><span class="token punctuation">;</span>  
<span class="token comment">// type I3 = string | boolean</span>
</code></pre></div></li><li>\u4F7F\u7528 number \u6765\u83B7\u53D6\u6570\u7EC4\u5143\u7D20\u7684\u7C7B\u578B\uFF0C\u7ED3\u5408 typeof \u53EF\u4EE5\u65B9\u4FBF\u7684\u6355\u83B7\u6570\u7EC4\u5B57\u9762\u91CF\u7684\u5143\u7D20\u7C7B\u578B<div class="language-js"><pre><code><span class="token keyword">const</span> MyArray <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Alice&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">15</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Bob&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">23</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Eve&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">38</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
type Person <span class="token operator">=</span> <span class="token keyword">typeof</span> MyArray<span class="token punctuation">[</span>number<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// type Person = {</span>
<span class="token comment">//    name: string;</span>
<span class="token comment">//    age: number;</span>
<span class="token comment">// }</span>

type Age <span class="token operator">=</span> <span class="token keyword">typeof</span> MyArray<span class="token punctuation">[</span>number<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>  
<span class="token comment">// type Age = number</span>


<span class="token comment">// \u4F7F\u7528\u573A\u666F</span>
<span class="token keyword">const</span> <span class="token constant">APP</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;TaoBao&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Tmall&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Alipay&#39;</span><span class="token punctuation">]</span> <span class="token keyword">as</span> <span class="token keyword">const</span><span class="token punctuation">;</span>
<span class="token comment">// const APP: readonly [&quot;TaoBao&quot;, &quot;Tmall&quot;, &quot;Alipay&quot;]</span>
type app <span class="token operator">=</span> <span class="token keyword">typeof</span> <span class="token constant">APP</span><span class="token punctuation">[</span>number<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// type app = &quot;TaoBao&quot; | &quot;Tmall&quot; | &quot;Alipay&quot;</span>
</code></pre></div></li><li>\u4F5C\u4E3A\u7D22\u5F15\u7684\u53EA\u80FD\u662F\u7C7B\u578B\uFF0C\u4E0D\u80FD\u4F7F\u7528const\u521B\u5EFA\u4E00\u4E2A\u53D8\u91CF\u5F15\u7528\uFF0C\u4F46\u53EF\u4EE5\u4F7F\u7528\u7C7B\u578B\u522B\u540D<div class="language-js"><pre><code><span class="token keyword">const</span> key <span class="token operator">=</span> <span class="token string">&quot;age&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// error</span>
type Age <span class="token operator">=</span> Person<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>

type key <span class="token operator">=</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">;</span>
type Age <span class="token operator">=</span> Person<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre></div></li></ol>`,1),e=[o];function c(l,r,u,k,i,y){return a(),s("div",null,e)}var d=n(p,[["render",c]]);export{g as __pageData,d as default};
