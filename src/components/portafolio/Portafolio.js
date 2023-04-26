import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './Portafolio.css';
import { Button} from '@mui/material';
import React from 'react';
import Menupf from './menupf.js';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import expresslogo from './assets/expresslogo.png';
import reactlogo from './assets/reactlogo.png';
import nodelogo from './assets/nodelogo.svg';

import { Link } from 'react-router-dom';
//import { BrowserRouter, Routes, Route } from 'react-router-dom';  
//import { ProtectedRoute } from './components/protected-routes/protected-routes';




const Portafolio = () => {
    
    return(
       
        <Box sx={{flexGrow: 1}}>

        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
    
            <Grid className='principal' item xs={12} md={12} >
                <Grid item xs={4} pl={4} sx={{ p: 6 }}>
                    <h1>Sofía Vargas</h1>
                    <h2>Desarrolladora Full-Stack en proceso.</h2> 

                </Grid>
                <Grid item xs={4} pl={4} sx={{ p: 6 }}>  <Menupf></Menupf></Grid>
            </Grid> 
        


            <Grid className='perfil' item xs={12} md={12} sx={{ borderBottom: 10, borderColor: '#FB5607'}} >
                <Grid item xs={12} pl={4} sx={{ p: 12 }}>
                    <h1>Perfil Profesional</h1>
                    <body>1 año de experiencia en desarrollo de software, y con experiencia laboral en consultoría en seguridad de la información. En búsqueda de retomar actividades de desarrollo de software en la planeación y creación de aplicaciones que cumplan con los requerimientos de funcionalidad y usabilidad. Con habilidades en proactividad, capacidad de aprendizaje, iniciativa y
trabajo en equipo</body>
                    <h1>Tecnologías Manejadas</h1>
                   

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{width: '70%'}}>
                    <Grid item xs={12} md={4}>
                    <a href='https://nodejs.org/'><img className='img1' src={nodelogo} alt='Node JS'/></a>
                    </Grid>
                    <Grid item xs={12} md={4}>
                    <a href='https://es.react.dev/'><img className='img2' src={reactlogo} alt='React'/></a>
                    </Grid>
                    <Grid item xs={12}>
                    <a href='https://expressjs.com/es/'><img className='img3' src={expresslogo} alt='Express JS'/></a>
                    </Grid>
                    </Grid>
                 </Grid>
            </Grid>



            <Grid className='cursos' item xs={12} md={12} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ borderTop: 10 , borderBottom: 10, borderColor: '#8338EC'}}>
                <Grid item xs={12} pl={4} sx={{ p: 12 }}>
                    <h1>Cursos</h1>
                    <h2>En desarrollo desde Septiembre 2022</h2>
                    <h2>Enyoi - Full-stack Developer</h2>
                    <body>El FullStack developer es un desarrollador que trabaja tanto en el FrontEnd como en el Back
                    End de un sitio web,software o aplicación, es
                    decir,está tanto en la parte del cliente y
                    usuarios como del servidor y la funcionalidad.</body>
                    <h2>Mayo 2021 – Diciembre 2021</h2>
                    <h2>MinTIC – Universidad Nacional de Colombia</h2>
                    <body>Programa de formación general (ciclo 1, 2, 3 y 4a) en habilidades de programación de Misión TIC 2022 con
                    profundización en desarrollo de aplicaciones web.</body>
                </Grid>
            </Grid>


            <Grid className='experiencia' item xs={12} md={12} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ borderTop: 10 , borderBottom: 10, borderColor: '#FF006E'}} >
                <Grid item xs={12} pl={4} sx={{ p: 12 }}>
                    <h1>Experiencia en IT</h1>
                    <h2>Enero 2018 - Julio 2022</h2>
                    <body>Experiencia laboral en consultoría de seguridad de la información en sector público y financiero, realizando funciones como procesos de auditoria, gobierno de seguridad de la información, evaluación de riesgo tecnológico y apoyo en procesos de
                    certificación en estándares de seguridad.</body>
                </Grid>
            </Grid>

            <Grid className='proyectos' item xs={12} md={12} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ borderTop: 10 , borderBottom: 10, borderColor: '#FFBE0B'}}>
                <Grid item xs={2} sm={4} md={12} sx={{ pl: 12, pt:12 }}>
                    <h1>Proyectos</h1>
                    <body>Para ver los proyectos realizados ingresa aquí:</body>
                </Grid>
                <Grid item xs={2} sm={4} md={4} sx={{ pb: 12 , pl: 12, pt:6 }}>
                    <Link to="/proyectos">
                    <Button variant= 'contained' style={{ borderRadius: '20px', p: '5 px' }}>Ver proyectos</Button>     
                    </Link>
                </Grid>

            </Grid>

            <Grid className='contacto' item xs={12} md={12} 
            sx={{ borderTop: 10 , borderBottom: 10, borderColor: '#3A86FF'}}>
                <Grid item xs={4} pl={4} sx={{ pl: 12, pt:6 }}>
                    <h1>Contacto</h1>
                    <h2>Sofía Vargas</h2>
                    <h2>Celular: 3330445333 - 3002818308</h2>
                    <h2>Correo: ysvargasu@gmail.com</h2>
                    <h2>Redes Sociales:</h2>

                    <a href="https://www.linkedin.com/in/sof%C3%ADa-v-15682325a/"><LinkedInIcon/></a>
                    <a href="https://twitter.com/ysvargasu"><TwitterIcon/></a>
                    <a href="https://github.com/soylleni"><GitHubIcon/></a>
                </Grid>
                <Grid item xs={2} sm={4} md={4} sx={{pb:12, pl: 12, pt:6 }}>
                    <Link to="/contacto">
                    <Button variant= 'contained' style={{ borderRadius: '20px', p: 5 }}>Quiero ponerme en contacto</Button>       
                    </Link>  
                </Grid>
            </Grid>
          </Grid> 
        </Box>
    )

}

export default Portafolio;