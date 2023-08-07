import { useState } from "react"

const Summary = (item) =>{
    const [show,set] = useState(false);

    const Pop = () =>{
        var data=item.s;
        const regex = /(<([^>]+)>)/gi;
        const result = data.replace(regex, "");
        return(
            <div>
                <div className="wrapper"></div>
                <div className="sum-contain">
                <p>{result}</p>
                <button className="close"onClick={() =>set(false)}>Close</button>
                </div>
            </div>
        )
    }

    return(
        <div>
            <button className="summary" onClick={() => set(true)}>Summary</button>
            {show && <Pop />}
        </div>
    )
}

export default Summary;