function Child(props) {
    return (
        <>
            <button
                onClick={() => {
                    props.setCount(props.count + props.updownCount);
                }}
            >
                +{props.updownCount}
            </button>
            <button
                onClick={() => {
                    props.setCount(props.count - props.updownCount);
                }}
            >
                -{props.updownCount}
            </button>
        </>
    );
}

export default Child;
