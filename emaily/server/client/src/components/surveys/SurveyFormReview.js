// SurveyForm Review show users their form inputs for review
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import formFields  from './formFields';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey }) => {
    
    const reviewFields = formFields.map(({ name, label }) => (
        <div key={name}>
            <label>{label}</label>
            <div>{formValues[name]}</div>
        </div>
    ))

    return (
        <div>
            <h5>Please confirm your entries</h5>
            <div>{reviewFields}</div>
            <button className="yellow darken-3 white-text btn-flat" onClick={onCancel}>
                Back
            </button>
            <button className="green white-text btn-flat right" onClick={() => submitSurvey(formValues)}>
                Send Survey
                <i className="material-icons right">email</i>
            </button>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        formValues: state.form.surveyForm.values
    }
}

export default connect(mapStateToProps, actions)(SurveyFormReview);