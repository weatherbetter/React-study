import { Component } from "react";
import Title from "./Title";

class Todo extends Component {
    state = {
        count: 0,
    };

    render() {
        const { count } = this.state;

        const setCount = (value) => {
            this.setState((state) => ({ count: state.count + value }));
        };
        return (
            <>
                <Title count={count} />
                <button onClick={() => setCount(1)}>카운트 증가</button>
                <button onClick={() => setCount(-1)}>카운트 감소</button>
                <button onClick={() => setCount(-count)}>카운트 초기화</button>
            </>
        );
    }
}
export default Todo;
