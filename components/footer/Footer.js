import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { Grid, Avatar } from '@mui/material';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import FavoriteIcon from '@mui/icons-material/Favorite';

function Copyright() {
    return (
      <div>
        {'© '}{new Date().getFullYear()}{' All rights reserved.'}
      </div>
    );
  }

  export default function Footer() {
    const styles = {
        custodians:{
          backgroundColor: '#dddddd',
          textAlign: 'center',
          color: '#333333',
          fontWeight: 300,
          '& h4': {
            fontSize: 28,
            mb: 0,
            lineHeight: '30px',
          },
          '& h5': {
            fontSize: 15,

          },
          '& a':{
            textDecoration: 'none',
          }
        },
        footer: {
          backgroundColor: '#243241',
          minHeight: 50,
          py: '18px',
          color: '#adadad',
          fontSize: 12,
          fontWeight: 300,
          lineHeight: '12px',
          textDecoration: 'none',
          '& a':{
            textDecoration: 'none',
          }
        },
      };
    return ( 
        <>      
        <Container maxWidth="100%"
          component="div"
          sx={styles.custodians}>
          <Box pt={8} pb={8} maxWidth="lg" sx={{ display: 'flex', m: '0 auto'}}>
            <Grid container spacing={6}>
              <Grid item xs={12} sm={6} md={4}>
                <Avatar alt="Jacob Lee" src="../images/static/custodian1.jpeg" sx={{ width: 85, height: 85 }} />
                <Typography variant="h4" component="h4" gutterBottom={true}>Jacob Lee</Typography>
                <Typography variant="h5" component="h5">Design Head</Typography>
                <Typography variant="body1" component="div"><a href="mailto:jacob.l@example.com" target="_top">jacob.l@example.com</a></Typography>
                <Typography variant="body2" component="p">Purus gravida quis blandit turpis cursus in hac. Habitant morbi tristique senectus et netus. Aliquam nulla facilisi cras fermentum. Nunc sed velit dignissim sodales.</Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Avatar alt="Jacob Lee" src="../images/static/custodian2.jpeg" sx={{ width: 85, height: 85 }} />
                <Typography variant="h4" component="h4" gutterBottom={true}>Amanda S</Typography>
                <Typography variant="h5" component="h5">Chief Marketing Officer</Typography>
                <Typography variant="body1" component="div"><a href="mailto:amanda.s@example.com" target="_top">amanda.s@example.com</a></Typography>
                <Typography variant="body2" component="p">Elementum integer enim neque volutpat ac tincidunt. At imperdiet dui accumsan sit. Sagittis aliquam malesuada bibendum</Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Avatar alt="Jacob Lee" src="../images/static/custodian3.jpeg" sx={{ width: 85, height: 85 }} />
                <Typography variant="h4" component="h4" gutterBottom={true}>Sam McGail</Typography>
                <Typography variant="h5" component="h5">UX Head</Typography>
                <Typography variant="body1" component="div"><a href="mailto:sam.m@example.com" target="_top">sam.m@example.com</a></Typography>
                <Typography variant="body2" component="p">Purus gravida quis blandit turpis cursus in hac. Habitant morbi tristique senectus et netus. Aliquam nulla facilisi cras fermentum. Nunc sed velit dignissim sodales.</Typography>
              </Grid>
              
            </Grid>
          </Box>
        </Container>
        <Container 
        maxWidth="100%"
        component="footer"
        sx={styles.footer}>
          <Box maxWidth="lg" sx={{ display: 'flex', m: '0 auto'}}>
            <Box sx={{ flexGrow: 1 }}>
              <Copyright />
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              Made with <FavoriteIcon sx={{ fontSize: 12, verticalAlign: 'middle' }}/> by <Link color="inherit" href="https://mui.com/"> UIConnect LLP </Link>{' '}
            </Box>
          </Box>
        </Container>
        </>
    );
}