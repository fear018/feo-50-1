// Зачем нужен TypeScript?
// TypeScript — это язык программирования, который является надстройкой над JavaScript.
// Он добавляет статическую типизацию, классы, интерфейсы и другие возможности, которых нет в JavaScript.
// Компилятор. TypeScript обладает компилятором с открытым исходным кодом,
// он является кросс-платформенным, с открытой спецификацией, и написан на TypeScript.
// Компилятор выполняет преобразование TypeScript-кода в JavaScript-код.
// Кроме того, если с программой что-то не так, он выдаёт сообщения об ошибках.
// Как установить TypeScript?
// npm install -g typescript
// Инициализация проекта TypeScript
// tsc --init
// Как запустить TypeScript?
// tsc index.ts
// Установка ts-node для запуска TypeScript в Node.js
// npm install -g ts-node
// npx ts-node index.ts
console.log("Hello TypeScript!");
// Типы данных с примерами
// string
var str = "Hello TypeScript!";
// number
var num = 42;
// boolean
var isTrue = true;
// null
var nullVar = null;
// undefined
var undefinedVar = undefined;
// symbol
// let sym: symbol = Symbol();
// object
var obj = {};
var user1 = {
    name: "Ivan",
    age: 25,
};
user1.sername = "null";
// array - массив
var arr = ["a", "5", "c"];
var arr2 = ["a", 5, "c"];
// tuple - кортеж, массив с фиксированным количеством элементов
var coordinates = ["50.4501", 30.5234];
// any - любой тип данных
var anyVar = "any";
anyVar = 42;
anyVar = true;
anyVar = {};
anyVar = [];
anyVar = "null";
// unknown - Аналог типа any, но более безопасный. Нужно явно привести к нужному типу перед использованием.
var userInput = "Hello";
var userName = userInput;
// // void - функция ничего не возвращает
function sayMyName(name, age) {
    console.log(name);
}
sayMyName("Ivan", 25);
var sayMyName2 = function (name) {
    console.log(name);
    return name;
};
// never - Для указания, что функция не завершает выполнение и не возвращает значения.
function throwError(message) {
    throw new Error(message);
}
var id1 = 1234;
var id2 = "1234";
var animation = "ease-in";
animation = "ease-out";
// // enum - перечисление
var Colors;
(function (Colors) {
    Colors["Red"] = "#ff0000";
    Colors["Green"] = "#00ff00";
    Colors["Blue"] = "#0000ff";
})(Colors || (Colors = {}));
var color = Colors.Green;
// ========>>>>>>
var color2 = "#00ff00" /* Colors2.Green */;
// // interface - Для создания структур данных, которые определяют форму объектов.
// interface IUserInfo {
//   email?: string;
//   password?: string;
//   phone?: string;
// }
// interface IUser extends IUserInfo {
//   readonly name: string;
//   age: number;
// }
// let user: IUser = {
//   name: "Ivan",
//   age: 25,
// };
// interface FromServer {
//   [key: string]: string;
// }
// const serverResults: FromServer = {
//   name: "Ivan",
//   age: "25",
//   email: "",
// };
// // Интерфейс может быть использован в выражении extends или implements, а псевдоним для литерала объектного типа — нет.
// // Интерфейс может иметь несколько объединённых объявлений, а при использовании ключевого слова type эта возможность не доступна.
// // generics - обобщения
// function getter(data: any): any {
//   return data;
// }
// function genericGetter<T>(data: T): T {
//   return data;
// }
// const newGetter = genericGetter<string>("Hello TypeScript!");
// console.log(newGetter);
// // interfese generic
// interface ILength<T> {
//   length: T;
// }
// const newLength: ILength<string> = {
//   length: "20",
// };
// const newLength2: ILength<number> = {
//   length: 20,
// };
// // union - объединение типов
// type T = string | number;
// let newVar: T = 1;
// // typeguard - проверка типов
// interface IAdmin {
//   name: string;
//   role: string;
// }
// interface IUser12 {
//   name: string;
//   age: number;
// }
// function redirect(usr: IAdmin | IUser12) {
//   if ("role" in usr) {
//     console.log("Redirect to admin panel");
//   } else {
//     console.log("Redirect to user panel");
//   }
// }
// // class
// class User {
//   public name: string; // доступно везде - по умолчанию все свойства и методы public
//   protected surname: string;
//   age: number;
//   private secretMessage: string = "SECRET"; // доступно только внутри класса
//   constructor(props: { name: string; surname: string; age: number }) {
//     this.name = props.name;
//     this.surname = props.surname;
//     this.age = props.age;
//   }
//   getFullName(): string {
//     return `${this.name} ${this.secretMessage}`;
//   }
// }
// let superUser: User = new User({
//   name: "John",
//   surname: "Doe",
//   age: 25,
// });
// class Admin extends User {
//   role: string;
//   constructor(props: {
//     name: string;
//     surname: string;
//     age: number;
//     role: string;
//   }) {
//     super({
//       name: props.name,
//       surname: props.surname,
//       age: props.age,
//     });
//     this.role = props.role;
//   }
//   getFullName(): string {
//     return `${this.name} ${this.surname}`;
//   }
// }
// let admin: Admin = new Admin({
//   name: "John",
//   surname: "Doe",
//   age: 25,
//   role: "admin",
// });
// // admin.surname = "Smith"; // доступно только внутри класса и наследникам
// // extends - наследование
// // implements - реализация интерфейса
// // class implements interface
// interface IUserImplement {
//   surname: string;
//   age: number;
//   getFullSurname(): string;
// }
// class UserA implements IUserImplement {
//   surname: string;
//   age: number;
//   constructor(props: { surname: string; age: number }) {
//     this.surname = props.surname;
//     this.age = props.age;
//   }
//   getFullSurname(): string {
//     return `${this.surname}`;
//   }
// }
// // utilites types
// // Partial - делает все свойства в объекте необязательными
// interface IUserPartial {
//   name: string;
//   age: number;
// }
// let userPartial: Partial<IUserPartial> = {
//   name: "John",
// };
// // Readonly - делает все свойства в объекте только для чтения
// interface IUserReadonly {
//   name: string;
//   age: number;
// }
// let userReadonly: Readonly<IUserReadonly> = {
//   name: "John",
//   age: 25,
// };
// // userReadonly.name = "Smith"; // ошибка
// // Record - создает объект из двух других объектов
// interface IUserRecord {
//   name: string;
//   age: number;
// }
// let userRecord: Record<string, IUserRecord> = {
//   "user-1": { name: "John", age: 25 },
//   "user-2": { name: "Smith", age: 30 },
// };
// console.log(userRecord);
// // Pick - создает подмножество объекта
// interface IUserPick {
//   name: string;
//   age: number;
//   email: string;
// }
// let userPick: Pick<IUserPick, "name" | "age"> = {
//   name: "John",
//   age: 25,
// };
// // Omit - создает подмножество объекта
// interface IUserOmit {
//   name: string;
//   age: number;
//   email: string;
// }
// let userOmit: Omit<IUserOmit, "email"> = {
//   name: "John",
//   age: 25,
// };
// // Exclude - исключает из типа T типы, которые можно присвоить типу U
// type Y = string | number;
// let newVar2: Exclude<T, number> = "Hello";
// // Extract - извлекает из типа T типы, которые можно присвоить типу U
// type T2 = string | number;
// let newVar3: Extract<T2, number> = 1;
// // NonNullable - исключает из типа T тип null и undefined
// type T3 = string | number | null | undefined;
// let newVar4: NonNullable<T3> = 1;
// // Parameters - получает типы параметров функции
// function sum(a: number, b: number): number {
//   return a + b;
// }
// type T4 = Parameters<typeof sum>; // [number, number]
// // ReturnType - получает тип возвращаемого значения функции
// function sum2(a: number, b: number): number {
//   return a + b;
// }
// type T5 = ReturnType<typeof sum2>; // number
// // InstanceType - получает тип экземпляра класса
// class UserB {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }
// type T6 = InstanceType<typeof UserB>; // UserB
// // ThisType - указывает на тип this внутри объекта
// type T7 = {
//   name: string;
//   age: number;
//   getFullName(this: T7): string;
// };
// // namespace - Интерфейсы, классы, функции и переменные могут быть включены в пространство имен, чтобы обеспечить набор связанных функций.
// namespace Utils {
//   export function isEmpty(data: any): boolean {
//     return !data;
//   }
//   export function isUndefined(data: any): boolean {
//     return typeof data === "undefined";
//   }
//   export function isNull(data: any): boolean {
//     return data === null;
//   }
// }
// Utils.isEmpty("Hello");
// Utils.isUndefined("Hello");
// Utils.isNull("Hello");
