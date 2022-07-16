function calculator() {
    let i = 1;
    let S = '';
    let num = document.getElementById("num").value;
    let count = 1;
    while (i <= num) {
        count = (1 / i);
        S += "1"+"/"+ i + '+ ';
        i++;
    }
    document.getElementById("result").innerText = "Dãy S(n) là: " + S;
    document.getElementById("display").innerText = "Kết quả của biểu thức S" +"(" + num + ") = " + count.toFixed(5);
}