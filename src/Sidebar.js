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

function Sugestao (props){
    return (
            <div class={props.classUsuario}>
                <img src={props.image} alt={props.altinfo}/>
                <div class={props.classTexto}>
                <strong>{props.user}</strong>
                    <div class={props.classRazao}>{props.follow}</div>
                </div>
            </div>
    );
}


export default function Sidebar() {
    return (
        <div class="sidebar">

            <Sugestao classUsuario="usuario" image={donaflorinda} altinfo="dona florinda" classTexto="texto" classNome="nome" classRazao="razao" user="dona.florinda" follow="Florinda Corcuera y Villalpando"/>

            <div class="sugestoes">
                
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>

                <div class="sugestao">
                    <Sugestao classUsuario="usuario" image={sans} altinfo="sans project tattoo" classTexto="texto" classNome="nome" classRazao="razao" user="sans_project_tattoo" follow="Segue você"/>
                        <div class="seguir">Seguir</div>

                </div>

                <div class="sugestao">
                    <Sugestao classUsuario="usuario" image={okra} altinfo="okra co"classTexto="texto" classNome="nome" classRazao="razao" user="okra_co" follow="Segue você"/>
                    <div class="seguir">Seguir</div>
                </div>

                <div class="sugestao">
                    <Sugestao classUsuario="usuario" image={tu} altinfo="tu por ai" classTexto="texto" classNome="nome" classRazao="razao" user="tuporai" follow="Novo no Instagram" />
                    <div class="seguir">Seguir</div>
                </div>
                
                <div class="sugestao">
                    <Sugestao classUsuario="usuario" image={candles} altinfo="wicked vibes candle co" classTexto="texto" classNome="nome" classRazao="razao" user="wickedvibescandleco" follow="Segue você"/>
                    <div class="seguir">Seguir</div>
                </div>

                <div class="sugestao">
                    <Sugestao classUsuario="usuario" image={art} altinfo="lucie bee illustrates" classTexto="texto" classNome="nome" classRazao="razao" user="lucie.bee.illustrates" follow="Segue você" />
                    <div class="seguir">Seguir</div>
                </div>

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