import { Container } from "./styles";
import { Card } from "../Card"
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import type { CardProps } from "../Card/Card";
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export function Dashboard() {
    const [isNewCourseOpen, SetIsNewCourseOpen] = useState(false);
    const [user, setUser] = useState<CardProps[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const getCoursesProgress = async () => {
        var userId = sessionStorage.getItem("userId");
        const res = await axios.get(`https://apiautodata.herokuapp.com/user/checkId/${userId}`);
        setUser(res.data.user.progress)
        setIsLoading(true)
    }

    useEffect(() => {
        getCoursesProgress()
    }, []);
    
    return (
        <Container>
            {isLoading ? (
            <>
            {user.map(props => {
                return (
                    <Card 
                        key={props._id}
                        title={props.title} 
                        classname={props.classname} 
                        progress={props.progress}
                        description={props.description}
                        courseimg={props.courseimg}
                        buttonName={"Iniciar Quest"}
                        textUnderBar={"Quest Level:"}
                    />
                );
            })}
            </>
            ) : (
                <Box sx={{ display: 'flex', justifyContent: "center", marginTop: "100px" }}>
                    <CircularProgress />
                </Box>
            )}
        </Container>
    );
}
