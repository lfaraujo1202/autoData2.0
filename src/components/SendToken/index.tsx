import axios from "axios";
import React from 'react';
import bgSideImg from '../../assets/img-side-form.png';
import arrowIco from '../../assets/arrow.svg';
import { Container } from "./styles";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'
import 'react-toastify/dist/ReactToastify.css';

export function SendToken() {
    const notifyerr = () => toast.error("E-mail não encontrado");
    const notifysuccess = () => toast.success("Token enviado para o e-mail cadastrado");

    const [recEmail, setrecEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        try {
            const post = await axios.post(
                "/password-reset/",
                {
                    email: recEmail,
                }
            );
            const data = post.data;
            console.log(data)

            if (post.data = 'password reset link sent to your email account') {
                notifysuccess()
            }

        } catch (err) {
            console.log("Falha no envio do token ", err)
            notifyerr()
        };
    }

    const handleChangeEmail = (event: any) => {
        setrecEmail(event.target.value);
    };

    return (
        <Container>
            <div className="containerForm">
                <div className="contentInfo" style={{ backgroundImage: `url(${bgSideImg})`, backgroundRepeat: "no-repeat" }}>
                    <div className="contentText">
                        <h3>Embarque nessa jornada!<br /> Sua nave está aguardando!</h3>
                        <span>Acesse a plataforma de embarque com as suas credenciais. Se ainda não tiver uma credencial, aliste-se imediatamente.</span>
                    </div>
                    <button type="button" value="Create"><Link to='/login'>Voltar para o embarque</Link></button>
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
                            <h3>Recupera Senha</h3>
                        </div>
                        <form action="" className="labeltitle" onSubmit={handleSubmit}>
                            <label id='userlabel'>
                                <span>Digite o seu e-mail</span>
                                <input type="string" id="email" name="email" placeholder="" required onChange={handleChangeEmail} />
                            </label>

                            <div className="SubmitButton">
                                <input type="submit" value="Recuperar Senha" />

                            </div>
                        </form>
                    </div>
                </motion.div>
            </div>


            <ToastContainer />
        </Container>
    )
}