let age = document.getElementById('age'),
    surname = prompt('Как ваша фамилия?', ''),
    name = prompt('Как ваше имя?', "");

function showUser(surname, name) {
         alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}
 
showUser.apply(age, [surname, name]);

