var row1_films = document.getElementById('films-row1');
var row1_desc = document.getElementById('desc-row1');

//Creating static 1
var static1 = document.createElement('div');
static1.classList = 'film';
var id_film = 'film1';
static1.id = id_film;
static1.setAttribute('onclick', 'toggleDesc("desc-' + id_film + '")');
row1_films.appendChild(static1);
var image_static1 = document.createElement('img');
image_static1.src = 'assets/static1.jpg';
static1.appendChild(image_static1);

var desc1 = document.createElement('div');
desc1.classList = 'desc';
var id_desc1 = 'desc-film1';
desc1.id = id_desc1;
row1_desc.appendChild(desc1);

var i = 0;
var j = 1;

while(i < 3){

    while(j < 5){

        //Adding film space
        console.log('row' + (i+1));
        var row_films = document.getElementById('films-row' + (i+1));
        var film = document.createElement('div');
        film.classList = 'film';
        var id_film = 'film' + ((i*5) + (j+1));
        console.log(id_film);
        film.id = id_film;
        film.setAttribute('onclick', 'toggleDesc("desc-' + id_film + '")');
        row_films.appendChild(film);

        //Adding description space
        var row_desc = document.getElementById('desc-row' + (i+1));
        var desc = document.createElement('div');
        desc.classList = 'desc';
        var id_desc = 'desc-' + id_film;
        console.log(id_desc);
        desc.id = id_desc;
        row_desc.appendChild(desc);

        var add_img = document.createElement('div');
        add_img.classList = 'add-img';
        var span = document.createElement('span');
        span.classList = 'picture_text'
        span.innerHTML = 'Insira uma capa';
        add_img.appendChild(span);
        desc.appendChild(add_img);

        var add_desc = document.createElement('div');
        add_desc.classList = 'add-desc';
        var desc_up = document.createElement('div');
        desc_up.classList = 'desc-up';
        var input_title = document.createElement('input');
        input_title.type = 'text';
        input_title.placeholder = 'Insira o nome';
        input_title.classList = 'desc-text';
        input_title.id = 'input-title';
        var input_year = document.createElement('input');
        input_year.type = 'text';
        input_year.placeholder = 'Insira o ano de criação';
        input_year.classList = 'desc-text';
        input_year.id = 'input-year';
        var desc_down = document.createElement('div');
        add_desc.appendChild(desc_up);
        desc_up.appendChild(input_title);
        desc_up.appendChild(input_year);
        add_desc.appendChild(desc_down);
        desc.appendChild(add_desc);
    
        j += 1;
    }

    i += 1;
    j = 0;
}

function toggleDesc(el) {
    var display = document.getElementById(el).style.display;
    if(display == 'none' || display == ''){
        document.getElementById(el).style.display = 'flex';
    }
    else{
        document.getElementById(el).style.display = 'none';
    }
}