import { GlobalStytle } from "../styles/global";
import { Dashboard } from "../components/Dashboard";
import { Navbar } from "../components/Navbar";

export function PageDashboard() {
    return (
      <>
        <Navbar /> 
        <Dashboard /> 
        <GlobalStytle />
      </>
    )
  }