const mainContainer = document.querySelector('#main-container')


//MODAL + FORM HANDLING

const form = document.querySelector("#form")
const new_book_button = document.querySelector("#new-book")
const modal_form = document.querySelector("#form-modal")
const submit_btn = document.querySelector('#submit-button')
new_book_button.addEventListener('click', () => {
    modal_form.showModal()
})




submit_btn.addEventListener('click', (e) => {
    
    e.preventDefault()
    modal_form.close()
    


    formData.title = document.querySelector("#title").value;
    formData.author = document.querySelector("#author").value;
    formData.pages = document.querySelector("#pages").value;
    formData.read = document.querySelector("#read").value;

    addBook(formData.title, formData.author, formData.pages, formData.read)
    mainContainer.innerHTML = ''
    displayBook(myLibrary);
    formData = {};
    form.reset()
    
    console.log(myLibrary)

    
})

//GETTING DATA FROM THE FORM

let formData = {};





// CONSTRUCTOR
    function Book(title, author, pages, read){

        const randomID = crypto.randomUUID();

        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.id = crypto.randomUUID()

    }

// EMPTY ARRAY TO BEGIN WITH

let myLibrary = []

// function to add books to the array using the constructor 

let addBook = function(title, author, pages, read, id){

    let bookToAdd = new Book(title, author, pages, read, id)

    myLibrary.push(bookToAdd)

}


addBook('Lord of the Rings', 'Tolkien', 100, true)
addBook('Dungeon Crawler Carl', 'Dinniman', 300, false)
addBook('Frankenstein', 'Shelley', 280, false)

// Receive as parameter the array that we need to iterate and creates necessary elements.
let displayBook = function(bookArr){
    
    for(i = 0; i < myLibrary.length; i++){

        const h2 = document.createElement('h2')
        const p_author = document.createElement('p')
        const p_pages = document.createElement('p')
        const p_read = document.createElement('p')
        const card = document.createElement('div')
        card.className = 'book-card'
        const removeButton = document.createElement('button');
        removeButton.className = 'remove-button';
        
        

        h2.innerText = myLibrary[i].title;
        card.appendChild(h2);
        p_author.innerText = 'by '+ myLibrary[i].author;
        card.appendChild(p_author);
        p_pages.innerText = myLibrary[i].pages + ' pages'
        card.appendChild(p_pages)
        p_read.innerText = 'readed? '+ myLibrary[i].read;
        card.appendChild(p_read);
        removeButton.innerText = 'Remove book';

        removeButton.setAttribute('data-id', myLibrary[i].id);
        
       
        
       
    
        card.appendChild(removeButton);
        mainContainer.appendChild(card);
        
    }

}


displayBook(myLibrary)


//removeButton.addEventListener('click', (e) => {
//    removeBook(myLibrary, e.target.dataset.id)
//})

mainContainer.addEventListener('click', (e) => {
    const target = e.target

    if(target.className == 'remove-button'){
        removeBook(myLibrary, e.target.dataset.id)
    }
})


const removeBook = function(arr, id ){

    let filtered = arr.filter(function(element){

        console.log(element)
        return element.id != id

    })

    myLibrary = filtered;
    mainContainer.innerHTML = ''
    displayBook(myLibrary)
    
}



//console.log(arr)
//