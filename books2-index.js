/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const books = [                                                                                                                                                                                     
  {                                                                                                                     
    id: 1,
    img: 'https://m.media-amazon.com/images/I/71A-8Cr9cxL._AC_UY436_FMwebp_QL65_.jpg',
    title: 'Blockchain Technology: Concepts and Applications',
    author: 'Kumar Saurabh and Ashutosh Saxena'
  },
  {
    id: 2,
    img: 'https://m.media-amazon.com/images/I/61ItRb1o7nL._AC_UY436_FMwebp_QL65_.jpg',
    title: 'MASTERING BITCOIN 2/ED PROGRAMMING THE OPEN BLOCKCHAIN',
    author: 'Andreas M. Antonopoulos'
  },
  {
    id: 3,
    img: 'https://m.media-amazon.com/images/I/71A-8Cr9cxL._AC_UY436_FMwebp_QL65_.jpg',
    title: 'Blockchain Technology: Concepts and Applications',
    author: 'Kumar Saurabh and Ashutosh Saxena'
  },
  {
    id: 4,
    img: 'https://m.media-amazon.com/images/I/51i0-FJQZbook2jL._AC_UY436_FMwebp_QL65_.jpg',
    title: 'BLOCKCHAIN',
    author: 'Don Tapscott'
  }
];

 
 

function LibraryBooks() {
  return (
    <section className='bookList'>
      {books.map((book) => (
        <Book
          key={book.id}
          img={book.img}
          titl={book.title}
          author={book.author}
        />
      ))}
    </section>
  );
}

const Book = ({ img, titl, author }) => {
  return (
    <article className='books'>
      <img src={img} alt="" />
      <h2>{titl}</h2>
      <h4>{author}</h4>
    </article>
  );
}

ReactDOM.render(<LibraryBooks />, document.getElementById('root'));
*/


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const books = ["Maths", "Science", "Social"];

function LibraryBooks() {
  return (
    <section className='bookList'>
      {books.map((subject, index) => (
        <Book
          key={index}
          title={subject}
        />
      ))}
    </section>
  );
}

const Book = ({ title }) => {
  return (
    <article className='book'>
      <h2>{title}</h2>
    </article>
  );
}

ReactDOM.render(<LibraryBooks />, document.getElementById('root'));
