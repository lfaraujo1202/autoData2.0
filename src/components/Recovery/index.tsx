import axios from "axios";
import * as yup from "yup";
import React from 'react';
import bgSideImg from '../../assets/img-side-form.png';
import arrowIco from '../../assets/arrow.svg';
import 'react-toastify/dist/ReactToastify.css';

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form';
import { useParams } from "react-router-dom"
import { Container } from "./styles";
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';

import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

const schema = yup.object({
    password: yup.string().min(6, "Mínimo de 6 caracteres!"),
    confirmpassword: yup.string().required("Confirme sua senha!").oneOf([yup.ref("password")], "Erro na confirmação"),
}).required();

export function Recovery() {
    const notifysuccess = () => toast.success("Senha atualizada com sucesso");
    const notifywrongpass = () => toast.error("Token inválido!");

    const [toogleEyeVisible, setToogleEyeVisible] = React.useState(true);
    const [toogleEyeVisible2, setToogleEyeVisible2] = React.useState(true);
    const [lodingLogin, setLoadingLogin] = useState(false);
    const [newPass, setNewPass] = useState('');
    const [pass, setPass] = useState('');
    const [Route, setRoute] = React.useState('');
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) })

    const handleChangeToken = (event: any) => {
        let text = event;
        let result = text.replace(/userId=/g, "");
        let result2 = result.replace(/&token=/g, "/");
        setRoute("password-reset/" + result2);
    };

    const handleToogle = () => {
        setToogleEyeVisible(!toogleEyeVisible)
    }

    const handleToogle2 = () => {
        setToogleEyeVisible2(!toogleEyeVisible2)
    }

    let { recdata } = useParams();

    useEffect(() => {
        handleChangeToken(recdata)
    }, []);


    async function onSubmit(userData: any) {
        try {
            const post = await axios.post(
                Route,
                {
                    newPass: userData.password,
                }
            );
            const data = post.data;

            if (post.data = 'password reset sucessfully.') {
                notifysuccess()
                navigate("/home")
            }

        } catch (err) {
            notifywrongpass()
        };
    }

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
                        <form className="labeltitle" onSubmit={handleSubmit(onSubmit)}>
                            <label id='userlabel'>
                                <span>Senha</span>
                                {toogleEyeVisible ? (
                                    <>
                                        <input type="password" {...register("password", { required: true, maxLength: 20 })} />
                                        <RemoveRedEyeOutlinedIcon sx={{ color: "var(--lightpurple)" }} className="toogle" onClick={handleToogle} />
                                    </>
                                ) : (
                                    <>
                                        <input type="text" {...register("password", { required: true, maxLength: 20 })} />
                                        <VisibilityOffOutlinedIcon sx={{ color: "var(--lightpurple)" }} className="toogle" onClick={handleToogle} />
                                    </>
                                )}
                                {errors.password && <span className="error">{errors.password?.message}</span>}
                            </label>

                            <label id='passlabel'>
                                <span>Confirme a Senha</span>

                                {toogleEyeVisible2 ? (
                                    <>
                                        <input type="password" {...register("confirmpassword", { required: true, maxLength: 20 })} />
                                        <RemoveRedEyeOutlinedIcon sx={{ color: "var(--lightpurple)" }} className="toogle" onClick={handleToogle2} />
                                    </>
                                ) : (
                                    <>
                                        <input type="text" {...register("confirmpassword", { required: true, maxLength: 20 })} />
                                        <VisibilityOffOutlinedIcon sx={{ color: "var(--lightpurple)" }} className="toogle" onClick={handleToogle2} />
                                    </>
                                )}

                                {errors.confirmpassword && <span className="error">{errors.confirmpassword?.message}</span>}
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