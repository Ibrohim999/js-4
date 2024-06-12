let num1 = +prompt("istagan son yozing")
let num2 = +prompt("istagan son yozing")
let num3 = +prompt("istagan son yozing")
if (num2<num1 && num1<num3 || num2>num1 && num1>num3) {
    alert(num1+" orta qiymat" )
}else if (num1<num2 && num2<num3 || num1>num2 && num2>num3) {
    alert(num2 + " orta qiymat")
}else if (num1<num3 && num3>num2 || num1>num3 && num3>num2) {
    alert(num3 + " orta qiymat")
}else{
    alert("Xatolik bor sondan boshqa narsa yozmang")
}