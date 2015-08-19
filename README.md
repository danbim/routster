# Routster
Helps you maintain all your (reverse) routes for your isomorphic JavaScript application in one file.

Routes are named (e.g., ```'articles_by_id'```, see Usage below) and defined using a express route
pattern (e.g., ```'articles/:id/?'```, allowing a URL param ```:id``` and an optional trailing slash).

To then retrieve the pattern (e.g., for setting up routes in express), call
```routster.route('article_by_id')```. To generate the reverse URL (e.g., on your client-side code)
call ```routster.reverse('article_by_id', params, query)``` in which params is an object containing
the ```params``` (```{id : 123}```) and query is an object containing a set of ```query``` parameters for URL
generation (```{'version' : 'latest', 'orderBy' : 'timestamp'}```).

## Usage

```
var routster = require('routster');

var contextPath = '/myapp';
var routes = {
  'articles_list' : '/articles/?',
  'article_by_id' : '/articles/:id/?'
};
var options = { relative : false };

var route   = routster.route(contextPath, routes, options);
var reverse = routster.reverse(contextPath, routes, options);
var asset   = routster.asset(contextPath, options);

// prints "/myapp/articles/?"
console.log('route("articles_list")                                             =', route('articles_list'));

// prints "/myapp/articles/123"
console.log('reverse("article_by_id", { id : 123 })                             =', reverse('article_by_id', { id : 123 }));

// prints "/myapp/articles/123?version=latest"
console.log('reverse("article_by_id", { "id" : 123 }, { "version" : "latest" }) =', reverse('article_by_id', { id : 123 }, { "version" : "latest" }));

// prints "/myapp/lib/mylib.js"
console.log('asset("lib/mylib.js")                                              =', asset('lib/mylib.js'));
```
