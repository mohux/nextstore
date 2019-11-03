import {
    Row,
    Col,
    Form,
    Input,
    Select,
    Menu,
    Dropdown,
    Icon
} from 'antd';
import Link from 'next/link';

const { Item } = Menu;
const { Option } = Select;
const options = [];

for (let i = 0; i < 5; i++) {
    options.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}
const categoriesDropdown = (<Select placeholder="All Categories" style={{ width: 150 }} size="large">
    {options}
</Select>);


const currencies = [
    { title: 'SAR', href: '/', },
    { title: 'USD', href: '/', },
].map((currency, idx) => <Item key={idx}>
    {currency.title}
</Item>);
const currenciesDropdown = (<Menu>
    {currencies}
</Menu>);

const UpperNav = () => {
    return (
        <div className="upper-menu">
            <div className="container">
                <div>
                    <Row className="mobile-flex-center" type="flex" align="middle">
                        <Col xl={2} lg={3} md={24} sm={24} xs={24}>
                            <Link href="/">
                                <a>
                                    <img className="brand-logo" src="/images/logo.png" alt="logo" />
                                </a>
                            </Link>
                        </Col>
                        <Col xl={10} lg={14} md={24} sm={24} xs={24}>
                            <Form>
                                <Input.Search
                                    className="input-search"
                                    addonBefore={categoriesDropdown}
                                    placeholder="Search Products.." />
                            </Form>
                        </Col>
                        <Col className="text-right" xl={12}>
                            <div className="px">
                                <Dropdown className="secondary-color bold" overlay={currenciesDropdown}>
                                    <a className="ant-dropdown-link" href="#">
                                        <Icon type="caret-down" /> Currency
                                </a>
                                </Dropdown>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default UpperNav;
