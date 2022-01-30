import { Button } from 'react-bootstrap';
function BootStrap(){
    // const students=['sagar','sonu','golu','ganesh'];
    const students=[
        {name:'sagar', email:"sagarrathod539@gmail.com"},
        {name:'golu', email:"golu@gmail.com"},
        {name:'sonu', email:"sonu@gmail.com"},
    ]
    return(
        <div>
            <table style={{ border: "1px solid black"}}>
            { students.map((item) => 
                //  <h1>{item.name},{item.email}</h1>
                <tr>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                </tr>
                
            )
           
            }
            </table>
         
           
            <Button> clicMe</Button>
        </div>
    )

}

export default BootStrap;