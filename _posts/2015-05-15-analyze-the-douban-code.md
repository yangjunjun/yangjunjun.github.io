---
layout:     post
title:      “推荐到豆瓣”的JS代码分析
date:       2015-05-06 21:54:16
summary:    “推荐到豆瓣”的代码是比较常见的 bookmarklet , 其本质是一段可以在浏览器地址栏运行的JS代码。
categories: 豆瓣 douban javascript 
---

“推荐到豆瓣”的代码是比较常见的 bookmarklet , 其本质是一段可以在浏览器地址栏运行的JS代码，其代码如下：

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

## 代码的原理

1. 获取目标网页的信息(包括选中的文字，网页的地址，网页的标题).
2. 构建一个地址用来传递获取的信息.
3. 利用第二步的地址打开一个新的窗口来触发提交服务.

## Bookmarklet 的简单介绍

**Bookmarklet** 主要有两部分构成： 
1. URI scheme， 这里是 javascript (注意这里的 javascript 是一种URI scheme, 类似于http, ftp)
2. JS代码

> Internally, the browser sees that the specified protocol is javascript, treats the rest of the string as a JavaScript application which is then executed, and uses the resulting string as the new page

上面的引用来自 Wikipedia 的 bookmarklet 词条，从中可以看出当浏览器遇到 URI scheme 为 javascript 的时候，就会把后面的字符串当作 js 来执行，返回结果作为一个新的页面。

所以可以运行JS代码的情况可以分为下面的几种

- 作为书签, 就是所谓的 Bookmarklet 
- ```a```标签的```href```属性, 一般用来模拟按钮
- ~~直接在浏览器中的地址栏(现在浏览器的地址栏一般不识别javascript这个 URL scheme)~~

## Bookmarklet 的编写常用模版

因为如果 bookmarklet 返回值不是 undefined 就会以返回值重载这个页面，这往往不是我们所希望的，所以我们可以使用一个没有返回值匿名的函数来实现，这样做的另一个好处就是不用担心和页面已有的变量冲突。

{% highlight javascript %}
javascript:(function(){
  //Statements returning a non-undefined type, e.g. assignments
})();
{% endhighlight %}

或者

{% highlight javascript %}
javascript:{arbitrary script};void(0);
{% endhighlight %}


## 参考
0. [“推荐到豆瓣”代码来源](http://www.douban.com/service/bookmarklet)，[备份地址]()
0. [wikipedia 的 Bookmarklet 词条页](http://en.wikipedia.org/wiki/Bookmarklet)
1. [Bookmarklet编写指南](http://www.ruanyifeng.com/blog/2011/06/a_guide_for_writing_bookmarklet.html)
2. [setTimeout(0) 的作用](http://pandacafe.net/blog/337)