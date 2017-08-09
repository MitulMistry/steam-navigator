describe('Routes', function() {
	var $state;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$state = $injector.get('$state');
	}));

	// describe('Index', function() {
	// 	var state;
	//
	// 	it('should have the correct URL', function() {
	// 		state = $state.get('/');
	// 		expect(state.url).toEqual('/top');
	// 	});
	// });

	describe('Top Sellers', function() {
		var state;

		it('should have the correct URL', function() {
			state = $state.get('topSellers');
			expect(state.url).toEqual('/top');
		});
	});

	describe('New Releases', function() {
		var state;

		it('should have the correct URL', function() {
			state = $state.get('newReleases');
			expect(state.url).toEqual('/new');
		});
	});

	describe('Specials', function() {
		var state;

		it('should have the correct URL', function() {
			state = $state.get('specials');
			expect(state.url).toEqual('/specials');
		});
	});

	describe('Coming Soon', function() {
		var state;

		it('should have the correct URL', function() {
			state = $state.get('comingSoon');
			expect(state.url).toEqual('/coming');
		});
	});

	describe('Game', function() {
		var state;

		it('should have the correct URL', function() {
			state = $state.get('game');
			expect(state.url).toEqual('/games/:id');
		});
	});
});
