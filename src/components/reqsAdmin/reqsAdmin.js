import React, { useState } from 'react';
import TableAdmin from "./tableAdmin";
import AdminForm from "./adminForm.js"
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';



const  reqsAdmin = ({dataToSend})  => {

  const [showForm, setShowForm] = useState(false)
  const [req, setReq] = useState({})

   const showFormFunction = () => {
      if (showForm === false){
        setShowForm(true)
      } 
   }

   const showTableFunction = (value) => {
    setReq({})
     if (value === undefined) {
      setShowForm(false)
     }
   }


   const editReq = (value) => {
     if (value) {
      setShowForm(true)
      setReq(value)
     }
  }
   
    return (
      <>  
        <Grid container justifyContent={'center'} >
          <Grid container>
            <Grid item xs={8}>
              <Typography variant="h3" gutterBottom>
                  Solicitudes de Contacto
                </Typography>
            </Grid>
          </Grid>
          
          {showForm ?
            <Grid item xs={10}>
              <AdminForm  showTableFunction={showTableFunction} dataReq={req}/>
            </Grid>
             :
            <Grid container justifyContent={'center'}>
            <Grid item xs={8}/>
            <Grid item xs={2} mb={2}>
              <Button variant="contained" onClick={showFormFunction}>Nueva Solicitud</Button>
            </Grid>
            <Grid item xs={8}>
              <TableAdmin editReq={editReq}/>
            </Grid>
           </Grid>
          }
        </Grid>
      </>
    );
  }
  
  export default reqsAdmin;
  