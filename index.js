var c_name = document.getElementById('name');
var calculate_bill = document.getElementById('calculate');
var units = document.getElementById('units_consumed');
var display_name = document.getElementById('customer-name');
var display_units = document.getElementById('total-units');
var total_bill = document.getElementById('total-bill');
var clear_btn = document.getElementById('clear');
// console.log(c_name,calculate_bill);
calculate_bill.addEventListener("click", () => {
    var name = c_name.value;
    var u = parseInt(units.value.trim());
    // console.log(name);
    // console.log(u);
    if (name.trim() === "") {
        alert("Name should not be empty!")
        return;
    }
    if (isNaN(u)) {
        alert("Enter the units");
        return
    }
    if (u < 0) {
        alert("Units must be greater than 0!!");
        return;
    }

    if (u == 100)
        total = 100 * 5; //if units are 100
    else if (u <= 200 && u > 100) //if units are greater than  100 or equal to 200
        total = ((u - 100) * 7) + 100 * 5;
    else if (u > 200) { //if units are above 200
        //eg : 250 
        //first and last units = 200
        //remaining 250-200=50
        //first 100 -> 100*5=500
        //second 100 -> 100*7=700
        //total for first and last = 700+500=1200
        //remaining 50 -> 50*10 = 500
        //total bill = 500+1200
        total = 1200 + ((u - 200) * 10);
    }
    else{
        total=u*5;
    }

    display_name.innerHTML = "Customer Name:" + name;
    display_units.innerHTML = "Units Consumed:" + u;
    total_bill.innerHTML = "Total Bill : Rs." + total;

});

clear_btn.addEventListener("click", () => {
    display_name.innerHTML = "";
    display_units.innerHTML = "";
    total_bill.innerHTML = "";
    c_name.value = "";
    units.value = "";
})



