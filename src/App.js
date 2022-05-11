import Topo from './Topo';
import Storiestop from './Storiestop.js';
import Posts from './Posts.js';
import Sidebar from './Sidebar.js';
import React from 'react';


export default function App() {
    return (
        <React.Fragment>
			<Topo />
            <div className="corpo">
                <div className="esquerda">
                    <Storiestop />
                    <Posts />
                </div>
                <div>
                    <Sidebar />
                </div> 
            </div>
        </React.Fragment>
    );
}