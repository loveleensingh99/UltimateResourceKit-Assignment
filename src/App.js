import AccountDetail from "./components/AccountDetail";
import DesktopSidebar from "./components/DesktopSidebar";
import MobileAppbar from "./components/MobileAppbar";
import Retirement from "./components/Retirement";
import RetirementStrategy from "./components/RetirementStrategy";

function App() {
  return (
    <>
      <DesktopSidebar />
      <MobileAppbar />
      <div className="md:grid md:grid-cols-7 gap-4">
        <AccountDetail />
        <Retirement />
        <RetirementStrategy />
      </div>
    </>
  );
}

export default App;
