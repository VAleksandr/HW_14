
const body = document.querySelector('body');
const users = [
  {
    name: 'Ivan',
    age: 26
  },
  {
    name: 'Ira',
    age: 20
  },
  {
    name: 'Sasha',
    age: 30
  },
  {
    name: 'Misha',
    age: 50
  },
  {
    name: 'Inna',
    age: 18
  },
  {
    name: 'Luda',
    age: 12
  },
];

users.forEach(({name, age}, index) => {  
  const p = document.createElement('p');

  p.innerText = `Name ${name}, age ${age}.`;
  
  p.onclick = () => {
    const usInd = users[index];

    users.filter((item) => item != usInd);

    p.remove();
  }

  body.appendChild(p);
});
