import totoro from './assets/totoro.jpg';
import ianah from './assets/ianah.jpeg';
import tintin from './assets/tintin.jpeg';
import starbucks from './assets/starbucks2.png';
import neilgaiman from './assets/neil-gaiman.jpeg';
import nintendo from './assets/nintendo.jpeg';
import plante1 from './assets/plante1.jpeg';
import hebe from './assets/hebe.jpeg';






function EachStory (props) {
    return (
        <div class={props.classStory}>
            <div class={props.class2}>
                <img src={props.ilustration} alt={props.altinfo}/>
            </div>
            <div class={props.classUsuario}>
                <p>{props.text}</p>
            </div>
        </div>
    )
}

// function IonIcons() {
// 	const ilustrations = [{totoro}, {ianah}, {tintin},{starbucks}, {neilgaiman}, {nintendo}, {plante1},{hebe}]

//     const cmptilustrations = ilustrations.map(ilustration => src={ilustration});
//     const alts = ["totoro, "ianah", "tintin", "starbucks", "neilgaiman", "nintendo", "plante1","hebe"]


// 	return (
// 		<img src={cmptilustrations} alt={props.altinfo}/>
// 	);
// }






export default function Storiestop() {
    return (
        <div class="stories">
            <EachStory classStory="story" class2="imagem" ilustration={totoro} altinfo="totoro" classUsuario="usuario" first="first" text="ghibli.museum" />

            <EachStory classStory="story" class2="imagem" ilustration={ianah} altinfo="ianah" classUsuario="usuario" text="_ianah" />

            <EachStory classStory="story" class2="imagem" ilustration={tintin} altinfo="tintin" classUsuario="usuario" text="tintin" />

            <EachStory classStory="story" class2="imagem" ilustration={starbucks} altinfo="starbucks" classUsuario="usuario" text="starbucks" />

            <EachStory classStory="story" class2="imagem" ilustration={neilgaiman} altinfo="neilgaiman" classUsuario="usuario" text="neilgaiman" />

            <EachStory classStory="story" class2="imagem" ilustration={nintendo} altinfo="nintendo" classUsuario="usuario" text="nintendo" />

            <EachStory classStory="story" class2="imagem" ilustration={plante1} altinfo="plante1" classUsuario="usuario" text="plante1" />
            
            <EachStory classStory="story" class2="imagem" ilustration={hebe} altinfo="hebe" classUsuario="usuario" text="hebe" />

        </div>

    );
}