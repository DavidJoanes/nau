define(["./kernel","../on","../has","../dom-geometry"],function(dojo,on,has,dom){if(on._fixEvent){var fixEvent=on._fixEvent;
on._fixEvent=function(evt,se){evt=fixEvent(evt,se);
if(evt){dom.normalizeEvent(evt)
}return evt
}
}var ret={fix:function(evt,sender){if(on._fixEvent){return on._fixEvent(evt,sender)
}return evt
},stop:function(evt){if(has("dom-addeventlistener")||(evt&&evt.preventDefault)){evt.preventDefault();
evt.stopPropagation()
}else{evt=evt||window.event;
evt.cancelBubble=true;
on._preventDefault.call(evt)
}}};
if(has("extend-dojo")){dojo.fixEvent=ret.fix;
dojo.stopEvent=ret.stop
}return ret
});
//# sourceURL=/swAssets/6.5.7.28/dojo/dojo/_base/event.js