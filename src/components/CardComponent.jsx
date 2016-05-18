import React from 'react';

require('./style/card.css');

export default class CardComponent extends React.Component {
    constructor(props) {
        super(props);
        this.originalDeg = (Math.random() * 20) * (Math.random() % 2 === 0 ? 1 : -1);

        this.state = {
            selected: false,
            deg: this.originalDeg
        }
    }

    select() {
        if(!this.state.selected) {
            this.setState({
                selected: true,
                deg: 0,
            });
        } else {
            this.setState({
                selected: false,
                deg: this.originalDeg,
            });
        }
    }

    render() {
        const {text, index} = this.props;

        const style = {
            zIndex: 999 + index,
            transform: 'rotate(' + this.state.deg + 'deg)'
        };

        return (
            <li
                onClick={this.select.bind(this)}
                className="card"
                style={style} >
                {text}
            </li>
        );
    }
}
