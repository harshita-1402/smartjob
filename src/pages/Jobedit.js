import React from 'react';
import Header from '../components/Header';
import { Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import User from '../images/User.png';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Dot from '../images/Dot.png';
import Pensign from '../images/Pensign.png';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Button from '@mui/material/Button';



const Jobedit = () => {
  return (
    <>
    <Header />

      <Box sx={{
        overflow:"hidden",
        width: "100%",
        paddingY: 2,
        marginBlock: 10,
      }}
      >


                    {/* ************* Left Box ***************/}
       
       <Grid item xs={12} sm={6} md={3}>

      <Box sx={{
        overflow: "hidden",
      }}
      >
        
            <Grid item xs={12} sm={6} md={4}>
      <Box
      sx={{
        width: {xs:"80%", sm:"30%"},
        height: "703px",
        backgroundColor: 'white',
        
          opacity: [0.9, 0.8, 0.7],
          marginLeft:"5%",
          border:"1px solid blue",
          borderRadius:"35px",
          justifyContent:"center"
    
      }}
    >
            
             
           <Typography sx={{marginTop:"1rem",marginInline:"100px"}}>
            <Typography variant='h5'>
                <b> Recruiter Profile</b>
                </Typography>
                </Typography>
                <Box>
                <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={3}> 
                <Typography sx={{marginTop:"55%",marginLeft:"15%",height:"auto",width:"auto"}}>
                    <img src={User} alt="User" />
                    
                </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                <Typography 
                sx={{borderRadius:"35px",background:"#6973FE",
                 color:"white",border:"1px #6973FE",height:"130px",width:"230px",
                 marginTop:"35%",marginLeft:"9%", textAlign:"center"}}>
                  <Typography variant='h5'>
                  <b> Lorem Ipsum</b>
                  </Typography>
                  <Typography variant='h6'>
                  <p>From: XYZ Pvt.Ltd
                  Last <br/>Posted Date: 04/06/23</p>
                  </Typography>
                </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3} sx={{textAlign:"right",marginLeft:"18%",marginTop:"10%"}}>
                    <img src={Dot}></img><br/>
                    <img src={Pensign} sx={{marginTop:"35%"}}></img>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <Typography sx={{
                     borderRadius:"35px",background:"#FFFF00",
                     color:"black",border:"1px solid yellow",height:"40px",width:"120px",
                     marginTop:"18%",marginLeft:"25%", textAlign:"center"   
                    }}
                    >
                        <Typography sx={{textAlign:"center"}}>
                     <b> Ratings</b> <ArrowDropDownIcon />
                     </Typography>
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <Typography sx={{ borderRadius:"35px",background:"#6973FE",
                     color:"white",border:"1px solid #6973FE",height:"40px",width:"120px",
                     marginTop:"18%",marginLeft:"1%", textAlign:"center"}} >
                        Advance <ArrowDropDownIcon />
                        </Typography> 
                </Grid>
                <Grid item xs={12} sm={6} md={9}>
                <Typography 
                sx={{borderRadius:"35px",background:"#6973FE",
                 color:"white",border:"1px #6973FE",height:"130px",width:"100%",
                 marginTop:"8%",marginLeft:"9%", textAlign:"center"}}>
                    <Typography >
                      <Typography variant='h5'>
                  <b>Senior Hr Recruiter</b>
                  </Typography>
                  <Typography variant='h6'>
                  <p>Total Job Posts: 16<br/>Joined On: 04/06/22</p>
                  </Typography>
                  </Typography>
                </Typography>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                  <Typography sx={{marginTop:"55%",textAlign:"right",marginRight:"23%"}} >
                  <img src={Pensign}></img>
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={6} md={6} >
                  <Typography sx={{marginLeft:"25%",marginTop:"10%"}}>
                  <Typography variant='h6'>
                  <b> Contact Details</b>
                  </Typography>
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={6} >
                  <Typography sx={{marginLeft:"72%",marginTop:"6%"}}>
                    <img src={Pensign}></img>
                  </Typography>
                </Grid>
                
                <Grid sx={{
                  marginLeft:"13%",
                  marginTop:"5%"
                }}>
               <Button variant="contained" size='small' 
               startIcon={<MailOutlineIcon />} sx={{borderRadius:"80%"}} > 
               </Button> loremipsum@gmail.com
                </Grid>
                
                <Grid sx={{
                  marginLeft:"13%",
                  marginTop:"5%"
                }}>
                <Button variant="contained" size='small' 
               startIcon={< PhoneIcon />} sx={{borderRadius:"80%"}} > 
               </Button> 1234567890
                </Grid>
                 
                <Grid item xs={12} sm={6} md={12} sx={{
                  marginLeft:"9%",
                  marginTop:"2%"
                }}>
                <Button variant="contained" size='small' 
               startIcon={< WhatsAppIcon />} sx={{borderRadius:"80%"}} > 
               </Button> 1234567890
                </Grid>
                
                <Grid item xs={12} sm={6} md={12} sx={{
                  marginLeft:"9%",
                  marginTop:"2%"
                }}>
                <Button variant="contained" size='small' 
               startIcon={< LocationOnIcon />} sx={{borderRadius:"80%"}} > 
               </Button> sa3/169 near KFC sector 0 new <br/> delhi 123123
                </Grid>

                </Grid>
              </Box>
                   
    </Box>
    </Grid> 

      </Box>



      </Grid>
      </Box>

    </>
  );
}

export default Jobedit;
