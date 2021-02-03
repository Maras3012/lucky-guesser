import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import './Screens.css';
import Number from '../../components/Number/Number';
import NumberLog from '../../components/NumberLog/NumberLog';
import axios from '../../axios-log';
import app from "../../Auth/base";

class Screens extends Component {
    state = {
        value: "?",
        winner: 7
    }
            
    render () {
        const RandomNumberHandler = () => {
                let maxNumber = 15;
                let val = Math.floor((Math.random() * maxNumber) + 1);
                this.setState({value: val});
                axios.post('/Numbers.json', val);
                return;       
        };

        return (
            <Aux>
                <div className="Screen1">
                    <Number value={this.state.value} />
                </div>
                <button className="Button" onClick={RandomNumberHandler}>NEXT</button> 
                <button className="SignOutButton" onClick={() => app.auth().signOut()}>Sign out</button>
                <div className="Screen2">
                    <NumberLog value={this.state.value} winner={this.state.winner} />
                </div>
            </Aux>
        );
    }
}

export default Screens;