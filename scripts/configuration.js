"use strict";

angular.module('starter.controllers', [])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    setTimeout(function() {
        navigator.splashscreen.hide();
    }, 100);
 });
})

.constant('ENV', {name:'development',apiEndpoint:'http://dev.yoursite.com:10000/',youtubeKey:'AIzaSyDael5MmCQa1GKQNKQYypmBeB08GATgSEo',ionicPublicKey:'d0c34ce461db295ae1360a1b2a25aca7a8308a4c4f2c96ba',ionicPrivateKey:'846ffba0009a7f4b693564199530891101d4d1af025902ae',ionicAppId:'3964a473',gcmId:'228071472080',vimeoAccessToken:'d995ffff0228beba7c9716c3ee0d4add',facebookAppId:'785803021527033',facebookPermanentAccessToken:'CAANL6xXrSHYBANNHhMUDugVZBHXfVQBMeWG6FmpYROWcOEmC2xze1BNiraZB87NCAZC3w08L7KhCBnhJItZCUzWCgBNzBjt0BkoV6qMoXjIZBjkWRTUGgZBR39OZAiP3DF76jufQ4hJ7xsdQc0l68vFAZAePdZCZAjkjTwaOeEZC22xi8ZAQYBqvNvYRgIfOZBzf4zRURHgrLtNazxzln8ZBkd9FZC7',facebookPage:'apple.inc',instagramAppId:'2998ca20ed924ca3be22907c6ae77363',firebaseUrl:'https://scc-demacro.firebaseio.com',iosUrl:'com.titaniumtemplates.barebone-ionic',androidUrl:'market://details?id=com.titaniumtemplates.barebone-ionic',usesUntilRatePrompt:4,androidPublisherKey:'ca-app-pub-3965039466794589/2790557649',iosPublisherKey:'ca-app-pub-3965039466794589/2930158449',googleAppId:'400671186930-m07eu77bm43tgr30p90k6b9e1qgsva4p.apps.googleusercontent.com',twitterApiKey:'wXRPbDKzyLXOy4etLq4fNqu8M',twitterApiSecret:'1Bi6DGM98yc9MToSLstGLFaB2tvHOLkBrBBYm8WWI2fTKl0gWX'})

;
