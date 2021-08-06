let fuel=99;
function launch_rocket(){
    function warning_msg(){
        console.error("Not enough fuel.");
    }
    if(fuel>=100){
        //look like everything's ok
    }else
        warning_msg();
}
launch_rocket();