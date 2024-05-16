import { useState } from "react"

export default function Form(){
    // let [fullName,setFullName] = useState("");
    // let [username,setUsername] = useState("");

    // let handleNameChange = (event) => {

    //     setFullName(event.target.value);
    // }

    // let handleUserName = (event) => {

    //     setUsername(event.target.value);
    // }

    let [formData, setFormData] = useState({
        fullName: "",
        username: "",
        password : ""
    });

    let handleInputChange = (event) => {
        let fieldName = event.target.name;
        let newValue = event.target.value;
       // console.log(fieldName);
        // console.log(newValue);

        setFormData( (currData) => {
            //currData[fieldName] =newValue;
            return{...currData, [fieldName]: newValue}
        })
    };

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        setFormData({
            fullName: "",
        username: "",
        password: ""
        });
    };


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name</label>
            <input placeholder="enter your full name"
             type="text" 
             value={formData.fullName}
             id="fullName"
             onChange={handleInputChange}
              name="fullName"/>
              <br /><br />

    <label htmlFor="userName">userName</label>
            <input placeholder="enter your userName"
             type="text" 
             value={formData.username}
             id="userName"
             onChange={handleInputChange}
              name="username"/>  
        <br /><br />

        <label htmlFor="password">Password</label>
            <input placeholder="enter your password"
             type="password" 
             value={formData.password}
             id="password"
             onChange={handleInputChange}
              name="password"/>  
        <button>Submit</button>

        </form>
    )
}