<template>
  <div class="reviews">
    <h6 class="left padding"><strong>REVIEWS</strong></h6>
  
  <section class="brief3">
    <div class="border2">
     <div>
        <h6 class="para left">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti doloremque quibusdam est
          labore. Odio nisi illum quasi quo neque eveniet, harum, velit ex debitis earum deleniti nobis molestiae dolore
          cumque?<router-link to="/About" class="nav-link"><h6 class=" para left">Read More</h6></router-link></h6>
          
        <h6 class="para left">Shefali Nath</h6>
        <h6 class="para left">4th July,19 at 5.30pm</h6>
      </div>
    </div>
    <div class="border2">
     <div>
        <h6 class="para left">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti doloremque quibusdam est
          labore. Odio nisi illum quasi quo neque eveniet, harum, velit ex debitis earum deleniti nobis molestiae dolore
          cumque?<router-link to="/About" class="nav-link"><h6 class="para left">Read More</h6></router-link></h6>
        <h6 class="para left">Shefali Nath</h6>
        <h6 class="para left">4th July,19 at 5.30pm</h6>
      </div>
    </div>
    <div class="border2">
      <div>
        <h6 class="para left">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti doloremque quibusdam est
          labore. Odio nisi illum quasi quo neque eveniet, harum, velit ex debitis earum deleniti nobis molestiae dolore
          cumque?<router-link to="/About" class="nav-link"><h6 class="para left">Read More</h6></router-link></h6>
        <h6 class="para left">Shefali Nath</h6>
        <h6 class="para left">4th July,19 at 5.30pm</h6>
      </div>
    </div>
  </section>
  </div>
</template>

<script>
export default {
  name: "Reviews",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.reviews {
    padding: 38px 20px;
}
h6.left.padding {
    padding: 20px;
    margin: 20px;
}
section.brief3 {
    display: flex;
    align-items: center;
    justify-content: center;
    
}
.brief3 {
      content: "";
      background: url(/products/path6.png)no-repeat center center/cover;
      position: absolute;
      height: 60%;
      width: 100%;
      z-index: -1;
      opacity: 1;
    }
.border2 {
      padding: 20px;
      border: 1px solid black;
      border-radius: 20px;
      margin: 20px;
      justify-content: center;
      width: 300px;
      background: white;
}
 h6.para {
      font-size: 0.7rem;
    }
   
h6.left {
    text-align: left;
}
 a.nav-link {

      padding: 0;
}
@media (max-width: 676px){
h6.para.left {
    font-size: .5rem;
}
}

</style>
