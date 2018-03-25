function addtext(var_text){
    // let container = document.getElementsByClassName('numbers')
    // container[0].style.boxShadow = '1px 3px 2px rgba(0, 0, 0, 1.25)';
    document.myform.outputtext.value += var_text;
    // console.log(var_text);
}

function deltext(){
    document.myform.outputtext.value = document.myform.outputtext.value.slice(0,document.myform.outputtext.value.length-1);
}

function chgUpperText(){
    let alpha = document.getElementsByClassName('letters');
    alpha = Array.from(alpha);
    // console.log(alpha);
    alpha.forEach(function(input){
        input.value = input.value.toUpperCase();
        input.outerHTML = `<input class=\"letters\" value=\"${input.value}\" onclick=\"addtext('${input.value}');\" type=\"button\">`;
        // alpha.value = input.value.toUpperCase();
        // console.log(alpha);
    });
    // console.log(alpha);
}

function chgLowerText(){
    let alpha = document.getElementsByClassName('letters');
    alpha = Array.from(alpha);
    // console.log(alpha);
    alpha.forEach(function(input){
        input.value = input.value.toLowerCase();
        input.outerHTML = `<input class=\"letters\" value=\"${input.value}\" onclick=\"addtext('${input.value}');\" type=\"button\">`;
        // alpha.value = input.value.toLowerCase();
        // console.log(alpha);
    });
    // console.log(alpha);
}

function chgUpperNum(){
    let num = document.getElementsByClassName('numbers');
    num = Array.from(num);
    num[0].value = "!";
    num[1].value = "@";
    num[2].value = "#";
    num[3].value = "$";
    num[4].value = "%";
    num[5].value = "^";
    num[6].value = "&";
    num[7].value = "*";
    num[8].value = "(";
    num[9].value = ")";
    num[10].value = ",";
    num[11].value = ";";

    num.forEach(function(input, index){
        // console.log(index);
        input.outerHTML = `<input class=\"numbers\" value=\"${num[index].value}\" onclick=\"addtext('${num[index].value}');\" type=\"button\">`;
    });
}

function chgLowerNum(){
    let num = document.getElementsByClassName('numbers');
    num = Array.from(num);
    num[0].value = "1";
    num[1].value = "2";
    num[2].value = "3";
    num[3].value = "4";
    num[4].value = "5";
    num[5].value = "6";
    num[6].value = "7";
    num[7].value = "8";
    num[8].value = "9";
    num[9].value = "0";
    num[10].value = ".";
    num[11].value = ":";

    num.forEach(function(input, index){
        // console.log(index);
        input.outerHTML = `<input class=\"numbers\" value=\"${num[index].value}\" onclick=\"addtext('${num[index].value}');\" type=\"button\">`;
    });
}

function toggleText(){
    let status = document.querySelector('#shift').className;
    if (status === 'off'){
        chgUpperText();
        chgUpperNum();
        document.querySelector('#shift').className = 'on';
        console.log('CAPSLOCK IS ON')
    } else if (status === 'on') {
        chgLowerText();
        chgLowerNum();
        document.querySelector('#shift').className = 'off';
        console.log('CAPSLOCK IS OFF')
    } else {
        console.log('Error')
    }
}

function addtextselect(){
    document.myform.outputtext.select();
}

function myFunction() {
  /* Get the text field */
  let copyText = document.getElementById("outputtext");
  /* Select the text field */

  copyText.select();
  /* Copy the text inside the text field */
  document.execCommand("Copy");
  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
}

// let container = document.getElementsByClassName('numbers')
// container[0].style.boxShadow = '1px 3px 2px rgba(0, 0, 0, 1.25)';
