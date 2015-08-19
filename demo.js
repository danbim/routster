var routster = require('./routster.js');

var contextPath = '/myapp';
var routes = {
  'articles_list' : '/articles/?',
  'article_by_id' : '/articles/:id/?'
};
var options = { relative : false };

var route   = routster.route(contextPath, routes, options);
var reverse = routster.reverse(contextPath, routes, options);
var asset   = routster.asset(contextPath, options);

console.log('route("articles_list") =', route('articles_list'));
console.log('reverse("article_by_id", { id : 123 }) =', reverse('article_by_id', { id : 123 }));
console.log('reverse("article_by_id", { "id" : 123 }, { "version" : "latest" }) =', reverse('article_by_id', { id : 123 }, { "version" : "latest" }));
console.log('asset("lib/mylib.js") =', asset('lib/mylib.js'));
