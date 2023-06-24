define(["./kernel","./lang","../on"],function(dojo,lang,on){var win=window;
var unload={addOnWindowUnload:function(obj,functionName){if(!dojo.windowUnloaded){on(win,"unload",(dojo.windowUnloaded=function(){}))
}on(win,"unload",lang.hitch(obj,functionName))
},addOnUnload:function(obj,functionName){on(win,"beforeunload",lang.hitch(obj,functionName))
}};
dojo.addOnWindowUnload=unload.addOnWindowUnload;
dojo.addOnUnload=unload.addOnUnload;
return unload
});
//# sourceURL=/swAssets/6.5.7.28/dojo/dojo/_base/unload.js