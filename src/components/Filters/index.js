import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import filterSlice from './filterSlice.js';
const { Search } = Input;

export default function Filters() {
    const dispath = useDispatch()
    const [searchText, setSearchText] = useState('');
    const [filterStatus, setfilterStatus] = useState('All');
    const [filterPriority, setfilterPriority] = useState([]);

    const handleSearchTextChange = (e) => {
        setSearchText(e.target.value);
        dispath(filterSlice.actions.searchFilterChange(e.target.value));
    }
    const handleStatusChange = (e) => {
        setfilterStatus(e.target.value);
        dispath(filterSlice.actions.statusFilterChange(e.target.value));
    }
    const handlefilterPriorityChange = (value) => {
        setfilterPriority(value);
        dispath(filterSlice.actions.priorityFilterChange(value));


    }

    return (
        <Row justify='center'>
            <Col span={24}>
                <Typography.Paragraph
                    style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
                >
                    Search
                </Typography.Paragraph>
                <Search placeholder='input search text' value={searchText} onChange={handleSearchTextChange} />
            </Col>
            <Col sm={24}>
                <Typography.Paragraph
                    style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
                >
                    Filter By Status
                </Typography.Paragraph>
                <Radio.Group value={filterStatus} onChange={handleStatusChange}>
                    <Radio value='All'>All</Radio>
                    <Radio value='Completed'>Completed</Radio>
                    <Radio value='Todo'>To do</Radio>
                </Radio.Group>
            </Col>
            <Col sm={24}>
                <Typography.Paragraph
                    style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
                >
                    Filter By Priority
                </Typography.Paragraph>
                <Select
                    mode='multiple'
                    allowClear
                    placeholder='Please select'
                    style={{ width: '100%' }}
                    value={filterPriority}
                    onChange={handlefilterPriorityChange}
                >
                    <Select.Option value='High' label='High'>
                        <Tag color='red'>High</Tag>
                    </Select.Option>
                    <Select.Option value='Medium' label='Medium'>
                        <Tag color='blue'>Medium</Tag>
                    </Select.Option>
                    <Select.Option value='Low' label='Low'>
                        <Tag color='gray'>Low</Tag>
                    </Select.Option>
                </Select>
            </Col>
        </Row>
    );
}
