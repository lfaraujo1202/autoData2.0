import { Container } from "./styles";
import Social1 from '../../assets/linkedin.png'
import Social2 from '../../assets/google.png'
import Social3 from '../../assets/facebook.png'
import mobile from '../../assets/mobile.svg'
import { useState } from "react";
import axios from "axios";
import React from 'react';
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Login() {
    const notifywrongpass = () => toast.error("Acesso não autorizado! Verique os dados e tente novamente.");
    const [lodingLogin, setLoadingLogin] = useState(false);
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [value, setValue] = React.useState('');
    const history = useHistory();
    
    const handleChange = (event : any) => {
        setValue(event.target.value);
      };
     
    const handleCreate = async () => {
        history.push("/create");
    }

    const handleSubmit = async (event : any) => {
        event.preventDefault();
        
        console.log(email)
        console.log(pass)
        try {
        //   setLoadingLogin(true)
          const post = await axios.post(
            'user/login',
            {
              email: email,
              password: pass,
            }
          );
          const data = post.data;
          sessionStorage.setItem("userToken", data.token);
          
          if (data.msg = 'Autenticação realizada com sucesso') {
            sessionStorage.setItem("userId", data.id);
            history.push("/home");
          }

        } catch (err) {
            console.log("falha do login: ", err, email, pass)
            notifywrongpass()
        };
    }

    const handleChangeEmail = (event : any) => {
        setEmail(event.target.value);
    };

    const handleChangePass = (event : any) => {
        setPass(event.target.value);
    };
      
    return (
    <Container>
        <main>
            <h1>Entrar</h1>
                <div className="social-media">
                <a href="#" target="_blank">
                    <img src={Social1} alt="Linkedin"/>
                </a>
                <a href="#" target="_blank">
                    <img src={Social2} alt="Google"/>
                </a>
                <a href="#" target="_blank">
                    <img src={Social3} alt="Facebook"/>
                </a>
            </div>

            <div className="alternative">
                <span>OR</span>
            </div>

            <div id='msgError'></div>

            <div className="container">
                <form action="" className="labeltitle" onSubmit={handleSubmit}>
                    <label id='userlabel'>
                        <span>E-mail</span>
                        <input type="email"  id="email" name="email" placeholder="" required onChange={handleChangeEmail}/>
                    </label>

                    <label id='passlabel'>
                        <span>Senha</span>
                        <input type="password" id="password" name="password" placeholder="" required onChange={handleChangePass}/> 
                        <i className="fa-solid fa-eye"></i>   
                    </label>
            
                    <div className="SubmitButton">
                        <input type="submit" value="Log in"/>
                        <button type="button" value="Create" onClick={handleCreate}>Novo Usuário</button>
                    </div>
                </form>
            </div>
        </main>

        <section className="images">
            <img src={mobile} alt="Mobile"/>
            <div className="circle"></div>
        </section>
        <ToastContainer />
    </Container>
    )
}