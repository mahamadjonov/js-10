let boyi = document.getElementById("boyi")
let vazni = document.getElementById("vazn")
let yili = document.getElementById("yili")
let maktab = document.getElementById("maktab")

let boy = {
    boyi: "170",
    yili: "75",
    yil: "2007",
    maktab: "18"
}

console.log(boy);

boyi.innerHTML = boy.boyi;
vazni.innerHTML = boy.yili;
yili.innerHTML = boy.yil;
maktab.innerHTML = boy.maktab;

