import "./App.scss";
import BookingPage from "./components/BookingPage";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Footer from "./components/Footer";
import Contactus from "./components/Contactus";
import MyBookings from "./components/MyBookings";
import BookingRoomPage from "./components/BookingRoomPage";

function ReactRouter() {
    return (
        <Router>
            <header>
                <Navbar />
            </header>
            <main>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/Booking" component={BookingPage} />
                    <Route exact path="/BookingRoomPage" component={BookingRoomPage} />
                    <Route exact path="/MyBookings" component={MyBookings} />
                    <Route exact path="/Login" component={Login} />
                    <Route exact path="/Register" component={Registration} />
                    <Route exact path="/ContactUs" component={Contactus} />
                </Switch>
            </main>
            <footer>
                <Footer />
            </footer>
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
