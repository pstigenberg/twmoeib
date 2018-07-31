import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'; 

class IndexPage extends React.Component {
    constructor(props, context){
        super(props, context);
    }
    
    render(){
        return(
            <div>
                <h1>{this.props.settings.indexPageHeading}</h1>
            </div>
        );
    }
}

IndexPage.propTypes = {
    settings: PropTypes.object.isRequired
};

function mapStateToProps(state){
    
    return {
        settings: state.settings
    };
}

export default connect(mapStateToProps)(IndexPage);