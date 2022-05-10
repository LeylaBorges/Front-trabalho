import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import ListUserComponent from "./ListUserComponent";
import AddUserComponent from "./AddUserComponent";

import React from "react";

const AppRouter = () =>{
    return(
        <div>
            <Router>
                <div className="col-md-6">
                    <h1 className="text-center" style={style}>Mycosmeticos</h1>
                    <Routes>
                        <Route path="/" exact component={ListUserComponent}/>
                        <Route path="/add" element={<AddUserComponent/>}/>
                    </Routes>
                </div>
            </Router>
        </div>
    )
}

const style = {
    color:'red',
    margin: '10px',
    textAlign: 'center'
}
export default AppRouter;