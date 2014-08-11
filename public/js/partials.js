angular.module("App/Partials",[]).run(["$templateCache",function(t){t.put("about-us.tpl.html",'<div class="container"><div class="row"><div class="col-lg-12"><h1>About us</h1><p>What don\'t you know about us? Feel free to e-mail me as a <b>friend</b>:</p><p>victorcqueirozg@gmail.com.</p></div></div></div>'),t.put("authentication.tpl.html",'<div class="container"><div class="row"><div class="col-lg-12"><h1>Autenticação</h1><form name="form"><div class="form-group"><label for="">Nome de Usuário</label><input ng-model="credentials.username" type="text" class="form-control"></div><div class="form-group"><label for="">Senha</label><input ng-model="credentials.password" type="password" class="form-control"></div><div class="form-group"><button ng-click="authenticate(credentials)" type="button" class="btn btn-default">Conectar-se</button> <button ng-click="authenticateWithFB()" type="button" class="btn btn-default"><span class="fa fa-facebook"></span></button> <button ng-click="authenticateWithGO()" type="button" class="btn btn-default"><span class="fa fa-google"></span></button></div></form></div></div></div>'),t.put("index.tpl.html",'<div class="container"><div class="row"><div class="col-lg-12"><h1>You have arrived!</h1><p>Now, you are a part of us.</p><pre><code>angular.module(\'App\', [\'You\']);</code></pre></div></div></div>'),t.put("posts/create.tpl.html",'<div class="container"><div class="row"><div class="col-lg-12"><h2>New post</h2><form ng-submit="storePost(post)"><div class="form-group"><input ng-model="post.title" type="text" class="form-control"></div><div class="form-group"><textarea ng-model="post.body" cols="30" rows="20" class="form-control"></textarea></div><div class="form-group"><button type="submit" class="btn btn-default">Send</button> <a href="/posts" class="btn btn-danger">Cancel</a></div></form></div></div></div>'),t.put("posts/list.tpl.html",'<div class="container" ng-init="view = 1"><div class="row"><div class="col-lg-12"><div class="btn-group"><a class="btn btn-default" href="/posts/create">New post</a> <button class="btn btn-default" ng-class="{ active: (view == 1) }" ng-click="view = (view == 1 ? 0 : 1)"><span class="fa fa-bars"></span> Change view</button><div class="btn-group dropdown"><button class="btn btn-default dropdown-toggle">Per page <span class="caret"></span></button><ul class="dropdown-menu" role="menu"><li ng-class="{ active: (paginator.perPage == 4) }" ng-click="paginator.perPage = 4;"><a href="">4</a></li><li ng-class="{ active: (paginator.perPage == 10) }" ng-click="paginator.perPage = 10;"><a href="">10</a></li><li ng-class="{ active: (paginator.perPage == 20) }" ng-click="paginator.perPage = 20;"><a href="">20</a></li></ul></div></div><table class="table" ng-show="(view == 1)"><thead><th>Title</th><th>Body (preview)</th><th>Created at</th></thead><tbody ng-repeat="post in posts"><td ng-bind="post.title"></td><td ng-bind="post.body.substr(0, 200)"></td><td ng-bind="post.created_at"></td></tbody></table><div ng-show="(view == 0)" ng-repeat="post in posts"><h3><a href="/posts/{{ post.id }}" ng-bind="post.title"></a></h3><p><img src="http://placehold.it/1600x400" width="100%"></p><p ng-bind="post.body.substr(0, 200)"></p></div><vq-pager data-paginator="paginator" data-current-key="\'current\'" data-last-key="\'pageCount\'" data-event-name="\'posts\'"></vq-pager></div></div></div>'),t.put("posts/show.tpl.html",'<div class="container"><div class="row"><div class="col-md-12"><h2>{{ post.title }}</h2><p><img src="http://placehold.it/1600x400" width="100%"></p><p>{{ post.body }}</p><p>Postado por <a href="/users/{{ post.user.id }}">{{ post.user.name }}</a>.</p></div></div></div>'),t.put("users/create.tpl.html",'<div class="container"><div class="row"><div class="col-lg-12"><h1>Register</h1><form name="form" ng-submit="storeUser(user)"><div class="form-group"><label>Username</label><input ng-model="user.username" data-type="info" data-title="Your username which you will use for good authentication." bs-tooltip required type="text" class="form-control"></div><div class="form-group"><label>Name</label><input ng-model="user.name" data-title="The name who anyone will see, just for admire." bs-tooltip required type="text" class="form-control"></div><div class="form-group"><label>E-mail</label><input ng-model="user.email" data-title="Your email address." bs-tooltip required type="text" class="form-control"></div><div class="form-group"><label>Password</label><input ng-model="user.password" data-title="Your secret pass word." bs-tooltip required type="text" class="form-control"></div><div class="form-group"><button class="btn btn-default">Register</button></div></form></div></div></div>'),t.put("users/list.tpl.html",'<div class="container"><div class="row"><div class="col-lg-12"><table class="table"><thead><th>Name</th><th>E-mail address</th><th>Username</th></thead><tbody ng-repeat="user in users"><tr><td><a href="/users/{{ user.id }}" ng-bind="(user.name || \'?\')"></a></td><td ng-bind="user.email"></td><td ng-bind="user.username"></td></tr></tbody></table></div></div></div>'),t.put("users/profile.tpl.html",'<div class="container"><div class="row"><div class="col-md-12"><img src="http://placehold.it/1600x500" width="100%" alt="Profile photo"><h2>{{ user.name }} <small ng-bind="user.email"></small></h2><p><b>Username:</b> {{ user.username }}</p></div></div></div>'),t.put("users/show.tpl.html",'<div class="container"><div class="row"><div class="col-lg-12"><img src="http://placehold.it/1600x500" width="100%" alt="Profile photo"><h2>{{ user.name }} <small ng-bind="user.email"></small></h2><p><b>Username:</b> {{ user.username }}</p></div></div></div>'),t.put("posts/create.tpl.html",'<div class="container"><div class="row"><div class="col-lg-12"><h2>New post</h2><form ng-submit="storePost(post)"><div class="form-group"><input ng-model="post.title" type="text" class="form-control"></div><div class="form-group"><textarea ng-model="post.body" cols="30" rows="20" class="form-control"></textarea></div><div class="form-group"><button type="submit" class="btn btn-default">Send</button> <a href="/posts" class="btn btn-danger">Cancel</a></div></form></div></div></div>'),t.put("posts/list.tpl.html",'<div class="container" ng-init="view = 1"><div class="row"><div class="col-lg-12"><div class="btn-group"><a class="btn btn-default" href="/posts/create">New post</a> <button class="btn btn-default" ng-class="{ active: (view == 1) }" ng-click="view = (view == 1 ? 0 : 1)"><span class="fa fa-bars"></span> Change view</button><div class="btn-group dropdown"><button class="btn btn-default dropdown-toggle">Per page <span class="caret"></span></button><ul class="dropdown-menu" role="menu"><li ng-class="{ active: (paginator.perPage == 4) }" ng-click="paginator.perPage = 4;"><a href="">4</a></li><li ng-class="{ active: (paginator.perPage == 10) }" ng-click="paginator.perPage = 10;"><a href="">10</a></li><li ng-class="{ active: (paginator.perPage == 20) }" ng-click="paginator.perPage = 20;"><a href="">20</a></li></ul></div></div><table class="table" ng-show="(view == 1)"><thead><th>Title</th><th>Body (preview)</th><th>Created at</th></thead><tbody ng-repeat="post in posts"><td ng-bind="post.title"></td><td ng-bind="post.body.substr(0, 200)"></td><td ng-bind="post.created_at"></td></tbody></table><div ng-show="(view == 0)" ng-repeat="post in posts"><h3><a href="/posts/{{ post.id }}" ng-bind="post.title"></a></h3><p><img src="http://placehold.it/1600x400" width="100%"></p><p ng-bind="post.body.substr(0, 200)"></p></div><vq-pager data-paginator="paginator" data-current-key="\'current\'" data-last-key="\'pageCount\'" data-event-name="\'posts\'"></vq-pager></div></div></div>'),t.put("posts/show.tpl.html",'<div class="container"><div class="row"><div class="col-md-12"><h2>{{ post.title }}</h2><p><img src="http://placehold.it/1600x400" width="100%"></p><p>{{ post.body }}</p><p>Postado por <a href="/users/{{ post.user.id }}">{{ post.user.name }}</a>.</p></div></div></div>'),t.put("users/create.tpl.html",'<div class="container"><div class="row"><div class="col-lg-12"><h1>Register</h1><form name="form" ng-submit="storeUser(user)"><div class="form-group"><label>Username</label><input ng-model="user.username" data-type="info" data-title="Your username which you will use for good authentication." bs-tooltip required type="text" class="form-control"></div><div class="form-group"><label>Name</label><input ng-model="user.name" data-title="The name who anyone will see, just for admire." bs-tooltip required type="text" class="form-control"></div><div class="form-group"><label>E-mail</label><input ng-model="user.email" data-title="Your email address." bs-tooltip required type="text" class="form-control"></div><div class="form-group"><label>Password</label><input ng-model="user.password" data-title="Your secret pass word." bs-tooltip required type="text" class="form-control"></div><div class="form-group"><button class="btn btn-default">Register</button></div></form></div></div></div>'),t.put("users/list.tpl.html",'<div class="container"><div class="row"><div class="col-lg-12"><table class="table"><thead><th>Name</th><th>E-mail address</th><th>Username</th></thead><tbody ng-repeat="user in users"><tr><td><a href="/users/{{ user.id }}" ng-bind="(user.name || \'?\')"></a></td><td ng-bind="user.email"></td><td ng-bind="user.username"></td></tr></tbody></table></div></div></div>'),t.put("users/profile.tpl.html",'<div class="container"><div class="row"><div class="col-md-12"><img src="http://placehold.it/1600x500" width="100%" alt="Profile photo"><h2>{{ user.name }} <small ng-bind="user.email"></small></h2><p><b>Username:</b> {{ user.username }}</p></div></div></div>'),t.put("users/show.tpl.html",'<div class="container"><div class="row"><div class="col-lg-12"><img src="http://placehold.it/1600x500" width="100%" alt="Profile photo"><h2>{{ user.name }} <small ng-bind="user.email"></small></h2><p><b>Username:</b> {{ user.username }}</p></div></div></div>')}]);