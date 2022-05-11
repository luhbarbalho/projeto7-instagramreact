import instagramname from './assets/instagram-name.png';


const icons = ["paper-plane-outline", "compass-outline", "heart-outline", "person-outline"];

function ConteudoTopo (props){
    const {class1,
        nome,
        classSeparador,
        image, 
        altinfo} = props

    return (
        <div className={class1}>
            <ion-icon name={nome}></ion-icon>
            <div className={classSeparador}></div>
            <img src={image} alt={altinfo}/>
        </div>
    );
}


export default function Topo() {
    return (
        <header className="navbar">
            <div className="container">

                <ConteudoTopo class1="logo" nome="logo-instagram" classSeparador="separador" image={instagramname} altinfo="logo do instagram"/>

                <div className="logo-mobile">
                    <ion-icon name="logo-instagram"></ion-icon>
                </div>

                <ConteudoTopo class1="instagram-mobile" image={instagramname} altinfo="logo do instagram"/>

                <div className="pesquisa">
                    <input type="text" placeholder="Pesquisar" />
                </div>
                
                <div className="icones">
                    {icons.map((icon, index) => <ion-icon key={index} name={icon}></ion-icon>)}
                </div>

                <ConteudoTopo class1="icones-mobile" nome="paper-plane-outline" />
            </div>
        </header>
    );
}