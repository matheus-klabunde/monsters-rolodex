const urlApi = 'https://jsonplaceholder.typicode.com/users';
const input = document.querySelector('.search');
const section = document.querySelector('.card-list');

async function search(el){
  const request = await fetch(urlApi)
  const data = await request.json()

  const filteredMonsters = el ? data.filter(data => data.name.toLowerCase().includes(el.toLowerCase())) : data;

  const card = term =>{
    return `
    <div>
      <img src='https://robohash.org/${term.id}?set=set2&size=180x180' alt='monster ${term.id}'>
      <h2> ${term.name}</h2>
      <p>${term.email}</p>
    </div>
    `
  }
  section.innerHTML = filteredMonsters.map(users => card(users)).join('');
}

input.addEventListener('keyup', e => {
  let el = e.target.value;

  if(el){
    search(el);
    return;
  }
  search();
});

search();
























