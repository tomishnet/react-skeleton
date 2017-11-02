import React, { Component }  from 'react';

export default class ListAdder extends Component {
    constructor() {
        super();
        // this state je univerzalni react kontejner pro ukladani dat
        this.state = {
            counter: 0
        };
    }

    render() {
        // musi bindnout spravny context, jinak by se prenesl element DOMu, pouziva se FAT ARROW onClick={(e) => this.handleClick(e)}
        // viz https://www.dzejes.cz/react-uvod.html
        return (
            <div>
                Kliknul jsi {this.state.counter}x. <br/>
                <button onClick={(e) => this.handleClick(e)}>
                    Klikni!
                </button>
            </div>
                );
    }

    // Stav komponenty se vždy a pouze mění pomocí metody this.setState(), ne this.state = ... jinak  by se nezavolal render()
    handleClick(e) {
        this.setState({
            counter: this.state.counter + 1
        });
    }
}
