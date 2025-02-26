function toggleContent(arrowId, paraId) {
  // Toggle the paragraph visibility
  document.getElementById(paraId).classList.toggle('hidden');

  // Toggle the icon
  let icon = document.getElementById(arrowId);
  if (icon.classList.contains('fa-angle-down')) {
    icon.classList.remove('fa-angle-down');
    icon.classList.add('fa-angle-up');
  } else {
    icon.classList.remove('fa-angle-up');
    icon.classList.add('fa-angle-down');
  }
}

function send(id) {
  let templateParams;
  let serviceId;
  let templateId;

  if (id == 0) {
    templateParams = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      price: document.getElementById('dropdownMenu').value,
      description: document.getElementById('description').value,
    };

    serviceId = 'service_q4z3ljp';
    templateId = 'template_l14wzz8';
  } else {
    templateParams = {
      message: document.getElementById('message').value,
    };
    serviceId = 'service_q4z3ljp';
    templateId = 'template_58l1r8w';
  }

  emailjs
    .send(serviceId, templateId, templateParams)
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Email sent successfully!');
      if (id == 0) {
        document.getElementById('form').classList.add('hidden');
        document.querySelector('form').reset();
      } else {
        document.getElementById('message').value = '';
      }
    })
    .catch((error) => {
      console.error('FAILED...', error);
      alert('Failed to send email. Please try again!');
    });
}

function navBarClick() {
  const menu = document.getElementById('navBar');
  menu.classList.toggle('hidden');
}

function pricing() {
  document
    .getElementById('pricingSection')
    .scrollIntoView({ behavior: 'smooth' });
}

function Booking(id) {
  const form = document.getElementById('form');
  const dropdown = document.getElementById('dropdownMenu');

  form.classList.toggle('hidden');

  if (form.classList.contains('hidden')) {
    form.querySelector('form').reset();
    dropdown.disabled = false;
    return;
  }

  if (id) {
    const priceElement = document.getElementById(id);
    const price = priceElement.innerText.trim();

    const found = Array.from(dropdown.options).some(
      (option) => option.value === price
    );

    if (found) {
      dropdown.value = price;
      dropdown.disabled = true;
    } else {
      dropdown.disabled = false;
    }
  } else {
    dropdown.disabled = false;
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const buttons = [
    {
      id: 'btnl1',
      contentClass: 'benefit-element',
      storageKey: 'showBenefitContent',
    },
    {
      id: 'btnl2',
      contentClass: 'news-element',
      storageKey: 'showNewsContent',
    },
  ];

  buttons.forEach(({ id, contentClass, storageKey }) => {
    const button = document.getElementById(id);
    const contents = document.querySelectorAll(`.${contentClass}`);

    if (localStorage.getItem(storageKey) === 'true') {
      contents.forEach((el) => el.classList.remove('hidden'));
      button.classList.add('hidden');
    }

    button.addEventListener('click', function () {
      contents.forEach((el) => el.classList.remove('hidden'));
      button.classList.add('hidden');
      localStorage.setItem(storageKey, 'true');
    });

    window.addEventListener('beforeunload', function () {
      localStorage.removeItem(storageKey);
    });
  });
});

const slides = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('opacity-100', i === index);
    slide.classList.toggle('opacity-0', i !== index);
  });
}

document.getElementById('prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});

document.getElementById('next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});

showSlide(currentIndex);
