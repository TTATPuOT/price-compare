import React from 'react';
import { connect } from "react-redux";
import { Col, Row, Typography, Layout, Button } from "antd";
import Card from "./components/Card";
import addType from "./actions/addType";

const { Title, Text } = Typography;
const { Content, Footer } = Layout;

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        let items = null;
        if (this.props.items) items = this.props.items.map((block, key) => <Card key={key} typeKey={key} items={block} />);
        return (
            <>
                <Row justify="space-around" align="middle">
                    <Col xs={{span: 24}} sm={{span: 18}} lg={{span: 12}}>
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: "12px 12px 36px 12px"
                            }}
                        >
                            <Title>Какой товар выгоднее?</Title>
                            <Text>
                                Сравните два или более ценников и количество товара за эту стоимость. Сразу станет понятно, какой товар выгоднее купить.
                            </Text>

                            {items}
                            <Button size="large" block style={{marginTop: "12px", background: "#f0f2f5"}} onClick={this.props.addType}>Сравнить другой товар</Button>
                        </Content>
                    </Col>
                </Row>
                <Footer>
                    <Text>
                        Вдохновенно <a href="https://journal.tinkoff.ru/" rel="noopener noreferrer" target="_blank">Т—Ж</a>,
                        созданно <a href="https://patriotovsky.ru/" rel="noopener noreferrer" target="_blank">мной</a>.
                    </Text>
                </Footer>
            </>
        )
    }
}

export default connect(
    ({items}) => ({items: items}),
    (dispatch) => ({
        addType: () => dispatch(addType())
    })
)(App);
