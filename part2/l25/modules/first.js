// export const q = 1;

function sayHi(user) {
  alert(`Hello, ${user}!`);
}

function sayBye(user) {
  alert(`Bye, ${user}!`);
}

export { sayHi, sayBye }; // список экспортируемых переменных
export default sayHi;

// import {sayHi, sayBye} from './say.js';

// sayHi('John'); // Hello, John!
// sayBye('John'); // Bye, John!

// import * as say from './say.js';

// say.sayHi('John');
// say.sayBye('John');

// Именованный экспорт	Экспорт по умолчанию
// export class User {...}	export default class User {...}
// import {User} from ...	import User from ...
