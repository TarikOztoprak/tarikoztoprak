function Ara() {
    alert("Bu işlem geliştirme aşamasında...");
}

//'{ "blogNo":"0" , "blogBaslik":"Null" },' +
var text = '{ "blogs" : [' +
'{"blogNo":"1" , "blogBaslik":" ",'+"blogResim":"example.jpg",'+
'"blogIcerik":" ",'+
'"blogTarih":" "},'+

'{"blogNo":"2" , "blogBaslik":"  ","blogResim":"example.jpg",'+
'"blogIcerik":" ",'+
'"blogTarih":" "},'+

'{"blogNo":"3" , "blogBaslik":" ","blogResim":"example.jpg",'+
'"blogIcerik":" '+
'"blogTarih":" "},'+

'{"blogNo":"4" , "blogBaslik":" ","blogResim":"example.jpg",'+
'"blogIcerik":" '+
' ",'+
'"blogTarih":" "},' +

'{"blogNo":"5" , "blogBaslik":" ","blogResim":"example.jpg",'+
'"blogIcerik":" '+
' ",'+
'"blogTarih":" "}]}';


var maxblogNu = 4;
var blogNu = maxblogNu;
var obj = JSON.parse(text);
kontrol();
document.getElementById("blogNumarasi").innerHTML = "#" + obj.blogs[maxblogNu].blogNo
document.getElementById("baslik").innerHTML = obj.blogs[maxblogNu].blogBaslik
document.getElementById("resim").src = obj.blogs[maxblogNu].blogResim
document.getElementById("içerik").innerHTML = obj.blogs[maxblogNu].blogIcerik
document.getElementById("tarih").innerHTML = obj.blogs[maxblogNu].blogTarih

function sonrakiBlog() {
    blogNu++;
    document.getElementById("blogNumarasi").innerHTML = "#" + obj.blogs[blogNu].blogNo
    document.getElementById("baslik").innerHTML = obj.blogs[blogNu].blogBaslik
    document.getElementById("resim").src = obj.blogs[blogNu].blogResim
    document.getElementById("içerik").innerHTML = obj.blogs[blogNu].blogIcerik
    document.getElementById("tarih").innerHTML = obj.blogs[blogNu].blogTarih
    kontrol();
}

function öncekiBlog() {
    blogNu--;
    document.getElementById("blogNumarasi").innerHTML = "#" + obj.blogs[blogNu].blogNo
    document.getElementById("baslik").innerHTML = obj.blogs[blogNu].blogBaslik
    document.getElementById("resim").src = obj.blogs[blogNu].blogResim
    document.getElementById("içerik").innerHTML = obj.blogs[blogNu].blogIcerik
    document.getElementById("tarih").innerHTML = obj.blogs[blogNu].blogTarih
    kontrol();
}

function blogAc(numara) {
    blogNu = numara;
    document.getElementById("blogNumarasi").innerHTML = "#" + obj.blogs[blogNu].blogNo
    document.getElementById("baslik").innerHTML = obj.blogs[blogNu].blogBaslik
    document.getElementById("resim").src = obj.blogs[blogNu].blogResim
    document.getElementById("içerik").innerHTML = obj.blogs[blogNu].blogIcerik
    document.getElementById("tarih").innerHTML = obj.blogs[blogNu].blogTarih
    kontrol();
}

function kontrol() {
    if (blogNu == 0) {
        document.getElementById("geri").style.visibility = "hidden"
        document.getElementById("ileri").style.visibility = "visible"
    }
    if (blogNu == maxblogNu) {
      document.getElementById("ileri").style.visibility="hidden"
      document.getElementById("geri").style.visibility = "visible"
    }
    if(blogNu != maxblogNu && blogNu != 0)
    {
        document.getElementById("ileri").style.visibility = "visible"
        document.getElementById("geri").style.visibility = "visible"
    }
}

for (var i = 0; i <=maxblogNu ; i++) {
    document.getElementById("all-bar").innerHTML += '<a onclick="blogAc('+i+')" href="#'+i+'">'+obj.blogs[i].blogBaslik +'</a> <br><br>' ;
    document.getElementById("all-bar").onclick = blogAc(i);
}
