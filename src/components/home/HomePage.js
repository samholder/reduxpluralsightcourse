import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component{
    render(){
        return (
            <div className="jumbotron">
                <h1>Authorization service</h1>
                <p>Management portal for authorization claims for services</p>
                <Link to="about" className="btn btn-primary bt-lg">Learn more</Link>
            </div>
        );
    }
}

export default HomePage;