import React from 'react'

export default function HomePage({ setLogin }) {

  const logoutClick = () => {
    setLogin(false);
  }

  return (
    <main>
      <h1>홈페이지에 오신것을 환영합니다!</h1>
      <button onClick={logoutClick}>로그아웃</button>
    </main>
  )
}
