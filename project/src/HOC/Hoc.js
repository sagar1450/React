import { useState, useEffect } from 'react/cjs/react.development';

function Hoc() {
    return (
        <div>
            <h1>Hoc</h1>
        <HocRed cmp={Counter} />
        <HocGreen cmp={Counter} />
        </div>
    )

}

function HocRed(props) {
    return (
        <div>
       <h1 style={{backgroundColor:"red",width:300}}><props.cmp /></h1>
        </div>
    )
}

function HocGreen(props) {
    return (
        <div>
       <h1 style={{backgroundColor:"green",width:300}}><props.cmp /></h1>
        </div>
    )
}

function Counter() {
    const [count, setCount] = useState(1);
    return (
        <div>
            <h1> count={count}</h1>
            <button onClick={() => { setCount(count + 1) }}> update count</button><br />
        </div>
    )
}

export default Hoc;