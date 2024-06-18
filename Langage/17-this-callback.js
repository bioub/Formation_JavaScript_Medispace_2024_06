// ERREUR: Hello undefined
// class User {
//   constructor(name) {
//     this.name = name;
//   }
//   hello() {
//     console.log(`Hello ${this.name}`);
//   }
//   helloIn1s() {
//     setTimeout(function() {
//       console.log(this);
//       console.log(`Hello ${this.name}`);
//     }, 1000);
//   }
// }

// Solution 1 : that, _this, self, me...
// class User {
//   constructor(name) {
//     this.name = name;
//   }
//   hello() {
//     console.log(`Hello ${this.name}`);
//   }
//   helloIn1s() {
//     const that = this;
//     setTimeout(function() {
//       console.log(that);
//       console.log(`Hello ${that.name}`);
//     }, 1000);
//   }
// }

// bind :
// class User {
//   constructor(name) {
//     this.name = name;
//   }
//   hello() {
//     console.log(`Hello ${this.name}`);
//   }
//   helloIn1s() {
//     setTimeout(function() {
//       console.log(this);
//       console.log(`Hello ${this.name}`);
//     }.bind(this), 1000);
//   }
// }

class User {
  constructor(name) {
    this.name = name;
  }
  hello() {
    console.log(`Hello ${this.name}`);
  }
  helloIn1s() {
    setTimeout(() => {
      console.log(this);
      console.log(`Hello ${this.name}`);
    }, 1000);
  }
}

function hello(name) {
  return `Hello ${name.toUpperCase()}`;
}

const user = new User('Romain');
user.hello(); // Hello Romain
user.helloIn1s(); // ..1s.. Hello undefined
