document.getElementById("push").onclick = Myclick;

function Myclick() {
  let out = document.getElementById("inp1").value;
  document.getElementById("myUL").innerHTML = out;
}
