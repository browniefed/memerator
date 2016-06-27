import React from "react";
import Css from "./app.css";

const Images = {
    bat: require('../images/bat_purple.png'),
    cat: require('../images/blue_cat.png'),
    cow: require('../images/green_cow.png'),
    lobster: require('../images/red_lobster.png')
}

const App = React.createClass({
    render() {
        
        return (
            <div className={Css.container}>Up up and away</div>
        )
    }
})

export default App;