import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CloseIcon from '@mui/icons-material/Close';

import styled from 'styled-components'

const style = {
    position: 'absolute',
    top: '35%',
    left: '45%',
    transform: 'translate(-50%, -50%)',
    width: '55%',
    bgcolor: 'background.paper',
    boxShadow: 24 ,
    p: 4,
  };

const ModalDiv = styled.div`
    display: ${p => p.block && p.block};
    position: fixed;
    top: 0;
    left:0;
    width: 100%;
    height:100%;
    background: rgba(0,0,0,0.3)
`
const ContentDiv = styled.div`
    position: fixed;
    top: 50%;
    left:50%;
    width: 50%;
    height:auto;
    padding: 2rem;
    transform: translate(-50%, -50%);
    background: white;
`

const PopModal = (
    {
        handleClose,
        show,
    }
) => {
    return (
        <ModalDiv block={show ? "block" : "none"}>
            <ContentDiv> <Modal
        open={show}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={show}>
          <Box sx={style}>
            <Grid container spacing={2}>
              <Grid item xs={11} sm={11} md={11} lg={11}>
                  <Typography sx={{ letterSpacing: 3 }} variant="h5">
                    DOWNLOAD
                  </Typography>
              </Grid>
              <Grid item xs={1} sm={1} md={1} lg={1}>
                  <CloseIcon onClick={handleClose} />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Typography variant="subtitle1">
                  Download the app in AppStore, Google Play or Microsoft Store.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <img src="https://img.icons8.com/material-rounded/24/000000/android-os.png" alt="android"/>
                <img src="https://img.icons8.com/ios-filled/24/000000/mac-os.png" alt="mac"/>
                <img src="https://img.icons8.com/ios-glyphs/24/000000/windows-10.png" alt="windows"/> 
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter e-mail" required/>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Button color="error" variant="contained" fullWidth style={{'padding':'10px'}} onClick={handleClose}>Fake Download</Button>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>

           </ContentDiv>
        </ModalDiv>
    )
}

export default PopModal;