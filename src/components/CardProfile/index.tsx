import axios from 'axios';

import type { CardProps } from "./CardProfile";

import { Container } from "./styles";
import { createContext, useState, useEffect } from 'react';
import { Skeleton } from "@mui/material";

export const CourseContext = createContext({} as any)

export function CardProfile({ progress = "0%", classname = "-", description = '-', courseimg = 'profile0', buttonName, textUnderBar, lvl = "1", exp }: CardProps) {
    const [adjustProgress, setAdjustProgress] = useState<any | null>([])
    const [badges, setBadges] = useState<any | null>(null)
    const [isLoading, setIsLoading] = useState(false);
    const lvlprogress = Math.round((Number(exp) - Number(lvl) * 100)).toString() + "%"

    const getBadges = async () => {
        var userId = sessionStorage.getItem("userId");
        const res = await axios.get(`user/checkId/${userId}`);
        const BadgeArray: any = []
        const InfoArray = res.data.user.progress
        InfoArray.map(myFunction)
        setIsLoading(true)
        function myFunction(num: any) {
            BadgeArray.push(num.badge)
        }
        setBadges(BadgeArray)
    }

    useEffect(() => {
        getBadges()
        if ((progress.substring(progress.length - 3)) == "exp") {
            setAdjustProgress(lvlprogress);
        } else {
            setAdjustProgress(progress);
        }
    }, [progress]);

    return (
        <Container progress={adjustProgress} classname={classname}>
            <div className="card">
                <div className="icon">

                    {isLoading ? (
                        <img src={require(`../../assets/${courseimg}.png`)} alt="Avatar" />
                    ) : (
                        <Skeleton variant="circular" width={90} height={90} style={{ marginTop: 0, marginLeft: 15 }} />
                    )}

                </div>
                <h4>{description}</h4>


                {isLoading ? (
                    <h3>{classname}</h3>
                ) : (
                    <h3>Loading...</h3>
                )}


                <span className="currentClassXp"><strong> XP:</strong> {exp} </span>

                {isLoading ? (
                    <span className="progress">{adjustProgress}</span>
                ) : (
                    <span className="progress">Caculando...</span>
                )}

                <div id="myProgress">
                    <div id="myBar">
                    </div>
                </div>

                <div>
                    <div id="badges">
                        <div>
                            {badges && badges.map((props: string) => {
                                if ((props != "") && (props != "-")) {
                                    return (
                                        <img key={props[5]} className="badges" src={require(`../../assets/badge${props[5]}.png`)} alt="Icone de react" />
                                    );
                                }
                            })}
                        </div>
                        {isLoading ? (
                            <span className="currentclass"><strong>{textUnderBar}</strong> </span>
                        ) : (
                            <span className="progress">Caculando...</span>
                        )}
                    </div>
                </div>
            </div>
        </Container>
    );
}