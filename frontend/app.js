import'./styles/app.css'
import BookServices from './services/BookService'

const bookForm = document.getElementById('book-form')


 bookForm.addEventListener('submit', (e) => {
    const title=bookForm['title'].value;
    const author=bookForm['author'].value;
    const isbn=bookForm['isb'].value;
    const image=document.getElementById('image').file;

    const formData=new FormData();
    formData.append('image',image[0]);
    formData.append('title',title);
    formData.append('author',author);
    formData.append('isbn',isbn);

    const bookservice= new BookServices()
    bookservice.postBooks(formData)

    e.preventDefault();

 });

