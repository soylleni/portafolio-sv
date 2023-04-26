import './contacto.css'
import { TextField, Button, Grid, Box } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Contacto = ({sendDataUser}) => {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [sol, setSol] = useState('')
  const [coment, setComent] = useState('')

  const onChangeNombre = (event) => { setNombre(event.target.value)} 
  const onChangeEmail = (event) => { setEmail(event.target.value)} 
  const onChangePhone = (event) => { setPhone(event.target.value)} 
  const onChangeSol = (event) => { setSol(event.target.value)} 
  const onChangeComent = (event) => { setComent(event.target.value)} 

  const navigate = useNavigate()

  const saveForm = () => {
    axios.post('http://localhost:3001/contacto', {
         nombre, email, phone, sol, coment
        }).then((response) => {
          console.log('response',response)
          })
      }
  
      
  const cancelButton = () =>{
    setNombre('')
    setEmail('')
    setPhone('')
    setSol('')
    setComent('')
    }    

  
    
  return (
        <Box display="grid" sx={{ flexGrow: 1 }}>
         <form onSubmit={saveForm}  className='formul'>
          <Grid container spacing={1} sx={{ margin: '50px' }} >
            <Grid item className='titulo' m={5} style={{backgroundColor: 'black'}}>
                <h1>Contacto</h1>
                <h3>
                Estoy interesada en desarrollar mi potencial en proyectos de desarrollo de todo tipo. No dudes en contactarme para cotizaciones y preguntas en general.
                </h3>
            </Grid>

            <Grid container spacing={1}  justifyContent="center">
            <Grid className='formulario' xs={4}  style={{backgroundColor: 'white'}}  sx={{ width: 1200 }}spacing={2} mt={8} justifyContent="center" alignItems="center">
                <TextField        
                name="name"
                label="Nombre"
                onChange={onChangeNombre}
                fullWidth
                margin= "dense"  
                variant="filled"/>
                <TextField
                name="email"
                variant="filled"
                label="Correo electrónico"
                onChange={onChangeEmail}
                fullWidth
                margin="normal"
                />
                <TextField
                name="phone"
                variant="filled"
                label="Teléfono"
                onChange={onChangePhone}
                fullWidth
                margin="normal"
                />
                <TextField
                name="sol"
                label="Solicitud"
                multiline
                rows={2}
                onChange={onChangeSol}
                fullWidth
                margin="normal"
                variant="filled"
                />
                <TextField
                name="message"
                label="Comentario"
                multiline
                rows={5}
                onChange={onChangeComent}
                fullWidth
                margin="normal"
                variant="filled"
                />

            <Grid container>
              <Grid sx={{ mt:4}} item xs={2}>
                <Button variant="contained" color={'primary'} onClick={() => {navigate('/')}}>Regresar</Button>
              </Grid>
              <Grid sx={{ mt:4}} item xs={8}>
                <Button type="submit" variant="contained" color="primary" onClick={saveForm}>Enviar</Button>
              </Grid>
              <Grid sx={{ mt:4}} item xs={8}>
                <Button variant="contained" color={'error'} onClick={() => {cancelButton()} }>Cancelar</Button>
              </Grid>
            </Grid>

                </Grid>
                </Grid>
                </Grid>
                
            </form>
           
           </Box>
         );
        }
    
    export default Contacto;
    
