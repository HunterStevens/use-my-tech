import React from 'react';

//-----MATERIAL UI IMPORTS---------------
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function Search({ searchChangeHandler }) {
  const classes = useStyles();

  return (
    <div>
      <form className={classes.root}>
        <TextField
          id='standard-basic'
          label='Search'
          onChange={searchChangeHandler}
        />
      </form>
    </div>
  );
}

export default Search;
