import { RecoilRoot } from "recoil";
import { ProfileComponent } from "./components/ProfileComponent";
import { InputInformation } from "./components/InputInformation";
function App() {
  
  return (
    <>
      <RecoilRoot>
        <InputInformation />
        <br></br>
        <ProfileComponent />
      </RecoilRoot>
    </>
  )
}

export default App
