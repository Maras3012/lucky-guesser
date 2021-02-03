import React from 'react';
import Aux from '../../hoc/Auxiliary';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Footer from '../Footer/Footer';

const layout = (props) => (
    <Aux>
        <Toolbar />
        <main className="Content">
            {props.children}
        </main>
        <Footer />
    </Aux>
);

export default layout;