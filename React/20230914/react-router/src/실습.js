import { BrowserRouter, Routes, Route, Link, useLocation, Outlet, useParams } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Link to="/"> home </Link>
      <Link to="/product/0"> product </Link>
      <Link to="/cart"> cart </Link>
      <Link to="/user"> user </Link>
      {/* 라우트를 감싸줍니다. */}
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/product/" element={<Products />}/>
        <Route path="/product/:id" element={<Product />}/>
        <Route path="/product/:id/notice" element={<ProductNotice />}/>
        <Route path="/cart" element={<Cart item='food' />}/>
        <Route path="/user/*" element={<Outlet user='licat' />}>
          <Route path="" element={<UserIndex  user='licat' />}/>
          <Route path="coupon/" element={<Coupon user='licat' />}/>
          <Route path="question/" element={<Question user='licat' />}/>
          <Route path="notice/" element={<UserNotice user='licat' />}/>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

function Index(){
  return <h1>홈페이지🙌</h1>
}

function Products(){
	const location = useLocation();
  console.log(location)
  return <h1>상품 페이지!!</h1>
}

function Product(){
	const location = useLocation();
  const {id} = useParams();
  console.log(location)
  console.log(id);
  return <h1>상품[{id}] 를 선택하셨습니다!</h1>
}

function ProductNotice(){
  return <h1>Product Notice!!!</h1>
}

function Cart({item}){
  return <h1>{item} 를 담았습니다!</h1>
}

function UserIndex({user}){
	const location = useLocation();
  console.log(location)
  return <h1>{user} index</h1>
}

function Coupon({user}){
	const location = useLocation();
  console.log(location)
  return <h1>{user} Coupon</h1>
}

function Question({user}){
	const location = useLocation();
  console.log(location)
  return <h1>{user} Question</h1>
}

function UserNotice({user}){
	const location = useLocation();
  console.log(location)
  return <h1>{user} Notice</h1>
}

export default App;