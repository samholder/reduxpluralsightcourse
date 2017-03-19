import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as applicationActions from './applicationActions';
import ApplicationList from './ApplicationList';

class ApplicationsPage extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state = {
            application:{name:""}
        };

        this.onApplicationNameChange = this.onApplicationNameChange.bind(this);
        this.onClickApplicationCreate = this.onClickApplicationCreate.bind(this);
    }

    onApplicationNameChange(event) {
        const application = this.state.application;
        application.name = event.target.value;
        this.setState({application});
    }

    onClickApplicationCreate(){
        this.props.actions.createApplication(this.state.application);
    }


    render(){
        return (
            <div>
                <h1>Register new application</h1>
                <p>Add a new application to those supported by the authorisation service</p>            
                <input
                    type="text"
                    onChange = {this.onApplicationNameChange}
                    value = {this.state.application.name}/>
                <input
                    type="submit"
                    value="Create Application"
                    onClick={this.onClickApplicationCreate} />
                <h2>Existing applications</h2>
                <ApplicationList applications={this.props.applications}/>
                
            </div>
        );
    }
}

ApplicationsPage.propTypes = {
    applications: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
    return{
        applications:state.applications
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions : bindActionCreators(applicationActions,dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(ApplicationsPage);