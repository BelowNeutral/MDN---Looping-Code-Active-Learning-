// SOLUTION CODE BELOW

// labeling constants and barebones of needed code
const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document. querySelector('.refused');

admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

// for...of loop is used here to grab items from array in order to compare in code blocks
for (const person of people) {
    if (person === 'Phil' || person === 'Lola') {
        refused.textContent += `${person}, `;
    } else {
        admitted.textContent += `${person}, `;
    }
}

// these add a period at the end of both lists bc we don't want them ending with commas
refused.textContent = refused.textContent.slice(0,refused.textContent.length-2) + '.';
admitted.textContent = admitted.textContent.slice(0,admitted.textContent.length-2) + '.';

// SOLUTION CODE ABOVE








// MY CODE BELOW

// const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

// const admitted = document.querySelector('.admitted');
// const refused = document.querySelector('.refused');
// admitted.textContent = 'Admit: ';
// refused.textContent = 'Refuse: ';

// if (people.includes('Phil') && people.includes('Lola')) {
//     const refusedGuests = people[4 && 5];
//     refused.append(refusedGuests).innerHTML;
// } else {
//     admitted.append(people[0] && people[1] && people[3] && people[4] && people[6] && people[7] && people[8]);
// }

// refused.textContent += ;
// admitted.textContent += ;

// MY CODE ABOVE

