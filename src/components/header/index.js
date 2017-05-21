'use strict';

import React from 'react';

class Header extends React.Component {

    constructor( props ) {

        super( props );

        this.state = {
            
        };
    }

    render() {

        return (
            <div className='header'>
                <h1>Header</h1>
            </div>
        );
    }
}

Header.propTypes = {
};

export default Header;