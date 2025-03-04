//In this code I have use the Material Ui framework for the designing and also for the responsiveness purpose.
//This code contains various input fields, validation, error handling and after submitting the form an modal will show the whole form details.
import React, { useState } from 'react';
import { Box, Grid, Typography, TextField, FormControl, Select, MenuItem, Button, Dialog, DialogTitle, DialogContent,DialogActions } from '@mui/material';
import UseFormValidation from './UseFormValidation';
function SignUp() {

  //useState hooks are use for managing the state
  const [country, setCountry] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { values, errors, handleformChange } = UseFormValidation({
    firstName : "",
    lastName : "",
    email : "",
    password : "",
    address: "",
    phone : "",
    zip :""
  });

  //Update the country state
  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);  // Mark form as submitted when click on the submit button
  
    //if any error exists then alert is shown otherwise it opens the modal
    const foundErrors = Object.values(errors).some((error) => error !== "") || 
                        Object.values(values).some((val) => val.trim() === "") || 
                        !country;
  
    if (foundErrors) {
      alert("Please fill in all required fields correctly before submitting.");
    } else {
      setOpenModal(true);
    }
  };
  

  const countries = ["United States", "Canada", "France", "Germany", "India", "China"];

  return (
        // here Box with flexbox is used to set the form
    <Box sx={{ display: "flex", 
    flexDirection: "column",
     alignItems: "center", 
     justifyContent:'center',
     flex:'1',
     mt: 6, 
     px: 4}}>
      <Typography variant="h3" fontFamily="cursive" color="secondary">
        Registration Form
      </Typography>

    {/* here .map() is used to avoid the repetitive code, and array is used to create dynamically form fields */}
      <Grid container spacing={3}
      sx={{
        // maxWidth:"800px",
        border:'4px groove purple',
        margin:'0 0 auto 0' ,
        padding:'20px',
        mt:'10px'
       }}>
        
        {/* Form Fields: single row contains two fields */}
        {[
          { label: "First Name",name:"firstName", placeholder:'John' },
          { label: "Last Name",name:"lastName", placeholder:'Madson'},
          { label: "Password",name:"password", type: "password", placeholder:'adsf$123&LKJ%90' },
          { label: "Retype Password",  type: "password", placeholder:'adsf$123&LKJ%90' },
          { label: "Email", name:"email", placeholder:'john45@gmail.com' },
          { label: "Phone Number", name:"phone", placeholder:'0987654431' },
          { label: "Address",name:"address", placeholder:'38 Manson, Germany'},
          { label: "Town",name:"town", placeholder:'Berlin' },
          { label: "Region", name:"region", placeholder:'Hamburg' },
          { label: "PostCode/Zip" , name:"zip", placeholder:'20095'}
        ].map((field, index) => (
                  
          //In this label is display from the array and same for the placeholder and type value is display from the array.
          <Grid item xs={12} sm={6} key={index}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Typography sx={{ minWidth: "120px", fontWeight: 800, fontFamily:'fantasy' }}>{field.label}:</Typography>
              <TextField
                placeholder={field.placeholder}
                color="secondary"
                focused
                fullWidth
                type={field.type || "text"}
                required
                name={field.name}
                value={values[field.name]}
                onChange={handleformChange}
                error={isSubmitted && (!!errors[field.name] || values[field.name] === "")}
                helperText={isSubmitted && (errors[field.name] || (values[field.name] === "" ? "This field is required" : ""))}                             
                />
            </Box>
          </Grid>
        ))}

        {/* Country Selector */}
        <Grid item xs={12} sm={6}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography sx={{ minWidth: "120px", fontWeight: 800, fontFamily:'fantasy' }}>Country:</Typography>
            
            <FormControl fullWidth error={isSubmitted && !country}>
            <Select value={country} onChange={handleChange} displayEmpty>
                <MenuItem  value=""  disabled>Select your Country</MenuItem>
                {countries.map((country, index) => (
                <MenuItem key={index} value={country}>{country}</MenuItem>
                ))}
              </Select>
            </FormControl>
            {isSubmitted && !country && <Typography color="error">Please select a country</Typography>}

          </Box>
        </Grid>
        <Grid item xs={12} sx={{ textAlign: "center", mt: 3 }}>
    <Button variant="contained" color="primary" onClick={handleSubmit} //handleSubmit() will be triggered when click on it
    sx={{ fontFamily:'sans-serif', fontWeight: 600, fontSize:'18px'}}>
      Submit
    </Button>
  </Grid>
      </Grid>

      {/* Modal Open to show the whole form */}
      <Dialog open={openModal} sx={{ color:'purple'}} onClose={() => setOpenModal(false)}>
        <DialogTitle>Form Submitted successfully!</DialogTitle>
        <DialogContent dividers sx={{ fontFamily:'cursive', color:'rebeccapurple'}}>
        <Typography sx={{ fontFamily:'monospace' }}><strong>First Name:</strong> {values.firstName}</Typography>
          <Typography sx={{ fontFamily:'monospace' }}><strong>Last Name:</strong> {values.lastName}</Typography>
          <Typography sx={{ fontFamily:'monospace' }}><strong>Email:</strong> {values.email}</Typography>
          <Typography sx={{ fontFamily:'monospace' }}><strong>Phone:</strong> {values.phone}</Typography>
          <Typography sx={{ fontFamily:'monospace' }}><strong>Address:</strong>{values.address}</Typography>
          <Typography sx={{ fontFamily:'monospace' }}><strong>Zip Code:</strong> {values.zip}</Typography>
          <Typography sx={{ fontFamily:'monospace' }}><strong>Country:</strong> {country}</Typography>        
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenModal(false)} color='primary' variant='outlined'>Close</Button>
          </DialogActions>
      </Dialog>
    </Box>
  );
}

export default SignUp;
