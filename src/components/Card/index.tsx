import { Container } from "./styles";
import type { CardProps } from "./Card";
import { Link } from "react-router-dom";
import { createContext, useContext, useState, useEffect } from 'react';

export const CourseContext = createContext({} as any)

export function Card({ progress = "0%", classname = "-", title, description = '-', courseimg = 'content1', buttonName, textUnderBar, showlvl = true, lvl="1", exp}: CardProps) {
    
    const {courseCycle, setCourseCycle} = useContext(CourseContext)
    const currentclass = Number(progress.replace("%", ''))/20
    
    const lvlprogress = Math.round((Number(exp)-Number(lvl)*100)).toString() + "%"
    const [adjustProgress, setAdjustProgress] = useState<any | null>([])

    useEffect(() => {
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
                    <img src={require(`../../assets/${courseimg}.png`)} alt="Icone de react"/>
                </div>
                <h4>{description}</h4>
                <h3>{classname}</h3>
                
                {showlvl ? (
                    <span></span>
                ) : (
                    <span className="currentclass"><strong> xp: {exp}</strong> </span>
                )}

                <span className="progress">{adjustProgress}</span>


                <div id="myProgress">
                    <div id="myBar">
                    </div>
                </div>
                <div>
                {showlvl ? (
                    <span className="currentclass"><strong>{textUnderBar}</strong> {currentclass} </span>
                ) : (
                    <span className="currentclass"><strong>{textUnderBar}</strong> </span>
                )}
                </div>    
                <Link to={`/watch`}><button onClick={() => {setCourseCycle({classname}.classname)}}>{buttonName}</button></Link>
            </div>
        </Container>
    );
}