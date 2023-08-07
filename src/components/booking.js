import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';

const Booking = (item) =>{
    const[open,isopen] =useState(false);


    const save = (e) =>{
        e.preventDefault();
        
        const value = localStorage.getItem('form');
        if(!value) return{
            name:"",email:"",tickets:"",film:item.title
        };
        isopen(false);
        return JSON.parse(value);
    }

    const Book = () =>{

        const [data,setData] = useState({
            name:"",email:"",tickets:"",film:item.title
        });
        
        let name,value;
    const events=(e) =>{
        console.log(e);
        name=e.target.name;
        value=e.target.value;
        setData({...data,[name]:value});
    }

    useEffect(()=>{
        localStorage.setItem('form',JSON.stringify(data));
    },[data])

      

        
        

        return(
            <div className="form container-fluid">
                <div className="form-main">
                <main class="form-signin w-100 m-auto">
                <form>
                    <h1>{item.title}</h1>
                    <div>
                        <label>Enter Your Details</label>
                        <input type="text" placeholder="Name" autoComplete="off" value={data.name} onChange={events} name="name" />
                        <input type="email" placeholder="Email"  key="email"  value={data.email} onChange={events} name="email"/>
                        <input type="number" placeholder="No of People"   value={data.tickets} onChange={events} name="tickets"/>
                    </div>
                    <button class="btn btn2 btn-primary w-100 py-2" onClick={save}>Book Now</button>
                </form>
                <button onClick={() =>isopen(false)} className="close">Close</button>
            </main>
        </div>
            </div>
        ) 
    }

    return(
        <div>
            <button className=" book btn btn-primary col-6" onClick={() => isopen(true)}>Book Now</button>
            {open && <Book />}
        </div>
    )
}

export default Booking;