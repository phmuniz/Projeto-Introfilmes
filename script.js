const reiLeao = {nome: 'Rei Leão',
                imgSrc: './assets/static1.jpg',
                sinopse: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias vitae voluptas ab sapiente adipisci pariatur nulla ipsum dolor voluptatum, tempore deserunt ducimus itaque architecto, animi natus incidunt harum repellendus reiciendis! Impedit nam quisquam tenetur deserunt veniam, qui, ipsam explicabo assumenda ut voluptatum cum sed earum et sit quis provident sunt voluptas quos? Pariatur explicabo quo repudiandae reiciendis, provident quae est. Debitis, ab odio, quasi ex temporibus molestias maxime officia error, officiis eveniet nam perspiciatis numquam deserunt dignissimos vel repellat necessitatibus quis sapiente.',
                avaliacao: 4,
                lancamento: 1994
};

const enrolados = {nome: 'Enrolados',
                imgSrc: './assets/static2.png',
                sinopse: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias vitae voluptas ab sapiente adipisci pariatur nulla ipsum dolor voluptatum, tempore deserunt ducimus itaque architecto, animi natus incidunt harum repellendus reiciendis! Impedit nam quisquam tenetur deserunt veniam, qui, ipsam explicabo assumenda ut voluptatum cum sed earum et sit quis provident sunt voluptas quos? Pariatur explicabo quo repudiandae reiciendis, provident quae est. Debitis, ab odio, quasi ex temporibus molestias maxime officia error, officiis eveniet nam perspiciatis numquam deserunt dignissimos excepturi doloribus sit vel repellat necessitatibus quis sapiente. Ta diferente (so pra deixar claro)',
                avaliacao: 5,
                lancamento: 2014
};

const toyStory = {nome: 'Toy Story',
                imgSrc: './assets/static3.png',
                sinopse: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias vitae voluptas ab sapiente adipisci pariatur nulla ipsum dolor voluptatum, tempore deserunt ducimus itaque architecto, animi natus incidunt harum repellendus reiciendis! Impedit nam quisquam tenetur deserunt veniam, qui, ipsam explicabo assumenda ut voluptatum cum sed earum et sit quis provident sunt voluptas quos? Pariatur explicabo quo repudiandae reiciendis, provident quae est. Debitis, ab odio, quasi ex temporibus molestias maxime officia error, officiis eveniet nam perspiciatis numquam deserunt dignissimos excepturi doloribus sit vel repellat necessitatibus quis sapiente. Essa aqui definitivamente ta diferente :D',
                avaliacao: 5,
                lancamento: 2004
};

var films = Array();

films[0] = [reiLeao, enrolados, toyStory];
films[1] = [];
films[2] = [];

var i = 0;
var j = 3;

while(i < 3){

    while(j < 5){
        console.log('row' + (i+1));
        films[i][j] = {
            nome: '',
            imgSrc: '',
            sinopse: '',
            avaliacao: '',
            lancamento: ''
        }
        j += 1;
    }

    i += 1;
    j = 0;
}

i = 0;
j = 0;

while(i < 3){

    while(j < 5){
        console.log('row' + (i+1));
        var row = document.getElementById('row' + (i+1));
        var film = document.createElement('div');
        film.classList = 'film';
        var id = 'film' + ((i*5) + (j+1));
        console.log(id);
        film.id = id;
        film.setAttribute('onclick', 'toggleDesc("desc-' + id + '")');
        row.appendChild(film);
        j += 1;
    }

    i += 1;
    j = 0;
}

function toggleDesc(el) {
    var display = document.getElementById(el).style.display;
    if(display == "none")
        document.getElementById(el).style.display = 'flex';
    else
        document.getElementById(el).style.display = 'none';
}