import totoro from './assets/totoro.jpg';
import ianah from './assets/ianah.jpeg';
import tintin from './assets/tintin.jpeg';
import starbucks from './assets/starbucks2.png';
import neilgaiman from './assets/neil-gaiman.jpeg';
import nintendo from './assets/nintendo.jpeg';
import plante1 from './assets/plante1.jpeg';
import hebe from './assets/hebe.jpeg';
import backgroundstory from './assets/stories_background.jpg'

const items =[
    {
        ilustration: totoro,
        altinfo: "totoro",
        first: "first",
        text: "ghibli.museum",
    },
    {
        ilustration: ianah,
        altinfo: "ianah",
        text: "_ianah"
    },
    {
        ilustration: tintin,
        altinfo: "tintin",
        text: "tintin"
    },
    {
        ilustration: starbucks,
        altinfo: "starbucks",
        text: "starbucks"
    },
    {
        ilustration: neilgaiman,
        altinfo: "neilgaiman",
        text: "neilgaiman"
    },
    {
        ilustration: nintendo,
        altinfo: "nintendo",
        text: "nintendo"
    },
    {
        ilustration: plante1,
        altinfo: "plante1",
        text: "plante1"
    },
    {
        ilustration: hebe,
        altinfo: "hebe",
        text: "hebe"
    }
];

function EachStory ({ilustration, altinfo, text, first}) {

    return (
        <div className="story">
            <div className="imagem" style={{backgroundImage: "url(" + backgroundstory + ")"} }>
                <img src={ilustration} alt={altinfo}/>
            </div>
            <div className="usuario">
                <p>{text}</p>
            </div>
            
        </div>
    )
}



export default function Storiestop() {


    return (
        <div className="stories">
            {items.map((item, index) => <EachStory key={index} ilustration={item.ilustration} altinfo={item.altinfo} text={item.text} />)}
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}