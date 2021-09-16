var admin = [
    {
        username: "RexTheDev",
        password: "FuriousX"
    },{
        username: "FuriousX",
        password: "Admin"
    },
    {
        username: "darkrojo",
        password: "DaRkRed666"
    }
]

function getInfo() {
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    for(i = 0; i <admin.length; i++) {
        if(username == admin[i].username && password == admin[i].password) {
window.location.href = "https://flebbylife.xyz/Admin";

window.location.replace("http:/flebbylife.xyz/Redirect");
        }
    }
}