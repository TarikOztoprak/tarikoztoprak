function Ara() {
    alert("Bu işlem geliştirme aşamasında...");
}

//'{ "blogNo":"0" , "blogBaslik":"Null" },' +
var text = '{ "blogs" : [' +
'{"blogNo":"1" , "blogBaslik":"İlk Blog ve Kaydırma Çubuğu(Scroll Bar) Kapatma","blogResim":"example.jpg",'+
'"blogIcerik":"&emsp; Kendime bir blog sitesi yazarak frontend ve backend bilgilerimi geliştirebileceğimi düşündüm. İşe yaradı da!'+
'Ama bloğuma yazacağım içeriği hiç düşünmemiştim. Bugün, öğrendiğim ve daha sonra unutmak istemediğim bazı püf noktalarını'+
'yazmaya karar verdim ve bu ilk bloğumu yazmaya başladım. <br> <br>'+
'&emsp; Bloğumunda gereksiz bir şekilde yatay kaydırma çubuğu'+
'(scroll bar) bulunmaktaydı ve sitemi çirkin göstermekteydi. Meğer basit bir css koduyla çözülebilmekteymiş. kod: <br>'+
'<div >overflow-x: hidden;</div> x ekseninde kaydırma çubuğuna kapatır.'+
'<div >overflow-y: hidden;</div> y ekseninde kaydırma çubuğunu kapatır.'+
'<div>overflow: hidden</div> yaparsak hem x hem de y yönünde kaydırma çubuğunu kapatır. <br>'+
'&emsp; Bu kodu css body içine ekleyerek sorunumu çözdüm.",'+
'"blogTarih":"21.06.2020"},'+

'{"blogNo":"2" , "blogBaslik":"Deneme ","blogResim":"example.jpg",'+
'"blogIcerik":"adsasfafafafasf'+
'dsfdsafdafdsafdsafdsafdafda",'+
'"blogTarih":"22.06.2020"},'+

'{"blogNo":"3" , "blogBaslik":"Deneme2 ","blogResim":"example.jpg",'+
'"blogIcerik":"adsasfafafafasf'+
'dsfdsafdafdsafdsafdsafdafda",'+
'"blogTarih":"25.06.2020"},'+

'{"blogNo":"4" , "blogBaslik":"Deneme3 ","blogResim":"example.jpg",'+
'"blogIcerik":"adsasfafafafasf'+
'dsfdsafdafdsafdsafdsafdafda",'+
'"blogTarih":"25.06.2020"},' +

'{"blogNo":"5" , "blogBaslik":"Deneme4 ","blogResim":"example.jpg",'+
'"blogIcerik":"adsasfafafafasf'+
'dsfdsafdafdsafdsafdsafdafda",'+
'"blogTarih":"25.06.2020"}]}';


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