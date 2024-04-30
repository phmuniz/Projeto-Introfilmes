const max_films_row = 5;

const film1 = {name: 'O REI LEÃO',
                imgSrc: './assets/static1.jpg',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias vitae voluptas ab sapiente adipisci pariatur nulla ipsum dolor voluptatum, tempore deserunt ducimus itaque architecto, animi natus incidunt harum repellendus reiciendis! Impedit nam quisquam tenetur deserunt veniam, qui, ipsam explicabo assumenda ut voluptatum cum sed earum et sit quis provident sunt voluptas quos?',
                rating: 4,
                year: 1994
};

const film2 = {name: 'ENROLADOS',
                imgSrc: './assets/enrolados-poster-6.jpg',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias vitae voluptas ab sapiente adipisci pariatur nulla ipsum dolor voluptatum, tempore deserunt ducimus itaque architecto, animi natus incidunt harum repellendus reiciendis! Impedit nam quisquam tenetur deserunt veniam, qui, ipsam explicabo assumenda ut voluptatum cum sed earum et sit quis provident sunt voluptas quos?',
                rating: 5,
                year: 2014
};

const film3 = {name: 'TOY STORY',
                imgSrc: './assets/static3.png',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias vitae voluptas ab sapiente adipisci pariatur nulla ipsum dolor voluptatum, tempore deserunt ducimus itaque architecto, animi natus incidunt harum repellendus reiciendis! Impedit nam quisquam tenetur deserunt veniam, qui, ipsam explicabo assumenda ut voluptatum cum sed earum et sit quis provident sunt voluptas quos?',
                rating: 5,
                year: 2004
};

const film4 = {name: 'NO WAY HOME',
                imgSrc: './assets/no-way-home.jpg',
                description: 'Peter Parker tem a sua identidade secreta revelada e pede ajuda ao Doutor Estranho. Quando um feitiço para reverter o evento não sai como o esperado, o Homem-Aranha e seu companheiro dos Vingadores precisam enfrentar inimigos de todo o multiverso.',
                rating: 5,
                year: 2021
};

var films = [];

row_construct(0);
film_construct(film1, 0);
film_construct(film2, 0);
film_construct(film3, 0);
film_construct(film4, 0);
input_construct(0);

function row_construct(n_row){

    var catalog = document.getElementById('catalog');

    var row = document.createElement('div');
    row.id = 'row' + n_row;
    row.classList = 'row';

    //creating films list of row
    var films_row = document.createElement('div');
    films_row.id = 'films-row' + n_row;
    films_row.classList = 'films-row';

    //creating descriptions list of row
    var desc_row = document.createElement('div');
    desc_row.id = 'desc-row' + n_row;
    desc_row.classList = 'desc-row';

    row.appendChild(films_row);
    row.appendChild(desc_row);

    catalog.appendChild(row);
}

function film_construct(film_data, n_row){

    films.push(film_data);
    var n_film = films.length;
    console.log(films);

    //creating film space
    var row_films = document.getElementById('films-row' + n_row);
    var film = document.createElement('div');
    film.classList = 'film';
    var id_film = 'film' + n_film;
    film.id = id_film;
    film.setAttribute('onclick', 'toggleDesc("desc-' + id_film + '")');

    var img = document.createElement('img');
    img.src = film_data['imgSrc'];
    img.classList = 'picture__img';
    film.appendChild(img);
    row_films.appendChild(film);

    //creating description space
    var row_desc = document.getElementById('desc-row' + n_row);
    var desc = document.createElement('div');
    desc.classList = 'desc';
    var id_desc = 'desc-' + id_film;
    desc.id = id_desc;
    row_desc.appendChild(desc);

    var add_img = document.createElement('div');
    add_img.classList = 'add-img';
    var img_cover = document.createElement('img');
    img_cover.src = film_data['imgSrc'];
    img_cover.classList = 'picture__img';
    add_img.appendChild(img_cover);
    desc.appendChild(add_img);

    var add_desc = document.createElement('div');
    add_desc.classList = 'add-desc';

    var desc_up = document.createElement('div');
    desc_up.classList = 'desc-up';
    var input_title = document.createElement('span');
    input_title.classList = 'desc-title';
    input_title.id = 'input-title' + id_film;
    input_title.innerHTML = film_data['name'];
    var input_year = document.createElement('span');
    input_year.classList = 'desc-year';
    input_year.id = 'input-year' + id_film;
    input_year.innerHTML = film_data['year'];

    var desc_down = document.createElement('div');
    desc_down.classList = 'desc-down';
    var input_desc = document.createElement('span');
    input_desc.classList = 'desc-text';
    input_desc.id = 'input-desc' + id_film;
    input_desc.innerHTML = film_data['description'];
    desc_down.appendChild(input_desc);

    add_desc.appendChild(desc_up);
    desc_up.appendChild(input_title);
    desc_up.appendChild(input_year);
    add_desc.appendChild(desc_down);
    desc.appendChild(add_desc);
}

