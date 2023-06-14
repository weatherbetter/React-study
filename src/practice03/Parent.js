import { useState } from "react";
import Child from "./Child";

function Parent() {
    const resetCount = 0;
    const updownCount = 1;
    const [count, setCount] = useState(resetCount);

    return (
        <>
            <div>Counter : {count}</div>
            <button
                onClick={() => {
                    setCount(resetCount);
                }}
            >
                Reset
            </button>
            <Child count={count} setCount={setCount} updownCount = {updownCount}/>
        </>
    );
}

export default Parent;
