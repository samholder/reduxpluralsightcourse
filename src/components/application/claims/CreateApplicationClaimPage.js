import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as applicationClaimsActions from './applicationClaimsActions';


class CreateApplicationClaimPage extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state = {
            applicationClaim:{
                application:"",
                claimName:"",
                claimType:"",
                claimValue: ""
            }
        };

        this.onApplicationNameChange = this.onApplicationNameChange.bind(this);
        this.onClickCreateApplicationClaim = this.onClickCreateApplicationClaim.bind(this);
        this.onClaimNameChange = this.onClaimNameChange.bind(this);
        this.onClaimTypeChange = this.onClaimTypeChange.bind(this);
        this.onClaimValueChange = this.onClaimValueChange.bind(this);
    }

    onApplicationNameChange(event) {
        const applicationClaim = this.state.applicationClaim;
        applicationClaim.application = event.target.value;
        this.setState({applicationClaim});
    }

    onClaimNameChange(event) {
        const applicationClaim = this.state.applicationClaim;
        applicationClaim.claimName = event.target.value;
        this.setState({applicationClaim});
    }

    onClaimTypeChange(event) {
        const applicationClaim = this.state.applicationClaim;
        applicationClaim.claimType = event.target.value;
        this.setState({applicationClaim});
    }

    onClaimValueChange(event) {
        const applicationClaim = this.state.applicationClaim;
        applicationClaim.claimType = event.target.value;
        this.setState({applicationClaim});
    }

    onClickCreateApplicationClaim(){
        this.props.actions.createApplicationClaim(this.state.applicationClaim);
    }


    render(){
        return (
            <div>
                <h1>Create new application claim</h1>
                <p>Add claims to those that are supported by an application</p> 
                <div>
                    <span>Application</span>
                <select                    
                    onChange = {this.onApplicationNameChange}>
                    <option value="Canon">Canon</option>
                    <option value="Rating Hub">Rating Hub</option>
                </select>           
                </div>
                <div>
                    <span>Claim</span>
                <input
                    type="text"
                    onChange = {this.onClaimNameChange}
                    value = {this.state.applicationClaim.name}/>
                </div>
                <div>
                    <span>Claim type</span>
                <select                    
                    onChange = {this.onClaimTypeChange}>
                    <option value="ASI:Authorisation:ClaimType:Boolean">ASI:Authorisation:ClaimType:Boolean</option>
                    <option value="ASI:Authorisation:ClaimType:SingleValue">ASI:Authorisation:ClaimType:SingleValue</option>
                </select>
                </div>
                <div>
                    <span>Claim value</span>
                <input
                    type="text"
                    onChange = {this.onClaimValueChange}
                    value = {this.state.applicationClaim.claimValue}/>                
                </div>
                <div>
                <input
                    type="submit"
                    value="Create Application"
                    onClick={this.onClickCreateApplicationClaim} />                                
                </div>
            </div>
        );
    }
}

CreateApplicationClaimPage.propTypes = {
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
    return{
        applicationClaim:state.applicationClaim
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions : bindActionCreators(applicationClaimsActions,dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateApplicationClaimPage);