'use strict';

const person = {
   name: "John",
   age: 20,
   job: 'IT'
}


const printPropertyDescriptors = (object) => {
   for (let prop in object) {
      console.log(Object.getOwnPropertyDescriptor(object, prop));
   }
}

printPropertyDescriptors(person);


Object.defineProperty(person, 'name', {
   writable: false,
   enumerable: false,
   configurable: false
})

Object.defineProperty(person, 'age', {
   writable: false,
   enumerable: false,
   configurable: false
})

Object.defineProperty(person, 'job', {
   writable: false,
   enumerable: false,
   configurable: false
})


//we dont see function result
try {
   printPropertyDescriptors(person);
} catch (error) {
   console.error(error);
}

//TypeError
try {
   delete person.name;
} catch (error) {
   console.error(error);
}

//TypeError
try {
   person.name = 'Victor';
} catch (error) {
   console.error(error);
}
