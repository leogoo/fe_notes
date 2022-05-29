import{_ as n,c as s,o as a,b as p}from"./app.96e179db.js";const d='{"title":"keyof","description":"","frontmatter":{},"headers":[{"level":2,"title":"keyof","slug":"keyof"},{"level":2,"title":"typeof","slug":"typeof"}],"relativePath":"ts/operator.md"}',t={},o=p(`<h2 id="keyof" tabindex="-1">keyof <a class="header-anchor" href="#keyof" aria-hidden="true">#</a></h2><ol><li>keyof \u64CD\u4F5C\u7B26\uFF0C\u4F1A\u8FD4\u56DE\u8BE5\u5BF9\u8C61\u5C5E\u6027\u540D\u7EC4\u6210\u7684\u4E00\u4E2A\u5B57\u7B26\u4E32\u6216\u8005\u6570\u5B57\u5B57\u9762\u91CF\u7684\u8054\u5408<div class="language-js"><pre><code>type Point <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> number<span class="token punctuation">;</span> y<span class="token operator">:</span> number <span class="token punctuation">}</span><span class="token punctuation">;</span>
type <span class="token constant">P</span> <span class="token operator">=</span> keyof Point<span class="token punctuation">;</span> <span class="token comment">// x | y</span>
</code></pre></div></li><li>\u5BF9\u8C61\u7684\u5C5E\u6027\u540D\u4F1A\u88AB\u5F3A\u5236\u8F6C\u4E3A\u4E00\u4E2A\u5B57\u7B26\u4E32<div class="language-js"><pre><code>type Arrayish <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>n<span class="token operator">:</span> number<span class="token punctuation">]</span><span class="token operator">:</span> unknown <span class="token punctuation">}</span><span class="token punctuation">;</span>
type <span class="token constant">A</span> <span class="token operator">=</span> keyof Arrayish<span class="token punctuation">;</span>
<span class="token comment">// type A = number</span>

type Mapish <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>k<span class="token operator">:</span> string<span class="token punctuation">]</span><span class="token operator">:</span> boolean <span class="token punctuation">}</span><span class="token punctuation">;</span>
type <span class="token constant">M</span> <span class="token operator">=</span> keyof Mapish<span class="token punctuation">;</span>
<span class="token comment">// type M = string | number</span>
</code></pre></div></li><li>\u7C7B\u548C\u63A5\u53E3<div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;test&quot;</span>
<span class="token punctuation">}</span>
type result <span class="token operator">=</span> keyof Person<span class="token punctuation">;</span>
<span class="token comment">// type result = &quot;name&quot;</span>

<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">:</span> string <span class="token operator">=</span> <span class="token string">&quot;test&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
type result <span class="token operator">=</span> keyof Person<span class="token punctuation">;</span>
<span class="token comment">// type result = 1</span>

<span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

type result <span class="token operator">=</span> keyof Person<span class="token punctuation">;</span>
<span class="token comment">// type result = &quot;name&quot;</span>
</code></pre></div></li></ol><h2 id="typeof" tabindex="-1">typeof <a class="header-anchor" href="#typeof" aria-hidden="true">#</a></h2><ol><li>\u7528\u4E8E\u83B7\u53D6\u4E00\u4E2A\u53D8\u91CF\u6216\u8005\u5C5E\u6027\u7684\u7C7B\u578B<div class="language-js"><pre><code><span class="token keyword">let</span> s <span class="token operator">=</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token literal-property property">n</span><span class="token operator">:</span> <span class="token keyword">typeof</span> s<span class="token punctuation">;</span>
<span class="token comment">// let n: string</span>
</code></pre></div></li><li>\u83B7\u51FD\u6570\u7684\u7C7B\u578B<div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
type <span class="token constant">P</span> <span class="token operator">=</span> ReturnType<span class="token operator">&lt;</span><span class="token keyword">typeof</span> f<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token comment">// type P = {</span>
<span class="token comment">//    x: number;</span>
<span class="token comment">//    y: number;</span>
<span class="token comment">// }</span>
</code></pre></div></li><li>\u53EA\u6709\u5BF9\u6807\u8BC6\u7B26\uFF08\u6BD4\u5982\u53D8\u91CF\u540D\uFF09\u6216\u8005\u4ED6\u4EEC\u7684\u5C5E\u6027\u4F7F\u7528 typeof \u624D\u662F\u5408\u6CD5\u7684</li><li>\u5BF9\u5BF9\u8C61\u4F7F\u7528<div class="language-js"><pre><code><span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;kevin&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token string">&quot;18&quot;</span> <span class="token punctuation">}</span>
type Kevin <span class="token operator">=</span> <span class="token keyword">typeof</span> person<span class="token punctuation">;</span>
<span class="token comment">// type Kevin = {</span>
<span class="token comment">// 		name: string;</span>
<span class="token comment">// 		age: string;</span>
<span class="token comment">// }</span>
</code></pre></div></li><li>\u5BF9\u51FD\u6570\u4F7F\u7528<div class="language-js"><pre><code><span class="token keyword">function</span> identity<span class="token operator">&lt;</span>Type<span class="token operator">&gt;</span><span class="token punctuation">(</span>arg<span class="token operator">:</span> Type<span class="token punctuation">)</span><span class="token operator">:</span> Type <span class="token punctuation">{</span>
    <span class="token keyword">return</span> arg<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
type result <span class="token operator">=</span> <span class="token keyword">typeof</span> identity<span class="token punctuation">;</span>
<span class="token comment">// type result = &lt;Type&gt;(arg: Type) =&gt; Type</span>
</code></pre></div></li><li>\u5BF9 enum \u4F7F\u7528<div class="language-js"><pre><code><span class="token keyword">enum</span> UserResponse <span class="token punctuation">{</span>
    No <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
    Yes <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u7F16\u8BD1\u7ED3\u679C</span>
<span class="token keyword">var</span> UserResponse<span class="token punctuation">;</span>
<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">UserResponse</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    UserResponse<span class="token punctuation">[</span>UserResponse<span class="token punctuation">[</span><span class="token string">&quot;No&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;No&quot;</span><span class="token punctuation">;</span>
    UserResponse<span class="token punctuation">[</span>UserResponse<span class="token punctuation">[</span><span class="token string">&quot;Yes&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;Yes&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>UserResponse <span class="token operator">||</span> <span class="token punctuation">(</span>UserResponse <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>UserResponse<span class="token punctuation">)</span>
<span class="token comment">// [LOG]: {</span>
<span class="token comment">//   &quot;0&quot;: &quot;No&quot;,</span>
<span class="token comment">//   &quot;1&quot;: &quot;Yes&quot;,</span>
<span class="token comment">//   &quot;No&quot;: 0,</span>
<span class="token comment">//   &quot;Yes&quot;: 1</span>
<span class="token comment">// } </span>

type result <span class="token operator">=</span> <span class="token keyword">typeof</span> UserResponse<span class="token punctuation">;</span>
<span class="token comment">// {</span>
<span class="token comment">//	&quot;No&quot;: number,</span>
<span class="token comment">//  &quot;YES&quot;: number</span>
<span class="token comment">// }</span>
type result <span class="token operator">=</span> keyof <span class="token keyword">typeof</span> UserResponse<span class="token punctuation">;</span>
<span class="token comment">// type result = &quot;No&quot; | &quot;Yes&quot;</span>
</code></pre></div></li></ol>`,4),e=[o];function c(l,r,u,k,i,y){return a(),s("div",null,e)}var g=n(t,[["render",c]]);export{d as __pageData,g as default};
