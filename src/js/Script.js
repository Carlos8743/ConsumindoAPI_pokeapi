/* Obejects and files of HomePage.html*/
const Input = document.querySelector('.Page_input');
const form = document.querySelector('.Page');
const Save = document.querySelector('.Page_save');
const buttonSend = document.querySelector('.Page_send');
const buttonSave = document.querySelector('.Page_save');
const Pokemon = document.querySelector('.Pokemon');
const Fail = document.querySelector('.Erro');
/* Events clicks and butttom*/
form.addEventListener('submit', (e)=> e.preventDefault());
// buttonSave.addEventListener('click', Save_point);
buttonSend.addEventListener('click', Set_atribute);

async function Get_API_Pokemon(name){
    if(name.length > 4 && name != '1000'){
        Fail.innerText = 'O Numero tem que ser entre 1 e 1000';
        return null
    }
    if(name){
        name =  name.toLowerCase();
        const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(data => data.json())
        .catch(err =>{
            console.log(typeof err, err);
        });
        return pokemon
    }else{
        return null
    }
}
async function Set_atribute(){
    const json = await Get_API_Pokemon(Input.value);
    if(!json){
        Fail.innerText += "\n Pokemon não encontrado";
        Fail.style.display = 'flex';
        Pokemon.innerHTML = '';
        Input.value = '';
        Input.focus();
    }else{
        Fail.innerText = "";
        Fail.style.display = 'none';
        Pokemon.innerHTML = `            
            <li class="Pokemon_img"><img src="${json.sprites.other[`official-artwork`].front_default}" alt="Imagem Do Pokemon"></li>
            <li class="Pokemon_name">Nome: ${json.name}</li>
            <li class="Pokemon_Type">Tipo: ${json.types[0].type.name} e ${json.types[1]?.type.name ?? "Não possui segundo ataque"}</li>
            <li class="Pokemon_Atk">Ataque: ${json.abilities[0].ability.name} e ${json.abilities[1]?.ability.name ?? "Não possui segunda abilidade"}</li>
        `;
    }
    }
function Save_point(point){
    let Data = [];
    data.push({name:point});
}

