import { Container } from "./styles";
import { useForm, SubmitHandler } from "react-hook-form";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

interface IFormInput {
  name: string;
  email: string;
  password: number;
}

export function Register() {
  const notifysuccess = () => toast.success("Acesso criado com sucesso");
  const history = useHistory();
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
  
  const handleBack = async () => {
    history.push("/");
  }

  return (
    <Container>
    <main>
        <form onSubmit={handleSubmit(onSubmit)}>
        <span>Nome:</span>
        <input {...register("name", { required: true, maxLength: 20 })} />
        <span>E-mail:</span>
        <input {...register("email", { required: true, maxLength: 30 })} />
        <span>Senha:</span>
        <input {...register("password", { required: true, maxLength: 20 })} />
        <input type="submit" />
        <button type="button" value="Create" onClick={handleBack}>Novo Usuário</button>
        </form>
    </main>
    <ToastContainer />
    </Container>
  )};