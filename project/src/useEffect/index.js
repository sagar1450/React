import { useState,useEffect} from 'react/cjs/react.development';
import UseEffect from './useEffect';
function Index(){
    const[count,setCount]=useState(100);
    const[data,setData]=useState(10);
    useEffect(()=>{
        console.warn("useEffect");
    })

    return(
        <div>
            {/* <h1>useEffect in React:{count}</h1>
            <h1>useEffect in React:{data}</h1> */}
            <useEffect count={count} data={data} />
            <button onClick={()=>{setCount(count+1)}}> update count</button><br />
            <button onClick={()=>{setData(data+1)}}> update data</button><br />
        </div>
    )
}

export default Index;

