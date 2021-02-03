const student = [
    {id: 21, name: 'Sakib Khan'},
    {id: 31, name: 'Opu Biswas'},
    {id: 41, name: 'Boobli'},
    {id: 51, name: 'Dipjol'},
];
const names = [];
for (let i = 0; i < student.length; i++) {
    const element = student[i];
    names.push(element.name);
}
console.log(names);

//Arrow function & Map
const stuNames = student.map(s => s.name);
console.log(stuNames);

const ids = student.map(s => s.id);
console.log(ids);

//Filter
const ob = student.filter(s => s.id > 40);
console.log(ob);

//Find
const isThere = student.find(s => s.id>30);
console.log(isThere);

