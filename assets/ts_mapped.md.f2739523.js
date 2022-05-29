import{_ as n,c as s,o as a,b as p}from"./app.96e179db.js";const m='{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"ts/mapped.md"}',t={},o=p(`<ol><li>\u6620\u5C04\u7C7B\u578B<div class="language-js"><pre><code>type OptionsFlags<span class="token operator">&lt;</span>Type<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5FAA\u73AF\u904D\u5386\u952E\u540D</span>
    <span class="token punctuation">[</span>Property <span class="token keyword">in</span> keyof Type<span class="token punctuation">]</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
type FeatureFlags <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">darkMode</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token function-variable function">newUserProfile</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

type FeatureOptions <span class="token operator">=</span> OptionsFlags<span class="token operator">&lt;</span>FeatureFlags<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token comment">// type FeatureOptions = {</span>
<span class="token comment">//    darkMode: boolean;</span>
<span class="token comment">//    newUserProfile: boolean;</span>
<span class="token comment">// }</span>
</code></pre></div></li><li>\u6620\u5C04\u4FEE\u9970\u7B26 <ol><li>\u53EA\u8BFBreadonly\uFF0C\u53EF\u9009\uFF1F</li><li>\u901A\u8FC7\u524D\u7F00+\u3001-\u6765\u6DFB\u52A0\u6216\u5220\u9664\u4FEE\u9970\u7B26\uFF0C\u9ED8\u8BA4\u6DFB\u52A0<div class="language-js"><pre><code><span class="token comment">// \u5220\u9664\u5C5E\u6027\u4E2D\u7684\u53EA\u8BFB\u5C5E\u6027</span>
type CreateMutable<span class="token operator">&lt;</span>Type<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token operator">-</span>readonly <span class="token punctuation">[</span>Property <span class="token keyword">in</span> keyof Type<span class="token punctuation">]</span><span class="token operator">:</span> Type<span class="token punctuation">[</span>Property<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
type LockedAccount <span class="token operator">=</span> <span class="token punctuation">{</span>
    readonly id<span class="token operator">:</span> string<span class="token punctuation">;</span>
    readonly name<span class="token operator">:</span> string<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
type UnlockedAccount <span class="token operator">=</span> CreateMutable<span class="token operator">&lt;</span>LockedAccount<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token comment">// type UnlockedAccount = {</span>
<span class="token comment">//    id: string;</span>
<span class="token comment">//    name: string;</span>
<span class="token comment">// }</span>


<span class="token comment">// \u5220\u9664\u5C5E\u6027\u4E2D\u7684\u53EF\u9009\u5C5E\u6027</span>
type Concrete<span class="token operator">&lt;</span>Type<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>Property <span class="token keyword">in</span> keyof Type<span class="token punctuation">]</span><span class="token operator">-</span><span class="token operator">?</span><span class="token operator">:</span> Type<span class="token punctuation">[</span>Property<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

type MaybeUser <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
    name<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
    age<span class="token operator">?</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

type User <span class="token operator">=</span> Concrete<span class="token operator">&lt;</span>MaybeUser<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token comment">// type User = {</span>
<span class="token comment">//    id: string;</span>
<span class="token comment">//    name: string;</span>
<span class="token comment">//    age: number;</span>
<span class="token comment">// }</span>
</code></pre></div></li></ol></li><li>\u901A\u8FC7 as \u5B9E\u73B0\u952E\u540D\u91CD\u65B0\u6620\u5C04 <ol><li>\u8FC7\u6EE4<div class="language-js"><pre><code><span class="token comment">// Remove the &#39;kind&#39; property</span>
type RemoveKindField<span class="token operator">&lt;</span>Type<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>Property <span class="token keyword">in</span> keyof Type <span class="token keyword">as</span> Exclude<span class="token operator">&lt;</span>Property<span class="token punctuation">,</span> <span class="token string">&quot;kind&quot;</span><span class="token operator">&gt;</span><span class="token punctuation">]</span><span class="token operator">:</span> Type<span class="token punctuation">[</span>Property<span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">interface</span> <span class="token class-name">Circle</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">kind</span><span class="token operator">:</span> <span class="token string">&quot;circle&quot;</span><span class="token punctuation">;</span>
    <span class="token literal-property property">radius</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
type KindlessCircle <span class="token operator">=</span> RemoveKindField<span class="token operator">&lt;</span>Circle<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token comment">// type KindlessCircle = {</span>
<span class="token comment">//    radius: number;</span>
<span class="token comment">// }</span>
</code></pre></div></li></ol></li><li>\u904D\u5386\u8054\u5408\u7C7B\u578B<div class="language-js"><pre><code>type EventConfig<span class="token operator">&lt;</span>Events <span class="token keyword">extends</span> <span class="token punctuation">{</span> <span class="token literal-property property">kind</span><span class="token operator">:</span> string <span class="token punctuation">}</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// E\u4E3A\u8054\u5408\u7C7B\u578B\u4E2D\u7684\u7C7B\u578B</span>
    <span class="token punctuation">[</span><span class="token constant">E</span> <span class="token keyword">in</span> Events <span class="token keyword">as</span> <span class="token constant">E</span><span class="token punctuation">[</span><span class="token string">&quot;kind&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">event</span><span class="token operator">:</span> <span class="token constant">E</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
type SquareEvent <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">kind</span><span class="token operator">:</span> <span class="token string">&quot;square&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">x</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> number <span class="token punctuation">}</span><span class="token punctuation">;</span>
type CircleEvent <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">kind</span><span class="token operator">:</span> <span class="token string">&quot;circle&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">radius</span><span class="token operator">:</span> number <span class="token punctuation">}</span><span class="token punctuation">;</span>

type Config <span class="token operator">=</span> EventConfig<span class="token operator">&lt;</span>SquareEvent <span class="token operator">|</span> CircleEvent<span class="token operator">&gt;</span>
<span class="token comment">// type Config = {</span>
<span class="token comment">//    square: (event: SquareEvent) =&gt; void;</span>
<span class="token comment">//    circle: (event: CircleEvent) =&gt; void;</span>
<span class="token comment">// }</span>
</code></pre></div></li><li>\u642D\u914D\u5176\u4ED6\u529F\u80FD<div class="language-js"><pre><code>type ExtractPII<span class="token operator">&lt;</span>Type<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>Property <span class="token keyword">in</span> keyof Type<span class="token punctuation">]</span><span class="token operator">:</span> Type<span class="token punctuation">[</span>Property<span class="token punctuation">]</span> <span class="token keyword">extends</span> <span class="token punctuation">{</span> <span class="token literal-property property">pii</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span> <span class="token operator">?</span> <span class="token boolean">true</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
type DBFields <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">&quot;incrementing&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> string<span class="token punctuation">;</span> pii<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
type ObjectsNeedingGDPRDeletion <span class="token operator">=</span> ExtractPII<span class="token operator">&lt;</span>DBFields<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token comment">// type ObjectsNeedingGDPRDeletion = {</span>
<span class="token comment">//    id: false;</span>
<span class="token comment">//    name: true;</span>
<span class="token comment">// }</span>
</code></pre></div></li></ol>`,1),e=[o];function c(l,r,k,u,i,y){return a(),s("div",null,e)}var g=n(t,[["render",c]]);export{m as __pageData,g as default};
