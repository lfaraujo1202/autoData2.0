import { Container } from "./styles";
import { useForm, SubmitHandler } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import axios from "axios";
import profile from "../../assets/profile.png"
import profile2 from "../../assets/profile2.png"
import profile3 from "../../assets/profile3.png"
import profile4 from "../../assets/profile4.png"

import bgSideImg from '../../assets/img-side-form.png';
import arrowIco from '../../assets/arrow.svg';

interface IFormInput {
  name: string;
  email: string;
  password: number;
}

export function Register() {
  const notifysuccess = () => toast.success("Acesso criado com sucesso");
  const notifywrongpass = () => toast.error("Falha ao criar usuário!");
  const { register, handleSubmit } = useForm<IFormInput>();
  const navigate = useNavigate();
  const[avatar, SetAvatar] = useState("1");

  const handleAvatar = async (avatar : string) => {
      SetAvatar(avatar)
  }

  const onSubmit: SubmitHandler<IFormInput> = async data => {
      try {
      const post = await axios.post(
              'user/create',
              {
                  name: data.name,
                  email: data.email,
                  password: data.password,
                  Img: "profile" + (Number(avatar)-1),
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

//   console.log(data);
  
  return (
    <Container avatar={avatar}>
      <div className="containerForm">
        <div className="contentInfo" style={{ backgroundImage:`url(${bgSideImg})`,backgroundRepeat:"no-repeat"}}>     
          <div className="contentText">
            <h3>Embarque nessa jornada!<br/> Sua nave está aguardando!</h3>
            <span>Acesse a plataforma de embarque com as suas credenciais. Se ainda não tiver uma credencial, aliste-se imediatamente.</span>
          </div>
          <button type="button" value="Create"><Link to='/login'>Voltar para o Embarque</Link></button>
          <img src={arrowIco}/>
        </div>

        <motion.div className="formContent"
            initial={{transform: "rotateY(0deg)"}}
            animate={{transform: "rotateY(0deg)"}}
            transition={{ type: 'Inertia' }}
            exit={{transform: "rotateY(-90deg)"}}
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
                </div>

                <div className="nickArea">
                  <span>Seu nick:</span>
                  <input {...register("name", { required: true, maxLength: 20 })} />
                </div>
              </div>

              <div className="emailArea">
                <span>E-mail:</span>
                <input type="email"{...register("email", { required: true, maxLength: 30 })} />
              </div>

              <div className="areaImputOne">
                <div className="passwordArea">
                  <span>Senha:</span>
                  <input type="password" {...register("password", { required: true, maxLength: 20 })} />
                </div>

                <div className="repeatArea">
                  <span>Repita sua senha:</span>
                  <input type="password" {...register("password", { required: true, maxLength: 20 })} />
                </div>
              </div>

              <div className="servicesContent">
                <span>Ao se registrar, você aceita nossos <a href="">termos de uso</a> e a nossa <a href="">política de privacidade</a>.</span>
              </div>
              
              <div className="areaImputTwo">
                <div className="avatarArea">
                    <span>Avatar: </span>
                    <img onClick={() => handleAvatar("2")} src={profile} />
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
  )};