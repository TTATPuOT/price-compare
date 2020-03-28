import React from 'react';
import { Button, Card as AntdCard } from "antd";
import Item from "../Item";
import {connect} from "react-redux";
import addItem from "../../actions/addItem";

class Card extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.addItem(this.props.typeKey);
    }

    render() {
        const winnerIndex = this.props.items.reduce((winner, item, index) =>
            this.props.items[winner].result > item.result ? index : winner,
            0
        );
        let items = null;
        if (this.props.items) items = this.props.items.map((item, key) =>
            <Item key={key} typeKey={this.props.typeKey} itemKey={key} winner={key === winnerIndex} price={item.price} amount={item.amount} result={item.result} />
        );
        return (
            <AntdCard title="Укажите стоимость и количество" bordered={false} style={{marginTop: "24px", background: "#f0f2f5"}}>
                {items}
                <Button size="small" type="dashed" block onClick={this.handleClick}>Добавить ещё позицию</Button>
            </AntdCard>
        )
    }
}


export default connect(
    () => ({}),
    (dispatch) => ({
        addItem: (typeKey) => dispatch(addItem(typeKey))
    })
)(Card);

