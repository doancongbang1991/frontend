;window.CloudflareApps=window.Eager=window.CloudflareApps||window.Eager||{};window.CloudflareApps=window.CloudflareApps||{};CloudflareApps.siteId="d54782092980001a7ac0b68bd1e1d1ef";CloudflareApps.installs=CloudflareApps.installs||{};;(function(){'use strict'
CloudflareApps.internal=CloudflareApps.internal||{}
var errors=[]
CloudflareApps.internal.placementErrors=errors
var errorHashes={}
function noteError(options){var hash=options.selector+'::'+options.type+'::'+(options.installId||'')
if(errorHashes[hash]){return}
errorHashes[hash]=true
errors.push(options)}
var initializedSelectors={}
var currentInit=false
CloudflareApps.internal.markSelectors=function markSelectors(){if(!currentInit){check()
currentInit=true
setTimeout(function(){currentInit=false})}}
function check(){var installs=window.CloudflareApps.installs
for(var installId in installs){if(!installs.hasOwnProperty(installId)){continue}
var selectors=installs[installId].selectors
if(!selectors){continue}
for(var key in selectors){if(!selectors.hasOwnProperty(key)){continue}
var hash=installId+'::'+key
if(initializedSelectors[hash]){continue}
var els=document.querySelectorAll(selectors[key])
if(els&&els.length>1){noteError({type:'init:too-many',option:key,selector:selectors[key],installId:installId})
initializedSelectors[hash]=true
continue}else if(!els||!els.length){continue}
initializedSelectors[hash]=true
els[0].setAttribute('cfapps-selector',selectors[key])}}}
CloudflareApps.querySelector=function querySelector(selector){if(selector==='body'||selector==='head'){return document[selector]}
CloudflareApps.internal.markSelectors()
var els=document.querySelectorAll('[cfapps-selector="'+selector+'"]')
if(!els||!els.length){noteError({type:'select:not-found:by-attribute',selector:selector})
els=document.querySelectorAll(selector)
if(!els||!els.length){noteError({type:'select:not-found:by-query',selector:selector})
return null}else if(els.length>1){noteError({type:'select:too-many:by-query',selector:selector})}
return els[0]}
if(els.length>1){noteError({type:'select:too-many:by-attribute',selector:selector})}
return els[0]}}());(function(){'use strict'
var prevEls={}
CloudflareApps.createElement=function createElement(options,prevEl){options=options||{}
CloudflareApps.internal.markSelectors()
try{if(prevEl&&prevEl.parentNode){var replacedEl
if(prevEl.cfAppsElementId){replacedEl=prevEls[prevEl.cfAppsElementId]}
if(replacedEl){prevEl.parentNode.replaceChild(replacedEl,prevEl)
delete prevEls[prevEl.cfAppsElementId]}else{prevEl.parentNode.removeChild(prevEl)}}
var element=document.createElement('cloudflare-app')
var container
if(options.pages&&options.pages.URLPatterns&&!CloudflareApps.matchPage(options.pages.URLPatterns)){return element}
try{container=CloudflareApps.querySelector(options.selector)}catch(e){}
if(!container){return element}
if(!container.parentNode&&(options.method==='after'||options.method==='before'||options.method==='replace')){return element}
if(container===document.body){if(options.method==='after'){options.method='append'}else if(options.method==='before'){options.method='prepend'}}
switch(options.method){case'prepend':if(container.firstChild){container.insertBefore(element,container.firstChild)
break}
case'append':container.appendChild(element)
break
case'after':if(container.nextSibling){container.parentNode.insertBefore(element,container.nextSibling)}else{container.parentNode.appendChild(element)}
break
case'before':container.parentNode.insertBefore(element,container)
break
case'replace':try{var id=element.cfAppsElementId=Math.random().toString(36)
prevEls[id]=container}catch(e){}
container.parentNode.replaceChild(element,container)}
return element}catch(e){if(typeof console!=='undefined'&&typeof console.error!=='undefined'){console.error('Error creating Cloudflare Apps element',e)}}}}());(function(){'use strict'
CloudflareApps.matchPage=function matchPage(patterns){if(!patterns||!patterns.length){return true}
var loc=document.location.host+document.location.pathname
if(window.CloudflareApps&&CloudflareApps.proxy&&CloudflareApps.proxy.originalURL){var url=CloudflareApps.proxy.originalURL.parsed
loc=url.host+url.path}
for(var i=0;i<patterns.length;i++){var re=new RegExp(patterns[i],'i')
if(re.test(loc)){return true}}
return false}}());CloudflareApps.installs["Gja7vEoCkvPD"]={appId:"XzVIEqe1R2kW",scope:{}};;CloudflareApps.installs["Gja7vEoCkvPD"].options={"chrome":0,"edge":25,"firefox":0,"ie":7,"opera":0,"safari":0};;CloudflareApps.installs["lzvdEj2bhKN1"]={appId:"lMxPPXVOqmoE",scope:{}};;CloudflareApps.installs["lzvdEj2bhKN1"].options={"id":"UA-38030533-1","social":true};;CloudflareApps.installs["yfn5bixDp2AY"]={appId:"W-bXB8WgEtY2",scope:{}};;CloudflareApps.installs["yfn5bixDp2AY"].options={"account":{"accountId":"F-Wro2J9Dnd0","service":"drift-chat"},"activeColor":"#0176FF","autoOpen":false,"awayMessage":"Hey, 👋🏻 Any questions about this template?  please leave your email address here and I will get back to you soon 😊 ","backgroundColor":"#5053ff","embedId":"uhgmyw2yh392","foregroundColor":"#FFFFFF","orgName":"Surjith S M","welcomeMessage":"Hey, 👋🏻 Thanks for checking out this template. If you have any questions, please let me know. I'll be happy to help you 😊"};;CloudflareApps.installs["yfn5bixDp2AY"].URLPatterns=["^mail.web3canvas.com/?.*$"];;CloudflareApps.installs["yfn5bixDp2AY"].product={"id":"drift-free"};;if(CloudflareApps.matchPage(CloudflareApps.installs['lzvdEj2bhKN1'].URLPatterns)){(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');};if(CloudflareApps.matchPage(CloudflareApps.installs['lzvdEj2bhKN1'].URLPatterns)){(function(){var options=CloudflareApps.installs['lzvdEj2bhKN1'].options
if(!options.id)return
function queue(callback){if('addEventListener'in window){window.addEventListener('load',callback,false)}else{window.attachEvent('onload',callback)}}
function resolveParameter(uri,parameter){if(uri){var parameters=uri.split('#')[0].match(/[^?=&]+=([^&]*)?/g)
for(var i=0,chunk;chunk=parameters[i];++i){if(chunk.indexOf(parameter)===0){return unescape(chunk.split('=')[1])}}}}
window.ga('create',options.id,'auto')
window.ga('set','forceSSL',true)
window.ga('send','pageview')
if(options.social){queue(function(){var FB=window.FB
var twttr=window.twttr
if('FB'in window&&'Event'in FB&&'subscribe'in window.FB.Event){FB.Event.subscribe('edge.create',function(targetUrl){window.ga('send','social','facebook','like',{page:targetUrl})})
FB.Event.subscribe('edge.remove',function(targetUrl){window.ga('send','social','facebook','unlike',{page:targetUrl})})
FB.Event.subscribe('message.send',function(targetUrl){window.ga('send','social','facebook','send',{page:targetUrl})})}
if('twttr'in window&&'events'in twttr&&'bind'in twttr.events){twttr.events.bind('tweet',function(event){if(event){var targetUrl
if(event.target&&event.target.nodeName==='IFRAME'){targetUrl=resolveParameter(event.target.src,'url')}
window.ga('send','social','twitter','tweet',{page:targetUrl})}})}})}}())};if(CloudflareApps.matchPage(CloudflareApps.installs['yfn5bixDp2AY'].URLPatterns)){'use strict';(function(){var defaultOptions={'orgName':'Your Company','activeColor':'#2d88f3','backgroundColor':'#2d88f3','foregroundColor':'#ffffff','welcomeMessage':'Thank you for visiting! How can I help?','awayMessage':'We’re not currently online right now but if you leave a message, we’ll get back to you as soon as possible!','autoOpen':false}
var getOptions=function(obj){for(var prop in obj){if(obj.hasOwnProperty(prop))
return false;}
var isEmpty=JSON.stringify(obj)===JSON.stringify({});return isEmpty?defaultOptions:CloudflareApps.installs['yfn5bixDp2AY'].options}
var config={};var options=getOptions();var isPreview="yfn5bixDp2AY"=="preview";if(isPreview&&(!options||!options.embedId))
options.embedId="f6r6234aekhz";if(!options||!options.embedId){return;}
var loadConfiguration=function(cb){var embedId=options.embedId||"f6r6234aekhz";var xhr=new XMLHttpRequest;xhr.open('GET',"https://customer.api.drift.com/embeds/"+embedId,true);xhr.onload=function(){var response=JSON.parse(xhr.response);response.configuration&&cb(response.configuration);};xhr.onerror=function(err){console.error("Error loading drift config",err);};xhr.send();}
var writeConfig=function(){if(config&&window.drift&&window.drift.config){drift.config(config);if(options.autoOpen)
drift.api.showWelcomeMessage()}}
CloudflareApps.installs['yfn5bixDp2AY'].scope.setOptions=function(opts){var ensureHex=function(color){if(!color)return'#fff'
var isValid=color[0]==='#'
var updatedString='#'+color
return isValid?color:updatedString}
options=opts;config.backgroundColor=ensureHex(options.backgroundColor);config.foregroundColor=ensureHex(options.foregroundColor);config.activeColor=ensureHex(options.activeColor);config.messages=config.messages||{}
config.messages.welcomeMessage=(!!options.welcomeMessage&&options.welcomeMessage.length)?options.welcomeMessage:" ";config.messages.awayMessage=(!!options.awayMessage&&options.awayMessage.length)?options.awayMessage:" ";config.autoAssignee=config.autoAssignee||{};config.autoAssignee.name=options.orgName;config.enableWelcomeMessage=options.autoOpen;writeConfig()}
CloudflareApps.installs['yfn5bixDp2AY'].scope.updateConfig=function(){loadConfiguration(function(conf){config=conf;});}
CloudflareApps.installs['yfn5bixDp2AY'].scope.updateConfig();!function(){var driftt=window.driftt=window.drift=window.driftt||[];if(driftt.init){return;}
if(driftt.invoked){if(window.console&&console.error){console.error('Drift snippet included twice.');}
return;}
driftt.invoked=true;driftt.methods=['identify','config','track','reset','debug','show','ping','page','hide','off','on'];driftt.factory=function(method){return function(){var args=Array.prototype.slice.call(arguments);args.unshift(method);driftt.push(args);return driftt;};};driftt.methods.forEach(function(key){driftt[key]=driftt.factory(key);});return driftt.load=function(embedId){var REFRESH_RATE=300000;var timeHash=Math.ceil(new Date()/REFRESH_RATE)*REFRESH_RATE;var script=document.createElement('script');script.type='text/javascript';script.async=true;script.crossorigin='anonymous';script.src='https://js.driftt.com/include/'+timeHash+'/'+embedId+'.js';var first=document.getElementsByTagName('script')[0];first.parentNode.insertBefore(script,first);};}();drift.SNIPPET_VERSION='0.3.1';drift.on('ready',function(){CloudflareApps.installs['yfn5bixDp2AY'].scope.setOptions&&CloudflareApps.installs['yfn5bixDp2AY'].scope.setOptions(options)});drift.load(options.embedId);})();}(function(){var script = document.createElement('script');script.src = '/cdn-cgi/apps/body/8Zfj9myxNJuMigX_jydvx2JiQA8.js';document.head.appendChild(script);})();