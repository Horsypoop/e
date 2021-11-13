function Back_button(){
    var Monthly_income = Number (document.getElementById("total_amount_of_money").value);
    var Monthly_income2 = Number (document.getElementById("total_amount_of_money2").value);
    var total_income = Monthly_income + Monthly_income2;

    localStorage.setItem("total_income", total_income);
    window.location="Calculate.html";
}