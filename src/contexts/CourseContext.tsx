import { createContext, ReactNode, useState } from "react";

type CourseContextProps = {
    children: ReactNode;
}

type CourseContextType = {
    course: string;
    setCourse: (newState: string) => void;
}

const initialValue = {
    course: "HTML",
    setCourse: () => {}, 
}

export const CourseContext = createContext<CourseContextType>(initialValue);

export const CourseContextProvider = ({children} : CourseContextProps ) => {
    const [course, setCourse] = useState(initialValue.course);

    return (
        <CourseContext.Provider value={{ course, setCourse}}>
            {children}
        </CourseContext.Provider>
    )
}
