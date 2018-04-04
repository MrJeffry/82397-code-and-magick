'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;

var TITLE_TEXT_SIZE = '16px';
var TITLE_TEXT_FONT = 'PT Mono';

var COLUMN_WIDTH = 40;
var COLUMN_HEIGHT = 150;
var COLUMN_GAP = 50;

var GAP = 10;
var barHeight = CLOUD_HEIGHT - COLUMN_HEIGHT;

var columnColors = ['hsl(217, 90%, 61%)', 'hsl(217, 50%, 61%)', 'hsl(217, 20%, 61%)'];

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderCloudText = function (ctx, x, y) {
  ctx.font = TITLE_TEXT_SIZE + ' ' + TITLE_TEXT_FONT;
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', x, y);
  ctx.fillText('Список результатов:', x, y + (GAP * 2));
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = Math.round(arr[i]);
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = columnColors[i];
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }

    ctx.fillRect(CLOUD_X + COLUMN_GAP + (COLUMN_GAP + COLUMN_WIDTH) * i, (CLOUD_HEIGHT - COLUMN_GAP) - (barHeight * times[i]) / maxTime, COLUMN_WIDTH, (barHeight * times[i]) / maxTime);
    ctx.fillText(Math.round(times[i]), CLOUD_X + COLUMN_GAP + (COLUMN_GAP + COLUMN_WIDTH) * i, (CLOUD_HEIGHT - COLUMN_GAP - GAP) - (barHeight * times[i]) / maxTime);
    ctx.fillText(names[i], CLOUD_X + COLUMN_GAP + (COLUMN_GAP + COLUMN_WIDTH) * i, COLUMN_HEIGHT + CLOUD_X);

  }
  renderCloudText(ctx, CLOUD_X + (GAP * 2), (CLOUD_Y + GAP) * 2);
};
