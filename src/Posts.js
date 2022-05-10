import Icon from './shared/icon';
import React from 'react';

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

const items=[            
    {
        image: es,
        altinfo: "egon schiele official",
        text: "egonschieleofficial",
        ilustration: egonschiele,
        altText: "egonschiele",
        imageLikes: ianah,
        altlikes: "ianah",
        likedBy: "_ianah",
        type: "image"
    },
    {
        image: disenchantmentacc,
        altinfo: "disenchantment account",
        text: "Disenchantment",
        ilustration: disenchantment,
        altText: "Disenchantment",
        imageLikes: donaflorinda,
        altlikes: "dona florinda",
        likedBy: "dona.florinda",
        type: "image"
    },
    {
        image: animalsco,
        altinfo: "animalsco account",
        text: "animals.co",
        ilustration: marmotineas,
        altText: "marmotinhas lindas brincando",
        imageLikes: jennie,
        altlikes: "jeenie weenie account",
        likedBy: "jeenie.weenie",
        type: "video"
    },
    {
        image: terryquotes,
        altinfo: "terry quotes account",
        text: "terryquotes",
        ilustration: pratchett,
        altText: "terry pratchett profound quote",
        type: "image"
    },
    {
        image: gamingaesthetic,
        altinfo: "gaming aesthetic account",
        text: "gaming_aesthetic",
        type: "imagem",
        ilustration: aesthetic,
        altText: "pc setup aesthetic",
        imageLikes: tintin,
        altlikes: "tintin account",
        likedBy: "tintin"
    }
];


function EachPost (props) {
    const {image, altinfo, text, ilustration, altText, imageLikes, altlikes, likedBy, type } = props;

    // bonus:
    const [like, setLike] = React.useState();
    function likePost (event){
        if(!like && event.detail === 2) {
            setLike(true);
        }
    }

    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={image} alt={altinfo} />
                    <p>{text}</p>
                </div>
                <div class="acoes">
                    <Icon icon="ellipsis-horizontal"/>
                </div>
            </div>

            <div class="conteudo">
                {(type !== "imagem")
                ? <img onClick={likePost} src={ilustration} alt={altText} /> 
                : <video onClick={likePost} width="614" height="auto" controls autoplay loop muted>
                <source src={marmotineas} type="video/mp4"/>
                <source src={marmotineasogg} type="video/ogg"/>
                </video>
                }
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>

                        {/* bonus */}
                        {like ? 
                        <ion-icon OnClick={() => setLike(!like)} name="heart-outline"></ion-icon>
                        : <ion-icon OnClick={() => setLike(like)} name="heart" style={{color: "red"}}></ion-icon>}
                        
                        <Icon icon="chatbubble-outline"/>
                        <Icon icon="paper-plane-outline"/>
                    </div>
                    <div>
                        <Icon icon="bookmark-outline"/>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={imageLikes} alt={altlikes}/>
                    <div class="texto">
                        Curtido por <strong>{likedBy}</strong> e <strong>outras pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Posts() {

    const componentItem = items.map(item => <EachPost image={item.image} altinfo={item.altinfo} text={item.text} ilustration={item.ilustration} altText={item.altText} imageLikes={item.imageLikes} likedBy={item.likedBy}/>)

    return (
        <div class="posts">
            {componentItem}
        </div>

    );
}