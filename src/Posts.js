// Post1
import es from './assets/ES.jpeg';
import egonschiele from './assets/egon-schiele.jpeg';
import ianah from './assets/ianah.jpeg';
// Post2
import disenchantmentacc from './assets/disenchantment-acc.jpeg';
import disenchantment from './assets/disenchantment.jpeg';
import donaflorinda from './assets/dona-florinda.png';
// Post3
import animalsco from './assets/animals.co.png';
import jennie from './assets/jennie.png';
import marmotineas from './assets/marmots.mp4';
import marmotineasogg from './assets/marmots.ogg';
// Post4
import terryquotes from './assets/terry-quotes.jpeg';
import pratchett from './assets/pratchett.jpeg';
// Post5
import gamingaesthetic from './assets/gaming-aesthetic.jpeg';
import aesthetic from './assets/aesthetic.jpeg';
import tintin from './assets/tintin.jpeg';


function ConteudoPost (props){
    return (
        <div class={props.classUsuario}>
            <img src={props.image} alt={props.altinfo}/>
            <p>{props.text}</p>
        </div>
    );
}

function EachPost (props) {

    return (
        <div class={props.class1}>
            <img src={props.image} alt={props.altinfo}/>
            <div class={props.classText}>
                <p>Curtido por <strong>{props.text}</strong> e <strong>outras pessoas</strong></p>
            </div>
        </div>
    );
}

function Elipsis (props) {

    return (
        <div class={props.class1}>
            <ion-icon name={props.nome}></ion-icon>
        </div>
    );
}

function IonIcons() {
	const icons = ["heart-outline", "chatbubble-outline", "paper-plane-outline"];
    const componenteicons = icons.map(icon => <ion-icon name={icon}></ion-icon>);

	return (
        <div class="acoes">
            <div>
                {componenteicons}
            </div>
            <div>
                <ion-icon name="bookmark-outline"></ion-icon>
            </div>
        </div>
	);
}


export default function Posts() {
    return (
        <div class="posts">
            <div class="post">
                <div class="topo">
                    <ConteudoPost classUsuario="usuario" image={es} altinfo="egonschieleofficial" text="egonschieleofficial" />
                    
                    <Elipsis class1="acoes" nome="ellipsis-horizontal" />
                </div>

                <ConteudoPost classUsuario="conteudo" image={egonschiele} altinfo="egonschieleofficial"/>

                <div class="fundo">
                    <IonIcons />

                    <EachPost class1="curtidas" image={ianah} altinfo="ianah" classText="texto" text="Ianah_" />
                </div>
            </div>

            <div class="post">
                <div class="topo">
                    <ConteudoPost classUsuario="usuario" image={disenchantmentacc} altinfo="disenchantment account" text="Disenchantment" />
                    <Elipsis class1="acoes" nome="ellipsis-horizontal" />
                </div>

                <ConteudoPost classUsuario="conteudo" image={disenchantment} altinfo="disenchantment photo"/>

                <div class="fundo">
                    <IonIcons />
                    <EachPost class1="curtidas" image={donaflorinda} altinfo="dona florinda" classText="texto" text="dona.florinda" />
                </div>
            </div>


            <div class="post">
                <div class="topo">
                    <ConteudoPost classUsuario="usuario" image={animalsco} altinfo="animalsco account" text="animals.co" />
                    <Elipsis class1="acoes" nome="ellipsis-horizontal" />
                </div>

                <div class="conteudo">
                    <video width="614" height="auto" controls autoplay loop muted>
                        <source src={marmotineas} type="video/mp4"/>
                        <source src={marmotineasogg} type="video/ogg"/>
                    </video>
                </div>

                <div class="fundo">
                    <IonIcons />
                    <EachPost class1="curtidas" image={jennie} altinfo="jeenie weenie" classText="texto" text="jeenie.weenie" />
                </div>
            </div>

            <div class="post">
                <div class="topo">
                    <ConteudoPost classUsuario="usuario" image={terryquotes} altinfo="terryquotes account" text="terrypratchettquotes" />
                    <Elipsis class1="acoes" nome="ellipsis-horizontal" />
                </div>

                <ConteudoPost classUsuario="conteudo" image={pratchett} altinfo="terry pratchett photo"/>

                <div class="fundo">
                    < IonIcons />
                    <EachPost class1="curtidas" image={donaflorinda} altinfo="dona florinda" classText="texto" text="dona.florinda" />
                </div>
            </div>


            <div class="post">
                <div class="topo">
                    <ConteudoPost classUsuario="usuario" image={gamingaesthetic} altinfo="gaming aesthetic account" text="gaming_aesthetic" />
                    <Elipsis class1="acoes" nome="ellipsis-horizontal" />
                </div>

                <ConteudoPost classUsuario="conteudo" image={aesthetic} altinfo="aesthetic photo with computer setup"/>

                <div class="fundo">
                    <IonIcons />
                    <EachPost class1="curtidas" image={tintin} altinfo="tintin" classText="texto" text="tintin" />
                </div>
            </div>


        </div>

    );
}