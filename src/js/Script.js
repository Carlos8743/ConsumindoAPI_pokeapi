const Input = document.querySelector('.Page_input');
const form = document.querySelector('.Page');
const Save = document.querySelector('.Page_save');

form.addEventListener('submit', (e)=> e.preventDefault())
async function Get_API_Pokemon(name){
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/?q=${name}`)
    .then(data => data.json())
    .catch(err =>{
        console.log(typeof err);
    });
    return pokemon
}
async function Set_atribute(){
    const json = await Get_API_Pokemon(Input.value);
    if(!json){
        console.log('A função nao tem valor')
    }
    console.log(json);
}

function Save_point(point){
    let Data = [];
    data.push({name:point});
}
Input.addEventListener('input', Set_atribute)