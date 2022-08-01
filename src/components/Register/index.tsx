import { Container } from "./styles";
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';

import React from 'react';
import axios from "axios";
import * as yup from "yup";
import arrowIco from '../../assets/arrow.svg';
import profile1 from "../../assets/profile1.png"
import profile2 from "../../assets/profile2.png"
import profile3 from "../../assets/profile3.png"
import profile4 from "../../assets/profile4.png"
import bgSideImg from '../../assets/img-side-form.png';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

const schema = yup.object({
  name: yup.string().required("Nome obrigatório!"),
  email: yup.string().email("Digite um e-mail válido!").required("O e-mail é obrigatório!"),
  password: yup.string().min(6, "Mínimo de 6 caracteres!"),
  confirmpassword: yup.string().required("Confirme sua senha!").oneOf([yup.ref("password")], "Erro na confirmação"),
  nick: yup.string(),
}).required();

export function Register() {
  const notifysuccess = () => toast.success("Acesso criado com sucesso");
  const notifywrongpass = () => toast.error("Falha ao criar usuário!");

  const [toogleEyeVisible, setToogleEyeVisible] = React.useState(true);
  const [toogleEyeVisible2, setToogleEyeVisible2] = React.useState(true);

  const navigate = useNavigate();
  const [avatar, SetAvatar] = useState("2");
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({resolver: yupResolver(schema)})

  const handleAvatar = async (avatar: string) => {
    SetAvatar(avatar)
  }

  async function onSubmit(userData: any) {
    try {
      const post = await axios.post(
        'user/create',
        {
          name: userData.name,
          email: userData.email,
          password: userData.password,
          Img: "profile" + (Number(avatar) -1),
          XP: 0,
          level: 0,
          currentClass: "1"
        }
      );

      const postdata = post.data;
      sessionStorage.setItem("userToken", postdata.token);
      sessionStorage.setItem("userId", postdata.user._id);
      navigate("/home")
      notifysuccess()

    } catch (err) {
      console.log("falha ao criar usuário: ", err)
      notifywrongpass()
    }
  }

  const handleToogle = () => {
    setToogleEyeVisible(!toogleEyeVisible)
  }

  const handleToogle2 = () => {
      setToogleEyeVisible2(!toogleEyeVisible2)
  }

  return (
    <Container avatar={avatar}>
      <div className="containerForm">
        <div className="contentInfo" style={{ backgroundImage: `url(${bgSideImg})`, backgroundRepeat: "no-repeat" }}>
          <div className="contentText">
            <h3>Embarque nessa jornada!<br /> Sua nave está aguardando!</h3>
            <span>Acesse a plataforma de embarque com as suas credenciais. Se ainda não tiver uma credencial, aliste-se imediatamente.</span>
          </div>
          <button type="button" value="Create"><Link to='/login'>Voltar para o Embarque</Link></button>
          <img src={arrowIco} />
        </div>

        <motion.div className="formContent"
          initial={{ transform: "rotateY(0deg)" }}
          animate={{ transform: "rotateY(0deg)" }}
          transition={{ type: 'Inertia' }}
          exit={{ transform: "rotateY(-90deg)" }}
        >
          <div className="sideFormContainer">
            <div className="contentTextForm">
              <h3>Registre-se no alistamento</h3>
              <span>Não perca tempo, ou ficará de fora do próximo embarque. </span>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="areaImputOne">
                <div className="nameArea">
                  <span>Nome:</span>
                  <input {...register("name", { required: true, maxLength: 20 })} />
                  {errors.name && <span className="error">{errors.name?.message}</span>}
                </div>


                <div className="nickArea">
                  <span>Seu nick:</span>
                  <input {...register("nick", { required: true, maxLength: 20 })} />
                </div>
              </div>

              <div className="emailArea">
                <span>E-mail:</span>
                <input type="email"{...register("email", { required: true, maxLength: 30 })} />
                {errors.email && <span className="error">{errors.email?.message}</span>}
              </div>

              <div className="areaImputOne">
                <div className="passwordArea">
                  <span>Senha:</span>
                    {toogleEyeVisible ? (
                        <>
                            <input type="password" {...register("password", { required: true, maxLength: 20 })} />
                            <RemoveRedEyeOutlinedIcon sx={{ color: "var(--lightpurple)"}} className="toogle" onClick={handleToogle}/>
                        </>
                    ) : (
                        <>
                            <input type="text" {...register("password", { required: true, maxLength: 20 })} />
                            <VisibilityOffOutlinedIcon sx={{ color: "var(--lightpurple)"}} className="toogle"onClick={handleToogle}/>
                        </>
                    )}
                  {errors.password && <span className="error">{errors.password?.message}</span>}
                </div>

                <div className="repeatArea">
                  <span>Confirme sua senha:</span>
                    {toogleEyeVisible2 ? (
                        <>
                            <input type="password" {...register("confirmpassword", { required: true, maxLength: 20 })} />
                            <RemoveRedEyeOutlinedIcon sx={{ color: "var(--lightpurple)"}} className="toogle" onClick={handleToogle2}/>
                        </>
                    ) : (
                        <>
                            <input type="text" {...register("confirmpassword", { required: true, maxLength: 20 })} />
                            <VisibilityOffOutlinedIcon sx={{ color: "var(--lightpurple)"}} className="toogle"onClick={handleToogle2}/>
                        </>
                    )}
                  {errors.confirmpassword && <span className="error">{errors.confirmpassword?.message}</span>}
                </div>
              </div>

              <div className="servicesContent">
                <span>Ao se registrar, você aceita nossos <a href="">termos de uso</a> e a nossa <a href="">política de privacidade</a>.</span>
              </div>

              <div className="areaImputTwo">
                <div className="avatarArea">
                  <span>Avatar: </span>
                  <img onClick={() => handleAvatar("2")} src={profile1} />
                  <img onClick={() => handleAvatar("3")} src={profile2} />
                  <img onClick={() => handleAvatar("4")} src={profile3} />
                  <img onClick={() => handleAvatar("5")} src={profile4} />
                </div>

                <div className="buttonArea">
                  <input type="submit" value="Enviar" />
                </div>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
      <ToastContainer />
    </Container>
  )
};