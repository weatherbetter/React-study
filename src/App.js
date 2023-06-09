import "./App.css";
import MyComponentClass from "./MyComponentClass";
import MyComponentFunction from "./MyComponentFunction";

function Lamp({ size, color }) {
    return (
        <div
            style={{
                width: size,
                height: size,
                borderRadius: size / 2,
                backgroundColor: color,
            }}
        />
    );
}

function TrafficLight({ size }) {
    return (
        <>
            <Lamp size={size} color="red" />
            <Lamp size={size} color="green" />
            <Lamp size={size} color="yellow" />
        </>
    );
}

function App() {
    return (
        <>
            <TrafficLight size={100} />
        </>
    );
}

export default App;
