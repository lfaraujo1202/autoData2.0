import { Container } from "./styles";
import { Card } from "../Card"
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import type { CardProps } from "../Card/Card";
import axios from 'axios';
import Modal from 'react-modal';

export function Dashboard() {
    const [isNewCourseOpen, SetIsNewCourseOpen] = useState(false);
    const [user, setUser] = useState<CardProps[]>([]);

    const getCoursesProgress = async () => {
        var userId = sessionStorage.getItem("userId");
        const res = await axios.get(`https://apiautodata.herokuapp.com/user/checkId/${userId}`);
        setUser(res.data.user.progress)
    }

    useEffect(() => {
        getCoursesProgress()
    }, []);
    
    return (
        <Container>
            {user.map(props => {
                return (
                    <>
                        <Card 
                            title={props.title} 
                            classname={props.classname} 
                            progress={props.progress}
                            description={props.description}
                            courseimg={props.courseimg}
                            buttonName={"Iniciar Quest"}
                            textUnderBar={"Quest Level:"}
                        />
                    </>
                );
            })}
        </Container>
    );
}
