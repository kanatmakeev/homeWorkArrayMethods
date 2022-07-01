// 1. const arr = [{ id: 1, name: 'Piter'}, { id: 2, name: 'Nina' }] 
// выведите в консоль имя Нины с помощью метода find.

const arr = [{ id: 1, name: 'Piter'}, { id: 2, name: 'Nina' }] 
const person = arr.find(item => item.id == 2);
console.log(person.name);

// 2. Вам дан массив, который представляет собой список квартир в доме. Каждый объект это квартира: ключ num - номер квартиры, floor - этаж и people - количество людей проживающих в квартире. Используя методы массива найдите те квартиры в которых проживает менее 3х человек и выведите массив с номерами таких квартир.

const list = [{num: 1, floor: 1, people: 2},
              {num: 2, floor: 2, people: 1},
              {num: 3, floor: 3, people: 4},
              {num: 4, floor: 3, people: 3},
              {num: 5, floor: 4, people: 2},
            ];
const flat = list.filter(elem => elem.people < 3);
console.log(flat);


// 3.Дан массив Дан массив [1, 2, 3, 4, 5]. 
// С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].

const arr1 = [1, 2, 3, 4, 5];
arr1.splice(3, 0, "a", "b", "c");
console.log(arr1);

// 4. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].

const arr2 = [1, 2, 3, 4, 5];
console.log(arr2.slice(3));

// 5. let mas = [15, 'hello', 'trump', 23, 'world', 999, 176]; Дан массив. вывести в консоль строку которая разделена --- символами.

let mas = [15, 'hello', 'trump', 23, 'world', 999, 176]; 
let str = mas.join('---');
console.log(str);
