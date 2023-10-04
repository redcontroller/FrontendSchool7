import React from 'react';
import ListItem from '../ListItem/ListItem';

export default function List({items}) {

    const rendering = (items) => {
        const result = [];
        for (let i=0; i < items.length-1; i++) {
            result.push(<ListItem key={i} item={JSON.parse(items[i])} />);
        }

        return result;
    } 

    return (
        <table>
            <tbody>
                {/* {items.map((item, index) => <ListItem key={index} item={item} />)} */}
                {rendering(items)}
            </tbody>
        </table>
    )
}
