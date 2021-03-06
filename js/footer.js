angular.module('badgerloop-site')

.directive('badgerloopFooter', function() {
return {
    restrict: 'E',
    template: 

'\
<footer md-colors="{background: \'primary-500\'}">\
<div layout="row" layout-align="center center">\
    <div layout="row" flex>\
	<a hide show-gt-sm href="http://badgerloop.tech" target="_newtab" style="color: white">\
	    <md-button>Hyperloop Feasibility<md-tooltip md-direction="top">Feasibility</md-tooltip></md-button>\
	</a>\
	<div flex></div>\
    </div>\
    <div class="social">\
	<a href="http://www.facebook.com/BadgerloopTeam/" target="_newtab">\
	    <md-button class="social-button" aria-label="Facebook"><img src="im/social/facebook-white.png" /><md-tooltip md-direction="top">Facebook</md-tooltip></md-button>\
	</a>\
	<a href="http://www.instagram.com/badgerloop/" target="_newtab">\
	    <md-button class="social-button" aria-label="Instagram"><img src="im/social/instagram-white.png" /><md-tooltip md-direction="top">Instagram</md-tooltip></md-button>\
	</a>\
	<a href="http://www.twitter.com/badger_loop" target="_newtab">\
	    <md-button class="social-button" aria-label="Twitter"><img src="im/social/twitter-white.png" /><md-tooltip md-direction="top">Twitter</md-tooltip></md-button>\
	</a>\
	<a href="http://www.youtube.com/channel/UC4Y518h3kDsAq3NuDhRTOeA" target="_newtab">\
	    <md-button class="social-button" aria-label="YouTube"><img src="im/social/youtube-white.png" /><md-tooltip md-direction="top">YouTube</md-tooltip></md-button>\
	</a>\
    </div>\
    <div layout="row" flex>\
	<div flex></div>\
	<a hide show-gt-xs href="https://github.com/badgerloop-software/website" target="_newtab" style="color: white">\
	    <md-button class="md-icon-button"><i class="material-icons">code</i><md-tooltip md-direction="top">Source Code</md-tooltip></md-button>\
	</a>\
    </div>\
</div>\
</footer>\
'

}
});
