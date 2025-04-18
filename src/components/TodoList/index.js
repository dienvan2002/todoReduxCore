import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "../Todo";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { todosRemainingSelector } from "../../redux/selectors";

import todosSlice from './todosSlice'
export default function TodoList() {
    const [todoName, setTodoName] = useState("");
    const [priority, setPriority] = useState("Medium");

    const dispath = useDispatch();
    const todoList = useSelector(todosRemainingSelector);
    const handleAddButtonClick = () => {
        dispath(
            todosSlice.actions.addTodo({
                id: uuidv4(),
                name: todoName,
                completed: false,
                priority: priority,
            })
        );
        setTodoName("");
        setPriority("Medium");
    };
    const handleInputChange = (e) => {
        setTodoName(e.target.value);
    };
    const handleSelectChange = (value) => {
        setPriority(value);
    };

    return (
        <Row style={{ height: "calc(100% - 40px)" }}>
            <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
                {/* <Todo name="Learn React" prioriry="High" />
                <Todo name="Learn Redux" prioriry="Medium" />
                <Todo name="Learn JavaScript" prioriry="Low" /> */}
                {todoList.map((a) => (

                    <Todo key={a.id} id={a.id} name={a.name} priority={a.priority} completed={a.completed} />
                ))}
            </Col>

            <Col span={24}>
                <Input.Group style={{ display: "flex" }} compact>
                    <Input value={todoName} onChange={handleInputChange} />
                    <Select
                        defaultValue="Medium"
                        value={priority}
                        onChange={handleSelectChange}
                    >
                        <Select.Option value="High" label="High">
                            <Tag color="red">High</Tag>
                        </Select.Option>
                        <Select.Option value="Medium" label="Medium">
                            <Tag color="blue">Medium</Tag>
                        </Select.Option>
                        <Select.Option value="Low" label="Low">
                            <Tag color="gray">Low</Tag>
                        </Select.Option>
                    </Select>
                    <Button type="primary" onClick={handleAddButtonClick}>
                        Add
                    </Button>
                </Input.Group>
            </Col>
        </Row>
    );
}
