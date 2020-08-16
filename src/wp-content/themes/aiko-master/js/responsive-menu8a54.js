(function(document,$,undefined){$('body').addClass('js');'use strict';var genesisSample={},mainMenuButtonClass='menu-toggle',subMenuButtonClass='sub-menu-toggle';genesisSample.init=function(){var toggleButtons={menu:$('<button />',{'class':mainMenuButtonClass,'aria-expanded':false,'aria-pressed':false,'role':'button'}).append(genesisSample.params.mainMenu),submenu:$('<button />',{'class':subMenuButtonClass,'aria-expanded':false,'aria-pressed':false,'role':'button'}).append($('<span />',{'class':'screen-reader-text',text:genesisSample.params.subMenu}))};if($('.nav-primary').length>0){$('.nav-primary').before(toggleButtons.menu);}else{$('.nav-header').before(toggleButtons.menu);}
$('nav .sub-menu').before(toggleButtons.submenu);$('.'+mainMenuButtonClass).each(_addClassID);$('.'+mainMenuButtonClass).addClass('dashicons-before dashicons-menu');$('.'+subMenuButtonClass).addClass('dashicons-before dashicons-arrow-down');$(window).on('resize.genesisSample',_doResize).triggerHandler('resize.genesisSample');$('.'+mainMenuButtonClass).on('click.genesisSample-mainbutton',_mainmenuToggle);$('.'+subMenuButtonClass).on('click.genesisSample-subbutton',_submenuToggle);};function _addClassID(){var $this=$(this),nav=$this.next('nav'),id='class';if($(nav).attr('id')){id='id';}
$this.attr('id','mobile-'+$(nav).attr(id));}
function _combineMenus(){if(($('.js nav').css('position')=='relative')&&$('.nav-primary').length>0){$('.nav-header .menu > li').addClass('moved-item');$('.nav-header .menu > li').prependTo('.nav-primary ul.genesis-nav-menu');$('.nav-header').hide();}else if(($('.js nav').css('position')!=='relative')&&$('.nav-primary').length>0){$('.nav-header').show();$('.nav-primary ul.genesis-nav-menu > li.moved-item').appendTo('.nav-header .menu');$('.nav-header .menu > li').removeClass('moved-item');}}
function _doResize(){var buttons=$('button[id^="mobile-"]').attr('id');if(typeof buttons==='undefined'){return;}
_superfishToggle(buttons);_changeSkipLink(buttons);_maybeClose(buttons);}
function _mainmenuToggle(){var $this=$(this);_toggleAria($this,'aria-pressed');_toggleAria($this,'aria-expanded');$this.toggleClass('activated');$this.next('nav, .sub-menu').slideToggle('fast');}
function _submenuToggle(){var $this=$(this),others=$this.closest('.menu-item').siblings();_toggleAria($this,'aria-pressed');_toggleAria($this,'aria-expanded');$this.toggleClass('activated');$this.next('.sub-menu').slideToggle('fast');others.find('.'+subMenuButtonClass).removeClass('activated').attr('aria-pressed','false');others.find('.sub-menu').slideUp('fast');}
function _superfishToggle(buttons){if(typeof $('.js-superfish').superfish!=='function'){return;}
if('none'===_getDisplayValue(buttons)){$('.js-superfish').superfish({'delay':100,'animation':{'opacity':'show','height':'show'},'dropShadows':false});}else{$('.js-superfish').superfish('destroy');}}
function _changeSkipLink(buttons){var startLink='genesis-nav',endLink='mobile-genesis-nav';if('none'===_getDisplayValue(buttons)){startLink='mobile-genesis-nav';endLink='genesis-nav';}
$('.genesis-skip-link a[href^="#'+startLink+'"]').each(function(){var link=$(this).attr('href');link=link.replace(startLink,endLink);$(this).attr('href',link);});}
function _maybeClose(buttons){if('none'!==_getDisplayValue(buttons)){return;}
$('.menu-toggle, .sub-menu-toggle').removeClass('activated').attr('aria-expanded',false).attr('aria-pressed',false);$('nav, .sub-menu').attr('style','');}
function _getDisplayValue($id){var element=document.getElementById($id),style=window.getComputedStyle(element);return style.getPropertyValue('display');}
function _toggleAria($this,attribute){$this.attr(attribute,function(index,value){return 'false'===value;});}
$(document).ready(function(){_combineMenus();$(window).resize(_combineMenus);genesisSample.params=typeof genesisSampleL10n==='undefined'?'':genesisSampleL10n;if(typeof genesisSample.params!=='undefined'){genesisSample.init();}});})(document,jQuery);