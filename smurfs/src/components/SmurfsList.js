import React from 'react';
import { connect } from 'react-redux';

import { fetchSmurfs } from '../actions';
import Smurf from './Smurf';

const SmurfsList = props => {
    console.log("props", props);
    return (
        <div>
            {!props.smurfs && !props.isLoading && (
                <div>
                    <h3>Welcome to our Smurf Village! Please enjoy meeting our residents. </h3>
                    <button onClick={props.fetchSmurfs}>See the Village!</button>
                </div>
            )}
            {props.isLoading && (
                <p>Add a Loader Here</p>
            )}
            <div>
                {props.smurfs && !props.isLoading && props.smurfs.map(item => (
                    <Smurf key={item.id} smurf={item} />
                ))}
            </div>
        </div>
    )
}

export default connect(state => state, { fetchSmurfs })(SmurfsList);