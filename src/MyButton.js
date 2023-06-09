import { useState } from "react";

function MyButton() {
    const [isClicked, setClicked] = useState(false);
    return (
        <button onClick={() => setClicked(!isClicked)}>
            {isClicked ? "클릭되었습니다." : "클릭해주세요."}
        </button>
    );
}

export default MyButton;
