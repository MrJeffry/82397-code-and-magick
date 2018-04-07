'use strict';
var wizardName = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardSurname = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго'];
var wizardCoatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var wizardEyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
var GENERATED_CHARACTERS = 4;

var userDialog = document.querySelector('.setup');
var setupSimilar = document.querySelector('.setup-similar');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template');
var similarWizardItem = similarWizardTemplate.content.querySelector('.setup-similar-item');


userDialog.classList.remove('hidden');


var randomArrayGeneration = function (array) {
  return array[Math.ceil(Math.random() * array.length - 1)];
};

var generateWizard = function (quantityWizard) {
  var wizard = [];
  for (var i = 0; i < quantityWizard; i++) {
    wizard[i] = {
      name: randomArrayGeneration(wizardName) + ' ' + randomArrayGeneration(wizardSurname),
      coatColor: randomArrayGeneration(wizardCoatColor),
      eyesColor: randomArrayGeneration(wizardEyesColor)
    };
  }
  return wizard;
};

var WIZARDS = generateWizard(GENERATED_CHARACTERS);

var renderWizard = function (wizard) {
  var wizardElement = similarWizardItem.cloneNode(true);
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  return wizardElement;
};

var generateFragment = function (wizards) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < GENERATED_CHARACTERS; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);
};

generateFragment(WIZARDS);

setupSimilar.classList.remove('hidden');
