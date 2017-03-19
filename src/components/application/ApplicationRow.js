import React, {PropTypes} from 'react';

const ApplicationRow = ({application}) =>{
    return (
        <tr>
            <td>{application.name}</td>
            <td><a href='/application/delete'>Delete</a></td>
        </tr>
    );
}

ApplicationRow.propTypes = {
    application : PropTypes.object.isRequired
};

export default ApplicationRow;