function input_construct(n_row){

    //creating input button space
    var row_films = document.getElementById('films-row' + n_row);
    var input = document.createElement('div');
    input.classList = 'film';
    input.id = 'film-input';
    input.setAttribute('onclick', 'toggleDesc("desc-input")');
    row_films.appendChild(input);

    //creating input description space
    var row_desc = document.getElementById('desc-row' + n_row);
    var desc = document.createElement('div');
    desc.classList = 'desc';
    var id_desc = 'desc-input';
    console.log(id_desc);
    desc.id = id_desc;
    row_desc.appendChild(desc);

    var add_img = document.createElement('label');
    add_img.id = 'add-img';
    add_img.classList = 'add-img';
    add_img.setAttribute('for', 'input-img');
    var span = document.createElement('span');
    span.classList = 'picture_text'
    span.innerHTML = 'Insira uma capa';
    var input_img = document.createElement('input');
    input_img.type = 'file';
    input_img.accept = 'image/*';
    input_img.id = 'input-img';
    input_img.style.display = 'none';
    input_img.setAttribute('onchange', 'add_img()');
    add_img.appendChild(span);
    desc.appendChild(input_img);
    desc.appendChild(add_img);

    var add_desc = document.createElement('div');
    add_desc.classList = 'add-desc';

    var desc_up = document.createElement('div');
    desc_up.classList = 'desc-up';
    var input_title = document.createElement('input');
    input_title.style.width = '290px';
    input_title.type = 'text';
    input_title.placeholder = 'Insira o nome';
    input_title.classList = 'desc-title';
    input_title.id = 'input-title';
    input_title.maxLength = '15';
    var input_year = document.createElement('input');
    input_year.type = 'text';
    input_year.placeholder = 'Insira o ano de criação';
    input_year.classList = 'desc-year';
    input_year.id = 'input-year';
    input_year.maxLength = '4';

    var desc_down = document.createElement('div');
    desc_down.classList = 'desc-down';
    var input_text = document.createElement('textarea');
    input_text.style.width = '75%';
    input_text.style.height = '90px';
    input_text.placeholder = 'Insira uma breve sinopse';
    input_text.classList = 'desc-text';
    input_text.id = 'input-text';
    input_text.maxLength = '380';
    var save = document.createElement('button');
    save.type = 'button';
    save.classList = 'save-button';
    save.setAttribute('onclick', 'input_save()');
    save.innerHTML = 'SALVAR';

    add_desc.appendChild(desc_up);
    desc_up.appendChild(input_title);
    desc_up.appendChild(input_year);
    add_desc.appendChild(desc_down);
    desc_down.appendChild(input_text);
    desc_down.appendChild(save);
    desc.appendChild(add_desc);
}

function add_img(){

    var add_img = document.getElementById('add-img');
    const inputTarget = document.getElementById('input-img');
    const file = inputTarget.files[0];

    if (file) {
        const reader = new FileReader();

        reader.addEventListener("load", function (e) {
            const readerTarget = e.target;

            var img = document.createElement("img");
            img.id = 'input-img-cover';
            img.src = readerTarget.result;
            img.classList.add("picture__img");
            add_img.innerHTML = '';
            add_img.appendChild(img);
        });

        reader.readAsDataURL(file);
    }
}

function input_destroy(){

    var input_film = document.getElementById('film-input');
    input_film.parentElement.removeChild(input_film);
    var input_desc = document.getElementById('desc-input');
    input_desc.parentElement.removeChild(input_desc);
}

function input_save(){
    
    if(document.getElementById('input-img-cover') != null){
        var input_img = document.getElementById('input-img-cover').src;
    }
    var input_title = document.getElementById('input-title').value;
    var input_year = document.getElementById('input-year').value;
    var input_text = document.getElementById('input-text').value;

    if(input_img == undefined || input_title.length == 0 || input_year.length == 0 || input_text.length == 0){

        alert('Preencha todos os dados para adicionar o filme corretamente');
        return null;
    }

    var n_row = Math.floor(films.length / max_films_row);

    var film = {
        name: input_title,
        imgSrc: input_img,
        description: input_text,
        rating: 4,
        year: input_year
    };

    console.log(film);

    input_destroy();

    film_construct(film, n_row);

    if((films.length % max_films_row) === 0){
        n_row++;
        row_construct(n_row);
    }

    input_construct(n_row);
}

function toggleDesc(el){
    var i = 1;

    if(el != 'desc-input' && document.getElementById('desc-input').style.display == 'flex'){
        return null;
    }

    while(i <= films.length){

        var id_desc = 'desc-film' + i;

        if(id_desc != el && document.getElementById(id_desc).style.display == 'flex'){
            return null;
        }

        i++;
    }

    var display = document.getElementById(el).style.display;
    if(display == 'none' || display == ''){
        document.getElementById(el).style.display = 'flex';
    }
    else{
        document.getElementById(el).style.display = 'none';
    }
}