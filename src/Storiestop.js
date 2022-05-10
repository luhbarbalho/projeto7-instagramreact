import totoro from './assets/totoro.jpg';
import ianah from './assets/ianah.jpeg';
import tintin from './assets/tintin.jpeg';
import starbucks from './assets/starbucks2.png';
import neilgaiman from './assets/neil-gaiman.jpeg';
import nintendo from './assets/nintendo.jpeg';
import plante1 from './assets/plante1.jpeg';
import hebe from './assets/hebe.jpeg';

const items =[
    {
        ilustration: totoro,
        altinfo: "totoro",
        first: "first",
        text: "ghibli.museum"
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



function EachStory (props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.ilustration} alt={props.altinfo}/>
            </div>
            <div class="usuario">
                <p>{props.text}</p>
            </div>
        </div>
    )
}



export default function Storiestop() {


    return (
        <div class="stories">
            {items.map(item => <EachStory ilustration={item.ilustration} altinfo={item.altinfo} text={item.text} />)}
        </div>

    );
}