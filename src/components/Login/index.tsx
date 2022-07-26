import axios from "axios";
import React from 'react';
import bgSideImg from '../../assets/img-side-form.png';
import arrowIco from '../../assets/arrow.svg';
import { Container } from "./styles";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'
import 'react-toastify/dist/ReactToastify.css';

export function Login() {
    const notifywrongpass = () => toast.error("Acesso não autorizado! Verique os dados e tente novamente.");
    const [lodingLogin, setLoadingLogin] = useState(false);
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [value, setValue] = React.useState('');
    const navigate = useNavigate();

    const handleChange = (event: any) => {
        setValue(event.target.value);
    };

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        try {
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
                navigate("/home")
            }

        } catch (err) {
            console.log("falha do login: ", err, email, pass)
            notifywrongpass()
        };
    }

    const handleChangeEmail = (event: any) => {
        setEmail(event.target.value);
    };

    const handleChangePass = (event: any) => {
        setPass(event.target.value);
    };

    return (
        <Container>
            <div className="containerForm">
                <div className="contentInfo" style={{ backgroundImage: `url(${bgSideImg})`, backgroundRepeat: "no-repeat" }}>
                    <div className="contentText">
                        <h3>Embarque nessa jornada!<br /> Sua nave está aguardando!</h3>
                        <span>Acesse a plataforma de embarque com as suas credenciais. Se ainda não tiver uma credencial, aliste-se imediatamente.</span>
                    </div>
                    <button type="button" value="Create"><Link to='/'>Voltar para Espera</Link></button>
                    <img src={arrowIco} />

                </div>

                <div id='msgError'></div>

                <motion.div className="formContent"
                    initial={{ transform: "rotateY(0deg)" }}
                    animate={{ transform: "rotateY(0deg)" }}
                    transition={{ type: 'Inertia' }}
                    exit={{ transform: "rotateY(90deg)" }}
                >

                    <div className="sideFormContainer">

                        <div className="contentTextForm">
                            <h3>Entrar</h3>
                        </div>
                        <form action="" className="labeltitle" onSubmit={handleSubmit}>
                            <label id='userlabel'>
                                <span>E-mail</span>
                                <input type="email" id="email" name="email" placeholder="" required onChange={handleChangeEmail} />
                            </label>

                            <label id='passlabel'>
                                <span>Senha</span>
                                <input type="password" id="password" name="password" placeholder="" required onChange={handleChangePass} />
                                <i className="fa-solid fa-eye"></i>
                            </label>

                            <div className="SubmitButton">
                                <input type="submit" value="Log in" />
                                <button type="button" value="Create"> <Link to='/create' className="newUser">Novo Recruta?</Link> </button>
                            </div>
                        </form>
                    </div>
                </motion.div>
            </div>


            <ToastContainer />
        </Container>
    )
}