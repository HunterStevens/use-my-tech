import React, { useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

import AxiosWithAuth from '../Utils/AxiosWithAuth';

//-------MATERIAL UI IMPORTS---------
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Signup = () => {
  const history = useHistory();
  const [signState, setSignState] = useState({
    username: '',
    password: '',
    name: '',
    city: '',
  });

  const handleChange = ev => {
    ev.preventDefault();

    setSignState({
      ...signState,
      [ev.target.name]: ev.target.value,
    });
  };

  const signUpSubmit = ev => {
    ev.preventDefault();

    console.log(signState)

    AxiosWithAuth().post('/api/auth/register', signState)
    .then(res =>{
      console.log("New User API: ", res);
      history.push('/login');
    })
    .catch(err =>{
      console.log("Sign up submit ERROR: ", err.message.response);
    })
  };

  //----------MATERIAL UI STYLES ------
  const classes = useStyles();

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign up
        </Typography>
        <form onSubmit={signUpSubmit}>
          <TextField
            label='Name'
            id='name'
            name='name'
            placeholder='Full name with spaces'
            onChange={handleChange}
            value={signState.name}
            required
            fullWidth
            variant='outlined'
            margin='normal'
          />
          <TextField
            label='City'
            id='city'
            name='city'
            placeholder='Users City'
            onChange={handleChange}
            value={signState.city}
            required
            fullWidth
            variant='outlined'
            margin='normal'
          />
          <TextField
            label='Username'
            id='username'
            name='username'
            placeholder='username'
            onChange={handleChange}
            value={signState.username}
            required
            fullWidth
            variant='outlined'
            margin='normal'
          />
          <TextField
            label='Password'
            type='password'
            id='password'
            name='password'
            placeholder='password'
            onChange={handleChange}
            value={signState.password}
            required
            fullWidth
            variant='outlined'
            margin='normal'
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            className={classes.submit}
          >
            Sign Up
          </Button>
        </form>
        <div>
          <p>Already have an account? </p>
          <Link to='/login'>Go ahead and Login here!</Link>
        </div>
      </div>
    </Container>
  );
};

export default Signup;
