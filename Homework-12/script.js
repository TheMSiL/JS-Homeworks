// const button = document.getElementById('button');
// button.className = 'button';


// const createTooltip = (elem, text) => {
//   const coords = elem.getBoundingClientRect();

//   const tooltip = document.createElement('div');
//   tooltip.innerText = text;
//   tooltip.className = 'text';
//   tooltip.style = 'position: absolute; top: 80px; left: 80px';


//   document.body.prepend(tooltip);
// }  

// createTooltip(button, 'No light - no life!');


const button = document.getElementById('button');
button.classList.add('button');


const createTooltip = (elem, text) => {
  
  const tooltip = document.createElement('div');
  tooltip.innerText = text;
  tooltip.className = 'text';
  document.body.prepend(tooltip);

  const coords = elem.getBoundingClientRect();

  const tooltipTop = coords.top - 10 - tooltip.clientHeight;
  
  const tooltipLeft = coords.left + coords.width / 2 - tooltip.clientWidth / 2;

  tooltip.style.top = `${tooltipTop}px`;
  tooltip.style.left = `${tooltipLeft}px`;

}  

createTooltip(button, 'No light - no life!');