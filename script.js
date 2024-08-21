var btn = document.getElementById("start");
var opacity = 100;
async function start(){
    for(let i = 0; i != 20; i++){
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve((opacity-=5).toString()+"%"), 40);
          });
        var res = await promise;
        console.log(res);
        btn.style.opacity = res.toString();
        }
        if (res == "0%") {
            btn.style.display = "none";
        }
}