import React from 'react';
 
        const Konten = ({show}) => {
        return (
            <div className={show ? 'konten active' : 'konten'}>
                <h1><strong>Artikel</strong></h1>
                <hr />
            </div>
        );
        }

    export default Konten