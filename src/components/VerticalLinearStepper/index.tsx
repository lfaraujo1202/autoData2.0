import * as React from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import type { CardProps } from "../Card/Card";

import { createTheme, ThemeProvider } from '@mui/material';
import { useState, useEffect } from "react";
import { useContext } from 'react';
import { CourseContext } from '../../contexts/CourseContext'
import { ToastContainer, toast } from 'react-toastify';
import CircularProgress from '@mui/material/CircularProgress';

import 'react-toastify/dist/ReactToastify.css';

const steps = ['Aula 1', 'Aula 2', 'Aula 3', 'Aula 4', 'Aula 5'];

const theme = createTheme({
  palette: {
    mode: "dark",
  }
})

export function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());
  const [user, setUser] = useState<any | null>();
  const [courseId, setCourseId] = useState<CardProps[]>([]);
  const [globalXP, setGlobalXP] = useState<any | null>(0);
  const [globalLvl, setGlobalLvl] = useState<any | null>(1);
  const [isLoading, setIsLoading] = useState(false);

  const course = useContext(CourseContext)
  const notifyadvance = (level: number) => toast("+10 exp - A dificuldade da quest aumentou para o level: " + level);
  const notifylvlup = (level: number) => toast.success("Parabéns, você alcançou o level: " + level);

  const getCoursesProgress = async () => {
    var userId = sessionStorage.getItem("userId");
    const res = await axios.get(`user/checkId/${userId}`);
    setUser(res.data.user)
    setGlobalXP(res.data.user.XP)
    setGlobalLvl(res.data.user.level)
    setIsLoading(true);

    const filteredCourse = res.data.user.progress.filter((activeCycle: any) => {
      return activeCycle.classname === course.course;
    });
    setCourseId(filteredCourse[0]._id)
    setActiveStep((Number((filteredCourse[0].progress).replace("%", ''))) / 20)
  }

  const handleProgress = async (progress: number) => {
    var userId = sessionStorage.getItem("userId");
    const num = progress * 20
    let Progress = num.toString()
    let postProgress = Progress + "%"

    setGlobalXP((state: any) => (Number(state) + 20))

    if (((Number(globalLvl) + 1) * 100) <= globalXP + 20) {
      setGlobalLvl((state: any) => (Number(state) + 1))
    }

    if (globalXP / (Number(globalLvl)) === 100) {
      notifylvlup(globalLvl)
    }

    const handleGlobalCourse = () => {
      switch (course.course) {
        case "HTML":
          return ("1");
        case "CSS3":
          return ("2");
        case "Java Script":
          return ("3");
        case "React":
          return ("4");
        default:
          return ("5");
      }
    }

    const handleBadges = () => {
      if (Number(Progress) / 20 === 5) {
        return (("badge" + handleGlobalCourse()))
      } else {
        return ("-")
      }
    }

    try {
      await axios.patch(`user/update/${userId}/${courseId}`, { progress: postProgress, badge: handleBadges() });
      await axios.patch(`user/update/${userId}`, { currentClass: handleGlobalCourse(), XP: globalXP.toString(), level: globalLvl.toString() });

    } catch (err) {
      console.log("falha do post de progress: ", err)
      window.alert(
        "falha do post de progress"
      );
    };
  }

  useEffect(() => {
    getCoursesProgress()
  }, []);

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    notifyadvance(activeStep + 2)

    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    handleProgress((activeStep + 1))

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    handleProgress(0);
  };

  return (
    <>
      {isLoading ? (
        <ThemeProvider theme={theme}>
          <Box sx={{ width: '40%' }}>
            <Stepper activeStep={activeStep} orientation="vertical">
              {steps.map((label, index) => {
                const stepProps: { completed?: boolean } = {};
                const labelProps: {
                  optional?: React.ReactNode;
                } = {};
                if (isStepSkipped(index)) {
                  stepProps.completed = false;
                }
                return (
                  <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography sx={{ mt: 2, mb: 1 }}>
                  Você alcançou o level máximo dessa quest
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                  <Box sx={{ flex: '1 1 auto' }} />
                  <Button onClick={handleReset}>Resetar</Button>
                </Box>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Typography sx={{ mt: 2, mb: 1 }}>Etapa {activeStep + 1}</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                  <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                  >
                    Voltar
                  </Button>
                  <Box sx={{ flex: '1 1 auto' }} />
                  <Button onClick={handleNext}>
                    {activeStep === steps.length - 1 ? 'Finalizar' : 'Próximo'}
                  </Button>
                  <ToastContainer />
                </Box>
              </React.Fragment>
            )}
          </Box>
        </ThemeProvider>
      ) : (
        <>
          <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
        </>
      )}
    </>
  );
}