// let user = {
//     name: "John",
//     age: 30,
  
//     toString() {
//       return `{name: "${this.name}", age: ${this.age}}`;
//     }
//   };
  
//   alert(user.toString()); // {name: "John", age: 30}


let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
  };
  
  let json = JSON.stringify(student);
  
  alert(typeof json); // мы получили строку!
  
  alert(json);
  /* выведет объект в формате JSON:
  {
    "name": "John",
    "age": 30,
    "isAdmin": false,
    "courses": ["html", "css", "js"],
    "wife": null
  }
  */