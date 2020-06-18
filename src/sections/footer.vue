<template>
  <div class="footer">
   <footer class="page-footer font-small unique-color-dark">
    <div class="container text-center text-md-left mt-5">
      <div class="row mt-3">
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 class="text-uppercase font-weight-bold foot"><strong>RENTZ</strong></h6>
          <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;">
          <p class="foot">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, dolores. Minus architecto,
            facere aut labore velit optio reiciendis itaque inventore sunt, nisi sapiente quisquam nostrum voluptatem,
            voluptas non ipsam doloribus.</p>
          <div class="footer-copyright py-3 foot">© 2019 BeenCity,allrights reserved
          </div>
        </div>
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 class="text-uppercase font-weight-bold foot"><small><strong>The Company</strong></small></h6><br>
          <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;">
          <router-link to="/About" class="nav-link foot">About us</router-link>
          <router-link to="/About" class="nav-link foot">Terms & Conditions</router-link>
          <router-link to="/About" class="nav-link foot">Privacy Policy</router-link>
          <router-link to="/About" class="nav-link foot">Admin Portal</router-link>

        </div>
      </div>
    </div>
  </footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
   .footer {
       padding: 364px 20px;
      font-size: 0.6rem;

    }
    footer {
      background: url(/products/footer.png)no-repeat center center/cover;
      position: absolute;
      height: 80%;
      width: 100%;
      z-index: -1;
      opacity: 1;
    }
    .foot {
      color: white;
      font-size: 0.7rem;
    }
</style>
