import React from 'react';

const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper green darken-1">
                <a className="brand-logo center">MusicFace</a>
                <ul>
                    <li><a><i className="material-icons">search</i></a></li>
                </ul>
                <div className="right">
                    <ul>
                        <li>
                           <a><i className="material-icons">vpn_key</i></a>
                           </li>
                           <li>
                            <a><i className="material-icons">lock_open</i></a>
                            </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;