import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Container,
  Typography,
  Button,
  Snackbar,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import TablesCardItem from "../components/tables/TablesCardItem";
import Popup from "../components/global/Popup";
import TableForm from "../components/tables/TableForm";
import { useDispatch } from "react-redux";
import { getTables } from "../reducers/tableSlice";
import { Alert } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  appBarSpacer: theme.mixins.toolbar,
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

export default function Tables() {
  const [openPopup, setOpenPopup] = useState(false);
  const dispatch = useDispatch();
  const caller = () => {
    console.log("Uncomment below line after adding route");
    dispatch(getTables());
  };
  useEffect(() => {
    caller();
  }, []);
  const classes = useStyles();

  //snackbars
  const [openError, setOpenError] = useState(false);
  const handleCloseError = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenError(false);
  };
  const [openSuccess, setOpenSuccess] = useState(false);
  const handleCloseSuccess = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSuccess(false);
  };
  const handleClickError = () => {
    setOpenError(true);
  };
  const handleClickSuccess = () => {
    setOpenSuccess(true);
  };

  return (
    <div className={classes.content}>
      <main>
        <div className={classes.appBarSpacer} />
        <Container maxWidth='lg' className={classes.container}>
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
                onClick={() => {
                  setOpenPopup(true);
                }}
              >
                Add table
              </Button>
              <Popup
                title='Add Table'
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
              >
                <TableForm
                  handleClickError={handleClickError}
                  handleClickSuccess={handleClickSuccess}
                  setOpenPopup={setOpenPopup}
                />
              </Popup>
            </Box>
          </Box>

          <TablesCardItem />
        </Container>
      </main>
      <Snackbar
        open={openError}
        autoHideDuration={3000}
        onClose={handleCloseError}
      >
        <Alert onClose={handleCloseError} severity='error'>
          Please fill the fields correctly!
        </Alert>
      </Snackbar>
      <Snackbar
        open={openSuccess}
        autoHideDuration={3000}
        onClose={handleCloseSuccess}
      >
        <Alert onClose={handleCloseSuccess} severity='success'>
          Tables updated!
        </Alert>
      </Snackbar>
    </div>
  );
}
