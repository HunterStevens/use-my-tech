import React, { useState, useEffect } from 'react';
import AxiosWithAuth from '../Utils/AxiosWithAuth';
import {useHistory} from 'react-router-dom';

//-------MATERIAL UI IMPORTS---------
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
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

function EditProfile(props) {
  const history = useHistory();
  const userId = localStorage.getItem('userId');
  //----------MATERIAL UI STYLES ------
  const classes = useStyles();
  //------------State------------------
  const [user, setUsers] = useState({});
  const [editValues, setEditValues] = useState(user);

  //-----------Handlers----------------
  const handleChange = ev => {
    ev.preventDefault();

    setUsers({
      ...user,
      [ev.target.name]: ev.target.value,
    });
  };

  useEffect(() =>{
    AxiosWithAuth().get(`/api/users/${userId}`)
    .then(res => {
      console.log(res);
      setUsers(res.data);
    })
    .catch(err =>{
      console.log(err);
    })
  },[])

  const editSubmit = ev => {
    ev.preventDefault();
    AxiosWithAuth().post(`/api/users/${userId}`, user)
    .then(res =>{
      console.log("New Editted profile: ",res);
      props.getProfileUpdate();
      history.push('/myequipment');
    })
    .catch(err =>{
      console.log(err);
    })
  };

  return (
    <Container>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component='h1' variant='h5'>
          Edit Profile
        </Typography>
        <form onSubmit={editSubmit}>
          <TextField
            label='name'
            id='name'
            name='name'
            placeholder='Full name with spaces'
            onChange={handleChange}
            value={user.name}
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
            value={user.city}
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
            value={user.username}
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
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default EditProfile;
