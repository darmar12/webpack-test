import React from 'react';
import $ from 'jquery';

export default class App extends React.Component {
    componentDidMount() {
        $('<h1 />')
            .text('Hello world fron JQ')
            .css({
                textAlign: 'center',
                color: 'blue'
            })
            .appendTo($('header'));
    }

    render() {
        return (
            <React.Fragment>
                <header></header>
                <hr />
                <div className="box">
                    <h2 className="box-title">Box title</h2>
                    <p className="box-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste recusandae voluptatem accusantium sed suscipit tempora repellat adipisci, illum, maxime quae ab modi magni tempore inventore. In numquam praesentium delectus eaque!</p>
                </div>
            </React.Fragment>
        );
    };
}