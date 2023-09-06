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

// console.log("Hello TypeScript!");

// Типы данных с примерами
// string
let str: string = "Hello TypeScript!";
// number
let num: number = 42;
// boolean
let isTrue: boolean = true;
// null
let nullVar: null = null;
// undefined
let undefinedVar: undefined = undefined;
// symbol
// let sym: symbol = Symbol();

// object
let obj: object = {};

const user1: {
  name: string;
  sername?: string; // необязательный параметр
  age: number | string | null; // объединение типов
} = {
  name: "Ivan",
  age: 25,
};

user1.sername = "null";

// array - массив
let arr: string[] = ["a", "5", "c"];
let arr2: Array<string | number> = ["a", 5, "c"];

// tuple - кортеж, массив с фиксированным количеством элементов
let coordinates: [string, number] = ["50.4501", 30.5234];

// any - любой тип данных
let anyVar: any = "any";
anyVar = 42;
anyVar = true;
anyVar = {};
anyVar = [];
anyVar = "null";

// unknown - Аналог типа any, но более безопасный. Нужно явно привести к нужному типу перед использованием.
let userInput: unknown = "Hello";
let userName: string = userInput as string;

// // void - функция ничего не возвращает
function sayMyName(name: string, age: number): void {
  // console.log(name);
}

sayMyName("Ivan", 25);

const sayMyName2 = (name: string): string => {
  console.log(name);

  return name;
};

// never - Для указания, что функция не завершает выполнение и не возвращает значения.
function throwError(message: string): never {
  throw new Error(message);
}

// Type - Для создания пользовательских типов данных.
type TUserId = string | number;
let id1: TUserId = 1234;
let id2: TUserId = "1234";

// literal - литералы
type TEasing = "ease-in" | "ease-out" | "ease-in-out";
let animation: TEasing = "ease-in";
animation = "ease-out";

// // enum - перечисление
enum Colors {
  Red = "#ff0000",
  Green = "#00ff00",
  Blue = "#0000ff",
}

const enum Colors2 {
  Red = "#ff0000",
  Green = "#00ff00",
  Blue = "#0000ff",
}

let color: Colors = Colors.Green;
let color2: Colors2 = Colors2.Green;

// // interface - Для создания структур данных, которые определяют форму объектов.
// const getUserInfo1 = (user: IUserInfo): IUserInfo => {
//   return {
//     email: user.email,
//     password: user.password,
//   };
// };

// const getUserInfo = ({ email, password }: IUserInfo): IUserInfo => {
//   return { email, password };
// };

// getUserInfo(userInfo);
interface IUserInfo {
  email: string;
  readonly password: string;
  phone?: string;
  pets?: string[];
}

const userInfo: IUserInfo = {
  email: "qwer@pol.com",
  password: "1234",
  phone: "+380123456789",
  pets: ["cat", "dog"],
};

interface IUser extends IUserInfo {
  name: string;
  age: number;
}

let user: IUser = {
  name: "Ivan",
  email: "qwer@pol.com",
  password: "1234",
  age: 25,
};

user.name = "John";
// user.password = "12345"; // ошибка

interface FromServer {
  [key: string]: string;
}

const serverResults: FromServer = {
  email: "qwer@pol.com",
  password: "1234",
  phone: "+380123456789",
};

// Интерфейс может быть использован в выражении extends или implements, а псевдоним для литерала объектного типа — нет.
// Интерфейс может иметь несколько объединённых объявлений, а при использовании ключевого слова type эта возможность не доступна.

// generics - обобщения
function getter(data: any): any {
  return data;
}

function genericGetter<T>(data: T): T {
  return data;
}

const newGetter = genericGetter<string>("Hello TypeScript!");
const newGetter2 = genericGetter<number>(5);
// console.log("generic-STRING", newGetter);
// console.log("generic-NUMBER", newGetter2);

// interfese generic
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
// type TCustom = string | number;
// let newVar: TCustom = 1;

// typeguard - проверка типов
const enum USER_ROLES {
  ADMIN = "ADMIN",
  GENERAL = "GENERAL",
}

interface IAdmin {
  name: string;
  role: USER_ROLES;
  isAdmin: boolean;
}

interface IUser12 {
  name: string;
  age: number;
  role: USER_ROLES;
  isAdmin: boolean;
}

const userGeneral = {
  name: "John",
  age: 25,
  role: USER_ROLES.GENERAL,
  isAdmin: false,
};

// const superUser = {
//   name: "Jack",
//   age: 22,
//   role: USER_ROLES.ADMIN,
//   isAdmin: true,
// };

function redirect(usr: IAdmin | IUser12) {
  if (usr.isAdmin) {
    // if (usr.role === USER_ROLES.ADMIN) {
    console.log("Redirect to admin panel");
  } else {
    console.log("Redirect to user panel");
  }
}

