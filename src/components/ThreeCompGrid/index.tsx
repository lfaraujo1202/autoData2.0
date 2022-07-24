import { Container } from "./styles";
import { Card } from "../Card";
import { InfoBox } from "../InfoBox";
import { useEffect, useState } from "react";
import type { CardProps } from "../Card/Card";
import axios from 'axios';
import { Skeleton } from "@mui/material";
import { CardProfile } from "../CardProfile";

export function ThreeCompGrid() {
    
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
        setProfileData(res.data.user)
    }

    useEffect(() => {
        var userToken = sessionStorage.getItem("userToken");
        getCoursesProgress()
    }, []);

    return (
    <Container>
        <div className="mainContainer">
            <div className="infoBox">
            <InfoBox />
            </div>
            <div className = 'asside'>
                <div className = 'card1'>
                    <>

                    {isLoading ? (
                        progress.slice(Number(currentClass) - 1, Number(currentClass)).map(props => {
                            return (
                                <>
                                    <Card 
                                        title={props.title} 
                                        classname={props.classname} 
                                        progress={props.progress}
                                        description={props.description}
                                        courseimg={props.courseimg}
                                        buttonName={"Continuar assistindo"}
                                        textUnderBar={"Quest Level:"}
                                    />
                                </>
                            );
                        })) : (
                            <div className = 'skeleton'>
                                <Skeleton variant="circular" width={90} height={90} style={{ marginTop: 0, marginLeft: 0}}/>
                                <Skeleton variant="text" width={120} height={40} style={{ marginTop: 20, marginLeft: 0}} />
                                <Skeleton variant="text" width={60} height={40} style={{ marginTop: 5, marginLeft: 0}} />
                                <Skeleton variant="text" width={300} height={40} style={{ marginTop: 5, marginLeft: 0}} />
                                <button className = 'skeletonButton'>CONTINUAR ASSISTINDO</button>

                            </div>
                        )}
                </>

                </div>
                <div className = 'card2'>
                    <CardProfile 
                    classname={profileData.name} 
                    progress= {profileData.XP + " exp"}
                    description={"Parabés, você está na reta final do curso"}
                    courseimg={"profile"}
                    textUnderBar={"Level: " + profileData.level}
                    profilecard={false}
                    lvl= {profileData.level}
                    exp= {profileData.XP}
                    buttonName={"Mais informações"}
                    />
                </div>
            </div>
            </div>
    </Container>
    )
}