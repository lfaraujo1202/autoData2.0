import { Container } from "./styles";
import type { CardProps } from "./CardProfile";
import { Link } from "react-router-dom";
import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import avatarImg from "../../assets/avatar.png"

export const CourseContext = createContext({} as any)

export function CardProfile({ progress = "0%", classname = "-", title, description = '-', courseimg = 'content1', buttonName, textUnderBar, profilecard = true, lvl="1", exp}: CardProps) {
    
    const {courseCycle, setCourseCycle} = useContext(CourseContext)
    const [adjustProgress, setAdjustProgress] = useState<any | null>([])
    const [badges, setBadges] = useState<any | null>(null)
    const currentclass = Number(progress.replace("%", ''))/20
    const lvlprogress = Math.round((Number(exp)-Number(lvl)*100)).toString() + "%"   
    
    const getBadges = async () => {
        var userId = sessionStorage.getItem("userId");
        const res = await axios.get(`https://apiautodata.herokuapp.com/user/checkId/${userId}`);
        const BadgeArray : any = []
        const InfoArray = res.data.user.progress
        const newArr = InfoArray.map(myFunction)
        
        function myFunction(num : any) {
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
                    <img src={avatarImg} alt="Avatar"/>
                </div>
                <h4>{description}</h4>
                <h3>{classname}</h3>
                
                {profilecard ? (
                    <span></span>
                ) : (
                    <span className="currentClassXp"><strong> XP:</strong> {exp} </span>
                )}

                <span className="progress">{adjustProgress}</span>

                <div id="myProgress">
                    <div id="myBar">
                    </div>
                </div>
                <div>
                {profilecard ? (
                    <span className="currentclass"><strong>{textUnderBar}</strong> {currentclass} </span>
                ) : (
                    <div id="badges">

                        <div>
                            {badges && badges.map((props : string) => {
                                if ((props != "") && (props != "-")) {
                                return (
                                    <img className="badges" src={require(`../../assets/badge${props[5]}.png`)} alt="Icone de react"/>
                                );
                                }
                            })}
                        </div>
                        <span className="currentclass"><strong>{textUnderBar}</strong> </span>    
                    </div>
                )}
                </div>
                <>
                {profilecard ? ( 
                <Link to={`/watch`}><button onClick={() => {setCourseCycle({classname}.classname)}}>{buttonName}</button></Link>
                ) : (
                    <span></span>
                )} 
                </>
            </div>
        </Container>
    );
}