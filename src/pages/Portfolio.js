import React from 'react';
import { Box,
    Grid, 
    Typography,
Button
}
 from '@mui/material';
 import Boypic from '../images/Boypic.png';
 import Group from '../images/Group.png';
 import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
 //import LastRect from '../images/LastRect.png';
 import Divider from '@mui/material/Divider';


const Portfolio = () => {
  return (
    <>
    <Box sx={{
        width: "100%",
        paddingY: 2,
        marginBlock: 10,
        overflow: "hidden",
    }}
    >
        <Box
          sx={{
            overflow: "hidden",
          }}
        >
         <Grid item xs={12} sm={6} md={12}>
              <Typography>
                <img
                  src={Boypic}
                  style={{ width: "100%", height: "100%" }}
                />
              </Typography> 
              </Grid>  
        </Box>
        
        <Box
          sx={{
            overflow: "hidden",
            // background:"#6973FE",
            background:"#0096FF",
            color:"black",
            padding:"3%",
            marginTop:"-1%",
          }}
        >
         <Grid container spacing={2} >
            <Grid item xs={12} sm={6} md={6} marginLeft={"8%"}>
                <img src={Group} alt=""></img>
            </Grid>
            <Grid item xs={12} sm={6} md={6} sx={{marginInline:"20%", marginTop:"-7%",color:"black"}}>
                <Button variant="outlined" sx={{color:"black",background:"#CCFFCC"}}> Edit Profile</Button>
            </Grid>
         </Grid>
         <Grid container >
            <Grid item xs={12} sm={6} md={12} sx={{fontSize:"35px",marginLeft:"5%", font:"poppins",
        marginTop:"1%"}}>
                <b>Lorem Ipsum</b>
                 </Grid>
         </Grid>
         <Grid container spacing={6} 
         sx={{fontSize:"35px", marginTop:"-1%", textAlign:"center"}}>
            <Grid item xs={12} sm={6} md={3} 
             sx={{marginLeft:"11%"}}>
                <b>Job Posts</b>
            </Grid>
            <Grid item xs={12} sm={6} md={3}
            >
                <b>Job Likes</b>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <b>Job Shared</b>
            </Grid>
            </Grid>

            </Box>

          <Box sx={{
            overflow:"hidden",
            background:"#FFF",
            padding:"3%",
            color:"black"
          }}
          >
          <Grid container spacing={2} >
            <Grid item xs={12} sm={6} md={12}
            sx={{textAlign:"right",marginTop:"0%"}} >
                <Button variant='outlined' sx={{color:'black'}}> Pending <KeyboardArrowDownIcon />  Save Changes</Button>
            </Grid>
            </Grid>
            </Box>
                 
                    {/* Divider */}


             <Box sx={{marginTop:"7%",overflow:"hidden",marginLeft:"3%",marginBottom:"3rem"}}>
            <Box sx={{borderRadius:"35px",width:{xs:'60%', sm:"35%"},height:{xs:"10%", sm:"4%"}, border:'2px solid black'}}>
            <Grid container sx={{textAlign:"center",fontSize:"25px",marginTop:"4%"}}>
               <Grid item xs>
                
                 Job Posted
               </Grid>
              <Divider orientation="vertical" sx={{border:"1px solid black"}}flexItem>
        
             </Divider>
            <Grid item xs>
             Address
            </Grid>
            <Divider orientation="vertical" sx={{border:"1px solid black"}} flexItem>
        
             </Divider>
             <Grid item xs>
                 About
               </Grid>
            </Grid>
          </Box>
          </Box>


            {/* <Grid item xs={12} sm={6} md={12} sx={{marginTop:'8%',fontSize:"50px"}}>
            <ButtonGroup variant="outlined" aria-label="outlined button group" sx={{borderRadius:"35px"}}>
            <Button>Job Posted</Button>
            <Button>Address</Button>
            <Button>About</Button>
            </ButtonGroup>
            </Grid> */}
          
          
          
          <Box sx={{
            overflow:"hidden",
            color:"#FFF",
            background:"#6973FE",
            padding:"6%",
            borderRadius:"35px",
            marginInline:"2%"
          }}
          >
            <Grid container sx={{justifyContent:"center", fontSize:"30px",marginTop:'-2%'}}>
                <Grid>
                  <b>You have 0 job post</b>  
                </Grid>
            </Grid>
            

            
          </Box>
    </Box>
      </>
  );
}

export default Portfolio;


