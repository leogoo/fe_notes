import{_ as i,c as e,o as t,b as l}from"./app.9fa706b0.js";const u='{"title":"\u51B2\u7A81\u5904\u7406\u65B9\u6CD5","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u51B2\u7A81\u5904\u7406\u65B9\u6CD5","slug":"\u51B2\u7A81\u5904\u7406\u65B9\u6CD5"},{"level":3,"title":"\u5E38\u7528\u547D\u4EE4\uFF1A","slug":"\u5E38\u7528\u547D\u4EE4\uFF1A"},{"level":3,"title":"git\u547D\u4EE4\u7B80\u5199","slug":"git\u547D\u4EE4\u7B80\u5199"},{"level":3,"title":"\u521B\u5EFA\u8FDC\u7A0B\u5206\u652F","slug":"\u521B\u5EFA\u8FDC\u7A0B\u5206\u652F"},{"level":3,"title":"git cherry-pick","slug":"git-cherry-pick"},{"level":3,"title":"git rebase","slug":"git-rebase"},{"level":3,"title":"Git reset","slug":"git-reset"},{"level":3,"title":"git revert","slug":"git-revert"}],"relativePath":"others/git.md"}',a={},r=l(`<h3 id="\u51B2\u7A81\u5904\u7406\u65B9\u6CD5" tabindex="-1">\u51B2\u7A81\u5904\u7406\u65B9\u6CD5 <a class="header-anchor" href="#\u51B2\u7A81\u5904\u7406\u65B9\u6CD5" aria-hidden="true">#</a></h3><ol><li>\u5148\u5168\u90FDci\uFF0C\u7136\u540Egit pull\u628A\u6240\u6709\u4EE3\u7801\u90FD\u62C9\u4E0B\u6765\u4FEE\u6539\u51B2\u7A81\uFF08\u5C5E\u4E8E\u81EA\u5DF1\u7684\uFF0C\u5176\u4ED6\u64A4\u56DE\u5C31\u597D\u4E86\uFF0C\u53CD\u6B63\u4E0D\u63D0\u4EA4\uFF09</li><li>(\u4F18\u5148\uFF09\u63D0\u4EA4\u524DGit stash -&gt; git pull -&gt; git stash pop \u4FDD\u6301\u672C\u5730\u548C\u8FDC\u7AEF\u540C\u6B65(pull\u524D\u8BB0\u5F97git stash),\u591A\u51FA\u7684\u6587\u4EF6\u5C31\u90FD\u662F\u81EA\u5DF1\u672C\u5730\u4FEE\u6539\u7684</li></ol><h3 id="\u5E38\u7528\u547D\u4EE4\uFF1A" tabindex="-1">\u5E38\u7528\u547D\u4EE4\uFF1A <a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4\uFF1A" aria-hidden="true">#</a></h3><ul><li>git reflog show --date=iso \u5F88\u5173\u952E\uFF0C\u5F88\u597D\u7528</li><li>git stash -u :\u7F13\u5B58\u6240\u6709\u5185\u5BB9\u5305\u62EC\u65B0\u5EFA\u7684</li><li>git stash list</li><li id="">git stash pop stash@</li><li>git clean -fd:\u5220\u9664untraked files\u548C\u76EE\u5F55</li><li>git checkout . \u5220\u9664\u6240\u6709\u672A\u52A0\u5165\u7F13\u5B58\u533A\u7684\u6587\u4EF6</li><li>git diff &lt;\u5206\u652F\u540D&gt;:\u6BD4\u8F83\u5F53\u524D\u5206\u652F\u4E0E\u6307\u5B9A\u5206\u652F\u4EE3\u7801\u7684\u5DEE\u522B</li><li>git log filename: \u67E5\u770B\u5355\u4E2A\u6587\u4EF6\u7684\u63D0\u4EA4\u8BB0\u5F55</li><li>git show commitID filename: \u67E5\u770B\u67D0\u6B21\u63D0\u4EA4\u5BF9\u6587\u4EF6\u7684\u4FEE\u6539</li><li>git config core.ignorecase false \u533A\u5206\u5927\u5C0F\u5199\uFF0C\u9879\u76EE\u5185\u8FD0\u884C</li></ul><h3 id="git\u547D\u4EE4\u7B80\u5199" tabindex="-1">git\u547D\u4EE4\u7B80\u5199 <a class="header-anchor" href="#git\u547D\u4EE4\u7B80\u5199" aria-hidden="true">#</a></h3><ul><li>gco: git checkout</li><li>gbr: git branch</li><li>gst: git status</li><li>gd: git diff</li><li>gl: git pull</li><li>grb: git rebase</li><li>ga: git add</li><li>gc: git commit</li><li>gcmsg: git commit -m</li><li>gp: git push</li><li>glog: git log --oneline --decorate --graph</li><li>glgg: git log --graph</li><li>gm: git merge</li><li>gsta: git stash</li><li>gstp: git stash pop</li></ul><h3 id="\u521B\u5EFA\u8FDC\u7A0B\u5206\u652F" tabindex="-1">\u521B\u5EFA\u8FDC\u7A0B\u5206\u652F <a class="header-anchor" href="#\u521B\u5EFA\u8FDC\u7A0B\u5206\u652F" aria-hidden="true">#</a></h3><p>\u5176\u5B9E\u5C31\u662F\u628A\u672C\u5730\u5206\u652F\uFF0C\u7136\u540Epush\u5230\u8FDC\u7AEF</p><div class="language-"><pre><code>git checkout -b newBranch
git push origin newBranch:newBranch
</code></pre></div><h3 id="git-cherry-pick" tabindex="-1">git cherry-pick <a class="header-anchor" href="#git-cherry-pick" aria-hidden="true">#</a></h3><p>\u7528\u4E8E\u5C06\u5176\u4ED6\u5206\u652F\u4E0A\u7684commit\u590D\u5236\u5230\u5F53\u524D\u5206\u652F\u6765</p><ol><li>\u9996\u5148\u590D\u5236\u8981\u5BFC\u5165\u7684commitID</li><li>\u5728\u5F53\u524D\u5206\u652F\u6267\u884C<code>git cherry-pick commitId</code>\u5373\u53EF</li><li>\u5BFC\u5165\u591A\u4E2Acommit\u65F6\u3002<code>git cherry-pick commitId0..commitId100</code>\uFF0C\u9700\u8981\u6CE8\u610F\u7684\u662F\u4E0D\u5305\u542BcommitId0\u8FD9\u4E2A\u63D0\u4EA4\uFF0C\u5C06\u5BFC\u5165(commitId0, commitId100]\u4E2D\u7684\u6240\u6709commit</li></ol><h3 id="git-rebase" tabindex="-1">git rebase <a class="header-anchor" href="#git-rebase" aria-hidden="true">#</a></h3><p>git rebase\u6709\u4E24\u4E2A\u7528\u6CD5</p><ol><li>\u5408\u5E76\u8FDC\u7A0B\u5206\u652F\uFF0C\u7528\u4E8E\u66FF\u4EE3git merge <ol><li>\u4F7F\u7528git mrege\u65F6\uFF0C\u5982\u679C\u672C\u5730\u6709\u65B0\u7684commit\uFF0C\u4F1A\u591A\u51FA\u4E00\u4E2AMerge\u7684commit</li><li>\u4F7F\u7528rebase\u65F6\uFF0C\u4F1A\u5C06\u672C\u5730\u5206\u652F\u65B0\u7684commit\u7F13\u5B58\uFF0C\u7136\u540E\u5C06\u6307\u9488\u79FB\u52A8\u5230\u8FDC\u7A0B\u6700\u65B0\u7684commit\uFF0C\u7136\u540E\u5728\u540E\u9762\u6DFB\u52A0\u672C\u5730\u65B0\u589E\u7684commit</li></ol></li><li>\u7528\u4E8E\u5408\u5E76commit <ol><li>\u4F7F\u7528\u65B9\u6CD5<code>git rebase -i commitId</code></li><li>\u5C06\u4E0A\u8FF0commitId\u540E\u9762\u7684commit\u5408\u5E76\uFF0C\u4F1A\u8FDB\u5165\u7F16\u8F91\u72B6\u6001\u5904\u7406commit\u4E4B\u95F4\u600E\u4E48\u5408\u5E76\uFF0C\u4E14\u7F16\u8F91message</li></ol></li></ol><h3 id="git-reset" tabindex="-1">Git reset <a class="header-anchor" href="#git-reset" aria-hidden="true">#</a></h3><ol><li>\u4F7F\u7528--soft\u5C31\u4EC5\u4EC5\u5C06\u5934\u6307\u9488\u6062\u590D\uFF0C\u5DF2\u7ECFadd\u7684\u7F13\u5B58\u4EE5\u53CA\u5DE5\u4F5C\u7A7A\u95F4\u7684\u6240\u6709\u4E1C\u897F\u90FD\u4E0D\u53D8\u3002</li><li>\u4F7F\u7528--mixed\uFF0C\u5C31\u5C06\u5934\u6062\u590D\u6389\uFF0C\u5DF2\u7ECFadd\u7684\u7F13\u5B58\u4E5F\u4F1A\u4E22\u5931\u6389\uFF0C\u5DE5\u4F5C\u7A7A\u95F4\u7684\u4EE3\u7801\u4EC0\u4E48\u7684\u662F\u4E0D\u53D8\u7684\u3002</li><li>\u5982\u679C\u4F7F\u7528--hard\uFF0C\u90A3\u4E48\u4E00\u5207\u5C31\u5168\u90FD\u6062\u590D\u4E86\uFF0C\u5934\u53D8\uFF0Caad\u7684\u7F13\u5B58\u6D88\u5931\uFF0C\u4EE3\u7801\u4EC0\u4E48\u7684\u4E5F\u6062\u590D\u5230\u4EE5\u524D\u72B6\u6001\u3002</li></ol><h3 id="git-revert" tabindex="-1">git revert <a class="header-anchor" href="#git-revert" aria-hidden="true">#</a></h3><ul><li>git revert commitId\u662F\u5C06\u6307\u5B9A\u7684commit\u53CD\u8F6C\uFF0C\u4E0Ereset\u4E0D\u540C\u7684\u662F\u4F1A\u751F\u6210\u4E00\u4E2A\u65B0\u7684commit\uFF0C\u800C\u5185\u5BB9\u5219\u662F\u53CD\u8F6C\u5BF9\u5E94\u7684commit\u5185\u5BB9\u3002reset\u9700\u8981git push -f\u5F3A\u5236\u56DE\u9000\u624D\u4F1A\u6539\u53D8\u8FDC\u7A0B\u5206\u652F</li><li>\u4E00\u822C\u51B2\u7A81\u65F6\uFF0C\u4FDD\u7559parent\u7248\u672C\u7684\u5185\u5BB9\uFF0C\u6267\u884Cgit revert --continue</li><li>\u5982\u679C\u4E0D\u60F3\u89E3\u51B3\u51B2\u7A81\u7684\u8BDD\u53EF\u4EE5\u53D6\u6D88\u64A4\u56DE\uFF1Agit revert --abort</li></ul>`,19),g=[r];function c(o,s,d,h,m,n){return t(),e("div",null,g)}var f=i(a,[["render",c]]);export{u as __pageData,f as default};
