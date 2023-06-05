import { useState, useContext } from "react";
import { MyContext } from "../App";
const Save = () => {
    const [data, setData] = useState({ name: "", age: "", email: "" });
    const rec = useContext(MyContext);
    const { dispatch } = rec;

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }
    const handleSave = () => {
        //console.log(data);
        dispatch({ type: 'add', payload: data });
        setData({ name: "", age: "", email: "" });
        console.log("data has been saved");
    }
    return (
        <>
            <h2>Save</h2>
            Name :
            <input type="text" name="name" value={data.name} onChange={handleChange} /><br />
            Age :
            <input type="number" name="age" value={data.age} onChange={handleChange} /> <br />
            Email :
            <input type="email" name="email" value={data.email} onChange={handleChange} /> <br />
            <input type="button" value="Save" onClick={handleSave} />
        </>
    );
}
export default Save;