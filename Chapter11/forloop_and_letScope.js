for (var i=0;i<10;i++) let x=i;    //SyntaxError: Lexical declaration cannot appear in a single-statement context
for (var i=0;i<10;i++) {let x=i;}  //" "