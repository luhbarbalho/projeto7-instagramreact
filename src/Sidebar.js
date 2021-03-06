import donaflorinda from './assets/dona-florinda.png';
import sans from './assets/sans.jpeg';
import okra from './assets/okra.jpeg';
import tu from './assets/tu.jpeg';
import candles from './assets/candles.jpeg';
import art from './assets/art.jpeg';

let items=[
    {
        image: sans,
        altinfo: "sans project tattoo" ,
        user: "sans_project_tattoo",
        follow: "Segue você"
    },
    {
        image: okra,
        altinfo: "okra co",
        user: "okra_co",
        follow: "Segue você"
    },
    {
        image: tu,
        altinfo: "tu por ai",
        user: "tuporai",
        follow: "Novo no Instagram"
    },
    {
        image: candles,
        altinfo: "wicked vibes candle co",
        user: "wickedvibescandleco",
        follow: "Segue você"
    },
    {
        image: art,
        altinfo: "lucie bee illustrates",
        user: "lucie.bee.illustrates",
        follow: "Segue você"
    }
];

function Usuario (props){

    const {image, altinfo, user, follow} = props;
    
    return (
        <div className="usuario">
            <img src={image} alt={altinfo}/>
            <div className="texto">
            <strong>{user}</strong>
                <div className="razao">{follow}</div>
            </div>
        </div>
    );
}

function Sugestao (props){

    const {image, altinfo, user, follow} = props;
    
    return (
        <div className="sugestao">
            <div className="usuario">
                <img src={image} alt={altinfo}/>
                <div className="texto">
                <strong>{user}</strong>
                    <div className="razao">{follow}</div>
                </div>
            </div>
            <div className="seguir">Seguir</div>
        </div>    
    );
}

function Textos (props){
    const {classTitulo, textinho, textoOpcional} = props
    return (
        <div className={classTitulo}>
            <p>{textinho}</p>
            <div>{textoOpcional}</div>
        </div>  
    );
}


export default function Sidebar() {

    const aside = items.map((item, index) => <Sugestao
    key={index} 
    image={item.image} 
    altinfo={item.altinfo} 
    user={item.user} 
    follow={item.follow}
    />)

    return (
        <div className="sidebar">

            <Usuario image={donaflorinda} altinfo="dona florinda" classTexto="texto" classNome="nome" classRazao="razao" user="dona.florinda" follow="Florinda Corcuera y Villalpando"/>

            <div className="sugestoes">
                <Textos classTitulo="titulo" textinho="Sugestões para você" textoOpcional="Ver tudo"/>
                {aside}
            </div>

            <Textos classTitulo="copyright" textinho="Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma"/>

            <Textos classTitulo="links" textinho="© 2021 INSTAGRAM DO FACEBOOK"/>
        </div>
    );
}