import { Container } from "./styles";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import {Link} from 'react-router-dom';
import bgSideImg from '../../assets/img-side-form.png';
import arrowIco from '../../assets/arrow.svg';
import avatarIco from '../../assets/avatar.png';
import { motion } from 'framer-motion'

interface IFormInput {
  name: string;
  email: string;
  password: number;
}

export function Register() {
  const notifysuccess = () => toast.success("Acesso criado com sucesso");
  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = data => {
    axios.post(
            'user/create',
            {
                name: data.name,
                email: data.email,
                password: data.password,
                Img: "profile",
                XP: 0,
                level: 0,
                currentClass: "1"
            }
    );
    notifysuccess()
    }

//   console.log(data);
  
  return (
    <Container>
      <div className="containerForm">
        <div className="contentInfo" style={{ backgroundImage:`url(${bgSideImg})`,backgroundRepeat:"no-repeat"}}>     
          <div className="contentText">
            <h3>Lorem ipsum<br/> dolor sit amet.</h3>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi iaculis finibus sapien, ac interdum massa tincidunt ut. </span>
          </div>
          <button type="button" value="Create"><Link to='/login'>Voltar ao login</Link></button>
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
              <h3>Crie seu cadastro</h3>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="temp">
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
                <input {...register("email", { required: true, maxLength: 30 })} />
              </div>

              <div className="temp">
                <div className="passwordArea">
                  <span>Senha:</span>
                  <input {...register("password", { required: true, maxLength: 20 })} />
                </div>

                <div className="repeatArea">
                  <span>Repita sua senha:</span>
                  <input {...register("password", { required: true, maxLength: 20 })} />
                </div>
              </div>

              <div className="servicesContent">
                <span>Ao se registrar, você aceita nossos <a href="">termos de uso</a> e a nossa <a href="">política de privacidade</a>.</span>
              </div>
              
              <div className="tempTwo">
                <div className="avatarArea">
                    <span>Escolha seu avatar</span>
                    <img src={avatarIco} />
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