import React from 'react';
import { connect } from "react-redux";
import { Col, Input, Row, Tooltip, Typography } from "antd";
import updateItem from "../../actions/updateItem";

const { Text } = Typography;

class Item extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange({target}) {
        const price = (target.name === "price") ? target.value : this.props.price;
        const amount = (target.name === "amount") ? target.value : this.props.amount;

        return this.props.updateItem(price, amount, this.props.typeKey, this.props.itemKey);
    }

    render() {
        return (
            <div className="item">
                <Text strong>Товар {this.props.itemKey + 1}</Text>
                <Row gutter={[12, 12]} style={{marginTop: "6px"}}>
                    <Col span={8}>
                        <Tooltip
                            trigger={['focus']}
                            title="Укажите стоимость позиции"
                            placement="topRight"
                        >
                            <Input size="large" type="number" suffix="₽" value={this.props.price} min={0} name="price" onChange={this.handleChange} />
                        </Tooltip>
                    </Col>
                    <Col span={8}>
                        <Tooltip
                            trigger={['focus']}
                            title="Укажите количество за эту стоимость"
                            placement="topRight"
                        >
                            <Input size="large" type="number" suffix="у.е." value={this.props.amount} min={0} name="amount" onChange={this.handleChange} />
                        </Tooltip>
                    </Col>
                    <Col span={8} style={{display: "flex", flexWrap: "wrap", alignItems: "center", lineHeight: "15px"}}>
                        <Text style={{width: "100%"}}>{this.props.result}₽ за 1 у.е</Text>
                        {this.props.winner && <Text strong>Выгоднее!</Text>}
                    </Col>
                </Row>
            </div>
        )
    }
}


export default connect(
    () => ({}),
    (dispatch) => ({
        updateItem: (price, amount, typeKey, itemKey) => dispatch(updateItem(price, amount, typeKey, itemKey))
    })
)(Item);
