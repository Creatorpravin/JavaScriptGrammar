let literal={ 
    property:10,
    method:function(){} 
};
literal.__proto__;               //{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
literal.__proto__.constructor;   //ƒ Object() { [native code] }
literal.constructor;             //ƒ Object() { [native code] }
