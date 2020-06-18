<template>
  <div class="body">
    <div class="products" id="products">
      <div class="container">
          <h2 class="text-center p-5"><strong>POPULAR BIKES</strong></h2>
          <div class="row">
              
              <div class="col-md-3">
                  <div class="card1 product-item">
                    <img src="/products/dio.png" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h6 class="card-title left">Honda Dio Scooty</h6>
                            <h6 class="left">
                               <strong >Rs.650/day</strong>
                            </h6>
                            <h6 class="left">
                            <small class="left">5 Renters</small>
                            </h6>
                        </div>
                    </div>
              </div>

              <div class="col-md-3">
                  <div class="card1 product-item">
                    <img src="/products/activa.png" class="card-img-top" alt="...">
                        <div class="card-body">
                             <h6 class="card-title left">Honda Activa F700</h6>
                            <h6 class="left">
                               <strong class="left">Rs.600/day</strong>
                            </h6>
                             <h6 class="left">
                            <small class="left">5 Renters</small>
                            </h6>
                        </div>
                    </div>
              </div>

              <div class="col-md-3">
                  <div class="card1 product-item">
                    <img src="/products/bike.png" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h6 class="card-title left">BMW G 310 GS</h6>
                            <h6 class="left">
                               <strong class="left">Rs.3550/day</strong>
                            </h6>
                             <h6 class="left">
                            <small class="left">5 Renters</small>
                            </h6>
                        </div>
                    </div>
              </div>
               <div class="col-md-3">
                  <div class="card1 product-item">
                    <img src="/products/navi.png" class="card-img-top" alt="...">
                        <div class="card-body">
                          <h6 class="card-title left">Honda Navi</h6>
                            <h6 class="left">
                               <strong>Rs.600/day</strong>
                            </h6>
                             <h6 class="left">
                            <small class="left">5 Renters</small>
                            </h6>
                        </div>
                    </div>
              </div>
          </div>
      </div>
      </div>
      <div class="showall">
    <button class="buttona btn btn-outline-primary " type="submit">SeeAll</button>
  </div>
  </div>
</template>

<script>
export default {
  name: "Body",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.body {
    padding-top: 90px;
}
img.card-img-top {
    width: 200px;
}
.card1 {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    /* border: 1px solid rgba(0, 0, 0, 0.125); */
    border-radius: 0.25rem;
}
.row{
      padding: 0px 48px;
}
h6.left {
    text-align: left;
}
 .showall {
      align-items: center;
      flex-direction: column;
      display: flex;
}

button.buttona.btn.btn-outline-primary {
      width: 141px;
      border-radius: 20px;
}
@media (max-width: 996px){

.row {
    flex-direction: column;
    align-items: center;
    
}
.card1[data-v-499b1c5a] {
  
    align-items: center;
}
}

</style>
