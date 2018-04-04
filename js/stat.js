'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_TEXT_FONT = 'PT Mono';
var CLOUD_TEXT_SIZE = '16px';
var COLUMN_WIDTH = 40;
var COLUMN_GAP = 40;

var columnColors = ['red', 'blue', 'green', 'gray'];

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderCloudText = function (ctx, x, y) {
  ctx.font = CLOUD_TEXT_SIZE + ' ' + CLOUD_TEXT_FONT;
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', x, y);
  ctx.fillText('Список результатов:', x, y + 20);
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, '#fff');

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = columnColors[i];
    ctx.fillRect(160 + (COLUMN_GAP + COLUMN_WIDTH) * i, 80, 40, 150);
    ctx.fillText(names[i], 160 + (COLUMN_GAP + COLUMN_WIDTH) * i, 250);
    ctx.fillText(Math.round(times[i]), 160 + (COLUMN_GAP + COLUMN_WIDTH) * i, 75);

  }


  // ctx.fillStyle = 'green';
  // ctx.fillRect(160 + 80, 80, 40, 150);
  // ctx.fillText(names[1], 160 + 80, 250);

  // ctx.fillStyle = '#000';
  // ctx.fillRect(240 + 80, 80, 40, 150);
  // ctx.fillText(names[2], 240 + 80, 250);

  // ctx.fillStyle = 'blue';
  // ctx.fillRect(320 + 80, 80, 40, 150);
  // ctx.fillText(names[3], 320 + 80, 250);

  renderCloudText(ctx, 120, 40);
};
