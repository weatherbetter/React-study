import { Component } from "react";
import Title from "./Title";

class Todo extends Component {
    state = {
        count: 0,
    };

    setCount = (value) => {
        this.setState((state) => ({ count: state.count + value }));
    };

    render() {
        const { count } = this.state;

        return (
            <>
                <Title count={count} />
                <button onClick={() => this.setCount(1)}>카운트 증가</button>
                <button onClick={() => this.setCount(-1)}>카운트 감소</button>
                <button onClick={() => this.setCount(-count)}>
                    카운트 초기화
                </button>
            </>
        );
    }
}
export default Todo;
