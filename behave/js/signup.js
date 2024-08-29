'use strict';

// ---------------------------------------------------------------------------------------------
// function isValidEmail(email) {
//   // Expressão regular para verificar o formato do email
//   var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return emailRegex.test(email);
// }



// ---------------------------------------------------------------------------------------------
// function validateStep(step) {
//   var inputs = document.getElementById('step' + step).getElementsByTagName('input');
//   var selects = document.getElementById('step' + step).getElementsByTagName('select');

//   for (var i = 0; i < inputs.length; i++) {
//     if (inputs[i].hasAttribute('required') && inputs[i].value.trim() === '') {
//       alert("Por favor, preencha todos os campos obrigatórios.");
//       return false;
//     }
//   }

//   for (var j = 0; j < selects.length; j++) {
//     if (selects[j].hasAttribute('required') && selects[j].value === '') {
//       alert("Por favor, preencha todos os campos obrigatórios.");
//       return false;
//     }
//   }

//   if (step === 2 && !isValidEmail(document.getElementById('email').value.trim())) {
//     alert("Por favor, insira um endereço de e-mail válido.");
//     return false;
//   }

//   return true;
// }


// ---------------------------------------------------------------------------------------------

// function nextStep(step) {
//   if (!validateStep(step)) {
//     return;
//   }

//   document.getElementById('step' + step).style.display = 'none';
//   document.getElementById('step' + (step + 1)).style.display = 'block';
// }

// function prevStep(step) {
//   document.getElementById('step' + step).style.display = 'none';
//   document.getElementById('step' + (step - 1)).style.display = 'block';
// }



document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('stepForm');
  var submitBtn = document.getElementById('mc-embedded-subscribe');
  var inputs = form.getElementsByTagName('input');
  var selects = form.getElementsByTagName('select');

  function validateForm() {
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].hasAttribute('required') && inputs[i].type !== 'checkbox' && inputs[i].value.trim() === '') {
        submitBtn.disabled = true;
        return;
      }
    }

    for (var j = 0; j < selects.length; j++) {
      if (selects[j].hasAttribute('required') && selects[j].value === '') {
        submitBtn.disabled = true;
        return;
      }
    }

    var termsCheckbox = document.getElementById('terms');
    if (termsCheckbox && !termsCheckbox.checked) {
      submitBtn.disabled = true;
      return;
    }

    submitBtn.disabled = false;
  }

  for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('input', validateForm);
    if (inputs[i].type === 'checkbox') {
      inputs[i].addEventListener('change', validateForm);
    }
  }

  for (var j = 0; j < selects.length; j++) {
    selects[j].addEventListener('change', validateForm);
  }

  submitBtn.addEventListener('click', function(event) {
    if (submitBtn.disabled) {
      event.preventDefault();
      alert("Por favor, preencha todos os campos obrigatórios e aceite os termos.");
    }
  });

  validateForm(); // Initial validation on page load

});


function nextStep(step) {
  if (!validateStep(step)) {
    return;
  }
  document.getElementById('step' + step).style.display = 'none';
  document.getElementById('step' + (step + 1)).style.display = 'block';
}

function prevStep(step) {
  document.getElementById('step' + step).style.display = 'none';
  document.getElementById('step' + (step - 1)).style.display = 'block';
}

function validateStep(step) {
  var inputs = document.getElementById('step' + step).getElementsByTagName('input');
  var selects = document.getElementById('step' + step).getElementsByTagName('select');

  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].hasAttribute('required') && inputs[i].value.trim() === '') {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return false;
    }
  }

  for (var j = 0; j < selects.length; j++) {
    if (selects[j].hasAttribute('required') && selects[j].value === '') {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return false;
    }
  }

  if (step === 2 && !isValidEmail(document.getElementById('email').value.trim())) {
    alert("Por favor, insira um endereço de e-mail válido.");
    return false;
  }

  return true;
}

