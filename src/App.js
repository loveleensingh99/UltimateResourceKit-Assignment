import AccountDetail from "./components/AccountDetail";
import DesktopSidebar from "./components/DesktopSidebar";
import Retirement from "./components/Retirement";

function App() {
  return (
    <>
      <DesktopSidebar />
      <div className="grid grid-cols-7 gap-4">
        <AccountDetail />
        <Retirement />
      </div>
    </>
  );
}

export default App;
