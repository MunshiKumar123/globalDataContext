import Home from './details/Home';
import Save from './details/Save';
import Show from './details/Show';
import Navbar from './details/Navbar';
import { Routes, Route, Link } from 'react-router-dom';
import { is, reducer } from './reducer/Reducer';
import React, { useReducer } from 'react';
export const MyContext = React.createContext();
const App = () => {
    const [state, dispatch] = useReducer(reducer, is);
    const rec = {
        state: state,
        dispatch: dispatch
    };

    return (
        <>
            <Navbar />
            <MyContext.Provider value={rec}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/save" element={<Save />} />
                    <Route path="/show" element={<Show />} />
                </Routes>
            </MyContext.Provider>
        </>
    );
}
export default App;