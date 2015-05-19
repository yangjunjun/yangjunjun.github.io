---
layout:     post
title:      “推荐到豆瓣”的JS代码分析
date:       2015-05-06 21:54:16
summary:    “推荐到豆瓣”的代码是比较常见的 bookmarklet , 其本质是一段可以在浏览器地址栏运行的JS代码。
categories: 豆瓣 douban javascript 
---

“推荐到豆瓣”的代码是比较常见的 bookmarklet , 其本质是一段可以在浏览器地址栏运行的JS代码。

{% highlight javascript %}
javascript:void(function(d, sc, e, w, h) {
  var s1 = window.getSelection,
    s2 = d.getSelection,
    s3 = d.selection,
    s = s1 ? s1() : s2 ? s2() : s3 ? s3.createRange().text : '',
    r = 'http://www.douban.com/share/service/?href=' + e(d.location.href) + '%26name=' + e(d.title) + '%26sel=' + e(s) + '%26v=1' + '%26source=bookmarklet',
    x = function() {
      if (!window.open(r, 'douban', 'toolbar=0,resizable=1,scrollbars=yes,status=1,width=' + w + ',height=' + h + ',left=' + (sc.width - w) / 2 + ',top=' + (sc.height - h) / 2)) location.href = r + '%26r=1'
    };
  setTimeout(x, 0);
})(document, screen, encodeURIComponent, 500, 360);
{% endhighlight %}

##  bookmarklet 的简单介绍

**bookmarklet** 是

## bookmarklet 的编写模版

{% highlight javascript %}
javascript:(function(){
  //Statements returning a non-undefined type, e.g. assignments
})();
{% endhighlight %}

或者

{% highlight javascript %}
javascript:{arbitrary script};void(0);
{% endhighlight %}

## 代码的原理

1. 获取目标网页的信息(包括选中的文字，网页的地址，网页的标题).
2. 构建一个地址用来传递获取的信息.
3. 利用第二步的地址打开一个新的窗口来触发提交服务.



## 参考
0. [Bookmarklet (wikipedia)](http://en.wikipedia.org/wiki/Bookmarklet)
1. [Bookmarklet编写指南](http://www.ruanyifeng.com/blog/2011/06/a_guide_for_writing_bookmarklet.html)
2. [setTimeout(0) 的作用](http://pandacafe.net/blog/337)