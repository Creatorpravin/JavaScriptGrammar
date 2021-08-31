let instance =new Object();
instance.property=123;
instance.method=function(){}

instance.__proto__;             //{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
instance.__proto__.constructor; //ƒ Object() { [native code] }
instance.constructor;           //ƒ Object() { [native code] }