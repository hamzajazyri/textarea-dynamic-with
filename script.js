const padding = 40;

function getMaxLineTextWidth(textarea) {
  let maxLineTextWidth = 0;
  const font = getComputedStyle(textarea).getPropertyValue('font');
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  context.font = font;
  for (let line of textarea.value.split('\n'))
    if (maxLineTextWidth < context.measureText(line).width)
      maxLineTextWidth = context.measureText(line).width;
  return maxLineTextWidth;
}

function onTextareaInput(event) {
  const textareaElem = document.querySelector('#textarea');
  const maxLineTextWidth = getMaxLineTextWidth(textareaElem);
  textareaElem.style.width = maxLineTextWidth + padding + 'px';
}
