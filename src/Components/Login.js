import React, { useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import AxiosWithAuth from '../Utils/AxiosWithAuth';
import {useLocalStorage} from '../hooks/useLocalStorage';

import '../styles/login.css';

// ----------MATERIAL UI IMPORTS------------------
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = () => {
  const history = useHistory();
  const [userID, setUserID] = useLocalStorage('userId')
  const [loginState, setLoginState] = useState({
    username: '',
    password: '',
  });

  const handleChange = ev => {
    setLoginState({
      ...loginState,
      [ev.target.name]: ev.target.value,
    });
  };

  const loginSubmit = ev => {
    ev.preventDefault();
    console.log('LoginSubmit activated');

    AxiosWithAuth()
      .post('/api/auth/login', loginState)
      .then(res => {
        console.log('Login Fetch: ', res);
        setUserID(res.data.userId);
        localStorage.setItem("token", res.data.token);
        history.push('/myequipment');
      })
      .catch(err => console.log('Login ERROR: ', err));
  };

  //----Material ui styles----------
  const classes = useStyles();

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        <form onSubmit={loginSubmit}>
          {/* <label htmlFor='username'>
          </label> */}
          <TextField
            label='username'
            type='text'
            name='username'
            value={loginState.username}
            onChange={handleChange}
            placeholder='username'
            fullWidth
            variant='outlined'
            margin='normal'
          />

          {/* <label htmlFor='password'>
          </label> */}
          <TextField
            label='password'
            type='password'
            name='password'
            value={loginState.password}
            onChange={handleChange}
            placeholder='Password'
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
            Login
          </Button>
        </form>
        <div>
          <p>Don't have an account? </p>
          <Link to='/register'>Sign-Up Here!</Link>
        </div>
      </div>
    </Container>
  );
};

export default Login;
