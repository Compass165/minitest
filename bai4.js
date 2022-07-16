function tinh() {
    let number = document.getElementById('num').value;
    let i = 1;
    let cou = '';
    while (i <= number) {
        cou += i + ', ';
        i++;
    }
    document.getElementById('kq').innerHTML = "Dãy số từ 1- n là: " + cou;
}