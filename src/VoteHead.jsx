import React from 'react';
import { connect } from './my-react-redux';

class VoteHead extends React.Component{
    render(){
        const {supNum,oppNum} = this.props;
        return <h4>
            Vote投票总人数:{supNum+oppNum}
        </h4>;
    }
}

export default connect(state => state.vote)(VoteHead);
