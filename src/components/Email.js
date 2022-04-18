import React, {useState, forwardRef} from 'react';
import styled from 'styled-components';
import EmailBg from "../assets/images/email-1.jpg"
import { Button } from './styles/Button';
import axios from "axios"
import Alerts from './Alerts';

const Email = forwardRef((props, ref) => {
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [disabled, setDisabled] = useState(false)
    const [response, setResponse] = useState("")
    const [isError, setisError] = useState(false)

    const closeAlert = () => {
        setResponse("")
    }

    const submitContact = (e) => {
        e.preventDefault()
        setDisabled(true)
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.post('https://formsubmit.co/ajax/8067c07a00bfece7a13e380441052811', {
            Email: email,
            Message: message,
        })
    .then(response => {
        if(response.status === 200){
            setMessage("")
            setEmail("")
            setDisabled(false)
            setisError(false)
            setResponse("Thank You For Contacting me.")
            
        }else {
            setDisabled(false)
            setisError(true)
            setResponse("OOPS!!!, something went wrong. You may try again or write me through my email at ibraphem@gmail.com. Thank you.")
        }
    })
    .catch(error => {
        console.log(error)
        setDisabled(false)
        setisError(true)
        setResponse("Please, Check your Internet")
    });
    
    }

   

    return (
        <EmailContainer ref={ref}>
            <EmailContent>
                <h1>Get in touch with me</h1>
                {response?.length > 0 ? (
                    <Alerts type={isError ? "alert-danger" : "alert-success"} msg={response} closeAlert={closeAlert}/>
                ): null}
                <form onSubmit={submitContact}>
                    <FormWrap>
                       
                        <input required type="email" style={{padding: 25}} value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="input your email address" id="email" /><br/>
                        <textarea required rows="6" placeholder='Leave a meassage for me' value={message} onChange={(e) => setMessage(e.target.value)}></textarea><br/>
                        <Button disabled={disabled} as="button" type='submit' primary="true" round="true" style={{width: "100%", borderRadius:"10px"}} >
                                    {disabled ? "Sending Message..." : "Send Message"} 
                        </Button>
                    </FormWrap>
                </form>
            </EmailContent>
        </EmailContainer>
    );
});

export default Email;

const EmailContainer = styled.div`
    background: linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 35%),
    linear-gradient(180deg, rgba(0,0,0,0.1) 0%, transparent 100%), 
    url(${EmailBg}) no-repeat center;
    background-size: cover;
    height: 450px;
    width: 100%;
    /* padding: 5rem calc((100vw -1300px)/2); */
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`
const EmailContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px

    h1{
        text-align: center;
        padding: 0 1rem;
        margin-bottom: 1rem;
        font-size: clamp(1rem, 4vw, 3rem);

    } 

    p{
        text-align: center;
        padding: 0 1rem;
        margin-bottom: 2rem;
        font-size: clamp(1rem, 2.5vw, 1rem); 
    }

    form {
        z-index: 10;
        width: 100%;
    }
`
const FormWrap = styled.div`
    
  input {
      padding: 1rem 1.5rem;
      outline: none;
      width: 100%;
      height: 20px;
      /* border-radius: 10px; */
      border: none;
      margin-bottom: 10px ;
  }

  textarea {
      padding: 1rem 1.5rem;
      outline: none;
      width: 100%;
      height: 150px;
      /* border-radius: 10px; */
      border: none;
      margin-bottom: 10px ;
  }

`
