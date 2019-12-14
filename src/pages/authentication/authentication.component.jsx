import React from 'react';
import SignIn from '../../components/sign-in/sign-in.components';
import SignUp from '../../components/sign-up/sign-up.component';
import './authentication.style.scss';

const Authentication = () => (
    <div className='authentication'>
        <SignIn />
        <SignUp />
    </div>
);

export default Authentication;