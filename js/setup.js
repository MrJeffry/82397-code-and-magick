'use strict';

var GENERATED_CHARACTERS = 4;
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var userDialog = document.querySelector('.setup');
var setupSimilar = userDialog.querySelector('.setup-similar');
var closeDialogButton = userDialog.querySelector('.setup-close');
var similarListElement = userDialog.querySelector('.setup-similar-list');
var avatarButton = document.querySelector('.setup-open-icon');
var inputName = document.querySelector('.setup-user-name');
var wizardEyes = document.querySelector('.wizard-eyes');
var wizardFireball = document.querySelector('.setup-fireball-wrap');

// Временное решение! Удалить!
// userDialog.classList.remove('hidden');
//

var wizardEyesColorClickHandler = function () {
  var wizardEyesColor = generateWizardEyesColor();
  wizardEyes.style.fill = wizardEyesColor;
};

var wizardFireballColorClickHandler = function () {
  var wizardFireballColor = generateWizardFireballColor();
  wizardFireball.style.background = wizardFireballColor;
};

var avatarIconClickHandler = function () {
  userDialog.classList.remove('hidden');
  avatarButton.removeEventListener('keydown', avatarIconEnterPressHandler);
  closeDialogButton.addEventListener('keydown', closeDialogEnterPressHandler);
  closeDialogButton.addEventListener('click', dialogCloseButtonClickHendler);
  inputName.addEventListener('focus', inputNameFocusHandler);
  document.addEventListener('keydown', closeDialogEscPressHandler);
  wizardEyes.addEventListener('click', wizardEyesColorClickHandler);
  wizardFireball.addEventListener('click', wizardFireballColorClickHandler);
};

var dialogCloseButtonClickHendler = function () {
  userDialog.classList.add('hidden');
  document.removeEventListener('keydown', closeDialogEscPressHandler);
  closeDialogButton.removeEventListener('keydown', closeDialogEnterPressHandler);
  avatarButton.addEventListener('keydown', avatarIconEnterPressHandler);
  inputName.removeEventListener('focus', inputNameFocusHandler);
  wizardEyes.removeEventListener('click', wizardEyesColorClickHandler);
  wizardFireball.removeEventListener('click', wizardFireballColorClickHandler);
};

var closeDialogEscPressHandler = function (e) {
  if (e.keyCode === ESC_KEYCODE) {
    dialogCloseButtonClickHendler();
  }
};

var closeDialogEnterPressHandler = function (e) {
  if (e.keyCode === ENTER_KEYCODE) {
    dialogCloseButtonClickHendler();
  }
};

var avatarIconEnterPressHandler = function (e) {
  if (e.keyCode === ENTER_KEYCODE) {
    avatarIconClickHandler();
  }
};

var inputNameFocusHandler = function () {
  document.removeEventListener('keydown', closeDialogEscPressHandler);
};

var randomArrayGeneration = function (array) {
  return array[Math.ceil(Math.random() * array.length - 1)];
};

var generateWizardEyesColor = function () {
  return randomArrayGeneration(WIZARD_EYES_COLORS);
};

var generateWizardFireballColor = function () {
  return randomArrayGeneration(WIZARD_FIREBALL_COLORS);
};

var generateWizards = function (quantityWizard) {
  var wizards = [];
  for (var i = 0; i < quantityWizard; i++) {
    wizards[i] = {
      name: randomArrayGeneration(WIZARD_NAMES) + ' ' + randomArrayGeneration(WIZARD_SURNAMES),
      coatColor: randomArrayGeneration(WIZARD_COAT_COLORS),
      eyesColor: randomArrayGeneration(WIZARD_EYES_COLORS)
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

avatarButton.addEventListener('click', avatarIconClickHandler);
avatarButton.addEventListener('keydown', avatarIconEnterPressHandler);
