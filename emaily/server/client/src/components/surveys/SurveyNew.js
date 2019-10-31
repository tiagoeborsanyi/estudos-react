// SurveyNew shows SurveyForm and SurveyReview
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SurveyForm from './SurveyForm';

class SurveyNew extends Component {
    render() {
        return (
            <div>
                <SurveyForm />
            </div>
        );
    }
}

export default SurveyNew;