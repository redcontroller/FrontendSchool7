import React, {useState} from 'react';
import Detail from './Components/Detail';
import Question from './Components/Question';
import Review from './Components/Review';

const ContentsContainer = ({listName}) => {
    if(listName === "detail") {
        return <Detail />
    } else if (listName === 'qa') {
        return <Question />
    } else if (listName === 'review') {
        return <Review />
    }
}

const NavBar = () => {
    const [listName, setListName] = useState("detail");
    function checkId(event) {
        setListName(event.target.id);
    }

    return (
        <>
            <nav>
                <ul>
                    <li id='detail' style={listName === "detail" ? {color: "red"} : {color:"black"}} onClick={checkId}>상세정보</li>
                    <li id='qa' style={listName === "qa" ? {color: "red"} : {color:"black"}} onClick={checkId}>Q&A</li>
                    <li id='review' style={listName === "review" ? {color: "red"} : {color:"black"}} onClick={checkId}>Review</li>
                </ul>
            </nav>
            <ContentsContainer listName={listName}/>
        </>
    )
}

export default function App5() {
  return (
    // && : 첫번째 falsy 값을 반환하거나 혹은 마지막 truthy 값을 반환합니다.
    true && 1 && <NavBar />

    // || : 첫번째 truthy 값을 반환하거나 혹은 마지막 falsy 값을 반환합니다.
    // true || 1 || false || <NavBar />
  )
}
