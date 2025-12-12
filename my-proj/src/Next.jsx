/* ! Next.jsx */


import './Next.css';

function Next(props) {
    let val1 = 100;
    let val2 = "Surya";

    let array_object = {name: "Surya", age: 21, city: "Chennai"};
    
    return (
        <div className = "next-component" >  
            <div>
                <h1>Next Component</h1>
                {props.tile}
            </div>
            <div>
                <ul>
                    <li>{array_object.name}</li>
                    <li>{array_object.age}</li>
                    <li>{array_object.city}</li>
                </ul>
            </div>
        </div>
    )
}

export default Next;