function isValidEmail(email) {
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function toggleProvinceField() {
  var country = document.getElementById('country').value;
  var provinceField = document.getElementById('provinceField');
  if (country === 'angola') {
    provinceField.style.display = 'block';
  } else {
    provinceField.style.display = 'none';
  }
}




// ---------------------------------------------------------------------------------------------
function toggleProvinceField() {
  var country = document.getElementById('country').value;
  var provinceField = document.getElementById('provinceField');
  var citySelect = document.getElementById('city');

  if (country === 'Angola') {
    provinceField.style.display = 'block';
    citySelect.setAttribute('required', 'required');
  } else {
    provinceField.style.display = 'none';
    citySelect.removeAttribute('required');
  }
}



// ---------------------------------------------------------------------------------------------

document.getElementById('country').addEventListener('change', function() {
  var country = this.value;
  var codeSelect = document.getElementById('code');
  
  // Limpar as opções existentes
  codeSelect.innerHTML = '';
  
  // Adicionar opções com base no país selecionado
  if (country === 'Angola') {
      codeSelect.add(new Option('🇦🇴 +244', '244'));
  } else if (country === 'Portugal') {
      codeSelect.add(new Option('🇵🇹 +351', '351'));
  } else if (country === 'Moçambique') {
      codeSelect.add(new Option('🇲🇿 +258', '258'));
  } else if (country === 'Brasil') {
      codeSelect.add(new Option('🇧🇷 +55', '55'));
  }
});



// ---------------------------------------------------------------------------------------------

// Seleciona todos os inputs com a classe apenasLetrasEspeciais
const inputs = document.querySelectorAll('.input-name');

// Adiciona um ouvinte de evento de entrada a cada input
inputs.forEach(input => {
    input.addEventListener('input', function() {
        // Remove todos os caracteres que não são letras ou caracteres especiais permitidos
        this.value = this.value.replace(/[^a-zA-ZçÇáéíóúÁÉÍÓÚâêîôÂÊÎÔãõÃÕüÜäëïöüÄËÏÖÜñÑ´~`^]/g, '');
    });
});


// Seleciona o input de email
const emailInput = document.getElementById('email');

// Adiciona um ouvinte de evento de entrada ao input de email
emailInput.addEventListener('input', function() {
    // Remove todos os caracteres que não são permitidos em um endereço de email
    this.value = this.value.replace(/[^a-zA-Z0-9.@_-]/g, '');
});



// ---------------------------------------------------------------------------------------------

// Passando a idade com JS
const ageOptions = [
  { value: "16-", text: "menos de 16 anos" },
  { value: "16", text: "16 anos" },
  { value: "17", text: "17 anos" },
  { value: "18", text: "18 anos" },
  { value: "19", text: "19 anos" },
  { value: "20", text: "20 anos" },
  { value: "21", text: "21 anos" },
  { value: "22", text: "22 anos" },
  { value: "23", text: "23 anos" },
  { value: "24", text: "24 anos" },
  { value: "25", text: "25 anos" },
  { value: "26", text: "26 anos" },
  { value: "27", text: "27 anos" },
  { value: "28", text: "28 anos" },
  { value: "29", text: "29 anos" },
  { value: "30", text: "30 anos" },
  { value: "31", text: "31 anos" },
  { value: "32", text: "32 anos" },
  { value: "33", text: "33 anos" },
  { value: "34", text: "34 anos" },
  { value: "35", text: "35 anos" },
  { value: "36", text: "36 anos" },
  { value: "37", text: "37 anos" },
  { value: "38", text: "38 anos" },
  { value: "39", text: "39 anos" },
  { value: "40", text: "40 anos" },
  { value: "41", text: "41 anos" },
  { value: "42", text: "42 anos" },
  { value: "43", text: "43 anos" },
  { value: "44", text: "44 anos" },
  { value: "45", text: "45 anos" },
  { value: "46", text: "46 anos" },
  { value: "47", text: "47 anos" },
  { value: "48", text: "48 anos" },
  { value: "49", text: "49 anos" },
  { value: "50", text: "50 anos" },
  { value: "50+", text: "mais de 50 anos" }
];

// Selecionando o elemento select da idade
const ageSelect = document.getElementById("age");

// Adicionando as opções ao select da idade
ageOptions.forEach(option => {
  const optionElement = document.createElement("option");
  optionElement.value = option.value;
  optionElement.text = option.text;
  ageSelect.appendChild(optionElement); // Correção: anexar ao ageSelect
});



// ---------------------------------------------------------------------------------------------

// Passando o genero com JS
const genderOptions = [
  { value: "Masculino", text: "Masculino" },
  { value: "Feminino", text: "Feminino" }
];

// Selecionando o elemento select da idade
const genderSelect = document.getElementById("gender");

// Adicionando as opções ao select da idade
genderOptions.forEach(option => {
  const optionElement = document.createElement("option");
  optionElement.value = option.value;
  optionElement.text = option.text;
  genderSelect.appendChild(optionElement); // Correção: anexar ao ageSelect
});




// ---------------------------------------------------------------------------------------------

// Passando o país com JS
const countryOptions = [
  { value: "Angola", text: "🇦🇴 Angola" },
  { value: "Portugal", text: "🇵🇹 Portugal" },
  { value: "Moçambique", text: "🇲🇿 Moçambique" },
  { value: "Brasil", text: "🇧🇷 Brasil" }
];

// Selecionando o elemento select da idade
const countrySelect = document.getElementById("country");

// Adicionando as opções ao select da idade
countryOptions.forEach(option => {
  const optionElement = document.createElement("option");
  optionElement.value = option.value;
  optionElement.text = option.text;
  countrySelect.appendChild(optionElement); // Correção: anexar ao ageSelect
});




// ---------------------------------------------------------------------------------------------

// Passando a provincia com JS
const cityOptions = [
  { value: "Bengo", text: "Bengo" },
  { value: "Benguela", text: "Benguela" },
  { value: "Bié", text: "Bié" },
  { value: "Cabinda", text: "Cabinda" },
  { value: "Cuando Cubango", text: "Cuando Cubango" },
  { value: "Cuanza Norte", text: "Cuanza Norte" },
  { value: "Cuanza Sul", text: "Cuanza Sul" },
  { value: "Cunene", text: "Cunene" },
  { value: "Huambo", text: "Huambo" },
  { value: "Huíla", text: "Huíla" },
  { value: "Luanda", text: "Luanda" },
  { value: "Lunda Norte", text: "Lunda Norte" },
  { value: "Lunda Sul", text: "Lunda Sul" },
  { value: "Malanje", text: "Malanje" },
  { value: "Moxico", text: "Moxico" },
  { value: "Namibe", text: "Namibe" },
  { value: "Uíge", text: "Uíge" },
  { value: "Zaire", text: "Zaire" }
];

// Selecionando o elemento select da cidade
const citySelect = document.getElementById("city");

// Adicionando as opções ao select da cidade
cityOptions.forEach(option => {
  const optionElement = document.createElement("option");
  optionElement.value = option.value;
  optionElement.text = option.text;
  citySelect.appendChild(optionElement); // Correção: anexar ao citySelect
});




// ---------------------------------------------------------------------------------------------

// Passando o curso com JS
const courseOptions = [
  // { value: "Curso de UX/UI Design  - 26.750 Akz (4 meses)", text: "Curso de UX/UI Design  - 26.750 Akz (4 meses)" }, 
  { value: "Curso de UX/UI Design  - 19.990 Akz (4 meses)", text: "Curso de UX/UI Design  - 19.990 Akz (4 meses)" }
  // { value: "Curso de UX/UI Design  - 26.750 Akz (4 meses)", text: "Curso de UX/UI Design  - 25.000 Akz (4 meses)" }
];

// Selecionando o elemento select da idade
const courseSelect = document.getElementById("course");

// Adicionando as opções ao select da idade
courseOptions.forEach(option => {
  const optionElement = document.createElement("option");
  optionElement.value = option.value;
  optionElement.text = option.text;
  courseSelect.appendChild(optionElement); // Correção: anexar ao ageSelect
});




// ---------------------------------------------------------------------------------------------

// Passando education level com JS
const educationOptions = [
  { value: "Ensino Médio", text: "Ensino Médio (ou Secundário)" },
  { value: "Bacharelado", text: "Bacharelado" },
  { value: "Pós-Graduação", text: "Pós-Graduação" },
  { value: "Pós-Doutorado", text: "Pós-Doutorado:" }
];

// Selecionando o elemento select da idade
const educationSelect = document.getElementById("education");

// Adicionando as opções ao select da idade
educationOptions.forEach(option => {
  const optionElement = document.createElement("option");
  optionElement.value = option.value;
  optionElement.text = option.text;
  educationSelect.appendChild(optionElement); // Correção: anexar ao ageSelect
});



