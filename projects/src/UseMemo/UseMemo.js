import { useState,useEffect,useMemo} from 'react/cjs/react.development';

function UseMemo(){
    const[count,setCount]=useState(100);
    const[data,setData]=useState(10);
    const multicount=useMemo(function multicount(){
        console.log("multicount");
        return count*5;
    },[count])

    return(
        <div>  
            <h1>useMemo hook</h1>         
            <h2> count={count}</h2>
            <h2>data={data}</h2>
            <h2>{multicount}</h2>
            <button onClick={()=>{setCount(count+1)}}> update count</button><br />
            <button onClick={()=>{setData(data+1)}}> update data</button><br />
        </div>
    )
}

export default UseMemo;