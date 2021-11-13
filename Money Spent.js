function back_thnagy(){
    var input1 = Number (document.getElementById("thing1").value);
    var input2 = Number(document.getElementById("thing2").value);
    var input3 = Number (document.getElementById("thing3").value);
    var input4 = Number (document.getElementById("thing4").value);
    var input5 = Number (document.getElementById("thing5").value);
    var input6 = Number (document.getElementById("thing6").value);
    var input7 = Number (document.getElementById("thing7").value);
    var input8 = Number (document.getElementById("thing8").value);
    var input9 = Number (document.getElementById("thing9").value);

    var alltogether = input1+input2+input3+input4+input5+input6+input7+input8+input9;

    localStorage.setItem("alltogether", alltogether);
    window.location="Calculate.html";
}