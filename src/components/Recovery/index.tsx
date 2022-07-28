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
import { useParams } from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css';

export function Recovery() {
    const notifysuccess = () => toast.success("Senha atualizada com sucesso");

    const [lodingLogin, setLoadingLogin] = useState(false);
    const [newPass, setNewPass] = useState('');
    const [pass, setPass] = useState('');
    const [Route, setRoute] = React.useState('');
    const navigate = useNavigate();
    
    const handleChangeToken = (event: any) => {
        let text = event;
        let result = text.replace(/userId=/g, "");
        let result2 = result.replace(/&token=/g, "/");
        setRoute("password-reset/" + result2);
    };
    
    let { recdata } = useParams();

    useEffect(() => {
        handleChangeToken(recdata)
    },[]);


    const handleSubmit = async (event: any) => {
        event.preventDefault();
        try {
            const post = await axios.post(
                Route,
                {
                    newPass: newPass,
                }
            );
            const data = post.data;
            console.log(data)

            if (post.data = 'password reset sucessfully.') {
                notifysuccess()
                navigate("/home")
            }

        } catch (err) {
            console.log("falha na troca da senha: ", err)
        };
    }

    const handleChangeEmail = (event: any) => {
        setNewPass(event.target.value);
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
                            <h3>Recupera Senha</h3>
                        </div>
                        <form action="" className="labeltitle" onSubmit={handleSubmit}>
                            <label id='userlabel'>
                                <span>Senha</span>
                                <input type="password" id="password" name="password" placeholder="" required onChange={handleChangeEmail} />
                            </label>

                            <label id='passlabel'>
                                <span>Confirme a Senha</span>
                                <input type="password" id="password2" name="password2" placeholder="" />
                                <i className="fa-solid fa-eye"></i>
                            </label>

                            <div className="SubmitButton">
                                <input type="submit" value="Alterar senha" />

                            </div>
                        </form>
                    </div>
                </motion.div>
            </div>


            <ToastContainer />
        </Container>
    )
}