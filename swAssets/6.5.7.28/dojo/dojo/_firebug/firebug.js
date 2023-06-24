define([],function(){var isNewIE=(/Trident/.test(window.navigator.userAgent));
if(isNewIE){var calls=["log","info","debug","warn","error"];
for(var i=0;
i<calls.length;
i++){var m=calls[i];
if(!console[m]||console[m]._fake){continue
}var n="_"+calls[i];
console[n]=console[m];
console[m]=(function(){var type=n;
return function(){console[type](Array.prototype.join.call(arguments," "))
}
})()
}try{console.clear()
}catch(e){}}});
//# sourceURL=/swAssets/6.5.7.28/dojo/dojo/_firebug/firebug.js