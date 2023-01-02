const showGreeting = () => {
  const greeting = document.createElement('h1');
  greeting.innerText = 'Добро пожаловать';
  const siteEnterTimes = document.createElement('h2');
  
  let times; 
  
  if (localStorage.length == 0) {
    localStorage.setItem('times','1');
    document.body.append(greeting);
  } else {
    times = localStorage.getItem('times');
    times++
    localStorage.setItem('times',times);
    siteEnterTimes.innerText = `Вы заходили раз:${times} `;
    document.body.append(greeting);
    document.body.append(siteEnterTimes)
  }
  
}

showGreeting();

