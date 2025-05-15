var campos = [
    document.querySelector('#data'), //campos 0  document.querySelector ele ve o html e puxa o id=data o # esta dizendo que é id
    document.querySelector('#quantidade'), //campos 1
    document.querySelector('#valor')  //campos 2
];

console.log(campos); //mostra no console tudo que estiver dentro de campos 

var tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function(event) { //a função que form quando der submit vai ativar a fuction event

    event.preventDefault();

    var tr = document.createElement('tr');

    campos.forEach(function(campo) {

        var td = document.createElement('td');
        td.textContent = campo.value; //textcontent o conteudo dela 
        tr.appendChild(td); //faz o td ter o tr como filho

    });

    var tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value * campos[2].value;

    tr.appendChild(tdVolume);

    tbody.appendChild(tr);

    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 0;

    campos[0].focus();
});

