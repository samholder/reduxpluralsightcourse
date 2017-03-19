import React, {PropTypes} from 'react';
import {Link,IndexLink} from 'react-router';

const Header = () =>{
    return (
        <nav>
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
            {" | "}
            <Link to="/courses" activeClassName="active">Courses</Link>
            {" | "}
            <Link to="/applications" activeClassName="active">Applications</Link>
            {" | "}
            <Link to="/createclaims" activeClassName="active">Create new application claims</Link>
            {" | "}
            <Link to="/about" activeClassName="active">About</Link>
        </nav>
    );
};

export default Header;