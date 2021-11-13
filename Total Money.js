var money1 = localStorage.getItem("alltogether", alltogether);
var money2 = localStorage.getItem("total_income", total_income);
var total_j = money1 - money2;

document.getElementById("Total_end")= total_j +" Dollars!";
