const list = document.getElementById('list');
const addNew = document.getElementById('addNew');
const contact = document.getElementById('contact');
const logo = document.getElementById('logo');
const addSection = document.getElementById('addSection');
const listSection = document.getElementById('listSection');
const contactSection = document.getElementById('contactSection');
const home = document.getElementById('homePage');

list.addEventListener('click', (event) => {
  addSection.style.display = 'none';
  listSection.style.display = 'block';
  contactSection.style.display = 'none';
  home.style.display = 'none';
  addNew.style.color = 'black';
  contact.style.color = 'black';
  event.target.style.color = 'rgb(59, 59, 190)';
});

addNew.addEventListener('click', (event) => {
  addSection.style.display = 'flex';
  listSection.style.display = 'none';
  contactSection.style.display = 'none';
  home.style.display = 'none';
  list.style.color = 'black';
  contact.style.color = 'black';
  event.target.style.color = 'rgb(59, 59, 190)';
});

contact.addEventListener('click', (event) => {
  addSection.style.display = 'none';
  listSection.style.display = 'none';
  contactSection.style.display = 'flex';
  home.style.display = 'none';
  list.style.color = 'black';
  addNew.style.color = 'black';
  event.target.style.color = 'rgb(59, 59, 190)';
});

function homePage() {
  addSection.style.display = 'none';
  listSection.style.display = 'none';
  contactSection.style.display = 'none';
  home.style.display = 'block';
  list.style.color = 'black';
  addNew.style.color = 'black';
}

logo.addEventListener('click', homePage);

document.getElementById('time').innerHTML = Date();