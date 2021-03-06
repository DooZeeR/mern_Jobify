import React from 'react';
import { useState, useEffect } from 'react';
import { Logo, FormRow, Alert } from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';

const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: true,
    showAlert: false
}


const Register = () => {
    const [values, setValues] = useState(initialState);


    const toggleMember = () => {
        setValues({...values, isMember: !values.isMember})
    }

    const handleChange = (e) => {
        console.log(e.target);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(e.target);
    }

    return (
        <Wrapper className='full-page'>
            <form className='form' onSubmit={onSubmit}>
                <Logo />
                <h3>{values.isMember ? 'Login' : 'Register'}</h3>

                {values.showAlert && <Alert alert='BAJ VAN!'/>}

                {!values.isMember && (<FormRow type='text' name='name' value={values.name} handleChange={handleChange}/>)}
                
                <FormRow type='email' name='email' value={values.email} handleChange={handleChange}/>
                <FormRow type='password' name='password' value={values.password} handleChange={handleChange}/>

                <button type='submit' className='btn btn-block'>Submit</button>
                <p>
                    {values.isMember ? 'Not a member yet?' : 'Already a member?'}
                    <button type='button' onClick={toggleMember} className='member-btn'>{values.isMember ? 'Register' : 'Login'}</button>
                </p>
            </form>
        </Wrapper>
    )
}

export default Register




/* 
const shoppingList = {
    name: 'Nagybevásárlás',
    users: [userID1, userID2],
    Kategóriák: [
        {name:'husok', items: ['csirke', 'marha']},
        {name:'tejtermék', items: ['bla', 'bla']},
        {name:'pékáru', items: ['bla', 'bla']}
    ],
    listedItems:[
        {name:'husok', items: ['csirke']}
    ]
}
 */









