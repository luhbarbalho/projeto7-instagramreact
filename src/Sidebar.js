import donaflorinda from './assets/dona-florinda.png';
import sans from './assets/sans.jpeg';
import okra from './assets/okra.jpeg';
import tu from './assets/tu.jpeg';
import candles from './assets/candles.jpeg';
import art from './assets/art.jpeg';


function Sugestoes (props){
    return (
        <div class={props.classSugestao}>
            <div class={props.classUsuario}>
                <img src={props.image} alt={props.altinfo}/>
                <div class={props.classTexto}>
                    <div class={props.classNome}>{props.user}</div>
                    <div class={props.classRazao}>{props.follow}</div>
                </div>
            </div>

            <div class={props.classSeguir}>Seguir</div>
        </div>
    );
}


export default function Sidebar() {
    return (
        <div class="sidebar">
            <div class="usuario">
                <img src={donaflorinda} alt="dona florinda"/>
                <div class="texto">
                    <strong>dona.florinda</strong>
                    Florinda Corcuera y Villalpando
                </div>
            </div>

            <div class="sugestoes">
                
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>

                <Sugestoes classSugestao="sugestao" classUsuario="usuario" image={sans} altinfo="sans project tattoo" classTexto="texto" classNome="nome" classRazao="razao" user="sans_project_tattoo" follow="Segue você" classSeguir="seguir"/>

                <Sugestoes classSugestao="sugestao" classUsuario="usuario" image={okra} altinfo="okra co"classTexto="texto" classNome="nome" classRazao="razao" user="okra_co" follow="Segue você" classSeguir="seguir"/>

                <Sugestoes classSugestao="sugestao" classUsuario="usuario" image={tu} altinfo="tu por ai" classTexto="texto" classNome="nome" classRazao="razao" user="tuporai" follow="Novo no Instagram" classSeguir="seguir"/>

                <Sugestoes classSugestao="sugestao" classUsuario="usuario" image={candles} altinfo="wicked vibes candle co" classTexto="texto" classNome="nome" classRazao="razao" user="wickedvibescandleco" follow="Segue você" classSeguir="seguir"/>

                <Sugestoes classSugestao="sugestao" classUsuario="usuario" image={art} altinfo="lucie bee illustrates" classTexto="texto" classNome="nome" classRazao="razao" user="lucie.bee.illustrates" follow="Segue você" classSeguir="seguir"/>

            </div>

            <div class="links">
                <p>Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma</p>
            </div>

            <div class="copyright">
                <p>© 2021 INSTAGRAM DO FACEBOOK</p>
            </div>
        </div>
    );
}