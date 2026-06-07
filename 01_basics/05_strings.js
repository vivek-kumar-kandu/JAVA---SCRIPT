const name = "vivek"   // 1st way to declare to string 
let repoCount = 20

console.log(name +  repoCount+" value");
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const GameName = new String('Vivek-kk-com')  // 2nd way to declare string 
// console.log(GameName)

// console.log(GameName.__proto__);
// console.log(GameName.length);
// console.log(GameName.toUpperCase());
// console.log(GameName.charAt(3));
// console.log(GameName.indexOf('e'));

// const newString = GameName.substring(0,4)        //ye hamesa 0 se start hoga chahe aap -ve se start kre tab bhi 
// console.log(newString)

const AnotherString  = GameName.slice(-7,4)
console.log(AnotherString)

const newString1 = "        vivekkk       "
console.log(newString1);
console.log(newString1.trim());

const url = "htts://vivek.com/vivek%20kumar"
console.log(url.replace('%20' , '-'))
console.log(url.includes('vivek'))
console.log(url.includes('hitesh'))

console.log(GameName.split('-'))