(function () {
	'use strict';

	var MODULE_NAME = 'Conversation/Service/Message',
	MODULE_DEPENDENCIES = [
		'ngResource'
	],
	MODULE_CONTROLLERS = [],
	MODULE_DIRECTIVES = [],
	MODULE_SERVICES = [
		'Message'
	];

	describe(MODULE_NAME + ' module', function () {
		beforeEach(module(MODULE_NAME));

		describe('Dependencies', function () {
			var MODULE = angular.module(MODULE_NAME),
			DEPENDENCIES = MODULE.requires,
			HAS_MODULE = function (module) {
				return DEPENDENCIES.indexOf(module) > -1 ? true : false;
			};

			MODULE_DEPENDENCIES.forEach(function (dependency) {
				it('should have' + dependency + ' as dependency', function () {
					expect(HAS_MODULE(dependency)).toBe(true);
				});
			});
		});

		describe('Services', function () {
			var $httpBackend;

			beforeEach(inject(function ($injector) {
				$httpBackend = $injector.get('$httpBackend');
			}));

			describe('Message', function () {
				var Message;

				if(MODULE_SERVICES.indexOf('Message') === -1) {
					return;
				}

				beforeEach(inject(function ($injector) {
					Message = $injector.get('Message');
				}));			

				afterEach(function () {
					$httpBackend.verifyNoOutstandingExpectation();
					$httpBackend.verifyNoOutstandingRequest();
				});

				it('should list messages', function () {
					$httpBackend
						.whenGET('/api/messages')
						.respond(200, {
							data: [
								{
									content: 'First message',
									author: {	name: 'Alex Serscon' }
								}
							]
						});

					var message = Message.list().$promise;

					message
						.then(function (messages) {
							expect(messages.data[0].content).toBe('First message');
							expect(messages.data[0].author.name).toBe('Alex Serscon');
						})

						.catch(function (err) {
							console.log(err);
						});

					$httpBackend.flush();
				});

				it('should create messages', function () {
					$httpBackend
						.whenPOST('/api/messages')
						.respond(201, {
							content: 'New message',
							author: {name: 'Alex Serscon'}
						});

					var message = new Message({
						content: 'New message'
					});

					message
						.$save()
						.then(function (message) {
							expect(message.author instanceof Object).toBe(true);
							expect(message.author.name).toBe('Alex Serscon');
						})

						.catch(function (err) {
							console.log(err);
						});

					$httpBackend.flush();
				});

				it('should update messages', function () {
					$httpBackend
						.whenGET('/api/messages/1')
						.respond(200, {
							id: 1,
							content: 'First message',
							author: {	name: 'Alex Serscon' }
						});

					$httpBackend
						.whenPUT('/api/messages/1')
						.respond(201, {
							content: 'First message (updated)',
							author: { name: 'Alex Serscon' }
						});

					var message = Message.get({
						id: 1
					});

					message
						.$promise
						.then(function (message) {
							expect(message.content).toBe('First message');
						})

						.catch(function (err) {
							console.log(err);
						});

					message
						.$update({
							id: 1
						})
						.then(function (message) {
							expect(message.content).toBe('First message (updated)');
						})

						.catch(function (err) {
							console.log(err);
						});

					$httpBackend.flush();
				});

				it('should destroy messages', function () {
					$httpBackend
						.whenGET('/api/messages/1')
						.respond(200, {
							id: 1,
							content: 'First message',
							author: {	name: 'Alex Serscon' }
						});

					$httpBackend
						.whenDELETE('/api/messages/1')
						.respond(200, {
							result: true
						});

					var message = Message.get({	id: 1	});

					message
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