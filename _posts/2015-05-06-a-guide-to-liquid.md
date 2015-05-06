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

{% highlight html %}
{% raw %}
{% if customer.name == 'kevin' %}
  Hey Kevin!
{% elsif customer.name == 'anonymous' %}
  Hey Anonymous!
{% else %}
  Hi Stranger!
{% endif %}
{% endraw %} 
{% endhighlight %}

#### case/when

Creates a switch statement to compare a variable with different values. case initializes the switch statement, and when compares its values.

{% highlight html %}
{% raw %}
{% assign handle = 'cake' %}
{% case handle %}
  {% when 'cake' %}
     This is a cake
  {% when 'cookie' %}
     This is a cookie
  {% else %}
     This is not a cake nor a cookie
{% endcase %}
{% endraw %} 
{% endhighlight %}

#### unless

Similar to if, but executes a block of code only if a certain condition is not met.

{% highlight html %}
{% raw %}
{% unless product.title == 'Awesome Shoes' %}
    These shoes are not awesome.
{% endunless %}
{% endraw %} 
{% endhighlight %}

### Iteration Tags

### Theme Tags

### Variable Tags

## Objects

Objects contain attributes that are used to display dynamic content on the page.

## Filters

Filters are used to modify the output of strings, numbers, variables, and objects.


## Refer

1. https://docs.shopify.com/themes/liquid-documentation/basics