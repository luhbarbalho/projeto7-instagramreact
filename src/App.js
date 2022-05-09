
import Topo from './Topo';
// import Corpo from './Corpo';
import Storiestop from './Storiestop.js';
import Posts from './Posts.js';
// import Posts2 from './Posts2.js';
// import Posts3 from './Posts3.js';
// import Posts4 from './Posts4.js';
// import Posts5 from './Posts5.js';
import Sidebar from './Sidebar.js';


export default function App() {
    return (
        <div>
			<Topo />
            <div class="corpo">
                <div class="esquerda">
                    <Storiestop />
                    <Posts />
                </div>
                <div>
                    <Sidebar />
                </div> 
            </div>
        </div>
    );
}