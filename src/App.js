import Topo from './Topo';
import Storiestop from './Storiestop.js';
import Posts from './Posts.js';
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