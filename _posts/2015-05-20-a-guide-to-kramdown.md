---
layout:     post
title:      简单学习一下 Kramdown 的语法
date:       2015-05-20
summary:    简单学习一下 Kramdown 的语法
categories: 豆瓣 douban javascript 
---

Kramdown 是现在 Github 默认的 markdown 解析器，“兵欲善其事，必先利其器”，所以需要熟悉一下 kramdown 的语法。
kramdown 的语法可以分为两部分：

- 块状元素(Block Elements)
- 行内元素(Inline Elements)

## 块状元素(Block Elements)

- 段落(paragraph)



- 代码块

官方文档要求使用下面的代码，

{% highlight html %}
~~~ type
 // codes go here
~~~
{% endhighlight %}

其实这样效果最好(参照Jeykll官方源码)

{% highlight html %}
{% raw %}
{% highlight type %}
  // code 
{% endhighlight %}
{% endif %}
{% endraw %} 
{% endhighlight %}


## 行内元素(Inline Elements)