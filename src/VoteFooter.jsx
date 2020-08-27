import React from 'react';
import action from './store/actions/index';
import { connect } from './my-react-redux';

class VoteFooter extends React.Component{
    render(){
        let {support, oppose} = this.props;
        return <>
            <button onClick={ev => {
                support();
            }}>支持</button>
            <button onClick={ev => {
                oppose();
            }}>反对</button>
        </>;
    }
}

export default connect(null,action.vote)(VoteFooter);
