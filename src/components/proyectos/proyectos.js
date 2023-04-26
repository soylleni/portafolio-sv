import Box from '@mui/material/Box';
//import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import * as React from 'react';
import './proyectos.css';
import proy1 from './assets/proy1.png';
import proy2 from './assets/proy2.png';
import proy3 from './assets/proy3.png';
import proy4 from './assets/proy4.png';
//import { Button} from '@mui/material';


const  Proyectos = ()  => {
    return(
        <Box sx={{flexGrow: 1}}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid className="proyectostit" item xs={12} md={12} sx={{ borderBottom: 10, borderColor: '#FB5607'}} >
            <Grid item xs={12} pl={4} sx={{ p: 12 }}>
            <h1>Proyectos</h1>
            <body>Estos son los proyectos realizados en el bootcamp de Enyoi. </body> 
            <body>Enlace de GitHub: <a href='https://github.com/soylleni'>https://github.com/soylleni</a></body>
            </Grid>

        </Grid>
    </Grid>
    
        <Grid className="proyectosgrid" 
        item xs={12} sm={6} md={4} lg={3} 
        sx={{pl: 12, pt:6, pb:12, borderTop:10, borderBottom: 10, borderColor: '#8338EC'}} >
                <Grid item xs={12} sm={6} sx={{pb:6, pr:6}}>
                    <img className='proy1' src={proy1} alt='Proyecto 1'/>
                </Grid>
                <Grid item xs={12} sm={6} sx={{pb:6}}>
                    <body>Challenge 5: <a href='https://github.com/soylleni/challenge_5'>https://github.com/soylleni/challenge_5</a></body>
                </Grid>
                <Grid item xs={12} sm={6} sx={{pb:6, pr:6}}>
                    <img className='proy2' src={proy2} alt='Proyecto 2'/>
                </Grid>
                <Grid item xs={12} sm={6} sx={{pb:6}}>
                    <body>Challenge 6: <a href='https://github.com/soylleni/challenge_6'>https://github.com/soylleni/challenge_6</a></body>
                </Grid>
                <Grid item xs={12} sm={6} sx={{pb:6, pr:6}}>
                    <img className='proy3' src={proy3} alt='Proyecto 3'/>
                </Grid>
                <Grid item xs={12} sm={6} sx={{pb:6}}>
                <body>Portafolio front-end: <a href='https://github.com/soylleni/portafolio-sv'>https://github.com/soylleni/portafolio-sv</a></body>
                </Grid>
                <Grid item xs={12} sm={6} sx={{pb:6, pr:6}}>
                <img className='proy4' src={proy4} alt='Proyecto 4'/>
                </Grid>
                <Grid item xs={12} sm={6} sx={{pb:6}}>
                <body>Portafolio back-end: <a href='https://github.com/soylleni/portafolio-sv-back'>https://github.com/soylleni/portafolio-sv-back</a></body>
                </Grid>
                
                
                
           
            
        </Grid>
        
        
   </Box>
       

    );

}

export default Proyectos;