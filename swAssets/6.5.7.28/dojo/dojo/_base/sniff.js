define(["./kernel","./lang","../sniff"],function(dojo,lang,has){if(!has("host-browser")){return has
}dojo._name="browser";
lang.mixin(dojo,{isBrowser:true,isFF:has("ff"),isIE:has("ie"),isKhtml:has("khtml"),isWebKit:has("webkit"),isMozilla:has("mozilla"),isMoz:has("mozilla"),isOpera:has("opera"),isSafari:has("safari"),isChrome:has("chrome"),isMac:has("mac"),isIos:has("ios"),isAndroid:has("android"),isWii:has("wii"),isQuirks:has("quirks"),isAir:has("air")});
return has
});
//# sourceURL=/swAssets/6.5.7.28/dojo/dojo/_base/sniff.js