import { BrowserRouter, Link, Outlet, Route, Routes, useParams, useNavigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        {/* a태그와 Link 차이 */}
        <Link to="/"> 홈 </Link>

        <a href="/cart"> 카트페이지 이동 </a>
        <Link to="/cart"> 장바구니 </Link>

        <Link to="/users"> 프로필 </Link>
        <Link to="/products/"> 오늘의상품 </Link>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/cart" element={<Cart/>}/>
            {/* Outlet은 라우트에서 자식으로 있는 컴포넌트를 꺼내서 보여주는 컴포넌트! */}
            {/* <Route path="/users/*" element={<Outlet/>}> */}
            <Route path="/users/*" element={<Users/>}>
                {/* 이 안에 중첩할 라우트 들이 들어갑니다~! */}
                {/* 여기 주소는 /users */}
                {/* <Route path="" element={<Users/>}/> */}
                {/* /users/coupon */}
                <Route path="coupon" element={<CouponPage/>}/>
                {/* /users/question */}
                <Route path="question" element={<QuestionPage/>}/>
                {/* /users/notice */}
                <Route path="notice" element={<NoticePage/>}/>
            </Route>
            <Route path="/products/" element={<ProductDaily/>}/>
            <Route path="/products/:id" element={<ProductDetailPage/>}/>
            <Route path="/products/:id/notice" element={<ProductDetailNoticePage/>}/>
        </Routes>
        {/* /users로 이동하는 버튼! useNavigate 이용하기. */}
        <Button/>
    </BrowserRouter>
  );
}

function Button() {
  const navigate = useNavigate();
  return <button onClick={()=> navigate("/users")}>유저보기</button>
}

function ProductDetailNoticePage() {
    const {id} = useParams()
    return <h1>{id}번 상품 상세 알림? 페이지</h1>
}

function CouponPage() {
    return <h1>쿠폰</h1>
}

function NoticePage() {
    return <h1>알림</h1>
}

function QuestionPage() {
    return <h1>?</h1>
}

function ProductDetailPage() {
    const {id} = useParams()
    return <h1>{id}번 상품 입니다~!</h1>
}

function ProductDaily() {
    return <h1>오늘이 상품 입니다~!</h1>
}

function Cart() {
    return <h1>카트</h1>
}

function Users() {
    return (
            <div>
                <h1>유저들</h1>
                {/* Outlet은 여기서도 사용가능 */}
                <Outlet/>
            </div>
            )
}

function HomePage() {
    return <h1>홈페이지</h1>
}

export default App;