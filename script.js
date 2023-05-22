const closePopUp = document.getElementById('closePopUp');
const addABook_btn = document.getElementById('addABook');
const popUpSubmit_btn = document.getElementById('submit_btn');
const readStatus_btn = document.getElementById('readStatus_btn');
const delete_btn = document.querySelector('.delete_book');
let hero_container = document.getElementById('hero_container');




const popUpParent = document.getElementById('popUp_container');
const bookShelf = document.getElementById('bookShelf');
const form = document.getElementById('real_form');




let bookStorage = [];



closePopUp.addEventListener('click', () => {
    popUpParent.style.display = 'none';
})


addABook_btn.addEventListener('click', () => {
    popUpParent.style.display = 'flex';
})

popUpSubmit_btn.addEventListener('click', (event) => {
    event.preventDefault();
    if(bookName.value.length < 1 || authorName.value.length < 1 || bookPages.value < 1 ){
        console.log('awooga');
    }
    else{
        let name = bookName.value;
        let author = authorName.value;
        let pages = bookPages.value;
        let book = { //creates an object called book, that added the name
            name: name,
            author: author,
            pages: pages,
            read: read.checked
        }

         
    bookStorage.push(book); //pushing that object in book
    popUpParent.style.display = 'none';


    addBook(bookStorage);
    }
})


function addBook(arr){
    console.log(bookStorage)
    bookShelf.innerText = '';
    form.reset();
    // console.clear();
    // console.log(bookStorage)
for(let i = 0; i<arr.length; i++){
const book = document.createElement("div"); //This is the div card that holds all the information
const bookName = document.createElement("div"); // I am creating a bunch of parent container and their child that holds different information like title, author name, pages etc
const title_txt = document.createElement("p");
const bookAuthor = document.createElement('div');
const author_txt = document.createElement('p');
const bookPages = document.createElement('div');
const readStatus_container = document.createElement('div');
const readStatus_btn = document.createElement('div');
const delete_book = document.createElement('div');
const readStatus_btn_container = document.createElement('div');
const delete_book_container = document.createElement('div');

book.classList.add('book'); // Here I am adding class names to the containers, I have already given styles to these class name so whenebver they are attached to the containers, the style is already there
bookName.classList.add('bookName');
title_txt.classList.add('title-txt');
bookAuthor.classList.add('bookAuthor');
author_txt.classList.add('author-txt');
bookPages.classList.add('bookPages')
readStatus_container.classList.add('readStatus_container');
readStatus_btn.classList.add('readStatus_btn');
delete_book.classList.add('delete_book');
readStatus_btn_container.classList.add('readStatus_btn_container');
delete_book_container.classList.add('delete_book_container');



book.appendChild(bookName); // Here I am appending all the parent container to the book container and the child containers to their parent container
bookName.appendChild(title_txt);
readStatus_container.appendChild(readStatus_btn_container);
book.appendChild(bookAuthor);
bookAuthor.appendChild(author_txt);
book.appendChild(bookPages);
readStatus_container.appendChild(delete_book);
book.appendChild(readStatus_container);
readStatus_container.appendChild(readStatus_btn);
readStatus_btn_container.appendChild(readStatus_btn);
readStatus_container.appendChild(delete_book_container);
delete_book_container.appendChild(delete_book);

        title_txt.innerText = arr[i].name; //their title is changed
        author_txt.innerText = arr[i].author;
        bookPages.innerText = arr[i].pages;
        book.id = arr[i].name + 'x';
        if(arr[i].read === true){
            readStatus_btn.innerText = 'Read';
            
            readStatus_btn.style.backgroundColor = 'green';
        }
        else{
            readStatus_btn.innerText = 'unread';
            readStatus_btn.style.backgroundColor = 'red';
        }
        bookShelf.appendChild(book);
    }

}



// readStatus_btn.addEventListener('click', (e) => {
//     // if(readStatus_btn.innerText = 'Read'){
//     //     readStatus_btn.innerText = 'Unread';
//     //     readStatus_btn.style.backgroundColor = 'red';
//     // }
//     // else{
//     //     readStatus_btn.innerText = 'Read';
//     //     readStatus_btn.style.backgroundColor = 'green';

//     console.log(e.target);
// })



hero_container.addEventListener('click', (e) => { //Event.target for the delete button
    // console.log(e.target);
    if (e.target.matches('div.delete_book')){
        let parent_node = e.target.parentNode.parentNode.parentNode;
        let parent_nodeName = parent_node.id.slice(0, -1);
        for(let i = 0; i<bookStorage.length; i++){ //Removed the object from array too
            if(bookStorage[i].name == parent_nodeName){
                let index = bookStorage.indexOf(bookStorage[i]);
                bookStorage.splice(index, 1);
            }
        }
        // console.log(object_tobeRemoved);
        // console.log(parent_nodeName);
        parent_node.remove();
        // console.log(bookName.value);
    }
})


hero_container.addEventListener('click', (e) => {
    if (e.target.matches('div.readStatus_btn')){
        let readStatus_btn = e.target;
        if (readStatus_btn.innerText == 'Read'){
            let element = e.target.parentElement.parentElement.parentElement.id;
            let elementIndex = bookStorage.map(e => e.name).indexOf(element.slice(0, element.length - 1));
            bookStorage[elementIndex].read = false;
            console.log(bookStorage);
            readStatus_btn.innerText = 'Unread';
            readStatus_btn.style.backgroundColor = 'red';
        }
        else{
             let readStatus_btn = e.target;
             let element = e.target.parentElement.parentElement.parentElement.id;
             let elementIndex = bookStorage.map(e => e.name).indexOf(element.slice(0, element.length - 1));
             bookStorage[elementIndex].read = true;
             readStatus_btn.innerText = 'Read';
            readStatus_btn.style.backgroundColor = 'green';
        }
    }
})


