(function () {
	'use strict';

	var MODULE_NAME = 'Post/Service',
	MODULE_DEPENDENCIES = [
		'ngResource'
	],
	MODULE_CONTROLLERS = [],
	MODULE_DIRECTIVES = [],
	MODULE_SERVICES = [
		'Post'
	];

	describe(MODULE_NAME + ' module', function () {
		beforeEach(module(MODULE_NAME));

		describe('Services', function () {
			var $httpBackend;

			beforeEach(inject(function ($injector) {
				$httpBackend = $injector.get('$httpBackend');
			}));

			describe('Post', function () {
				var Post;

				if(MODULE_SERVICES.indexOf('Post') === -1) {
					return;
				}

				beforeEach(inject(function ($injector) {
					Post = $injector.get('Post');
				}));			

				afterEach(function () {
					$httpBackend.verifyNoOutstandingExpectation();
					$httpBackend.verifyNoOutstandingRequest();
				});

				it('should list posts', function () {
					$httpBackend
						.whenGET('/api/posts')
						.respond(200, {
							data: [
								{
									title: 'First post',
									author: {	name: 'Alex Serscon' }
								}
							]
						});

					var post = Post.list().$promise;

					post
						.then(function (posts) {
							expect(posts.data[0].title).toBe('First post');
							expect(posts.data[0].author.name).toBe('Alex Serscon');
						})

						.catch(function (err) {
							console.log(err);
						});

					$httpBackend.flush();
				});

				it('should create posts', function () {
					$httpBackend
						.whenPOST('/api/posts')
						.respond(201, {
							title: 'New post',
							author: {name: 'Alex Serscon'}
						});

					var post = new Post({
						title: 'New post'
					});

					post
						.$save()
						.then(function (post) {
							expect(post.author instanceof Object).toBe(true);
							expect(post.author.name).toBe('Alex Serscon');
						})

						.catch(function (err) {
							console.log(err);
						});

					$httpBackend.flush();
				});

				it('should update posts', function () {
					$httpBackend
						.whenGET('/api/posts/1')
						.respond(200, {
							id: 1,
							title: 'First post',
							author: {	name: 'Alex Serscon' }
						});

					$httpBackend
						.whenPUT('/api/posts/1')
						.respond(201, {
							title: 'First post (updated)',
							author: { name: 'Alex Serscon' }
						});

					var post = Post.get({
						id: 1
					});

					post
						.$promise
						.then(function (post) {
							expect(post.title).toBe('First post');
						})

						.catch(function (err) {
							console.log(err);
						});

					post
						.$update({
							id: 1
						})
						.then(function (post) {
							expect(post.title).toBe('First post (updated)');
						})

						.catch(function (err) {
							console.log(err);
						});

					$httpBackend.flush();
				});

				it('should destroy posts', function () {
					$httpBackend
						.whenGET('/api/posts/1')
						.respond(200, {
							id: 1,
							title: 'First post',
							author: {	name: 'Alex Serscon' }
						});

					$httpBackend
						.whenDELETE('/api/posts/1')
						.respond(200, {
							result: true
						});

					var post = Post.get({	id: 1	});

					post
						.$destroy({ id: 1 })
						.then(function (response) {
							expect(response.result).toBe(true);
						})

						.catch(function (err) {
							console.log(err);
						});

					$httpBackend.flush();
				});
			});
		});
	});
})();