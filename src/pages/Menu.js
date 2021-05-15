import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { Grid, Typography, Snackbar } from "@material-ui/core";

import MenuCardItem from "../components/menu/MenuCardItem";
import { useDispatch, useSelector } from "react-redux";
import { getMenu } from "../reducers/menuSlice";
import Popup from "../components/global/Popup";
import MenuForm from "../components/menu/MenuForm";
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
  title: {
    flexGrow: 1,
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
}));

export default function Menu() {
  const [openPopup, setOpenPopup] = useState(false);
  // snackbar
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

  const classes = useStyles();
  const menuStatus = useSelector((state) => state.menu.status);
  const dispatch = useDispatch();
  const menuData = useSelector((state) => state.menu.menu);
  // console.log(menu);
  useEffect(() => {
    if (menuStatus === "idle") {
      dispatch(getMenu());
    }
  }, [dispatch, menuStatus]);
  console.log(menuData);

  if (menuStatus === "succeeded") {
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
                  Menu
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
                  Add Item
                </Button>
                <Popup
                  title='Add Menu Item'
                  openPopup={openPopup}
                  setOpenPopup={setOpenPopup}
                >
                  <MenuForm
                    handleClickError={handleClickError}
                    handleClickSuccess={handleClickSuccess}
                    setOpenPopup={setOpenPopup}
                  />
                </Popup>
              </Box>
            </Box>
            <Grid
              container
              direction='column'
              justify='flex-start'
              alignItems='flex-start'
            >
              {menuData.map((menuItem, index) => {
                return (
                  <div key={index} className={classes.container}>
                    <Typography
                      variant='subtitle2'
                      color='inherit'
                      noWrap
                      className={classes.title}
                    >
                      {`${menuItem.name}(${menuItem.items.length})`}
                    </Typography>
                    <br />
                    <Grid container className={classes.root} spacing={2}>
                      <Grid item xs={12}>
                        <Grid container justify='flex-start' spacing={6}>
                          {menuItem.items.map((item, index) => (
                            <Grid key={index} item>
                              <MenuCardItem
                                name={item.name}
                                price={item.price}
                                sectionName={menuItem.name}
                                sectionId={menuItem._id}
                                itemId={item._id}
                              />
                            </Grid>
                          ))}
                        </Grid>
                      </Grid>
                    </Grid>
                  </div>
                );
              })}
            </Grid>
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
            Menu updated!
          </Alert>
        </Snackbar>
      </div>
    );
  } else {
    return <h1>Lorem</h1>;
  }
}
