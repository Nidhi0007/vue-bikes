<template>
  <div class="hello">
  <div class="backimg">
   <nav class="navbar navbar-expand-lg navbar-light navbar-inner">
    <a class="navbar-brand" href="#">
        <img src="/products/bikelogo.PNG" width="30" height="30" alt="" loading="lazy">&nbsp;<strong class="white">RENTZ</strong>
      </a>
      <a class="navbar-brand" href="#">
        <img src="/products/locationlogo.PNG" width="30" height="30" alt="" loading="lazy"><small class="white"> panjim goa</small>
      </a>
      
 
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link to="/Home" class="nav-link"></router-link>
      </li>
      
   
    </ul>
    <ul class="navbar-nav">
      <li class="nav-item active">
        <router-link to="/Home" class="nav-link"><h6 class="white">DEALS</h6></router-link>
      </li>
      <li class="nav-item">
        <router-link to="/About" class="nav-link"><h6 class="white">REVIEWS</h6></router-link>
      </li>
      <li class="nav-item">
        <router-link to="/About" class="nav-link"><h6 class="white">WELCOME USER</h6></router-link>
      </li>
   
    </ul>
   
  </div>
</nav>
<div class="padding">
<h2 class="center white phone"><strong>Get Bikes And Scooters On Rent</strong></h2>
    <h5 class="center white phone">Anywhere In Goa</h5>
    </div>
</div>
 <div class="form">
    <form class="form-inline1">
      <input class="form-control mr-sm-2" type="search" placeholder="       Search For Bikes" aria-label="Search">
      <button class="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.navbar-inner {
      background: transparent;
}

.backimg{
      content: "";
      background: url(/products/bitmap.png)no-repeat center center/cover;
      position: absolute;
      height: 60%;
      width: 100%;
      z-index: -1;
      opacity: 0.7;
}
.white {
    color: white;
}

.padding {
    padding: 31px;
}
.form {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 200px;
}
.form-inline1 {
    display: flex;
    /* flex-flow: row wrap; */
    align-items: center;
}
form.form-inline1 {
      border: 1px solid black;
      background: white;
      border-radius: 7px;
}

input.form-control.mr-sm-2 {
      width: 278px;
      border: 2px white solid;
      border-radius: 8px;
}
input[type=search]{
      background: url(/products/search.png)no-repeat ;
      padding: 2px;
    /* margin: 2px; */
    margin-top: 5px;
}
button.btn.btn-primary.my-2.my-sm-0 {
      font-size: 0.7rem;
      border: 2px solid;
      border-radius: 20px;
      width: 100px;
}
@media (max-width: 666px){
.phone {
    font-size: 1.5rem;
   
}
form.form-inline1[data-v-688b5e20] {
   
    width: 306px;
}
}
</style>
