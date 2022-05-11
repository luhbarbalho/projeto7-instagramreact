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
// import marmotineasogg from './assets/marmots.ogg';
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
        type: "imagem",
        ilustration: egonschiele,
        altText: "egonschiele",
        imageLikes: ianah,
        altlikes: "ianah",
        likedBy: "_ianah",
        
    },
    {
        image: disenchantmentacc,
        altinfo: "disenchantment account",
        text: "Disenchantment",
        type: "imagem",
        ilustration: disenchantment,
        altText: "Disenchantment",
        imageLikes: donaflorinda,
        altlikes: "dona florinda",
        likedBy: "dona.florinda",
        
    },
    {
        image: animalsco,
        altinfo: "animalsco account",
        text: "animals.co",
        type: "video",
        ilustration: marmotineas,
        altText: "marmotinhas lindas brincando",
        imageLikes: jennie,
        altlikes: "jeenie weenie account",
        likedBy: "jeenie.weenie",
    },
    {
        image: terryquotes,
        altinfo: "terry quotes account",
        text: "terryquotes",
        type: "imagem",
        ilustration: pratchett,
        altText: "terry pratchett profound quote",
        imageLikes: donaflorinda,
        altlikes: "dona florinda",
        likedBy: "dona.florinda",
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
        likedBy: "tintin",
    }
];



function EachPost ({image, altinfo, text, ilustration, altText, imageLikes, altlikes, likedBy, type}) {

    const [liked, setLiked] = React.useState("");
    const [icon, setIcon] = React.useState("heart-outline");
    function isLiked() {
        !liked ? setLiked("liked") : setLiked("");
        !liked ? setIcon("heart") : setIcon("heart-outline");
        
    }
    function likeIlustration() {
        setLiked("liked");
        setIcon("heart");
    }  


    return (
        <div className="post">
            <div className="topo">
                <div className="usuario">
                    <img src={image} alt={altinfo} />
                    <p>{text}</p>
                </div>
                <div className="acoes">
                    <Icon icon="ellipsis-horizontal"/>
                </div>
            </div>

            <div className="conteudo">

                {
                type === 'imagem'
                ? <img
                onClick={() => likeIlustration()}
                src={ilustration} 
                alt={altText} /> 
                : <video width="614" height="auto" controls>
                    <source src={ilustration} type="video/mp4"/>
                </video>
                }

            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>

                        <ion-icon onClick={() => isLiked()} name={icon}></ion-icon>
                        <Icon icon="chatbubble-outline"/>
                        <Icon icon="paper-plane-outline"/>
                    </div>
                    <div>
                        <Icon icon="bookmark-outline"/>
                    </div>
                </div>

                <div className="curtidas">
                    <img src={imageLikes} alt={altlikes}/>
                    <div className="texto">
                        Curtido por <strong>{likedBy}</strong> e <strong>outras pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Posts() {


    return (
        <div className="posts">

            {items.map((item, index) => <EachPost
            key={index}
            image={item.image} 
            altinfo={item.altinfo} 
            text={item.text} 
            ilustration={item.ilustration} 
            altText={item.altText} 
            imageLikes={item.imageLikes} 
            likedBy={item.likedBy} 
            type={item.type}
            />)}

        </div>

    );
}