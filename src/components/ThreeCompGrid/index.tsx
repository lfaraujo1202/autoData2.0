import type { CardProps } from "../Card/Card";

import bgHome from '../../assets/bg-home.png';
import axios from 'axios';

import { Container } from "./styles";
import { Card } from "../Card";
import { InfoBox } from "../InfoBox";
import { useEffect, useState, useContext } from "react";
import { Skeleton } from "@mui/material";
import { CardProfile } from "../CardProfile";
import { CourseContext } from '../../contexts/CourseContext'

export function ThreeCompGrid() {
    const { course, setCourse } = useContext(CourseContext)
    const [progress, setProgress] = useState<CardProps[]>([]);
    const [currentClass, setcurrentClass] = useState<CardProps[]>([]);
    const [profileData, setProfileData] = useState<any | null>([]);
    const [isLoading, setIsLoading] = useState(false);

    const getCoursesProgress = async () => {
        var userId = sessionStorage.getItem("userId");
        const res = await axios.get(`user/checkId/${userId}`);
        setProgress(res.data.user.progress)
        setIsLoading(true)
        setcurrentClass(res.data.user.currentClass)
        setCourse(res.data.user.progress[Number(res.data.user.currentClass) - 1].classname)
        setProfileData(res.data.user)
    }

    useEffect(() => {
        var userToken = sessionStorage.getItem("userToken");
        getCoursesProgress()
    }, []);

    return (
        <Container bghome={bgHome}>
            <div className="mainContainer">
                <div className="infoBox">
                    <InfoBox classname={profileData.name} />
                </div>
                <div className='asside'>
                    <div className='card1'>
                        <>
                            {isLoading ? (
                                progress.slice(Number(currentClass) - 1, Number(currentClass)).map(props => {
                                    return (
                                        <Card
                                            key={props._id}
                                            title={props.title}
                                            classname={props.classname}
                                            progress={props.progress}
                                            description={props.description}
                                            courseimg={props.courseimg}
                                            buttonName={"CONTINUAR TREINAMENTO"}
                                            textUnderBar={"Quest Level:"}
                                            homeCard={(true)}
                                        />
                                    );
                                })) : (
                                <div className='skeleton'>
                                    <Skeleton variant="circular" width={90} height={90} style={{ marginTop: 0, marginLeft: 0 }} />
                                    <Skeleton variant="text" width={120} height={40} style={{ marginTop: 20, marginLeft: 0 }} />
                                    <Skeleton variant="text" width={60} height={40} style={{ marginTop: 5, marginLeft: 0 }} />
                                    <Skeleton variant="text" width={300} height={40} style={{ marginTop: 5, marginLeft: 0 }} />
                                    <button className='skeletonButton'>CONTINUAR TREINAMENTO</button>
                                </div>
                            )}
                        </>
                    </div>

                    <div className='card2'>
                        <CardProfile
                            classname={profileData.name}
                            progress={profileData.XP + " exp"}
                            description={"Continue assim recruta."}
                            courseimg={profileData.Img}
                            textUnderBar={"Level: " + profileData.level}
                            profilecard={false}
                            lvl={profileData.level}
                            exp={profileData.XP}
                            buttonName={"Mais informações"}
                        />
                    </div>
                </div>
            </div>
        </Container>
    )
}