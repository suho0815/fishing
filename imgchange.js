var imgcount = 2;
var imgcount1 =2;
  function changeship(img1,img2) {
    var c;
    c = document.getElementById("ship");
    if (imgcount % 2==0){
      c.src = img1;
      imgcount++;
    }else{
      c.src = img2;
      imgcount++;
    }
}
function changeriver(img1,img2) {
  var c;
  c = document.getElementById("river");
  if (imgcount1 % 2==0){
    c.src = img1;
    imgcount1++;
  }else{
    c.src = img2;
    imgcount1++;
  }
}
var mapcnt = new Array(2,2,2,2);
var map_arr = new Array("경기,강원도지역","충청도지역","경상도지역","전라,제주도지역");
function changemap(id) {
  var c, p;
  c = document.getElementById(id);
  p = document.getElementById('p1');
  console.log(mapcnt[0]);
  if (mapcnt[0]%2==0 && id.endsWith('2')){
    c.style.display ="inline";
    mapcnt[0]++;
  }else if (mapcnt[0]%2 !=0 && id.endsWith('2')) {
    c.style.display ="none";
    mapcnt[0]++;
  }
  if (mapcnt[1]%2==0 && id.endsWith('3')){
    c.style.display ="inline";
    mapcnt[1]++;
  }else if (mapcnt[1]%2 !=0 && id.endsWith('3')) {
    c.style.display ="none";
    mapcnt[1]++;
  }
  if (mapcnt[2]%2==0 && id.endsWith('4')){
    c.style.display ="inline";
    mapcnt[2]++;
  }else if (mapcnt[2]%2 !=0 && id.endsWith('4')) {
    c.style.display ="none";
    mapcnt[2]++;
  }
  if (mapcnt[3]%2==0 && id.endsWith('5')){
    c.style.display ="inline";
    mapcnt[3]++;
  }else if (mapcnt[3]%2 !=0 && id.endsWith('5')) {
    c.style.display ="none";
    mapcnt[3]++;
  }
}
function changep(a) {
  var p;
  p = document.getElementById('p1');
  if (a == "all"){
    p.innerHTML = "전체 낚시 정보";
  }else if (a == "river") {
    p.innerHTML = "민물낚시 정보";
  }else if (a == "ship") {
    p.innerHTML = "배낚시 정보";
  }
}
