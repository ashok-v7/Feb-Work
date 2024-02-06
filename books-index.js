
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const BookList1 ={
 Images:'https://m.media-amazon.com/images/I/71A-8Cr9cxL._AC_UY436_FMwebp_QL65_.jpg',
 Title:'Blockchain Technology: Concepts and Applications',
  Author:'Kumar Saurabh and Ashutosh Saxena'
}
const BookList2 ={
 Images:'https://m.media-amazon.com/images/I/61ItRb1o7nL._AC_UY436_FMwebp_QL65_.jpg',
 Title:'MASTERING BITCOIN 2/ED PROGRAMMING THE OPEN BLOCKCHAIN',
  Author:'Andreas M. Antonopoulos '
}
const BookList3 ={
 Images:'https://m.media-amazon.com/images/I/71A-8Cr9cxL._AC_UY436_FMwebp_QL65_.jpg',
 Title:'Blockchain Technology: Concepts and Applications',
  Author:'Kumar Saurabh and Ashutosh Saxena'
}
const BookList4 ={
 Images:'https://m.media-amazon.com/images/I/51i0-FJQZjL._AC_UY436_FMwebp_QL65_.jpg',
 Title:'BLOCKCHAIN',
  Author:'Don Tapscott'
}

//LibraryBooks function component renders a section that contains multiple Book components, one for each book 
//It passes data from the BookList objects to the Book components as props.
function LibraryBooks()
{
  return(
    <section className='bookList'>
     <Book 
            img ={BookList1.Images}
            titl ={BookList1.Title}
            author ={BookList1.Author}> 
     </Book>

     <Book img ={BookList2.Images}
            titl ={BookList2.Title}
            author ={BookList2.Author}> <p>Robert Jackson</p>
      </Book>

     <Book img ={BookList3.Images}
            titl ={BookList3.Title}
            author ={BookList3.Author}>
      </Book>

     <Book img ={BookList4.Images}
            titl ={BookList4.Title}
            author ={BookList4.Author}>
      </Book>
      
    </section>
  );
}

/*
Book is a functional component that takes props (img, titl, author, and children) and returns an article element 
with the book's image, title, author, and any children elements. The children prop is special in React; 
it allows you to pass components or JSX directly 
between the opening and closing tags of a component, providing additional flexibility in how components can be composed.
*/
const Book =({img,titl,author,children}) => 
{
  //const {img,titl,author}=props;
  return(
  <article className='books'>
    <img src={img} alt="" />
    <h2>{titl}</h2>
    <h4>{author}</h4>
    <h2>{children}</h2>
  </article>
);
}
ReactDOM.render(<LibraryBooks/>, document.getElementById('root'));


/*
using React to build a dynamic list of items based on data passed through props, 
demonstrating the basics of component creation, prop passing, and rendering.

*/

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
