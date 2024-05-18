import React, {useState, useEffect} from 'react';
import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

const Login = ({handleCloseLogin}) =>{
  const [email, setEmail] = useState();
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    handleCloseLogin()
  }


  return(
    <Grid container spacing={2}>
      <Card sx={style}>
        <CardHeader
          title="Login"
        /> 
        <CardContent sx={{
          width: '95%',
          maxWidth: '100%',
        }}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <Input id="email_input" aria-describedby="tarefa_titulo_helper_text" value={email} onChange={e => { setEmail(e.target.value) }} />
              <FormHelperText id="tarefa_titulo_helper_text">E-mail</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12}>  
            <FormControl fullWidth>
              <Input id="password_input" aria-describedby="tarefa_descricao_helper_text" value={password} onChange={e => { setPassword(e.target.value) }} />
              <FormHelperText id="tarefa_descricao_helper_text">password</FormHelperText>
            </FormControl>
          </Grid>
          <Grid container spacing={2} mt={1}>
            <Grid container spacing={2} pl={2} mt={2}>
              <Grid item xs={1}>
                <Button size="small" variant="contained" onClick={handleLogin}>Login</Button>
              </Grid>  
              <Grid item xs={1}>  
                <Button size="small" variant="outlined" onClick={handleCloseLogin}>Cancelar</Button>  
              </Grid>
            </Grid>  
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  bgcolor: 'background.paper',
  p: 4,
};

export default Login;