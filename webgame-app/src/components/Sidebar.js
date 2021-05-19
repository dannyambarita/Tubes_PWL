import React from 'react';

const Sidebar = ({show}) => {
    return ([
            <div className={show ? 'sidenav active' : 'sidenav'}>
                <ul>
                    <li>
                        <a href='#home'>Dota</a>
                    </li>
                    <li>
                        <a href='#home'>Counter Strike</a>
                    </li>
                    <li>
                        <a href='#home'>Valorant</a>
                    </li>
                </ul>
            
        </div>
    ]
    )
}

export default Sidebar