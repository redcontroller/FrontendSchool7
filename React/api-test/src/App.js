import LoginPage from "./Components/LoginPage";
import JoinPage from "./Components/JoinPage";
import { useState } from "react";

function App() {
  const [page, setPage] = useState(true);
  const [info, setInfo] = useState();
  const handlePage = () => {
    setPage(prevPage => !prevPage)
  }

const getMyinfo = async () => {
  const token = localStorage.getItem("token");
  console.log(token);
  const reqUrl = "https://api.mandarin.weniv.co.kr/user/myinfo";
  const res = await fetch(reqUrl, {
    method: "GET",
    headers: {
      "Authorization" : `Bearer ${token}`
    }
  })
  const json = await res.json();
  console.log(json);
  setInfo(JSON.stringify(json));
  // setInfo(JSON.stringify(json.user.accountname));
}



  // 로그인 기능!
  return (
    <div>
      <button type="button" onClick={getMyinfo}>내 정보 불러오기</button>
      {info}
      {page ? <LoginPage handlePage={handlePage}/> : <JoinPage handlePage={handlePage}/>}
    </div>
  );
}
export default App;
