// interface Todo {
//   id: number | string,
//   name: string,
//   done: boolean
// }

// let obj1 = {
//   name: "omega",
//   done: 7,
//   asigner: "Huy"
// };

// let obj2: Todo = {
//   id: 5555,
//   done: false,
//   name: "Do homework",
// };

// let a: string | number | boolean | Todo = 4;
// a = "Hello Mon";
// a = false;
// a = {
//   id: 45,
//   done: false,
//   name: "Do homework",
// };
// a = {
//   id: "45",
//   done: false,
//   name: "Do homework",
// };

// class Student {
//   public name: string = "Test";
//   private age: number = 18;
//   protected gender: boolean = false;

//   constructor(_name: string, _age: number, _gender: boolean) {
//     this.name = _name;
//     this.age = _age;
//     this.gender = _gender;
//   }

//   public Study(): void {
//     console.log(this.name + " is studying....");
//   }

//   public GetAge(): number {
//     return this.age;
//   }
// }

// var studentY: Student = new Student("John Wick", 22, true);

// console.log(studentY.name);