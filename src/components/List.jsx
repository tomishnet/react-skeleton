import React, { Component }  from 'react';
import ListItem from './ListItem.jsx';
import ListAdder from './ListAdder.jsx';

var ingredients = [{"id": 1, "text": "ham"}, {"id": 2, "text": "cheese"}, {"id": 3, "text": "potatoes"}];

export default class List extends Component {
    render() {
       const createItem = function(text, index) {
         return <ListItem key={index + text} text={text} />
       };
        return (
            <ul>
                {this.props.items.map(createItem)}
            </ul>
        );
    }
}


