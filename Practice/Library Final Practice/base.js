const actionButton = document.querySelector("button");
actionButton.addEventListener("click", library);

const books = [
  { id: 1, author: "Stiven King", name: "Green mile", isReading: false },
  { id: 2, author: "F.Scott Fitzgerald", name: "The Great Gatsby", isReading: false },
  { id: 3, author: "Kristin Hannah", name: "The Nigbtingale", isReading: false },
  { id: 4, author: "Margaret Mitchell", name: "Gone with the wind", isReading: false },
  { id: 5, author: "Paulo Coelho", name: "The Alchemist", isReading: false },
];

function library() {
  
  let userStartAsk = Number(prompt(`Welcome to our library! Write number what you want to do? 
1: Take a book
2: Return the book
3: Enter your book`));
  if (!userStartAsk || isNaN(userStartAsk) || userStartAsk >= 4) {
    alert('Enter one of the suggested numbers')
  }
  const takeBook = () => {
   
    const showBookList = (array) => {
      let availableBooks = [];
  
      for (let item of array) {
          if (item.isReading === false) {
             availableBooks.push(item.name);
          }
       }
  
      let userBookChoice = prompt (`What you want? Write the name of the book. We already have:\n${availableBooks.join('\n')}\n`);
      
      let checkBook = books.map(item => item.name).some(item => item === userBookChoice);

      if (!userBookChoice || +userBookChoice || checkBook === false) {
        alert ('Write correct name');
      } else {
        books.filter (item => {
          if (item.name === userBookChoice ) {
            item.isReading = true
            alert(`This book id : ${item.id}
Please don't forget it!`)
          }
        })
      }
    }
  showBookList(books);
  }

  const returnBook = () => {
   
    let startReturnAsk = prompt('Write id book which you want return');

    if (!startReturnAsk || !Number(startReturnAsk)) {
        alert('Write correct id')
    }

    let res = books.map(item => item.id).some(item => item == startReturnAsk); // Не знаю почему но когда ставишь строгое равенство не работает
    
    if (res === true) {
        books.filter(item => {
            if (item.id == startReturnAsk) {
                item.isReading = false;
            } 
        })
      alert('Thank you, hope you enjoy this book!')
    } else {
        alert('We dont have this book')
    }
    
}
  const enterBook = () => {

    let bookAuthor = prompt('Write author');
    if (!bookAuthor || +bookAuthor) {
        alert('Unncorect author');
    }
    let bookName = prompt('Write name of the book');
    if (!bookName || +bookName) {
        alert('Unncorect name')
    }
    let checkAuthorOfBook = books.map(item => item.author).some(item => item === bookAuthor);
    let checkNameOfBook = books.map(item => item.name).some(item => item === bookName);
    
    if (checkNameOfBook === true  && checkAuthorOfBook === true) {
        alert('This book we already have')
    } else {
        let newID = books[books.length - 1].id + 1
        let newBook = { id: newID, author: bookAuthor, name: bookName, isReading: false};
        books.push(newBook);
    }


  }


  switch (userStartAsk) {
    case 1: takeBook();
      break;
    case 2: returnBook();
      break;
    case 3: enterBook();
      break;
  }

}


library();

console.log(books);