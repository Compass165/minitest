let count = 0;
let i = 1
let result = ''
while (count < 15) {
    if (i %3 == 0) {
        count++;
        result += i + ',';
    }
    i++
}
document.write("15 số đầu tiên chia hết cho 3 là: " + result + "<br>");


