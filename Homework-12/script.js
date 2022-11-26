const button = document.getElementById('button');
button.className = 'button';


const createTooltip = (elem, text) => {
  const coords = elem.getBoundingClientRect();

  const tooltip = document.createElement('div');
  tooltip.innerText = text;
  tooltip.className = 'text';
  tooltip.style = 'position: absolute; top: 80px; left: 80px';


  document.body.prepend(tooltip);
}  

createTooltip(button, 'No light - no life!');


