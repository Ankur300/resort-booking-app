import "./App.scss";
import BookingPage from "./components/BookingPage";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function ReactRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/Booking" component={BookingPage} />
            </Switch>
        </Router>
    );
}

function App() {
    return (
        <div className="App">
            <ReactRouter />
        </div>
    );
}

export default App;
