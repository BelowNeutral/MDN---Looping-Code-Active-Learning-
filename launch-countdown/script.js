// SOLUTION CODE BELOW

// let output = document.querySelector('.output');
// output.innerHTML = '';

// let i = 10;

// while (i >= 0) {
//     const para = document.createElement('p');
//     if (i === 10) {
//         para.textContent = `Countdown ${i}`;
//     } else if (i === 0) {
//         para.textContent = 'Blast off!';
//     } else {
//         para.textContent = i;
//     }

//     output.appendChild(para);

//     i--;
// }

// SOLUTION CODE ABOVE





// MY CODE BELOW

// let output = document.querySelector('.output');
// output.innerHTML = '';

// let i = 10;

// while (i >= 0) {
//     const para = document.createElement('p');
//     if (i === 10) {
//         para.textContent = `Countdown ${i}`;
//     } else if (i < 10) {
//         para.textContent = `${i}`;
//     } else {
//         para.textContent = `Blast off!`; // there should've been an additional else if (i === 0)
//     }
//     output.appendChild(para);
//     i--;
// }

// MY CODE ABOVE











// MY CODE BELOW (ATTEMPT #2)

// let output = document.querySelector('.output');
// output.innerHTML = '';

// let i = 10;

// while (i >= 0) {
//     const para = document.createElement('p');
//     if (i === 10) {
//         para.textContent = `Countdown ${i}`;
//     } else if (i === 0) {
//         para.textContent = `Blast off!`;
//     } else {
//         para.textContent = `${i}`;
//     }
//     output.appendChild(para);
//     i--;
// }

// MY CODE ABOVE (ATTEMPT #2)









// MY CODE BELOW (ATTEMPT #3)

// let output = document.querySelector('.output');
// output.innerHTML = '';

// let i = 10;

// while (i >= 0) {
//     const para = document.createElement('p');
//     if (i === 10) {
//         para.textContent = `Countdown ${i}`;
//     } else if (i === 0) {
//         para.textContent = `Blast off!`;
//     } else {
//         para.textContent = i;
//     }
//     output.appendChild(para);
//     i--;
// }

// MY CODE ABOVE (ATTEMPT #3)








// MY CODE BELOW (ATTEMPT #4)

let output = document.querySelector('.output');
output.innerHTML = '';

let i = 10;

while (i >= 0) {
    const para = document.createElement('p');
    if (i === 10) {
        para.textContent = `Countdown ${i}`;
    } else if (i === 0) {
        para.textContent = `Blast off!`;
    } else {
        para.textContent = i;
    }
    output.appendChild(para);
    i--;
}

// MY CODE ABOVE (ATTEMPT #4)