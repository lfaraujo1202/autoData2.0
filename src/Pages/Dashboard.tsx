import { GlobalStytle } from "../styles/global";
import { Header } from "../components/Header";
import { Dashboard } from "../components/Dashboard";

export function PageDashboard() {
    return (
      <>
        <Header /> 
        <Dashboard /> 
        <GlobalStytle />
      </>
    )
  }