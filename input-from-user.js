  //  --this is simple way of taking input--

// let username=window.prompt("what's yor name is ?");
// console.log(username);

// professional way:

let username;
document.getElementById("sub-btn").onclick=function(){
    username=document.getElementById("username").value;
    console.log(username);
    document.getElementById("user_name").textContent=`hello, ${username}`;

}
 


