function displayblock(str){
  let table = document.querySelector("header table."+str);
  table.setAttribute("style", "display: block;");
};
function displaynone(str){
  let table = document.querySelector("header table."+str);
  table.setAttribute("style", "display: none;");
};
function displaynoneall(){
  document.querySelector("header table.allcategories").setAttribute("style", "display: none;");
  document.querySelector("header table.electronics").setAttribute("style", "display: none;");
  document.querySelector("header table.mobiles").setAttribute("style", "display: none;");
  document.querySelector("header table.men").setAttribute("style", "display: none;");
  document.querySelector("header table.women").setAttribute("style", "display: none;");
  document.querySelector("header table.home").setAttribute("style", "display: none;");
  document.querySelector("header table.babytoys").setAttribute("style", "display: none;");
  document.querySelector("header table.supermarket").setAttribute("style", "display: none;");
};
