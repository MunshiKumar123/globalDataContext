import { MyContext } from "../App";
import { useContext } from "react";
import './Show.css';
const Show = () => {
    const rec = useContext(MyContext);
    const { state, dispatch } = rec;
    const handleDel = (index) => {
        //console.log(index);
        dispatch({ type: "del", payload: index });
    }
    return (
        <>
            <h2>Show</h2>
            {
                state.users.map((user, i) => {
                    return (
                        <div key={i} className="box">
                            <h3>{user.name}</h3>
                            <p>
                                {user.age}<br />
                                {user.email}
                            </p>
                            <p>
                                <input type="button" value="X" onClick={() => handleDel(i)} />
                            </p>
                        </div>
                    )
                })
            }
        </>
    );
}
export default Show;