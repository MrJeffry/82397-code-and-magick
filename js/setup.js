'use strict';

var GENERATED_CHARACTERS = 4;

var wizardNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardSurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго'];
var wizardCoatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var wizardEyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
var setupSimilar = userDialog.querySelector('.setup-similar');
var similarListElement = userDialog.querySelector('.setup-similar-list');

userDialog.classList.remove('hidden');

var randomArrayGeneration = function (array) {
  return array[Math.ceil(Math.random() * array.length - 1)];
};

var generateWizards = function (quantityWizard) {
  var wizards = [];
  for (var i = 0; i < quantityWizard; i++) {
    wizards[i] = {
      name: randomArrayGeneration(wizardNames) + ' ' + randomArrayGeneration(wizardSurnames),
      coatColor: randomArrayGeneration(wizardCoatColors),
      eyesColor: randomArrayGeneration(wizardEyesColors)
    };
  }
  return wizards;
};

var wizards = generateWizards(GENERATED_CHARACTERS);

var renderWizard = function (wizard) {
  var similarWizardTemplate = document.querySelector('#similar-wizard-template');
  var similarWizardItem = similarWizardTemplate.content.querySelector('.setup-similar-item');
  var wizardElement = similarWizardItem.cloneNode(true);

  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;

  return wizardElement;
};

var generateFragment = function (wizardsArray) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < GENERATED_CHARACTERS; i++) {
    fragment.appendChild(renderWizard(wizardsArray[i]));
  }
  similarListElement.appendChild(fragment);
};

generateFragment(wizards);

setupSimilar.classList.remove('hidden');
