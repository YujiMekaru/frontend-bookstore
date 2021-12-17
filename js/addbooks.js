generateFirstBooks();

function addProductToLocalStorage(obj)
{
    var id = parseInt(localStorage.getItem('idCount'))+1;
    var objId = {"Id":id};
    localStorage.setItem(id, JSON.stringify(Object.assign(objId, obj)));
    localStorage.setItem('idCount',id);
}


function generateFirstBooks()
{
    localStorage.setItem('idCount','0');
    addProductToLocalStorage(
        {
            Name: "Fortaleza Digital", 
            Amount: 60, 
            Author: "Dan Brown", 
            Publisher: "Sextante", 
            Img: "images/livros/fortalezadigital.png"
        });
    
    addProductToLocalStorage(
        {
            Name: "O Grande Gatsby", 
            Amount: 60, 
            Author: "F. Scott Fitzgerald", 
            Publisher: "Antofagica", 
            Img: "images/livros/ograndegatsby.jpg"
        });
        
    addProductToLocalStorage(
        {
            Name: "O Código Limpo", 
            Amount: 60, 
            Author: "Robert C. Martin", 
            Publisher: "Alta Books", 
            Img: "images/livros/codigolimpo.jpg"
        });   
            
    addProductToLocalStorage(
        {
            Name: "1984", 
            Amount: 60, 
            Author: "George Orwell", 
            Publisher: "Companhia das Letras", 
            Img: "images/livros/1984.jpg"
        });

    addProductToLocalStorage(
        {
            Name: "O Código da Vinci", 
            Amount: 50, 
            Author: "Dan Brown", 
            Publisher: "Arqueiro", 
            Img: "images/livros/ocodigodavinci.jpg"
        });

    addProductToLocalStorage(
        {
            Name: "A Culpa é das Estrelas", 
            Amount: 60, 
            Author: "John Green", 
            Publisher: "Intrínseca", 
            Img: "images/livros/aculpaedasestrelas.jpg"
        });

    addProductToLocalStorage(
        {
            Name: "Inferno", 
            Amount: 60, 
            Author: "Dan Brown", 
            Publisher: "Arqueiro", 
            Img: "images/livros/inferno.jpg"
        });

    addProductToLocalStorage(
        {
            Name: "To Kill a Mockingbird", 
            Amount: 60, 
            Author: "Harper Lee", 
            Publisher: "HarperPerennial", 
            Img: "images/livros/tokillamockingbird.jpg"
        });

    addProductToLocalStorage(
        {
            Name: "Forrest Gump", 
            Amount: 60, 
            Author: "Winston Groom", 
            Publisher: "Aleph", 
            Img: "images/livros/forrestgump.jpg"
        });

    addProductToLocalStorage(
        {
            Name: "Os Lusíadas", 
            Amount: 60, 
            Author: "Luís de Camões", 
            Publisher: "Martin Claret", 
            Img: "images/livros/oslusiadas.jpg"
        });

    addProductToLocalStorage(
        {
            Name: "Dom Quixote de La Mancha", 
            Amount: 60, 
            Author: "Miguel de Cervantes Saavedra", 
            Publisher: "Montecristo", 
            Img: "images/livros/domquixote.jpg"
        });

    addProductToLocalStorage(
        {
            Name: "Morte e Vida Severina", 
            Amount: 60, 
            Author: "João Cabral de Melo Neto", 
            Publisher: "Alfaguara", 
            Img: "images/livros/morteevidaseverina.jpg"
        });   
    addProductToLocalStorage(
        {
            Name: "Harry Potter e a Pedra Filosofal", 
            Amount: 60, 
            Author: "J. K. Rowling", 
            Publisher: "Pottermore Publishing", 
            Img: "images/livros/destaque1.jpg"
        });
    addProductToLocalStorage(
        {
            Name: "Sobre os Ossos dos Mortos", 
            Amount: 60, 
            Author: "Olga Tokarczuk", 
            Publisher: "Todavia", 
            Img: "images/livros/destaque2.jpg"
        });
    addProductToLocalStorage(
        {
            Name: "Cem Anos de Solidão", 
            Amount: 80, 
            Author: "Gabriel García Márquez", 
            Publisher: "Record", 
            Img: "images/livros/cemanosdesolidao.jpg"
        });
    addProductToLocalStorage(
        {
            Name: "Assim Falou Zaratustra", 
            Amount: 20, 
            Author: "Friedrich Nietzsche", 
            Publisher: "Companhia do Bolso", 
            Img: "images/livros/assimfalouzaratustra.jpg"
        });
}