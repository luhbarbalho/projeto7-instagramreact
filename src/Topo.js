import instagramname from './assets/instagram-name.png';


const icons = ["paper-plane-outline", "compass-outline", "heart-outline", "person-outline"];

function ConteudoTopo (props){
    return (
        <div class={props.class1}>
            <ion-icon name={props.nome}></ion-icon>
            <div class={props.classSeparador}></div>
            <img src={props.image} alt={props.altinfo}/>
        </div>
    );
}


export default function Topo() {
    return (
        <header class="navbar">
            <div class="container">

                <ConteudoTopo class1="logo" nome="logo-instagram" classSeparador="separador" image={instagramname} altinfo="logo do instagram"/>

                <div class="logo-mobile">
                    <ion-icon name="logo-instagram"></ion-icon>
                </div>

                <ConteudoTopo class1="instagram-mobile" image={instagramname} altinfo="logo do instagram"/>

                <div class="pesquisa">
                    <input type="text" placeholder="Pesquisar" />
                </div>
                
                <div class="icones">
                    {icons.map(icon => <ion-icon name={icon}></ion-icon>)}
                </div>

                <ConteudoTopo class1="icones-mobile" nome="paper-plane-outline" />
            </div>
        </header>
    );
}