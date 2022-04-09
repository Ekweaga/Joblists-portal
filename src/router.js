import { Switch, BrowserRoute, Route } from "react-router-dom";
import Jobs from "./Jobs";
import Home from "./Home";
import Apply from "./apply";
import Footer from "./footer";

function Router({joblists}){

    return(
        <Switch>

<Route path="/" exact>
<Home/>
</Route>
<Route path="/jobs" exact >
<Jobs joblists={joblists}/>
</Route>
<Route path='/apply/:id'>
    <Apply jobs ={joblists}/>
</Route>
<Route path="/foot" exact>
<Footer/>
</Route>


</Switch>
    )
}

export default Router;