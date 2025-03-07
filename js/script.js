//

let service_btn = document.querySelector('#service_btn');
let service = document.querySelector('#service');

service_btn.addEventListener('click', () => {
  service_btn.style.cursor = 'pointer';
  let serviceInfo = service.getBoundingClientRect();

  window.scrollTo({
    top: serviceInfo.top + window.scrollY,
    behavior: 'smooth',
  });
});

let home_btn = document.querySelector('#home_btn');
let bannner = document.querySelector('#bannner');

home_btn.addEventListener('click', () => {
  service_btn.style.cursor = 'pointer';
  let bannerInfo = bannner.getBoundingClientRect();

  window.scrollTo({
    top: bannerInfo.top + window.scrollY - 100,
    behavior: 'smooth',
  });
});

let sobre_btn = document.querySelector('#sobre_btn');
let Doctor = document.querySelector('#Doctor');

sobre_btn.addEventListener('click', () => {
  service_btn.style.cursor = 'pointer';
  let doctorInfo = Doctor.getBoundingClientRect();

  window.scrollTo({
    top: doctorInfo.top + window.scrollY - 100,
    behavior: 'smooth',
  });
});
let banner_btn = document.querySelector('#banner_btn');
let contact = document.querySelector('#contact');

banner_btn.addEventListener('click', () => {
  service_btn.style.cursor = 'pointer';
  let contactInfo = contact.getBoundingClientRect();

  window.scrollTo({
    top: contactInfo.top + window.scrollY - 100,
    behavior: 'smooth',
  });
});

const counter_text = document.querySelector('#counter_text');

let couter_updater = 0;

let update_count = setInterval(() => {
  couter_updater++;

  counter_text.innerHTML = `${couter_updater}+`;

  if (couter_updater >= 1000) {
    clearInterval(update_count);
  }
  couter_updater.style.fontSize = '100px';
}, 4);

let Especialistas = document.querySelector('#Especialistas');
let Especialistas_counter = 0;
let Especialistas_uptader = setInterval(() => {
  Especialistas_counter++;

  Especialistas.textContent = `${Especialistas_counter} +`;

  if (Especialistas_counter >= 780) {
    clearInterval(Especialistas_uptader);
  }
}, 4);

let anos = document.querySelector('#anos');
let anos_counter = 0;

let anso_uptader = setInterval(() => {
  anos_counter++;
  anos.textContent = `${anos_counter} +`;

  if (anos_counter >= 300) {
    clearInterval(anso_uptader);
  }
}, 4);
