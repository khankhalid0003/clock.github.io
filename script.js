
function test() {
    const d =new Date();

  let h = document.getElementById("hours");
  let m = document.getElementById("minuts");
  let s = document.getElementById("seconds");


  let formate=d.getHours();
  (formate > 12)?formate=formate % 12:formate=formate;

  formate < 10
    ? (h.innerHTML = "0" + formate)
    : (h.innerHTML = formate);
  d.getMinutes() < 10
    ? (m.innerHTML = " : "+"0"+ d.getMinutes())
    : (m.innerHTML = " : "+d.getMinutes());
  d.getSeconds() < 10
    ? (s.innerHTML = " :"+"0"+d.getSeconds())
    : (s.innerHTML =" : "+d.getSeconds());
}
setInterval(test, 1000);
let d= new Date();
let newformat = d.getHours() >= 12 ? "PM" : "AM";
document.getElementById("format").innerHTML = newformat;
