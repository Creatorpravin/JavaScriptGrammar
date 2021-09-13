const get = async function(username,password){
    try{
        const user = await API.get.user(username, password);
        const roles = await API.get.roles(user);
        const status = await API.get.status(user);
        return user;
    } catch (error){
        //handle error as they come
        console.log(error);
    }
};
const userinfo = get();  //get user info
if(userinfo != null){
    let roles = userinfo.roles;
}else {
    console.log("wrong username or password");
}