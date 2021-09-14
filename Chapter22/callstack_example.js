function mop_floor(){
    console.log("Mop the floor.");
    throw new Error("Ran out of water!");
}
function fill_bucket(what){
    console.log("Filling bucket with "+what);
    mop_floor();
}
function clean_house(){
    console.log("Cleaning house.");
    fill_bucket("water");
}
clean_house();