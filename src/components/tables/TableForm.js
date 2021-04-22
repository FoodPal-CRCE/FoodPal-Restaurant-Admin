import React, { useState, useEffect } from 'react'
import { Grid, } from '@material-ui/core';
import Controls from "../../components/controls/Controls";
import { useForm, Form } from '../../components/useForm';
import Input from '../controls/Input';


const genderItems = [
    { id: 'male', title: 'Male' },
    { id: 'female', title: 'Female' },
    { id: 'other', title: 'Other' },
]

const initialFieldValues = {
    tableNumber: "",
    capacity: "",
  };

export default function TableForm() {
    const { values, handleInputChange } = useForm(initialFieldValues);
    const submitHandle = () => {
        console.log("Bhai bhai Dispatch");
        console.log(values)
    }
    const handleSubmit = e => {
        e.preventDefault()
        
    }
    return (
        <Form onSubmit={handleSubmit} >
            <Grid>
                <Grid item xs={12}>
                    <Input
                        name="TableNumber"
                        label="Table Number"
                        value={values.tableNumber}
                        onChange={handleInputChange}
                        style={{marginRight: "10%"}}
                    />
                    <Input
                        label="Capacity"
                        name="Capacity"
                        value={values.capacity}
                        onChange={handleInputChange}
                        
                    />
             
                        <Controls.Button
                            type="submit"
                            text="Submit"
                            fullWidth
                            size="medium"  
                            onClick={()=>{
                                submitHandle();
                            }}
                        />
                        
                  
                </Grid>
            </Grid>
        </Form>
    )
}
