var dropdown = function () {
    document.querySelector('.duration_noshow').classList.toggle('drop');
};

document.querySelector('.duration').addEventListener('click', dropdown);

var dropdown2 = function () {
    document.querySelector('.filteren_noshow').classList.toggle('drop');
};

document.querySelector('.filteren').addEventListener('click', dropdown2);

var dropdown3 = function () {
    document.querySelector('.genre_noshow').classList.toggle('drop');
};

document.querySelector('.genre').addEventListener('click', dropdown3);

