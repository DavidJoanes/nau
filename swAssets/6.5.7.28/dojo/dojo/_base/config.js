define(["../global","../has","require"],function(global,has,require){var result={};
if(has("dojo-config-api")){var src=require.rawConfig,p;
for(p in src){result[p]=src[p]
}}else{var adviseHas=function(featureSet,prefix,booting){for(p in featureSet){p!="has"&&has.add(prefix+p,featureSet[p],0,booting)
}};
result=has("dojo-loader")?require.rawConfig:global.dojoConfig||global.djConfig||{};
adviseHas(result,"config",1);
adviseHas(result.has,"",1)
}if(!result.locale&&typeof navigator!="undefined"){var language=(navigator.languages&&navigator.languages.length)?navigator.languages[0]:(navigator.language||navigator.userLanguage);
if(language){result.locale=language.toLowerCase()
}}return result
});
//# sourceURL=/swAssets/6.5.7.28/dojo/dojo/_base/config.js