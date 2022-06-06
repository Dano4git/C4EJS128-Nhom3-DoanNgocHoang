let a = +prompt("Nhap so tu nhien a: ",);
let b = +prompt("Nhap so tu nhien b: ",);
let c = [];
for(let i = a; i<=b ; i++) {
    for(let j = 1; j<=i; j++) {
        if( i/j == j) {
            c.push(i);
        }
    }
}
alert("So chinh phuong trong khoang " +a+ " toi " +b+ " la " +c);
