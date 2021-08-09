let a="global a";
        let b="global b";
        function x(){
            console.log("x():golbal b="+b);
            console.log("x():golbal a="+a);
            let a=1;
        }
        x();