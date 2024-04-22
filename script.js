var i = 0;
var j = 0;

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
    if(display == "none")
        document.getElementById(el).style.display = 'flex';
    else
        document.getElementById(el).style.display = 'none';
}