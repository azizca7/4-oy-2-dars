                        // Sonlarning musbat, manfiy yoki nolga tengligini tekshirish

// 1-misol

let num1 = +prompt(`son kiriting:`);

if (num1 % 2 == 0) {
    console.log(1);
}

// 2-misol

let num2 = +prompt(`son kiriting:`);

if (num2 % 2 == 1) {
    console.log(-1);
} else {
    console.log(0);
}

// 3-misol

let num3 = +prompt(`son kiriting:`);

if (num3 === 0) {
    console.log(1);
} else {
    console.log(0);
}

// 4-misol

let num4 = +prompt(`son kiriting:`);

if (num4 > 100 && num4 % 2 == 0) {
    console.log(`1`);
}

// 5-misol

let num5 = +prompt(`son kiriting:`);

if (num5 < -10 ) {
    console.log(-1);

}

// 6-misol

let num6 = +prompt(`son kiriting`);

if (num6 > 0) {
    console.log(num6**2);

} else {
    console.log(0);

}

// 7-misol

let num7 = +prompt(`son kiriting`);

if (num7 < 0) {
    num7 = -num7
}

console.log(num7);

// 8-misol

let num8 = +prompt(`son kiriting:`);

if (num8 === 0) {
    console.log(10);
} else {
    console.log(num8);
}

// 9-misol

let num9 = +prompt(`son kiriting:`);

if (num9 > 1) {
    console.log(num9**3);
}

// 10-misol

let num10 = +prompt(`son kiriting:`);

if (num10 < 0) {
    console.log(-10);
} else {
    console.log(10);
}

                        // Juft va toq sonlar bilan ishlash

// 11-misol

let num11 = +prompt(`son kiriting`);

if (num11 % 2 == 0) {
    console.log(2);
} else {
    console.log(1);

}

// 12-misol

let num12 = +prompt(`son kiriting`);

if (num12 % 2 == 1) {
    console.log(3);
} else {
    console.log(4);

}

// 13-misol

let num13 = +prompt(`son kiriting:`);

if (num13 > 10 && num13 % 2 == 0) {
    console.log(1);
}

// 14-misol

let num14 = +prompt(`son kiriting:`);

if (num14 < 0 && num14 % 2 == -1) {
  console.log(-1);
}

// 15-misol

let num15 = +prompt(`son kiriting`);

if (num15 % 2 == 0 && num15 % 5 == 0) {
        console.log(100);

}

// 16-misol

let num16 = +prompt(`son kiriting:`);

if (num16 % 2 != 0) {
    console.log(num16**2);

}

// 17-misol

let num17 = +prompt(`son kiriting:`);

if (num17 % 2 == 0 && num17 > 0) {
    console.log(num17**3);

}

// 18-misol

let num18 = +prompt(`son kiriting:`);

if (num18 % 2 == 0 && num18 > 20) {
    console.log(50);
} else {
    console.log(-50);

}

// 19-misol

let num19 = +prompt(`son kiriting`);

if (num19 % 2 == 1 && num19 % 7 == 0) {
        console.log(7);

}

// 20-misol

let num20 = +prompt(`son kiriting`);

if (num20 % 2 == 0 && num20 < 0) {
        console.log(-20);

}

                        // Ikki son o‘rtasidagi munosabatlarni tekshirish

// 21-misol

let a1 = +prompt(`a ni kiriting:`);
let b1 = +prompt(`b ni kiriting:`);

if (a1 === b1) {
        console.log(1);
} else {
        console.log(0);

}

// 22-misol

let a2 = +prompt(`a ni kiriting:`);
let b2 = +prompt(`b ni kiriting:`);

if (a2 > b2) {
        console.log(2);
} else {
        console.log(3);

}

// 23-misol

let a3 = +prompt(`a ni kiriting:`);
let b3 = +prompt(`b ni kiriting:`);

if (a3 < b3 && a3 > 0) {
        console.log(10);

}

// 24-misol

let a4 = +prompt(`a ni kiriting:`);
let b4 = +prompt(`b ni kiriting:`);

if (a4 > b4 && a4 % 2 == 1) {
        console.log(5);

}

// 25-misol

let a5 = +prompt(`a ni kiriting:`);
let b5 = +prompt(`b ni kiriting:`);

sum = 0;

if (a5 && b5 > 0) {
  sum = a5 + b5;
}

console.log(sum);

// 26-misol

let a6 = +prompt(`a ni kiriting:`);
let b6 = +prompt(`b ni kiriting:`);

if (a6 > b6 && b6 % 2 == 0) {
        console.log(-1);
}

// 27-misol

let a7 = +prompt(`a ni kiriting:`);
let b7 = +prompt(`b ni kiriting:`);

if (a7 === b7) {
  console.log(100);
} else {
  console.log(-100);
}

// 28-misol

let a8 = +prompt(`a ni kiriting:`);
let b8 = +prompt(`b ni kiriting:`);

if (a8 % 10 == 0 && b8 % 5 == 0) {
  console.log(50);
}

// 29-misol

let a9 = +prompt(`a ni kiriting:`);
let b9 = +prompt(`b ni kiriting:`);

if (a9 == b9 * 2) {
  console.log(2);
}

// 30-misol

let a10 = +prompt(`a ni kiriting:`);
let b10 = +prompt(`b ni kiriting:`);

if (a10 < b10 && b10 % 2 == 1) {
        console.log(-10);

}

                        // Shartli kompleks tekshiruvlar

// 31-misol

let num21 = +prompt(`son kiriting:`);

if (num21 > 0 && num21 % 3 == 0) {
        console.log(3);
} else {
        console.log(0);

}

// 32-misol

let num22 = +prompt(`son kiriting:`);

if (num22 < 0 && num22 % 2 == 0) {
        console.log(-2);
}

// 33-misol

let num23 = +prompt(`son kiriting:`);

qoldiq = null;

if (num23 > 0 && num23 % 5 == 0) {
}

console.log(qoldiq = num23 % 5);

// 34-misol

let num24 = +prompt(`son kiriting:`);

if (num24 > 0 && num24 < 10) {
        console.log(num24**2);

}

// 35-misol

let num25 = +prompt(`son kiriting:`);

if (num25 % 2 == 0 || num25 % 4 == 0) {
        console.log(1);
}

// 36-misol

let num26= +prompt(`son kiriting:`);

if (num26 % 2 == 1 && num26 > 15) {
        console.log(15);

}

// 37-misol

let num27 = +prompt(`son kiriting:`);

if (num27 % 2 == 0 && num27 % 3 == 0) {
        console.log(6);
} else {
        console.log(1);

}

// 38-misol

let num28 = +prompt(`son kiriting:`);

if (num28 > 0 &&  num28 % 7 == 0) {
  console.log(14);
}


// 39-misol

let num29 = +prompt(`son kiriting:`);

if (num29 > 0 || num29 == 0) {
  console.log(-5);
}


// 40-misol

let num30 = +prompt(`son kiriting:`);

if (num30 < 0 && num30 % 10 != 0) {
  console.log(-3);
}


