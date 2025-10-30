// let userName: string;
// userName = "Julio";

let userName = "Julio"; // inferido

let userAge = 34;

let isValid = true;

//string, number, boolean

// para compilar usar en la terminal $ npx tsc carpeta-que-quieras

let userId: string | number = "abc1";
userId = 123;

type User = {
  name: string;
  age: number;
  isAdmin: boolean;
  id: string | number;
};

let user: User;

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

type FnCalc = (a: number, b: number) => number;

function calculate(a: number, b: number, calcFn: FnCalc) {
  calcFn(a, b);
}

calculate(2, 5, sum);

// principalmente INTERFACE para objetos

interface Credentials {
  name: string;
  email: string;
}

let creed: Credentials;

creed = {
  name: "Antuan",
  email: "antuan@email.es",
};

// 🔹 Tipos e Interfaces en TypeScript: Combinación y Extensión
// 🧩 Combinación de Tipos (type)

//Supongamos que tenemos:

//type Admin = { permissions: string[] };
//type AppUser = { username: string };

// Queremos crear un nuevo tipo que combine ambos:
// AppAdmin → combinación de Admin y AppUser.

/**
❌ Unión (|):

type AppAdmin = Admin | AppUser

Esto no combina las propiedades, solo permite que el valor sea de uno u otro tipo.

Es decir, un objeto podría tener solo permissions o solo username.

✅ Intersección (&):

type AppAdmin = Admin & AppUser

Esto fusiona las propiedades de ambos tipos.

Un objeto de tipo AppAdmin debe tener tanto permissions como username.
 */

/* 🧱 Combinación con Interfaces

Se puede lograr lo mismo usando interfaces en lugar de type: */
interface Admin {
  permissions: string[];
}

interface AppUser {
  username: string;
}

interface AppAdmin extends Admin, AppUser {}

/* El uso de extends permite heredar y combinar las propiedades de una o más interfaces.

También se pueden añadir propiedades adicionales en la interfaz nueva.

Si falta alguna propiedad requerida (por ejemplo username), TypeScript lanzará un error. */

/* - Literal Types en TypeScript - 

Los literal types permiten restringir una variable a valores específicos en lugar de aceptar cualquier valor de un tipo general (como string o number).
*/

let role: "admin";
/* Aquí, role solo puede ser el string 'admin'.

Si intentas asignar otro string (por ejemplo 'user' o 'abc'), TypeScript mostrará un error. */

/* ⚙️ Permitir múltiples valores

- Para aceptar varios valores específicos, se usa una unión (|): */
let otroRole: "admin" | "user" | "editor";
/* Ahora, role solo puede ser 'admin', 'user' o 'editor'.

Cualquier otro valor producirá un error. */

/* 🔢 Literal Types con números

También se pueden usar con números: */
let statusRole: 0 | 1 | 2;
/* En este caso, status solo puede contener uno de esos tres valores numéricos. */

/* 🔹 Type Guards y Uniones en TypeScript

🧠 Contexto:
Cuando trabajamos con union types, es común querer ejecutar código solo si la variable tiene un tipo o valor específico.

Esto se logra usando condicionales que actúan como type guards (guardianes de tipo). */
type Role = "admin" | "user" | "editor";

function performAction(action: string | number, role: Role) {
  if (role === "admin") {
    // Ejecutar acción solo si es admin
  }
}

/* Role es un tipo personalizado que guarda la unión de valores posibles.

Dentro de la función, el if verifica si role tiene un valor específico. */

/* ⚙️ Type Guards

Permiten a TypeScript “restringir” el tipo dentro de un bloque de código, mejorando el autocompletado y la seguridad del tipo.

Ejemplo combinando con el operador typeof: */
// ** if (role === "admin" && typeof action === "string") {}
// Solo se ejecuta si el rol es admin y la acción es un string

/* `typeof` es un operador nativo de JavaScript, no de TypeScript.
Devuelve el tipo básico del valor ("string", "number", "boolean", etc.). */

/* 💡 Patrón común

Usar if checks o type guards es una práctica esencial cuando:
Se manejan union types (por ejemplo, string | number).
Se deben ejecutar diferentes bloques de código según el tipo o valor. */
