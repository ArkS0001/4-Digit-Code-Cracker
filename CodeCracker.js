code = "0000";
cracked = false;
function CodeGen(){
  code = "";
  for(var i = 0;i < 4; i++){
    code += String(Math.floor(Math.random() * (9 - 0) + 0));
  }
  document.getElementById("code").innerHTML = code;
}

function Cracker(){
  cracked = false;
  a = 0;
  b = 0;
  c = 0;
  d = 0;
  
  while(d<9 && cracked === false){
    c = 0;
    while(c<9 && cracked === false){
      b = 0;
      while(b<9 && cracked === false){
        a = 0;
        while(a<9 && cracked === false){
          if (code === String(d) + String(c) + String(b) + String(a)){
            cracked = true;
            $("#output div:nth-child(4)").text(a);
            $("#output div:nth-child(3)").text(b);
            $("#output div:nth-child(2)").text(c);
            $("#output div:nth-child(1)").text(d);
            $(".number").css({"transition" : "", "color" : "#fff" ,"text-shadow" : "0px 0px 15px #fff"});
            $("#output-shadow").css({"transition" : "", "box-shadow" : "0px 0px 0px #000 inset"});
            setTimeout(function(){$(".number").css({"transition" : "all 0.5s ease", "color" : "#3af" ,"text-shadow" : "0px 0px 5px #3af"});$("#output-shadow").css({"transition" : "all 0.5s ease", "box-shadow" : "0px 0px 5px #000 inset"});},100);
          }else{
            a++;
            $("#output div:nth-child(4)").text(a);
            $("#output div:nth-child(3)").text(b);
            $("#output div:nth-child(2)").text(c);
            $("#output div:nth-child(1)").text(d);
          }
          console.log(String(d)+String(c)+String(b)+String(a));
        }
        b++;
      }
      c++;
    }
    d++;
  }
}
