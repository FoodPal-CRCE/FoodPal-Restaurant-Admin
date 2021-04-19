import React, { useState }  from 'react'
import { makeStyles } from "@material-ui/core/styles"
import { Box, Container, Typography, Button } from '@material-ui/core';
import AddIcon from "@material-ui/icons/Add";
import TablesCardItem from "../components/tables/TablesCardItem"
import Popup from '../components/tables/Popup';
import TableForm from '../components/tables/TableForm';


const useStyles = makeStyles((theme) => ({
    content: {
        flexGrow: 1,
        height: "100vh",
        overflow: "auto"
    },
    appBarSpacer: theme.mixins.toolbar,
    container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}))

export default function Tables() {
    const [openPopup, setOpenPopup] = useState(false);

    const classes = useStyles();
    return (
        <div className={classes.content}>
            <main>
               <div className={classes.appBarSpacer}/>
            <Container maxWidth="lg" className={classes.container}>
             <Box display='flex' alignItems='center' m={1} p={1}>
            <Box marginLeft='auto'>
              <Typography
                component='h1'
                variant='h3'
                color='inherit'
                noWrap
                className={classes.title}
              >
                Tables
              </Typography>
            </Box>
            <Box marginLeft='auto'>
              <Button
                variant='outlined'
                color='primary'
                startIcon={<AddIcon />}
                onClick={()=>{setOpenPopup(true)}}
              >
                Add table
              </Button>
              <Popup 
                title="Add Table"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
              >
                <TableForm/>
              </Popup>
            </Box>
          </Box>

          <TablesCardItem/>
               </Container>
            </main>
            
        </div>
    )
}
