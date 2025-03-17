function calculateBMI() {
    let age = document.getElementById('age').value;
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;
    console.log(age)



    let bmi = weight / ((height / 100) ** 2);
   
    if (age >= 2 && age <= 19) {
        if (bmi < 14) {
            document.getElementById('arrow').innerHTML = '<img src="https://cdn4.iconfinder.com/data/icons/arrows-64/50/arrow-bolded-left-filled-512.png" alt="" style="position: absolute; top: 110px; left: 10px; width: 200px; height: 80px; transform: rotate(20deg);">';
        }
        else if (bmi >= 14 && bmi < 19) {
            document.getElementById('arrow').innerHTML = '<img src="https://cdn4.iconfinder.com/data/icons/arrows-64/50/arrow-bolded-left-filled-512.png" alt="" style="position: absolute; top: 69px; left: 75px; width: 190px; height: 80px; transform: rotate(65deg);">';
        }
        else if (bmi >= 19 && bmi < 24) {
            document.getElementById('arrow').innerHTML = '<img src="https://cdn4.iconfinder.com/data/icons/arrows-64/50/arrow-bolded-left-filled-512.png" alt="" style="position: absolute; top: 69px; left: 150px; width: 190px; height: 80px; transform: rotate(116deg);">';
        }
        else {
            document.getElementById('arrow').innerHTML = '<img src="https://cdn4.iconfinder.com/data/icons/arrows-64/50/arrow-bolded-left-filled-512.png" alt="" style="position: absolute; top: 115px; left: 195px; width: 190px; height: 80px; transform: rotate(160deg);">';
        }
    }
    else if( age < 2)
    {
        alert('Age should be greater than or equal to 2');
        location.reload();
        return;
    }
    else {
        if (bmi < 18.5) {
            document.getElementById('arrow').innerHTML = '<img src="https://cdn4.iconfinder.com/data/icons/arrows-64/50/arrow-bolded-left-filled-512.png" alt="" style="position: absolute; top: 110px; left: 10px; width: 200px; height: 80px; transform: rotate(20deg);">';
        }
        else if (bmi >= 18.5 && bmi < 24.9) {
            document.getElementById('arrow').innerHTML = '<img src="https://cdn4.iconfinder.com/data/icons/arrows-64/50/arrow-bolded-left-filled-512.png" alt="" style="position: absolute; top: 69px; left: 75px; width: 190px; height: 80px; transform: rotate(65deg);">';
        }
        else if (bmi >= 25 && bmi < 29.9) {
            document.getElementById('arrow').innerHTML = '<img src="https://cdn4.iconfinder.com/data/icons/arrows-64/50/arrow-bolded-left-filled-512.png" alt="" style="position: absolute; top: 69px; left: 150px; width: 190px; height: 80px; transform: rotate(116deg);">';
        }
        else {
            document.getElementById('arrow').innerHTML = '<img src="https://cdn4.iconfinder.com/data/icons/arrows-64/50/arrow-bolded-left-filled-512.png" alt="" style="position: absolute; top: 115px; left: 195px; width: 190px; height: 80px; transform: rotate(160deg);">';
        }
    }
    document.getElementById('bmiResult').innerText = `Your BMI is ${bmi.toFixed(2)}`;

}