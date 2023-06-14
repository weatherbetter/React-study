import { useState } from "react";

function RefSample() {
    const [id, setId] = useState("");
    const [pw1, setPw1] = useState("");
    const [pw2, setPw2] = useState("");
    const [message, setMsg] = useState("");

    const handlerCheckId = (e) => {
        setId(e.target.value);
    };
    const handlerCheckPw1 = (e) => {
        setPw1(e.target.value);
    };
    const handlerCheckPw2 = (e) => {
        setPw2(e.target.value);
    };

    const validLogin = () => {
        if (!id || !pw1 || !pw2) {
            setMsg("값 입력");
        } else if (pw1 !== pw2) {
            setMsg("유효하지 않는 정보");
        } else {
            setMsg("로그인 성공");
        }
    };

    return (
        <div style={{ margin: "10px auto", width: 250, textAlign: "right" }}>
            ID:
            <input type="text" onChange={handlerCheckId} />
            <br />
            PW:
            <input type="password" onChange={handlerCheckPw1} />
            <br />
            PW:
            <input type="password" onChange={handlerCheckPw2} />
            <br />
            <button type="submit" onClick={validLogin}>
                등록
            </button>
            <div>[안내] {message}</div>
        </div>
    );
}

export default RefSample;
