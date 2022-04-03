function build(paper){//TODO: Gabrieleみたいにする
  ans = "";
  ans += paper.authors+', "';
  ans += paper.title+'", ';
  ans += paper.venue+', ';
  ans += 'pp.'+paper.pages+', ';
  ans += paper.year+'. ';
  return ans;
}
function insert(papar){
  var newElement = document.createElement("p"); // p要素作成
  //TODO: type (jornal: red, conference: blue)
  //TODO: selected
  newElement.setAttribute("class","box"); // p要素にidを設定
  var contents = build(papar);
  var newContent = document.createTextNode(contents); // テキストノードを作成
  newElement.appendChild(newContent); // p要素にテキストノードを追加
  parentDiv.appendChild(newElement);
}
//Data load
url="https://script.googleusercontent.com/macros/echo?user_content_key=XFPoG5v_Wx71KaVlk-8PvZ9ygZkaX5bik6DTcKAXYPN-FHHN0lhpa4zkUc38qngDafxDy49yRVhAZTofGMUAjtdh3UjsyFBwm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnBB_RvrA0De3ly50qz0Ov68CnuuacshRS9cnVZVmvMYefxsUqRE3VWswl8rUSMn1VP0-Ym7z8OTNXMeB-IPASaQxzZ6c5gJYJdz9Jw9Md8uu&lib=MdV8sc9MNtdoS9AmCJJDdhobZlmcQSnqA";
var request = new XMLHttpRequest();
request.open('GET', url, true);
request.responseType = 'json';
papers = []
request.onload = function () {//TODO: 全部取得する前から表示したい
  var papers = this.response;
  for(p of papers){
    insert(p);
  }
  var loadDiv = document.getElementById("loading");
  loadDiv.remove();
};
request.send();
//Get Element Location
var parentDiv = document.getElementById("publications-div");
//Make Element




