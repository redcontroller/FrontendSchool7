import './App.css';
import AppleData from './data.json';
import React, { useState, useEffect } from 'react';
import Apple from './components/Apple';
import NewBtn from './components/NewBtn';
import NewAppleModal from './components/modal/NewAppleModal'

// 초기 json데이터를 이용하여 사과 정보를 가져옵니다.
function parseData(data) {
  const apples = {};

  AppleData.forEach((item) => {
    apples[item.id] = item;
  });

  return apples;
}

function positionApples(apples) {
  Object.values(apples).forEach((apple)=> {
    apple.position = {
      left: apple.offset.x,
      top: apple.offset.y,
    }
  })
}

function App() {

  // 사과들의 상태 정보 관리
  const [apples, setApples] = useState({});
  // 드래그를 통한 이벤트 정보 상태를 관리
  const [dragAppleInfo, setDragAppleInfo] = useState(null);
  // 사과 추가 모달 상태
  const [isAddOpen, setIsAddOpen] = useState(false);

  useEffect(() => {
    const parsedApples = parseData();
    positionApples(parsedApples);
    setApples({...parsedApples});
    console.log(parsedApples);
  }, []);

  // 사과를 제거하는 함수입니다.
  function handleDelete(apple) {
    const tempApples = { ...apples };
    delete tempApples[apple.id];
    setApples(tempApples);
  }

  // 모달 호출함수
  function showModal() {
    setIsAddOpen(true);
  }

  const AppleList = Object.values(apples).map((apple) => {
    return <Apple
    key={apple.id}
    apple={apple}
    // 드래그를 시작하면 트리거
    onDragStart={(dragOffset) => setDragAppleInfo({apple, dragOffset})}
    // 드래그를 끝내면 트리거
    onDragEnd={() => setDragAppleInfo(null)}
    // 더블 클릭했을 때 호출
    onDoubleClick={() => handleDelete(apple)}
    />;
  })

  return (
    <div className="App"
      onMouseMove={(event) => {
        // dragAppleInfo의 값에 변화가 없다면 함수 종료 (사과를 움직이지 않았음)
        if(!dragAppleInfo) {
          return
        }

        // 사과를 움직였다면
        const {apple, dragOffset} = dragAppleInfo;

        // 기존의 사과정보에 새로운 사과 정보를 업데이트 합니다.
        const newApple = {};
        newApple.id = apple.id;
        newApple.sweetness = apple.sweetness;
        newApple.offset = apple.offset;

        // 드래그 했을 때의 요소 위치를 보정한다.
        // 결국, 드래그한 뒤의 사과를 그리기 위한 시작점을 알아내려고 계산하는 것이다.
        newApple.position = {
          top: event.pageY - dragOffset.y,
          left: event.pageX - dragOffset.x
        }

        // 기존의 사과 데이터를 새로운 사과의 데이터로 덮습니다.
        apples[newApple.id] = newApple;

        // state가 바뀌면서 App 컴포넌트가 새롭게 렌더링됩니다.
        setApples({ ...apples });


      }}
    >
    <ul>
      {AppleList}
    </ul>
      <NewBtn onClick={showModal}/>
      {isAddOpen && <NewAppleModal isOpen={isAddOpen} />}
    </div>
  );
}
export default App;
