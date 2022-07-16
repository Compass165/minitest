function calculator() {
let GT = 1;
let chuoi = '';
let i = 1;
let number = document.getElementById('ip').value;
    for (; i<= number; i++) {
    GT *=i;
    chuoi += i + ".";
    }
document.getElementById('chuoi').innerText = "Dãy Giai thừa của " + number + ' là: ' + chuoi;
document.getElementById("nb").innerText = "Giai thừa của số " + number + " là: " + GT;
}