/*
 * @Detail: 推荐到豆瓣
 * @Source: http://www.douban.com/service/bookmarklet   
 */
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