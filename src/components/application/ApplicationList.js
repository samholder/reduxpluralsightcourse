import React, {PropTypes} from 'react';
import ApplicationRow from './ApplicationRow';

const ApplicationList = ({applications}) =>{
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Application Name</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {applications.map(application=>
                    <ApplicationRow key={application.name} application={application} />
                )}
            </tbody>                
        </table>
    );
};

ApplicationList.propTypes = {
    applications : PropTypes.array.isRequired
};

export default ApplicationList;