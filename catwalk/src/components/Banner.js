import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';



export default function SearchAppBar() {

  const myStyle = {
    display:"block",
    backgroundColor: 'Brown',
    position: 'center'

  }
  const searchContainer={
    backgroundColor:"grey",
    padding:"10px",
    borderRadius:"5px",
    float: 'left',
    margin: '30px'
  }
  const bannerWriting = {
    fontFamily: 'Sansita Swashed, cursive', 
    float: 'right',
    margin: '30px',
    textDecoration: 'underline'
    }

  //const classes = useStyles();

  return (
    <div>
      <AppBar style={myStyle}>
      <div style={bannerWriting}><h1>Cat Walk</h1></div>
        <Toolbar>
          <div >
            <div style={searchContainer}>
            <SearchIcon />
              <TextField >
               
                </TextField>
            </div>
            <InputBase/>
            
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
