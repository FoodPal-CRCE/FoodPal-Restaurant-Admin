import { Grid, makeStyles } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AllBlogs from '../components/Blogs/AllBlogs';
import BlogCard from '../components/Blogs/BlogCard';
import { getBlogs } from '../reducers/blogSlice';
import loader from '../components/global/Loader'

const useStyles = makeStyles((theme) => ({
    content: {
        flexGrow: 1,
        height: "100vh",
        overflow: "auto",
      },
    blog: {
        margin: "10vh"
    },
}))

function Blogs() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const blogs = useSelector((state) => state.blog.blogs);
    console.log(blogs);
    const caller = () => {
        //Dispatch and get all blogs
        dispatch(getBlogs());
    }
    useEffect(()=>{
        caller();
    }, [])
    return (
        <div className={classes.content}>
            {blogs ? (<Grid container spacing={1} className={classes.blog}>
                {blogs.map((blog) => (
                <Grid key={blog.url} container item lg={4}>
                    <BlogCard
                    key={blog.url}
                    blog={blog}
                    />
                </Grid>
                ))}
            </Grid>) : (<loader />)
        }  
        </div>
        );
}

export default Blogs;