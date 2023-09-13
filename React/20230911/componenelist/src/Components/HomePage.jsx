import React, { useState } from 'react';
import Modal from './Modal';

export default function Homepage({ setLogin }) {

  const logoutClick = () => {
    setLogin(false);
  }

  const [modalShow, setModalShow] = useState(true);

  return (
    <main>
      <h1>홈페이지에 오신것을 환영합니다!</h1>
      <button onClick={logoutClick}>로그아웃</button>
      {modalShow && <Modal setModalShow={setModalShow} />}
    </main>
  )
}
