/* Obejects and files of HomePage.html*/
const Input = document.querySelector('.Page_input');
const form = document.querySelector('.Page');
const Save = document.querySelector('.Page_save');
const buttonSend = document.querySelector('.Page_send');
const buttonSave = document.querySelector('.Page_save');
const Pokemon = document.querySelector('.Pokemon');
/* Events clicks and butttom*/
form.addEventListener('submit', (e)=> 

e.preventDefault());
// buttonSave.addEventListener('click', Save_point);
buttonSend.addEventListener('click', Set_atribute);

async function Get_API_Pokemon(name){
    name =  name.toLowerCase();
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(data => data.json())
    .catch(err =>{
        console.log(typeof err, err);
    });
    return pokemon
}
async function Set_atribute(){
    const json = await Get_API_Pokemon(Input.value);
    if(!json){
        console.log('A função nao tem valor')
    }else{
        Pokemon.innerHTML = `            
            <li class="Pokemon_img"><img src="${json.sprites.other[`official-artwork`].front_default}" alt="Imagem Do Pokemon"></li>
            <li class="Pokemon_name">Nome: ${json.name}</li>
            <li class="Pokemon_Type">Tipo: ${json.types[0].type.name}</li>
            <li class="Pokemon_Atk"> Primeiro Ataque: ${json.abilities[0].ability.name}</li>
            <li class="Pokemon_Special">Especial: ${json}</li>
        `;
        if(json.abilities[1].ability.name){
            Pokemon.innerHTML += `
            <li class="Pokemon_Atk2">Sengundo Ataque: ${json.abilities[1].ability.name}</li>
            `;
        }
    }
    console.log(json);
}

function Save_point(point){
    let Data = [];
    data.push({name:point});
}
