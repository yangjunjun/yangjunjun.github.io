---
layout:     post
title:      A guide to Liquid
date:       2015-05-06 21:54:16
summary:    a guide to Liquid
categories: jekyll Liquid
---

## Introduction

**Liquid** is an open-source, *Ruby-based template language* created by Shopify. It is the backbone of Shopify themes and is used to load dynamic content on storefronts.

Liquid uses a combination of *tags*, *objects*, and *filters* to load dynamic content. They are used inside Liquid template files, which are a group of files that make up a theme. For more information on the available templates, please see Theme Development.


## Tags

Tags make up the programming logic that tells templates what to do. Tags are wrapped in: 

### Control Flow Tags

#### if  

Executes a block of code only if a certain condition is met. 01

{% highlight html %}
{% raw %}
{% if product.title == 'Awesome Shoes' %}
    These shoes are awesome!
{% endif %}
{% endraw %} 
{% endhighlight %}
