import * as React from 'react';
import{ useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
//import InputLabel from '@mui/material/InputLabel';
//import MenuItem from '@mui/material/MenuItem';
//import Select from '@mui/material/Select';
import axios from 'axios';


 const AdminForm = ( {showTableFunction,dataReq} ) => {

    const [name, setName] = useState('')
    const [userName, setUserName] = useState('')
    const [showUpdateButton, setShowUpdateButton] = useState(true)

    const saveData = () => {
     axios.post('http://localhost:3000/reqsAdmin', {
        nombre: name,
        usuario: userName,
       }).then((response) => {
        console.log('response',response)
        })
    }

    const updateReq = () => {
     axios.put(`http://localhost:3000/adminReqs/update-req/${dataReq.row.id}`, {
            nombre: name,
            usuario: userName,
        }).then((response) => {
            setName('')
            setUserName('')
        }).catch(error => {
            console.log('error',error)
        })
    }


    useEffect(() => {
        const editButton = () => {
            if(dataReq.edit !== undefined){
                setShowUpdateButton(false)
                setName(dataReq.row.nombre)
                setUserName(dataReq.row.usuario)
            }
        }

        editButton()

        }, [dataReq]
    );

   const onChangeName = (event) => { setName(event.target.value)} 
   const onChangeUserName = (event) => { setUserName(event.target.value)}


    const cancelButton = () =>{
        setName('')
        setUserName('')
    }

  return (
    <Grid container justifyContent={'center'} >
        <Grid item xs={2} />
        <Grid item xs={10} mt={6}>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                >
                <TextField id="Nombre" label="Nombre" variant="outlined" onChange={onChangeName} value={name}  />
                <TextField id="usuario" label="usuario" variant="outlined" onChange={onChangeUserName} value={userName}/>
            </Box>
        </Grid>
        <Grid item xs={2} />
        <Grid item xs={2} mt={4}>
            <Button variant="contained" color={'error'} onClick={() => { showTableFunction(); cancelButton()} }>Cancelar</Button>
        </Grid>
        <Grid item xs={6} mt={4}>
            {
                showUpdateButton  ? 
                    <Button variant="contained" color={'success'} onClick={() => {saveData(); showTableFunction()} }>Guardar</Button>
                : 
                    <Button variant="contained" color={'success'} onClick={() => {updateReq(); showTableFunction()} }>Actualizar</Button>
            }
        </Grid>
    </Grid>
  );
}

export default AdminForm