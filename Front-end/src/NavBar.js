function NavBar(){
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">

  <a class="navbar-brand" href=""></a>
  <img src="https://i.pinimg.com/564x/4e/97/5c/4e975c7e3c4b15fb3b067d68ed905034.jpg" width="50"></img>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only"></span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Deals</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Contact Us</a>
      </li>
    </ul>
  </div>
</nav>
    )

    

}

export default NavBar