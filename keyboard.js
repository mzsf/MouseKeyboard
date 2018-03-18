function addtextA(){document.myform.outputtext.value += "a";}
function addtextB(){document.myform.outputtext.value += "b";}
function addtextC(){document.myform.outputtext.value += "c";}
function addtextD(){document.myform.outputtext.value += "d";}
function addtextE(){document.myform.outputtext.value += "e";}
function addtextF(){document.myform.outputtext.value += "f";}
function addtextG(){document.myform.outputtext.value += "g";}
function addtextH(){document.myform.outputtext.value += "h";}
function addtextI(){document.myform.outputtext.value += "i";}
function addtextJ(){document.myform.outputtext.value += "j";}
function addtextK(){document.myform.outputtext.value += "k";}
function addtextL(){document.myform.outputtext.value += "l";}
function addtextM(){document.myform.outputtext.value += "m";}
function addtextN(){document.myform.outputtext.value += "n";}
function addtextO(){document.myform.outputtext.value += "o";}
function addtextP(){document.myform.outputtext.value += "p";}
function addtextQ(){document.myform.outputtext.value += "q";}
function addtextR(){document.myform.outputtext.value += "r";}
function addtextS(){document.myform.outputtext.value += "s";}
function addtextT(){document.myform.outputtext.value += "t";}
function addtextU(){document.myform.outputtext.value += "u";}
function addtextV(){document.myform.outputtext.value += "v";}
function addtextW(){document.myform.outputtext.value += "w";}
function addtextX(){document.myform.outputtext.value += "x";}
function addtextY(){document.myform.outputtext.value += "y";}
function addtextZ(){document.myform.outputtext.value += "z";}
function addtext1(){document.myform.outputtext.value += "1";}
function addtext2(){document.myform.outputtext.value += "2";}
function addtext3(){document.myform.outputtext.value += "3";}
function addtext4(){document.myform.outputtext.value += "4";}
function addtext5(){document.myform.outputtext.value += "5";}
function addtext6(){document.myform.outputtext.value += "6";}
function addtext7(){document.myform.outputtext.value += "7";}
function addtext8(){document.myform.outputtext.value += "8";}
function addtext9(){document.myform.outputtext.value += "9";}
function addtext0(){document.myform.outputtext.value += "0";}
function addtextdot(){document.myform.outputtext.value += ".";}
function addtextwww(){document.myform.outputtext.value += "www.";}
function addtexthttp(){document.myform.outputtext.value += "http://";}
function addtextat(){document.myform.outputtext.value += "@";}
function addtextcom(){document.myform.outputtext.value += ".com";}
function addtextspace(){document.myform.outputtext.value += " ";}
function addtextselect(){document.myform.outputtext.select();}
function myFunction() {
  /* Get the text field */
  var copyText = document.getElementById("outputtext");
  /* Select the text field */

  copyText.select();
  /* Copy the text inside the text field */
  document.execCommand("Copy");
  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
}
