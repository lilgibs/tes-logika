// Soal No.1
function jumlahKaosKaki(arr) {
  let valueTemp = {};
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (valueTemp[arr[i]]) {
      delete valueTemp[arr[i]];
      count++;
    } else {
      valueTemp[arr[i]] = true;
    }
  }

  return count;
}

let arrA = [10, 20, 20, 10, 10, 30, 50, 10, 20,];
let arrB = [6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5];
let arrC = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3];

console.log(`No. 1 ====================`)
console.log(`a. ${jumlahKaosKaki(arrA)}`);
console.log(`b. ${jumlahKaosKaki(arrB)}`);
console.log(`b. ${jumlahKaosKaki(arrC)}`);
console.log(`==========================`)

console.log(``)
// Soal No.2
const specialCharChecker = (arr) => {
  const format = /[!@#$%^&*()_+\=\[\]{};':"\\|<>\/]+/;

  const splitWords = arr.split(' ')
  let count = 0

  splitWords.forEach(val => {
    if (!format.test(val)) {
      count++
    }
  })

  return count
}
console.log(`No. 2 ====================`)
console.log(`a. ${specialCharChecker('Saat meng*ecat tembok, Agung dib_antu oleh Raihan.')}`)
console.log(`b. ${specialCharChecker("Berapa u(mur minimal[ untuk !mengurus ktp?")}`);
console.log(`c. ${specialCharChecker("Masing-masing anak mendap(atkan uang jajan ya=ng be&rbeda.")}`); 
console.log(`==========================`)
