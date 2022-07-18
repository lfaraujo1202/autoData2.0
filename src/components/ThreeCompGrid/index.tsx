import { Container } from "./styles";
import { Card } from "../Card";
import { InfoBox } from "../InfoBox";
import { useEffect, useState } from "react";
import type { CardProps } from "../Card/Card";
import axios from 'axios';

export function ThreeCompGrid() {

    const [progress, setProgress] = useState<CardProps[]>([]);
    const [currentClass, setcurrentClass] = useState<CardProps[]>([]);
    const [profileData, setProfileData] = useState<any | null>([])

    const getCoursesProgress = async () => {
        var userId = sessionStorage.getItem("userId");
        const res = await axios.get(`http://localhost:3000/user/checkId/${userId}`);
        setProgress(res.data.user.progress)
        setcurrentClass(res.data.user.currentClass)
        setProfileData(res.data.user)
    }

    useEffect(() => {
        getCoursesProgress()
    }, []);

    console.log(Number(currentClass))
    return (
    <Container>
        <div className="infoBox">
        <InfoBox />
        </div>
        <div className = 'asside'>
            <div className = 'card1'>
                {progress.slice(Number(currentClass) - 1, Number(currentClass)).map(props => {
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
            })}
            </div>
            <div className = 'card2'>
                <Card 
                classname={profileData.name} 
                progress= {profileData.XP + " exp"}
                description={"Parabés, você está na reta final do curso"}
                courseimg={"profile"}
                textUnderBar={"Level: " + profileData.level}
                showlvl={false}
                lvl= {profileData.level}
                exp= {profileData.XP}
                buttonName={"Mais informações"}
                />
            </div>
        </div>
    </Container>
    )
}

