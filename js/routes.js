angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('home', {
    url: '/page1',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })

  .state('prayerList', {
    url: '/page2',
    templateUrl: 'templates/prayerList.html',
    controller: 'prayerListCtrl'
  })

  .state('theApostlesCreed', {
    url: '/page3',
    templateUrl: 'templates/theApostlesCreed.html',
    controller: 'theApostlesCreedCtrl'
  })

  .state('ourFather', {
    url: '/page4',
    templateUrl: 'templates/ourFather.html',
    controller: 'ourFatherCtrl'
  })

  .state('hailMary', {
    url: '/page5',
    templateUrl: 'templates/hailMary.html',
    controller: 'hailMaryCtrl'
  })

  .state('gloryBe', {
    url: '/page6',
    templateUrl: 'templates/gloryBe.html',
    controller: 'gloryBeCtrl'
  })

  .state('angelus', {
    url: '/page7',
    templateUrl: 'templates/angelus.html',
    controller: 'angelusCtrl'
  })

  .state('morningOffering', {
    url: '/page8',
    templateUrl: 'templates/morningOffering.html',
    controller: 'morningOfferingCtrl'
  })

  .state('hailHolyQueen', {
    url: '/page9',
    templateUrl: 'templates/hailHolyQueen.html',
    controller: 'hailHolyQueenCtrl'
  })

  .state('guardianAngelPrayer', {
    url: '/page10',
    templateUrl: 'templates/guardianAngelPrayer.html',
    controller: 'guardianAngelPrayerCtrl'
  })

  .state('graceBeforeMeals', {
    url: '/page11',
    templateUrl: 'templates/graceBeforeMeals.html',
    controller: 'graceBeforeMealsCtrl'
  })

  .state('thanksgivingAfterMeals', {
    url: '/page12',
    templateUrl: 'templates/thanksgivingAfterMeals.html',
    controller: 'thanksgivingAfterMealsCtrl'
  })

$urlRouterProvider.otherwise('/page1')


});