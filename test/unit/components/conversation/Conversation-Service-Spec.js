(function () {
	'use strict';

	var MODULE_NAME = 'Conversation/Service',
	MODULE_DEPENDENCIES = [
		'ngResource'
	],
	MODULE_CONTROLLERS = [],
	MODULE_DIRECTIVES = [],
	MODULE_SERVICES = [
		'Conversation'
	];

	describe(MODULE_NAME + ' module', function () {
		beforeEach(module(MODULE_NAME));

		describe('Services', function () {
			var $httpBackend;

			beforeEach(inject(function ($injector) {
				$httpBackend = $injector.get('$httpBackend');
			}));

			describe('Conversation', function () {
				var Conversation;

				if(MODULE_SERVICES.indexOf('Conversation') === -1) {
					return;
				}

				beforeEach(inject(function ($injector) {
					Conversation = $injector.get('Conversation');
				}));			

				afterEach(function () {
					$httpBackend.verifyNoOutstandingExpectation();
					$httpBackend.verifyNoOutstandingRequest();
				});

				it('should list conversations', function () {
					$httpBackend
						.whenGET('/api/conversations')
						.respond(200, {
							data: [
								{
									title: 'First conversation',
									members: [
										{
											name: 'Alex Serscon'
										}
									]
								}
							]
						});

					var conversation = Conversation.list().$promise;

					conversation
						.then(function (conversations) {
							expect(conversations.data[0].title).toBe('First conversation');
							expect(conversations.data[0].members[0].name).toBe('Alex Serscon');
						})

						.catch(function (err) {
							console.log(err);
						});

					$httpBackend.flush();
				});

				it('should create conversations', function () {
					$httpBackend
						.whenPOST('/api/conversations')
						.respond(201, {
							title: 'New conversation',
							members: [{name: 'Alex Serscon'}]
						});

					var conversation = new Conversation({
						title: 'New conversation'
					});

					conversation
						.$save()
						.then(function (conversation) {
							expect(conversation.members instanceof Array).toBe(true);
							expect(conversation.members[0].name).toBe('Alex Serscon');
						})

						.catch(function (err) {
							console.log(err);
						});

					$httpBackend.flush();
				});

				it('should update conversations', function () {
					$httpBackend
						.whenGET('/api/conversations/1')
						.respond(200, {
							id: 1,
							title: 'First conversation',
							members: [{	name: 'Alex Serscon' }]
						});

					$httpBackend
						.whenPUT('/api/conversations/1')
						.respond(201, {
							title: 'First conversation (updated)',
							members: [{name: 'Alex Serscon'}]
						});

					var conversation = Conversation.get({
						id: 1
					});

					conversation
						.$promise
						.then(function (conversation) {
							expect(conversation.title).toBe('First conversation');
						})

						.catch(function (err) {
							console.log(err);
						});

					conversation
						.$update({
							id: 1
						})
						.then(function (conversation) {
							expect(conversation.title).toBe('First conversation (updated)');
						})

						.catch(function (err) {
							console.log(err);
						});

					$httpBackend.flush();
				});

				it('should destroy conversations', function () {
					$httpBackend
						.whenGET('/api/conversations/1')
						.respond(200, {
							id: 1,
							title: 'First conversation',
							members: [{	name: 'Alex Serscon' }]
						});

					$httpBackend
						.whenDELETE('/api/conversations/1')
						.respond(200, {
							result: true
						});

					var conversation = Conversation.get({ id: 1	});

					conversation
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