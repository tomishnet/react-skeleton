import React, { Component }  from 'react';
 import ListItem from './ListItem.jsx';


var ingredients = [{"id": 1, "text": "ham"}, {"id": 2, "text": "cheese"}, {"id": 3, "text": "potatoes"}];

export default class List extends Component {
    render() {
        var listItems = ingredients.map(function (item) {
            return <ListItem key={item.id} ingredients={item.text} />;
        });
        return(<ul>{listItems}</ul>);
    }
}


