const Home = () => {
  return (
    <div className="navbar bg-light">
        <Link to ='/' className ='btn btn-outline-primary me-2' >LogIn</Link>
        <Link to = '/signin' className ='btn btn-outline-secondary me-2'>SignIn</Link>
        <Link to ='/' className ='btn btn-outline-danger me-2' onClick={logOut}>logOut</Link>
    </div>
  )
}
export default Home