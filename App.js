import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const initialValues = { name: "", gender: "", organization: "", homePhone:"", mobilePhone:"", email:""}
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const[isSubmit, setIsSubmit] = useState(false);

  const handleChange = (event) => {
    //console.log(event.target);
    const{name, value}=event.target;
    setFormValues({ ...formValues, [name]: value});
    //console.log(formValues);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  }

  useEffect(()=>{
    console.log(formErrors)
    if(Object.keys(formErrors).length === 0 && isSubmit){
      console.log(formValues);
    }
  },[formErrors])

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(!values.name){
      errors.name = "Name is required!";
    } else if(values.name <2){
      errors.name = "Name should contain more than 2 letters!"
    } else if(values.name >20){
      errors.name = "Name should contain less than 20 letters!"
    }
    if(!values.gender){
      errors.gender = "Gender is required!";
    }
    if(!values.organization){
      errors.organization = "Organization is required!";
    }
    if(!values.homePhone){
      errors.homePhone = "Home Phone is required!";
    }else if(values.homePhone < 10){
      errors.homePhone = "PhoneNo should not be less than 10 Numbers!"
    }else if(values.homePhone > 10){
      errors.homePhone = "PhoneNo should not be greater than contain 10 Numbers!"
    }
    if(!values.mobilePhone){
      errors.mobilePhone = "Mobile Phone is required!";
    }else if(values.mobilePhone < 10) {
      errors.mobilePhone = "MobileNo should not be less than 10 Numbers!"
    }else if(values.mobilePhone > 11) {
      errors.mobilePhone = "MobileNo should not be greater than 10 Numbers!"
    }
    
    if(!values.email){
      errors.email = "Email is required!";
    } else if(!regex.test(values.email)){
      errors.email = "This is not a valid email format!"
    }
    return errors;
    
  }

  return(
    <div className="wrapper">
      <h1>Form</h1>
      <pre>{JSON.stringify(formValues)}</pre>
      <form onSubmit={handleSubmit}>
      <fieldset>
         <label>
           <p>Name</p>
           <input type="text"  name="name" value={formValues.name} onChange={handleChange}/>
           <p>{ formErrors.name }</p>

           <p>Gender</p>
           <input type="radio" name="gender" value="Male" onChange={handleChange}/>
           <label>Male</label>
           <input type="radio" name="gender" value="Female" onChange={handleChange}/>
           <label>Female</label>
           <p>{ formErrors.gender }</p>

           <p>Date Added</p>
           <input name="dateAdded" value={formValues.dateAdded}/><br/><br/>
           <p>{ formErrors.dateAdded }</p>

          <p>Category</p>
          <input type = "radio" name="cat" value="Friends"/>
          <label >Friends</label>
          <input type = "radio" name="cat" value="Family"/>
          <label >Family</label>
          <input type = "radio" name="cat" value="Others" />
          <label >Others</label>
           {/* <input name="category" />
           <select name='category'>
            <option>Friend</option>
            <option>Family</option>
            <option>Other</option>
           </select> */}

           <p>Organization</p>
           <input name="organization" value={formValues.organization} onChange={handleChange}  />
           <p>{ formErrors.organization }</p>

           <p>Home Phone</p>
           <input name="homePhone" value={formValues.homePhone} onChange={handleChange}/>
           <p>{ formErrors.homePhone }</p>

           <p>Mobile Phone</p>
           <input name="mobilePhone" value={formValues.mobilePhone} onChange={handleChange} />
           <p>{ formErrors.mobilePhone }</p>

           <p>Email</p>
           <input name="email" value={formValues.email} onChange={handleChange}/>
           <p>{ formErrors.email }</p>

         </label>
       </fieldset>
       <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App;
