import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Quote from "./pages/Quote";
import Person from "./pages/Person";
import AdditionalInsuredDetails from "./AdditionalInsuredDetails";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <div className="container mt-2" style={{ marginTop: 40 }}>
                <Switch>
                    <Route path="/insurance/:id" component={ AdditionalInsuredDetails } />
                    <Route exact path="/">
                        <Person />
                    </Route>
                    <Route path="/quote">
                        <Quote />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;