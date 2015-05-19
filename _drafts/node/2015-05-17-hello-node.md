# hello Nodejs
---

## 第一个例子

{% highlight javascript %}
// demo from https://nodejs.org/
var http = require('http');
http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type':'text/plain'});
  res.end('hello world');
}).listen(1337, '127.0.0.1');
{% endhighlight %}

###  ** http **

- Class 
http.Server