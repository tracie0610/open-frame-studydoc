/* Copyright (C) 2008 Microsoft Corporation */var BindingsVersion=RuntimeVersion=$Version;new function(){var b=Object,c=$Binding,e=$Request,a=$Network;if(typeof Web!="undefined"&&Web.Runtime&&Web.Runtime.BaseUrl)$Config.baseUrl=Web.Runtime.BaseUrl;Web={Debug:$Debug,Memory:$Memory,Browser:$Browser,Dom:{getElementsByCssSelector:$Dom.Css.getElementsByCssSelector,getAnyElementByTagName:$Dom.getAnyElementByTagName},Enum:{create:function(){return $Enum.apply(new $Enum,arguments)},extend:function(a,b){if(!a)a=new $Enum;return a.extend(b)},getValue:function(a,b){return a.parse(b)}},Flags:{create:function(){return $Flags.apply(new $Flags,arguments)}},StringBuilder:$StringBuilder,Event:$Event,Conversion:{coerceInt:Number.coerceInt,coerceFloat:Number.coerceFloat},Type:{resolve:b.resolve,compare:b.compare,isString:b.isString,isArray:b.isArray,isFunction:b.isFunction,isObject:b.isObject,isBoolean:b.isBoolean,isNumber:b.isNumber},Runtime:{culture:$Config.culture,oninit:null,onunload:$Runtime.onunload,init:function(){Web.Runtime._readyState=Web.Runtime.readyStateType.Init;if(Web&&Web.Runtime.BaseUrl)$Config.baseUrl=Web.Runtime.BaseUrl;$Binding.parse();Web.Runtime._readyState=Web.Runtime.readyStateType.InitComplete},MaxThreadLock:$Task.Scheduler.lock,readyStateType:new $Enum("Uninitialized","Init","InitComplete")},Utility:{extractHost:e.extractHost,resolveUrl:e.resolveUrl,Prioritizer:Array.$Prioritizer,loadSources:function(c,e,h,d,g,b,f){(new a(g,f)).add(a.Type.Script,c).add(a.Type.CSS,e).add(a.Type.Image,d).add(a.Type.XML,h).load(b)}},Network:{_streamUpdate:a._streamUpdate,registerProxy:a.Proxy._registerProxy,abortGroup:a.abortGroup,createRequest:function(h,p,c,g,i,j,l,m,k,o,n){var f=m;if(n)f=f|a.Flags.CLIENTPROXY;var d={},b;function q(a){if(g)g(a[0].resource,c)}d.abort=function(){if(b)b.abort()};d.isExecuting=function(){return b&&b.isExecuting};d.execute=function(){b=new a(i,c,[(new e(p,h,f,c)).setHeaders(l).setPostString(j).setGroup(o).setTimeout(k).setObject(c&&c.pool)]);b.load(q)};return d},createBatch:function(d,f){var c=new a(d,f),b={};b.abort=function(){c.abort()};b.execute=function(a){c.load(a)};b.add=function(f,l,b,g,i,j,k,h){var d=j;if(k)d=d|a.Flags.CLIENTPROXY;c.add(f,(new e(l,f,d,b)).setHeaders(i).setPostString(g).setTimeout(h).setObject(b&&b.pool))};return b},Type:a.Type,registerScript:a.registerScript,RegisterBaseDomain:a.registerBaseDomain,onprofile:a.Events.onprofile,onrequest:a.Events.onrequest},Bindings:{Base:c,extendBinding:c.extend,revalidateBinding:c.validate,removeBindings:c.remove,attachElementBindingSync:function(g,d,f,e,c){var h=b.resolve(d),a=new h(g,e,c);a.initialize(f);return a},attachElementBinding:function(k,h,j,i,g,l,b,e,m,f,d){function n(){c.define(h,null,j).setDefaults(i).setNS(g).bindTo(k).attach(function(a){l(a&&a[0])})}if(!b&&!e&&!d&&!f)return Web.Bindings.attachElementBindingSync(k,h,j,i,g);else(new a(m)).add(a.Type.Script,b).add(a.Type.CSS,e).add(a.Type.Image,d).add(a.Type.XML,f).load(n)},attachSelectorBindingSync:function(e,b,g,f,a,h,d){return c.define(b,h,g).setDefaults(f).setNS(a).bindCss(e).attach(d)},attachSelectorBinding:function(i,g,k,j,f,l,h,b,d,m,e,c){var o=this;function n(){o.attachSelectorBindingSync(i,g,k,j,f,l,h)}if(!b&&!d&&!c&&!e)return Web.Bindings.attachSelectorBindingSync(i,g,k,j,f,l,h);else(new a(m)).add(a.Type.Script,b).add(a.Type.CSS,d).add(a.Type.Image,c).add(a.Type.XML,e).load(n)}},Accessibility:{notify:$Accessibility.notify},Error:$Tracing.Error};Web.Event.create=function(a){return new $Event(a)};Type={createEnum:function(){var c=arguments.length,b=[];for(var a=1;a<c;a++)b.push(arguments[a]);return $Flags.apply(new $Flags,b)},createFlags:Web.Flags.create};$Event.prototype.clear=$Event.prototype.dispose;$Event.prototype.reset=function(){this.isInvoked=false};$Event.DOM.prototype.clear=$Event.DOM.prototype.dispose;Web.Utility.Prioritizer.Priorities=Array.$Prioritizer.Priorities;if(typeof Live=="undefined")Live={};if(typeof $Config!="undefined"){var d=$Config.Themes;if(d)Live.Themes={CurrentTheme:d.current,CurrentThemeVersion:d.version,ThemeUrl:d.url,BaseUrl:d.baseUrl}}};Web.Runtime._readyState=Web.Runtime.readyStateType.Uninitialized;registerNamespace("Web.UI.Utilities");Web.UI.Utilities.CleanupHelper=function(){this.mgr=new $Memory.Groups};Web.UI.Utilities.CleanupHelper.prototype={initialize:function(){},dispose:function(){this.mgr.dispose()},disposeGroup:function(a){this.mgr.create(a).dispose()},attachEvent:function(b,d,c,e){var a={};a[c]=e;this.mgr.create(b).Events.register(d,a)},detachEvent:function(b,a,c){b.detachEvent(a,c)},initializeProperty:function(b,a){this.mgr.create(a).Properties.register(b)},registerNode:function(b,a){this.mgr.create(a).Nodes.register(b)},createNode:function(e,a,c,b,d){return this.mgr.create(d).Nodes.create(e,a,c,b)},removeNodeGroup:function(a){this.mgr.create(a).Nodes.dispose()},detachEventGroup:function(a){this.mgr.create(a).Events.dispose()},disposePropertyGroup:function(a){this.mgr.create(a).Properties.dispose()}}