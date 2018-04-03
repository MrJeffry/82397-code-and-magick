'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_TEXT_FONT = 'PT Mono';
var CLOUD_TEXT_SIZE = '16px';

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderCloudText = function (ctx, x, y) {
  ctx.font = CLOUD_TEXT_SIZE + ' ' + CLOUD_TEXT_FONT;
  ctx.fillText('Ура вы победили!', x, y);
  ctx.fillText('Список результатов:', x, y + 20);
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, '#fff');

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillRect(160, 60, 40, 150);
    ctx.fillText(names[i], 160, 230);
  }
  renderCloudText(ctx, 120, 40);
};
