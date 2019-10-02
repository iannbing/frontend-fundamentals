document.body.onload = init;

const william = new Bird('William');
const danny = new Bird('Danny', false, 'magenta');

function init() {
  create(true);
  //   getElements();
  //   william.fly();
  //   danny.fly();
}

function create(isLogging = false) {
  const element = document.createElement('div');
  element.setAttribute('id', 'zoo');
  element.innerHTML = `
    <span style="color: pink" class="bird">Pink Unicorn</span>
    <span style="color: pink" class="bird">Purple Eagle</span>
    <span style="color: blue" class="mammal">Blue Giraffe</span>
    <span style="color: blue" class="mammal">Green Tiger</span>
    <span style="display: none">Invisible peacock</span>
    <div>
        <span style="color: ${william.color}">${william.name}</span>
        <button type="button" onclick="william.fly()">Fly</button>
        <span id="william-state">${william.state}</span>
    </div>
    <div>
        <span style="color: ${danny.color}">${danny.name}</span>
        <button type="button" onclick="danny.fly()">Fly</button>
        <span id="danny-state">${danny.state}</span>
    </div>
  `;
  document.body.appendChild(element);

  if (isLogging) {
    console.log('🍎--- textContent---');
    console.log(element.textContent);

    console.log('🍊--- innerHTML ---');
    console.log(element.innerHTML);
  }
}

function getElements(selector = 'span') {
  const elements = document.querySelector(selector);
  console.log(elements);

  const birdElements = document.getElementsByClassName('bird');
  console.log(birdElements);

  const spanElements = document.getElementsByTagName('span');
  console.log(spanElements);
}

function Bird(name, isAbleToFly = true, color = 'gray', state = 'idling') {
  this.name = name;
  this.isAbleToFly = isAbleToFly;
  this.color = color;
  this.state = state;
}

Bird.prototype.fly = function() {
  console.log('FFFFLLLLLYYYYYY!!!!!');
  const stateElement = document.getElementById(
    this.name.toLowerCase() + '-state'
  );
  if (this.isAbleToFly) {
    this.state = 'flying';
    stateElement.innerHTML = this.state;
    console.log(`🦜 ${this.name} is flying!`);
  } else {
    console.warn(`${this.name} cannot fly...😢`);
  }
};
