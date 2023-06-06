function myFunction() {
    let NAME = document.getElementById("name").value;  
    let dob = new Date(document.getElementById('dob').value);
    let todayDate = new Date();
    let calculateAge;
    calculateAge = todayDate - dob;
    let age = calculateAge / (1000 * 60 * 60 * 24 * 365);
    let RealAge = Math.floor(age);

    document.getElementById("age").innerHTML = "DEAR " + NAME +", PLEASE YOU ARE " + RealAge + " YEARS OLD.";
    document.getElementById("demo").innerHTML = "THANKS FOR PATRONIZING MY PROJECT AT" + "<br>" + Date();
    }
