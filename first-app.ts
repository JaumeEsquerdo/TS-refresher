// let userName: string;
// userName = "Julio";

let userName = "Julio"; // inferido

let userAge = 34;

let isValid = true;

//string, number, boolean

// para compilar usar en la terminal $ npx tsc carpeta-que-quieras

let userId: string | number = "abc1";
userId = 123;

let user: {
  name: string;
  age: number;
  isAdmin: boolean;
  id: string | number;
};

user = {
  name: "Max",
  age: 34,
  isAdmin: false,
  id: 123,
};

//let hobbies: Array<string>;
let hobbies: string[]; //number[]  o boolean[]

// {name:string; age:number}[]  otro ej. de como montar array con una base definida

hobbies = ["Deportes", "Pintar"];
// hobbies = [1,2,3] error porq espera un array de strings

function add(a: number, b: number): void {
  // void para funciones que no hacen return de algo - en caso contrario puedes poner number o omitirlo si está inferido el tipo de resultado retornado
  const result = a + b;
  console.log(result);
}
function sum(a: number, b: number) {
  // void para funciones que no hacen return de algo - en caso contrario puedes poner number o omitirlo si está inferido el tipo de resultado retornado
  const result = a + b;
  return result;
}

function calculate(
  a: number,
  b: number,
  calcFn: (a: number, b: number) => number
) {
  calcFn(a, b);
}

calculate(2, 5, sum);
