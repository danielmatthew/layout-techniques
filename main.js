document.addEventListener('DOMContentLoaded', () => {
  loadIntro();
});

function loadIntro() {
  clearDemo();
  const template = document.querySelector('#intro');
  let clone = document.importNode(template.content, true);

  document.querySelector('#demo').appendChild(clone);

  document.querySelector('body').classList.add('eighties');
}

function loadFloats() {
  clearDemo();
  let template = document.querySelector('#floats');
  let clone = document.importNode(template.content, true);

  document.querySelector('#demo').appendChild(clone);

  document.querySelector('body').classList.add('nineties');
}

function loadTables() {
  clearDemo();
  let template = document.querySelector('#table');
  let clone = document.importNode(template.content, true);

  document.querySelector('#demo').appendChild(clone);

  document.querySelector('body').classList.add('tables');
}

function loadFloatedGrid() {
  clearDemo();
  let template = document.querySelector('#grid');
  let clone = document.importNode(template.content, true);

  document.querySelector('#demo').appendChild(clone);

  document.querySelector('body').classList.add('noughties');

}

function loadFlexbox() {
  clearDemo();
  let template = document.querySelector('#holy-grail-flex');
  let clone = document.importNode(template.content, true);

  document.querySelector('body').classList.add('flexed');
  document.querySelector('#demo').appendChild(clone);
}

function loadCSSGrid() {
  clearDemo();
  let template = document.querySelector('#holy-grail-grid');
  let clone = document.importNode(template.content, true);

  document.querySelector('body').classList.add('gridded');
  document.querySelector('#demo').appendChild(clone);
}


function clearDemo() {
  document.querySelector('body').classList.forEach((value) => document.querySelector('body').classList.remove(value));
  document.querySelector('#demo').innerHTML = '';
}
