---
layout: default
title: 你好，世界
---

## {{ page.title }}

### 我的第一篇文章

ruby

{% highlight ruby %}
def show
  @widget = Widget(params[:id])
  respond_to do |format|
    format.html # show.html.erb
    format.json { render json: @widget }
  end
end
{% endhighlight %}

javascript

~~~ js
function generate(start, end){
  return function(){
            return Math.random()*(end - start) + start;
         }
}
~~~


site.github.versions.jekyll {{ site.github.versions.jekyll }}

… which is shown in the screenshot below:

{{ page.date | date_to_string }}