// class
interface IUserClassConstructor {
  name: string;
  surname: string;
  age: number;
}

interface IAdminClassConstructor extends IUserClassConstructor {
  role: string;
}

class User {
  name: string; // доступно везде - по умолчанию все свойства и методы public
  protected surname: string; // доступно только внутри класса и наследникам
  age: number;
  private secretMessage: string = "SECRET"; // доступно только внутри класса

  constructor({ name, surname, age }: IUserClassConstructor) {
    // props: IUserClassConstructor
    this.name = name;
    this.surname = surname;
    this.age = age;
  }

  getFullName(): string {
    return `${this.name} ${this.secretMessage}`;
  }
}

let superUser: User = new User({
  name: "John",
  surname: "Doe",
  age: 25,
});

class Admin extends User {
  role: string;

  constructor(props: IAdminClassConstructor) {
    super({
      name: props.name,
      surname: props.surname,
      age: props.age,
    });

    this.role = props.role;
  }

  getFullName(): string {
    return `${this.name} ${this.surname}`;
  }
}

let admin: Admin = new Admin({
  name: "John",
  surname: "Doe",
  age: 25,
  role: "admin",
});

// admin.surname = "Smith"; // доступно только внутри класса и наследникам

// extends - наследование
// implements - реализация интерфейса

// class implements interface
interface IUserImplement {
  surname: string;
  age: number;
  getFullSurname(): string;
}

class UserA implements IUserImplement {
  surname: string;
  age: number;

  constructor(props: { surname: string; age: number }) {
    this.surname = props.surname;
    this.age = props.age;
  }

  getFullSurname(): string {
    return `${this.surname}`;
  }
}

interface IQwer {
  surname: string;
  age: number;
  getInfo(id: string): string;
}

const qwer = {
  surname: "qwer",
  age: 25,

  getInfo(id: string): string {
    return `${this.surname} ${id}`;
  },
};

// namespace - Интерфейсы, классы, функции и переменные могут быть включены в пространство имен, чтобы обеспечить набор связанных функций.
namespace Utils {
  export function isEmpty(data: any): boolean {
    return !data;
  }
  export function isUndefined(data: any): boolean {
    return typeof data === "undefined";
  }
  export function isNull(data: any): boolean {
    return data === null;
  }
}

Utils.isEmpty("Hello");
Utils.isUndefined("Hello");
Utils.isNull("Hello");

// utilites types - утилиты
// Partial - делает все свойства в объекте необязательными
interface IUserPartial {
  name: string;
  age: number;
}

let userPartial: Partial<IUserPartial> = {
  name: "John",
};

// Readonly - делает все свойства в объекте только для чтения
interface IUserReadonly {
  name: string;
  age: number;
}

let userReadonly: Readonly<IUserReadonly> = {
  name: "John",
  age: 25,
};
// userReadonly.name = "Smith"; // ошибка

// Record - создает объект из двух других объектов
interface IUserRecord {
  name: string;
  age: number;
}
let userRecord: Record<string, IUserRecord> = {
  "user-1": { name: "John", age: 25 },
  "user-2": { name: "Smith", age: 30 },
};
// console.log(userRecord);

// Pick - создает подмножество объекта
interface IUserPick {
  name: string;
  age: number;
  email: string;
}

let userPick: Pick<IUserPick, "name" | "age"> = {
  name: "John",
  age: 25,
};

// Omit - создает подмножество объекта
interface IUserOmit {
  name: string;
  age: number;
  email: string;
}

let userOmit: Omit<IUserOmit, "email"> = {
  name: "John",
  age: 25,
};

// Exclude - исключает из типа T типы, которые можно присвоить типу U
type T = string | number;
let newVar2: Exclude<T, number> = "Hello";

// Extract - извлекает из типа T типы, которые можно присвоить типу U
type T2 = string | number;
let newVar3: Extract<T2, number> = 1;

// // NonNullable - исключает из типа T тип null и undefined
type T3 = string | number | null | undefined;
let newVar4: NonNullable<T3> = 1;

// Parameters - получает типы параметров функции
function sum(a: number, b: number, c: string): number {
  return a + b;
}
type T4 = Parameters<typeof sum>; // [number, number, string]

// ReturnType - получает тип возвращаемого значения функции
function sum2(a: number, b: number): string {
  return `${a}`;
}
type T5 = ReturnType<typeof sum2>; // string

// InstanceType - получает тип экземпляра класса
class UserB {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
type T6 = InstanceType<typeof UserB>; // UserB

// ThisType - указывает на тип this внутри объекта
type T7 = {
  name: string;
  age: number;
  getFullName(this: T7): string;
};
