import Dashboard from "Page/Dashboard";
import Home from "Page/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function Routes() {
    return (
     <BrowserRouter>
        <Switch>
            <Route path="/" exact>
                <Home/>
            </Route>
            <Route path="/dashboard" exact>
                <Dashboard/>
            </Route>
        </Switch>
     </BrowserRouter>

    );
}

export default Routes;