import{_ as n,c as s,o as a,b as p}from"./app.96e179db.js";const y='{"title":"\u7C7B\u6210\u5458","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u7C7B\u6210\u5458","slug":"\u7C7B\u6210\u5458"},{"level":3,"title":"\u7C7B\u7EE7\u627F","slug":"\u7C7B\u7EE7\u627F"},{"level":3,"title":"\u6210\u5458\u53EF\u89C1\u6027","slug":"\u6210\u5458\u53EF\u89C1\u6027"},{"level":3,"title":"\u9759\u6001\u6210\u5458","slug":"\u9759\u6001\u6210\u5458"},{"level":3,"title":"\u7C7B\u9759\u6001\u5757","slug":"\u7C7B\u9759\u6001\u5757"},{"level":3,"title":"\u6CDB\u578B\u7C7B","slug":"\u6CDB\u578B\u7C7B"},{"level":3,"title":"\u7C7B\u8FD0\u884C\u65F6\u7684 this","slug":"\u7C7B\u8FD0\u884C\u65F6\u7684-this"},{"level":3,"title":"\u53C2\u6570\u5C5E\u6027","slug":"\u53C2\u6570\u5C5E\u6027"},{"level":3,"title":"\u7C7B\u8868\u8FBE\u5F0F","slug":"\u7C7B\u8868\u8FBE\u5F0F"},{"level":3,"title":"\u62BD\u8C61\u7C7B\u548C\u6210\u5458","slug":"\u62BD\u8C61\u7C7B\u548C\u6210\u5458"},{"level":3,"title":"\u7C7B\u4E4B\u95F4\u7684\u5173\u7CFB","slug":"\u7C7B\u4E4B\u95F4\u7684\u5173\u7CFB"}],"relativePath":"ts/class.md"}',t={},o=p(`<h3 id="\u7C7B\u6210\u5458" tabindex="-1">\u7C7B\u6210\u5458 <a class="header-anchor" href="#\u7C7B\u6210\u5458" aria-hidden="true">#</a></h3><ol><li>\u5B57\u6BB5<div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">x</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
    <span class="token literal-property property">y</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u521D\u59CB\u503C</span>
<span class="token keyword">class</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
    x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    y <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><ol><li>strictPropertyInitialization\u9009\u9879\u63A7\u5236\u4E86\u7C7B\u5B57\u6BB5\u662F\u5426\u9700\u8981\u5728\u6784\u9020\u51FD\u6570\u91CC\u521D\u59CB\u5316<div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">GoodGreeter</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
        
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u4E0D\u5728\u6784\u9020\u51FD\u6570\u4E2D\u521D\u59CB\u5316\uFF0C\u53EF\u4EE5\u4F7F\u7528\u660E\u786E\u8D4B\u503C\u65AD\u8A00\u64CD\u4F5C\u7B26</span>
<span class="token keyword">class</span> <span class="token class-name">OKGreeter</span> <span class="token punctuation">{</span>
    <span class="token comment">// Not initialized, but no error</span>
    name<span class="token operator">!</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></li><li>\u5B57\u6BB5\u53EF\u4EE5\u914D\u7F6Ereadonly</li></ol></li><li>\u6784\u9020\u51FD\u6570</li><li>\u65B9\u6CD5</li><li>getter\u3001setter <ol><li>get \u5B58\u5728\u800C set \u4E0D\u5B58\u5728\uFF0C\u5C5E\u6027\u4F1A\u88AB\u81EA\u52A8\u8BBE\u7F6E\u4E3A readonly</li><li>setter \u53C2\u6570\u7684\u7C7B\u578B\u6CA1\u6709\u6307\u5B9A\uFF0C\u5B83\u4F1A\u88AB\u63A8\u65AD\u4E3A getter \u7684\u8FD4\u56DE\u7C7B\u578B</li><li>getters \u548C setters \u5FC5\u987B\u6709\u76F8\u540C\u7684\u6210\u5458\u53EF\u89C1\u6027</li><li>\u4ECE TypeScript 4.3 \u8D77\uFF0C\u5B58\u53D6\u5668\u5728\u8BFB\u53D6\u548C\u8BBE\u7F6E\u7684\u65F6\u5019\u53EF\u4EE5\u4F7F\u7528\u4E0D\u540C\u7684\u7C7B\u578B</li></ol><div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">Thing</span> <span class="token punctuation">{</span>
    _size <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token comment">// \u6CE8\u610F\u8FD9\u91CC\u8FD4\u56DE\u7684\u662F number \u7C7B\u578B</span>
    <span class="token keyword">get</span> <span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> number <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_size<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u6CE8\u610F\u8FD9\u91CC\u5141\u8BB8\u4F20\u5165\u7684\u662F string | number | boolean \u7C7B\u578B</span>
    <span class="token keyword">set</span> <span class="token function">size</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">value</span><span class="token operator">:</span> string <span class="token operator">|</span> number <span class="token operator">|</span> boolean</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token function">Number</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// Don&#39;t allow NaN, Infinity, etc</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>Number<span class="token punctuation">.</span><span class="token function">isFinite</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>_size <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>_size <span class="token operator">=</span> num<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></li><li>\u7D22\u5F15\u7B7E\u540D,\u548C\u5BF9\u8C61\u7C7B\u578B\u7684\u7D22\u5F15\u7B7E\u540D\u662F\u4E00\u6837<div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>s<span class="token operator">:</span> string<span class="token punctuation">]</span><span class="token operator">:</span> boolean <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">s</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> boolean<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token function">check</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">s</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">[</span>s<span class="token punctuation">]</span> <span class="token keyword">as</span> boolean<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></li></ol><h3 id="\u7C7B\u7EE7\u627F" tabindex="-1">\u7C7B\u7EE7\u627F <a class="header-anchor" href="#\u7C7B\u7EE7\u627F" aria-hidden="true">#</a></h3><ol><li>implements <ol><li>\u4F7F\u7528 implements \u8BED\u53E5\u68C0\u67E5\u4E00\u4E2A\u7C7B\u662F\u5426\u6EE1\u8DB3\u4E00\u4E2A\u7279\u5B9A\u7684 interface<div class="language-js"><pre><code><span class="token keyword">interface</span> <span class="token class-name">Pingable</span> <span class="token punctuation">{</span>
    <span class="token function">ping</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Sonar</span> <span class="token keyword">implements</span> <span class="token class-name">Pingable</span> <span class="token punctuation">{</span>
    <span class="token comment">// ts\u62A5\u9519</span>
    <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;ping!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></li><li>\u5B9E\u73B0\u591A\u4E2A\u63A5\u53E3\uFF0C\u6BD4\u5982 class C implements A, B {}</li><li>\u5E76\u4E0D\u4F1A\u6539\u53D8\u7C7B\u7684\u7C7B\u578B\u6216\u8005\u65B9\u6CD5\u7684\u7C7B\u578B</li><li>\u5B9E\u73B0\u4E00\u4E2A\u6709\u53EF\u9009\u5C5E\u6027\u7684\u63A5\u53E3\uFF0C\u5E76\u4E0D\u4F1A\u521B\u5EFA\u8FD9\u4E2A\u5C5E\u6027<div class="language-js"><pre><code><span class="token keyword">interface</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">x</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
    y<span class="token operator">?</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">C</span> <span class="token keyword">implements</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
    x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> c <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">C</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
c<span class="token punctuation">.</span>y <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token comment">// Property &#39;y&#39; does not exist on type &#39;C&#39;.</span>
</code></pre></div></li></ol></li><li>extends <ol><li><p>extend \u4E00\u4E2A\u57FA\u7C7B\u3002\u4E00\u4E2A\u6D3E\u751F\u7C7B\u6709\u57FA\u7C7B\u6240\u6709\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0C\u8FD8\u53EF\u4EE5\u5B9A\u4E49\u989D\u5916\u7684\u6210\u5458</p><div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
    <span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Moving along!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
    <span class="token function">woof</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">times</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> times<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;woof!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> d <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Base class method</span>
d<span class="token punctuation">.</span><span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Derived class method</span>
d<span class="token punctuation">.</span><span class="token function">woof</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></li><li><p>ts\u5F3A\u5236\u8981\u6C42\u6D3E\u751F\u7C7B\u603B\u662F\u5B83\u7684\u57FA\u7C7B\u7684\u5B50\u7C7B\u578B,\u6D3E\u751F\u7C7B\u9700\u8981\u9075\u5FAA\u7740\u5B83\u7684\u57FA\u7C7B\u7684\u5B9E\u73B0</p><div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">Base</span> <span class="token punctuation">{</span>
    <span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, world!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Derived</span> <span class="token keyword">extends</span> <span class="token class-name">Base</span> <span class="token punctuation">{</span>
    <span class="token function">greet</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token operator">?</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>name <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Hello, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> d <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Derived</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
d<span class="token punctuation">.</span><span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
d<span class="token punctuation">.</span><span class="token function">greet</span><span class="token punctuation">(</span><span class="token string">&quot;reader&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u9519\u8BEF\u7684\u8986\u76D6</span>
<span class="token keyword">class</span> <span class="token class-name">Base</span> <span class="token punctuation">{</span>
    <span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, world!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Derived</span> <span class="token keyword">extends</span> <span class="token class-name">Base</span> <span class="token punctuation">{</span>
    <span class="token comment">// Make this parameter required</span>
    <span class="token function">greet</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">name</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Hello, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></li><li><p>\u901A\u8FC7\u4E00\u4E2A\u57FA\u7C7B\u5F15\u7528\u6307\u5411\u4E00\u4E2A\u6D3E\u751F\u7C7B\u5B9E\u4F8B\uFF0C\u8FD9\u662F\u975E\u5E38\u5E38\u89C1\u5E76\u5408\u6CD5\u7684</p><div class="language-js"><pre><code><span class="token keyword">const</span> <span class="token literal-property property">b</span><span class="token operator">:</span> Base <span class="token operator">=</span> d<span class="token punctuation">;</span>
b<span class="token punctuation">.</span><span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></li><li><p>\u521D\u59CB\u5316\u987A\u5E8F</p><p>\u7C7B\u521D\u59CB\u5316\u7684\u987A\u5E8F\uFF0C\u5C31\u50CF\u5728 JavaScript \u4E2D\u5B9A\u4E49\u7684\u90A3\u6837\uFF1A</p><ul><li>\u57FA\u7C7B\u5B57\u6BB5\u521D\u59CB\u5316</li><li>\u57FA\u7C7B\u6784\u9020\u51FD\u6570\u8FD0\u884C</li><li>\u6D3E\u751F\u7C7B\u5B57\u6BB5\u521D\u59CB\u5316</li><li>\u6D3E\u751F\u7C7B\u6784\u9020\u51FD\u6570\u8FD0\u884C</li></ul><div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">Base</span> <span class="token punctuation">{</span>
    name <span class="token operator">=</span> <span class="token string">&quot;base&quot;</span><span class="token punctuation">;</span>
    <span class="token comment">// \u57FA\u7C7B\u6784\u9020\u51FD\u6570\u53EA\u80FD\u770B\u5230\u5B83\u81EA\u5DF1\u7684 name \u7684\u503C</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;My name is &quot;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Derived</span> <span class="token keyword">extends</span> <span class="token class-name">Base</span> <span class="token punctuation">{</span>
    name <span class="token operator">=</span> <span class="token string">&quot;derived&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// Prints &quot;base&quot;, not &quot;derived&quot;</span>
<span class="token keyword">const</span> d <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Derived</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></li><li><p>\u7EE7\u627F\u5185\u7F6E\u7C7B\u578B</p><ol><li>Error\u3001Array \u7B49\u7C7B\u4F3C\u5185\u7F6E\u5BF9\u8C61\u7684\u6784\u9020\u51FD\u6570\uFF0C\u4F1A\u4F7F\u7528 ECMAScript 6 \u7684 new.target \u8C03\u6574\u539F\u578B\u94FE</li></ol></li></ol></li></ol><h3 id="\u6210\u5458\u53EF\u89C1\u6027" tabindex="-1">\u6210\u5458\u53EF\u89C1\u6027 <a class="header-anchor" href="#\u6210\u5458\u53EF\u89C1\u6027" aria-hidden="true">#</a></h3><ol><li>public</li><li>protected <ol><li>\u4EC5\u5BF9\u5B50\u7C7B\u53EF\u89C1<div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">Greeter</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, &quot;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">protected</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;hi&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">SpecialGreeter</span> <span class="token keyword">extends</span> <span class="token class-name">Greeter</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token function">howdy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Howdy, &quot;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> g <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SpecialGreeter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
g<span class="token punctuation">.</span><span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// OK</span>
g<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// error</span>
</code></pre></div></li><li>\u6D3E\u751F\u7C7B\u9700\u8981\u9075\u5FAA\u57FA\u7C7B\u7684\u5B9E\u73B0\uFF0C\u4F46\u662F\u4EE5\u9009\u62E9\u516C\u5F00\u62E5\u6709\u66F4\u591A\u80FD\u529B\u7684\u57FA\u7C7B\u5B50\u7C7B\u578B<div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">Base</span> <span class="token punctuation">{</span>
    <span class="token keyword">protected</span> m <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Derived</span> <span class="token keyword">extends</span> <span class="token class-name">Base</span> <span class="token punctuation">{</span>
    <span class="token comment">// No modifier, so default is &#39;public&#39;</span>
    m <span class="token operator">=</span> <span class="token number">15</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> d <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Derived</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>d<span class="token punctuation">.</span>m<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// OK</span>
</code></pre></div></li><li>\u4EA4\u53C9\u7B49\u7EA7\u53D7\u4FDD\u62A4\u6210\u5458\u8BBF\u95EE<div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">Base</span> <span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token literal-property property">x</span><span class="token operator">:</span> number <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Derived1</span> <span class="token keyword">extends</span> <span class="token class-name">Base</span> <span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token literal-property property">x</span><span class="token operator">:</span> number <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Derived2</span> <span class="token keyword">extends</span> <span class="token class-name">Base</span> <span class="token punctuation">{</span>
    <span class="token function">f1</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">other</span><span class="token operator">:</span> Derived2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        other<span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">f2</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">other</span><span class="token operator">:</span> Base</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        other<span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token comment">// Property &#39;x&#39; is protected and only accessible through an instance of class &#39;Derived2&#39;. This is an instance of class &#39;Base&#39;.</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></li></ol></li><li>private <ol><li>private \u6709\u70B9\u50CF protected\uFF0C\u4F46\u662F\u4E0D\u5141\u8BB8\u8BBF\u95EE\u6210\u5458\u53EA\u80FD\u5728\u7C7B\u91CC\u9762\u8BBF\u95EE<div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">Base</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Base</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Can&#39;t access from outside the class</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u5B50\u7C7B\u4E5F\u4E0D\u884C</span>
<span class="token keyword">class</span> <span class="token class-name">Derived</span> <span class="token keyword">extends</span> <span class="token class-name">Base</span> <span class="token punctuation">{</span>
    <span class="token function">showX</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Can&#39;t access in subclasses</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></li><li>\u901A\u8FC7\u65B9\u62EC\u53F7\u8BED\u6CD5\u8FDB\u884C\u8BBF\u95EE</li></ol></li></ol><h3 id="\u9759\u6001\u6210\u5458" tabindex="-1">\u9759\u6001\u6210\u5458 <a class="header-anchor" href="#\u9759\u6001\u6210\u5458" aria-hidden="true">#</a></h3><ol><li>\u57FA\u7840 <ol><li>\u9759\u6001\u6210\u5458\u8DDF\u7C7B\u5B9E\u4F8B\u6CA1\u6709\u5173\u7CFB\uFF0C\u53EF\u4EE5\u901A\u8FC7\u7C7B\u672C\u8EAB\u8BBF\u95EE\u5230<div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span> x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">static</span> <span class="token function">printX</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>MyClass<span class="token punctuation">.</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>MyClass<span class="token punctuation">.</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
MyClass<span class="token punctuation">.</span><span class="token function">printX</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></li><li>\u53EF\u4EE5\u4F7F\u7528public,protected,private\u4FEE\u6539\u7B26<div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>MyClass<span class="token punctuation">.</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Property &#39;x&#39; is private and only accessible within class &#39;MyClass&#39;.</span>
</code></pre></div></li><li>\u4E5F\u53EF\u4EE5\u88AB\u7EE7\u627F<div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">Base</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token function">getGreeting</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Hello world&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Derived</span> <span class="token keyword">extends</span> <span class="token class-name">Base</span> <span class="token punctuation">{</span>
    myGreeting <span class="token operator">=</span> Derived<span class="token punctuation">.</span><span class="token function">getGreeting</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></li></ol></li><li>\u7279\u6B8A\u9759\u6001\u540D\u79F0</li></ol><blockquote><p>\u51FD\u6570\u5C5E\u6027\u50CF name\u3001length\u3001call \u4E0D\u80FD\u88AB\u7528\u6765\u5B9A\u4E49 static \u6210\u5458</p></blockquote><h3 id="\u7C7B\u9759\u6001\u5757" tabindex="-1">\u7C7B\u9759\u6001\u5757 <a class="header-anchor" href="#\u7C7B\u9759\u6001\u5757" aria-hidden="true">#</a></h3><p>\u72EC\u7ACB\u7684\u4F5C\u7528\u57DF\uFF0C\u8FD8\u53EF\u4EE5\u5B8C\u5168\u83B7\u53D6\u7C7B\u4E2D\u7684\u5C5E\u6027\u548C\u65B9\u6CD5</p><pre><code>\`\`\`js
class Foo {
    static #count = 0;

    get count() {
        return Foo.#count;
    }
    static {
        try {
            const lastInstances = loadLastInstances();
            Foo.#count += lastInstances.length;
        }
        catch {}
    }
}
\`\`\`
</code></pre><h3 id="\u6CDB\u578B\u7C7B" tabindex="-1">\u6CDB\u578B\u7C7B <a class="header-anchor" href="#\u6CDB\u578B\u7C7B" aria-hidden="true">#</a></h3><ol><li>\u578B\u53C2\u6570\u7684\u63A8\u65AD\u8DDF\u51FD\u6570\u8C03\u7528\u662F\u540C\u6837\u7684\u65B9\u5F0F<div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">Box</span><span class="token operator">&lt;</span>Type<span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">contents</span><span class="token operator">:</span> Type<span class="token punctuation">;</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">value</span><span class="token operator">:</span> Type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>contents <span class="token operator">=</span> value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Box</span><span class="token punctuation">(</span><span class="token string">&quot;hello!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// const b: Box&lt;string&gt;</span>
</code></pre></div></li><li>\u6CDB\u578B\u7C7B\u7684\u9759\u6001\u6210\u5458\u4E0D\u5E94\u8BE5\u5F15\u7528\u7C7B\u7684\u7C7B\u578B\u53C2\u6570<div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">Box</span><span class="token operator">&lt;</span>Type<span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token literal-property property">defaultValue</span><span class="token operator">:</span> Type<span class="token punctuation">;</span>
    <span class="token comment">// Static members cannot reference class type parameters.</span>
<span class="token punctuation">}</span>
</code></pre></div></li></ol><h3 id="\u7C7B\u8FD0\u884C\u65F6\u7684-this" tabindex="-1">\u7C7B\u8FD0\u884C\u65F6\u7684 this <a class="header-anchor" href="#\u7C7B\u8FD0\u884C\u65F6\u7684-this" aria-hidden="true">#</a></h3><ol><li>\u548Cjs\u4E00\u6837\uFF0Cthis\u7684\u503C\u53D6\u51B3\u4E8E\u600E\u4E48\u88AB\u8C03\u7528<div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span>
    name <span class="token operator">=</span> <span class="token string">&quot;MyClass&quot;</span><span class="token punctuation">;</span>
    <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> c <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;obj&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">getName</span><span class="token operator">:</span> c<span class="token punctuation">.</span>getName<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// Prints &quot;obj&quot;, not &quot;MyClass&quot;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></li><li>\u7BAD\u5934\u51FD\u6570<div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span>
    name <span class="token operator">=</span> <span class="token string">&quot;MyClass&quot;</span><span class="token punctuation">;</span>
    <span class="token function-variable function">getName</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> c <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> g <span class="token operator">=</span> c<span class="token punctuation">.</span>getName<span class="token punctuation">;</span>
<span class="token comment">// Prints &quot;MyClass&quot; instead of crashing</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">g</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></li><li>\u4F1A\u68C0\u67E5\u4E00\u4E2A\u6709 this \u53C2\u6570\u7684\u51FD\u6570\u5728\u8C03\u7528\u65F6\u662F\u5426\u6709\u4E00\u4E2A\u6B63\u786E\u7684\u4E0A\u4E0B\u6587</li><li>this \u7684\u7C7B\u578B\uFF0C\u4F1A\u52A8\u6001\u7684\u5F15\u7528\u5F53\u524D\u7C7B\u7684\u7C7B\u578B<div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">Box</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">content</span><span class="token operator">:</span> string <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
    <span class="token comment">// \u53EA\u63A5\u53D7\u6765\u81EA\u540C\u4E00\u4E2A\u6D3E\u751F\u7C7B\u7684\u5B9E\u4F8B</span>
    <span class="token function">sameAs</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">other</span><span class="token operator">:</span> <span class="token keyword">this</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> other<span class="token punctuation">.</span>content <span class="token operator">===</span> <span class="token keyword">this</span><span class="token punctuation">.</span>content<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">DerivedBox</span> <span class="token keyword">extends</span> <span class="token class-name">Box</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">otherContent</span><span class="token operator">:</span> string <span class="token operator">=</span> <span class="token string">&quot;?&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> base <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Box</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> derived <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DerivedBox</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
derived<span class="token punctuation">.</span><span class="token function">sameAs</span><span class="token punctuation">(</span>base<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Argument of type &#39;Box&#39; is not assignable to parameter of type &#39;DerivedBox&#39;.</span>
</code></pre></div></li><li>\u57FA\u4E8E this \u7684\u7C7B\u578B\u4FDD\u62A4 <ol><li>\u5728\u7C7B\u548C\u63A5\u53E3\u7684\u65B9\u6CD5\u8FD4\u56DE\u7684\u4F4D\u7F6E\uFF0C\u4F7F\u7528 this is Type</li></ol></li></ol><h3 id="\u53C2\u6570\u5C5E\u6027" tabindex="-1">\u53C2\u6570\u5C5E\u6027 <a class="header-anchor" href="#\u53C2\u6570\u5C5E\u6027" aria-hidden="true">#</a></h3><blockquote><p>\u628A\u4E00\u4E2A\u6784\u9020\u51FD\u6570\u53C2\u6570\u8F6C\u6210\u4E00\u4E2A\u540C\u540D\u540C\u503C\u7684\u7C7B\u5C5E\u6027\u3002\u8FD9\u4E9B\u5C31\u88AB\u79F0\u4E3A\u53C2\u6570\u5C5E\u6027 \`\`\`js class Params { constructor( public readonly x: number, protected y: number, private z: number ) { // No body necessary } } const a = new Params(1, 2, 3); console.log(a.x); // (property) Params.x: number</p></blockquote><pre><code>console.log(a.z);
// Property &#39;z&#39; is private and only accessible within class &#39;Params&#39;.
\`\`\`
</code></pre><h3 id="\u7C7B\u8868\u8FBE\u5F0F" tabindex="-1">\u7C7B\u8868\u8FBE\u5F0F <a class="header-anchor" href="#\u7C7B\u8868\u8FBE\u5F0F" aria-hidden="true">#</a></h3><pre><code>\`\`\`js
const someClass = class&lt;Type&gt; {
    content: Type;
    constructor(value: Type) {
        this.content = value;
    }
};

const m = new someClass(&quot;Hello, world&quot;);  
// const m: someClass&lt;string&gt;
\`\`\`
</code></pre><h3 id="\u62BD\u8C61\u7C7B\u548C\u6210\u5458" tabindex="-1">\u62BD\u8C61\u7C7B\u548C\u6210\u5458 <a class="header-anchor" href="#\u62BD\u8C61\u7C7B\u548C\u6210\u5458" aria-hidden="true">#</a></h3><ol><li>\u62BD\u8C61\u65B9\u6CD5\u6216\u8005\u62BD\u8C61\u5B57\u6BB5\u662F\u4E0D\u63D0\u4F9B\u5B9E\u73B0\u7684\u3002\u8FD9\u4E9B\u6210\u5458\u5FC5\u987B\u5B58\u5728\u5728\u4E00\u4E2A\u62BD\u8C61\u7C7B\u4E2D\uFF0C\u8FD9\u4E2A\u62BD\u8C61\u7C7B\u4E5F\u4E0D\u80FD\u76F4\u63A5\u88AB\u5B9E\u4F8B\u5316<div class="language-js"><pre><code>abstract <span class="token keyword">class</span> <span class="token class-name">Base</span> <span class="token punctuation">{</span>
    abstract <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
    <span class="token function">printName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, &quot;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Base</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Cannot create an instance of an abstract class</span>

<span class="token comment">// \u751F\u6210\u5B50\u7C7B\uFF0C\u5FC5\u8981\u8981\u5B9E\u73B0\u62BD\u8C61\u6210\u5458</span>
<span class="token keyword">class</span> <span class="token class-name">Derived</span> <span class="token keyword">extends</span> <span class="token class-name">Base</span> <span class="token punctuation">{</span>
    <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;world&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> d <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Derived</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
d<span class="token punctuation">.</span><span class="token function">printName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></li></ol><h3 id="\u7C7B\u4E4B\u95F4\u7684\u5173\u7CFB" tabindex="-1">\u7C7B\u4E4B\u95F4\u7684\u5173\u7CFB <a class="header-anchor" href="#\u7C7B\u4E4B\u95F4\u7684\u5173\u7CFB" aria-hidden="true">#</a></h3><ol><li>\u4E24\u4E2A\u7C7B\u7ED3\u6784\u7C7B\u4F3C\uFF0C\u53EF\u4EE5\u7528\u4E8E\u66FF\u4EE3\u5F7C\u6B64<div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">Point1</span> <span class="token punctuation">{</span>
    x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    y <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Point2</span> <span class="token punctuation">{</span>
    x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    y <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// OK</span>
<span class="token keyword">const</span> <span class="token literal-property property">p</span><span class="token operator">:</span> Point1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Point2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div></li><li>\u7A7A\u7C7B\u53EF\u4EE5\u770B\u6210\u662F\u5176\u4ED6\u7C7B\u7684\u7236\u7C7B<div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Employee</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
    <span class="token literal-property property">salary</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// OK</span>
<span class="token keyword">const</span> <span class="token literal-property property">p</span><span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Employee</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></li></ol>`,25),e=[o];function c(l,u,k,i,r,d){return a(),s("div",null,e)}var g=n(t,[["render",c]]);export{y as __pageData,g as default};
