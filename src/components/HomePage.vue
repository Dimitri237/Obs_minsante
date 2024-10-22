<template>
  <main style="width: 80%; margin: auto;">
    <div class="respond">
      <div class="stext" style="margin: 35px auto;">
        <h1 class="slick-title">ESPLANADE DU MUSÉE NATIONAL PRESENTATION</h1>
        <p class="lead text-white mt-lg-3 mb-lg-5">LE DR MANAOUDA MALACHIE, AUTEUR DE SOLIDARITÉ INTERNATIONALE ET
          DEVOIR DE PAIX, AINSI QUE DE LES 200 PLUS BELLES CITATIONS DE PAUL BIYA, UNE PROCÈDE...</p>
        <a href="#" class="btn custom-btn">En savoir plus</a>
      </div>
    </div>
    <section class="heath" style="margin-top: 120px; display: flex; flex-wrap: wrap; justify-content: space-between;">
      <div class="carousel">
        <div class="carousel-images" :style="{ transform: 'translateX(' + (-currentIndex * 100) + '%)' }">
          <div class="carousel-image" v-for="(image, index) in images" :key="index">
            <img :src="image.src" :alt="image.alt">
          </div>
        </div>
        <div class="carousel-controls">
          <button class="control-btn" @click="prevImage">❮</button>
          <button class="control-btn" @click="nextImage">❯</button>
        </div>
      </div>

    </section>
    <section class="s_menu" style="margin: 200px 0; display: flex; justify-content: space-between; width: 100%;">
      <div class="current">
        <h1>AFFECTATIONS</h1>
        <button @click="route1" class="route">En
          savoir plus</button>
      </div>
      <div class="current">
        <h1>ACTES</h1>
        <button @click="route2" class="route">En
          savoir plus</button>
      </div>
      <div class="current">
        <h1>Concours</h1>
        <button @click="route3" class="route">En
          savoir plus</button>
      </div>
      <div class="current">
        <h1>Aquarium</h1>
        <button @click="route4" class="route">
          <a href="https://dossier.minsante.cm/" style="color: white;">En
            savoir plus</a>
        </button>
      </div>
    </section>
    <section class="front-product" style="margin: 200px 0; display: flex; justify-content: space-between; width: 100%;">
      <div class="container-fluid p-0">
        <div class="row align-items-center">

          <div class="col-lg-6 col-12">
            <img src="https://cvuc-uccc.com/wp-content/uploads/2022/10/WhatsApp-Image-2022-10-27-a-09.43.02.jpg"
              class="img-fluid" alt="">
          </div>

          <div class="col-lg-6 col-12">
            <div class="px-5 py-5 py-lg-0">

              <h2 class="mb-4">Actualite sur les differents <span>Decrets</span></h2>

              <p class="lead mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex inventore, qui repellat
                et laborum quasi deserunt nemo distinctio possimus autem nam magnam perfereit est..</p>

              <a href="products.html" class="custom-link">
                Explorer
                <i class="bi-arrow-right ms-2"></i>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
    <section style="margin: 200px 0; display: flex; justify-content: space-between; width: 100%!important;"
      class="featured-product section-padding">
      <div style="width: 100%!important;">
        <div class="row">

          <div class="col-12 text-center">
            <h2 class="mb-5">Autres actualitees</h2>
          </div>

          <div class="col-lg-4 col-12 mb-3">
            <div class="product-thumb">
              <a href="product-detail.html">
                <img src="https://www.stopblablacam.com/media/k2/items/cache/d31f403383c8f430f078a83aa796eb85_L.jpg"
                  class="img-fluid product-image" alt="">
              </a>

              <!-- <div class="product-top d-flex">
                        <span class="product-alert me-auto">New Arrival</span>

                        <a href="#" class="bi-heart-fill product-icon"></a>
                    </div> -->

              <div class="product-info d-flex">
                <div>
                  <h5 class="product-title mb-0">
                    <a href="product-detail.html" class="product-title-link">HÔPITAL DE DISTRICT DE HINA</a>
                  </h5>

                  <p class="product-p">Visite inopinée du Ministre de la Santé Publique qu'accompagne le Préfet du
                    Mayo-Tsanaga, au service de santé de district de Hina. Le Patron de la...</p>
                </div>

                <!-- <small class="product-price text-muted ms-auto mt-auto mb-5">$25</small> -->
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-12 mb-3">
            <div class="product-thumb">
              <a href="product-detail.html">
                <img src="https://www.stopblablacam.com/media/k2/items/cache/6c75a74b7f466018717add5e69cb93c9_L.jpg"
                  class="img-fluid product-image" alt="">
              </a>

              <!-- <div class="product-top d-flex">
                        <span class="product-alert">Low Price</span>

                        <a href="#" class="bi-heart-fill product-icon ms-auto"></a>
                    </div> -->

              <div class="product-info d-flex">
                <div>
                  <h5 class="product-title mb-0">
                    <a href="product-detail.html" class="product-title-link">BRIEFING DE LA CRTV CET APRÈS MIDI SUR LA
                      CSU.</a>
                  </h5>

                  <p class="product-p">Lort. Maiores consequatur hic alias voluptatibus molestias, laudantium neque iure
                    assumenda odio reiciendis ipsam non accusamus soluta possimus voluptate nostrum placeat amet quam?
                  </p>
                </div>

                <!-- <small class="product-price text-muted ms-auto mt-auto mb-5">$35</small> -->
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-12">
            <div class="product-thumb">
              <a href="product-detail.html">
                <img src="https://www.afro.who.int/sites/default/files/2022-03/For%20Q%26A.jpg"
                  class="img-fluid product-image" alt="">
              </a>

              <div class="product-top d-flex">
                <a href="#" class="bi-heart-fill product-icon ms-auto"></a>
              </div>

              <div class="product-info d-flex">
                <div>
                  <h5 class="product-title mb-0">
                    <a href="product-detail.html" class="product-title-link">LUTTE CONTRE LA TUBERCULOSE </a>
                  </h5>

                  <p class="product-p">Lorem i alias necessitatibus voluptates quae, adipisci placeat reiciendis,
                    perspiciatis blanditiis aliquam omnis est eos error sapiente doloremque praesentium quibusdam
                    ducimus unde facere?</p>
                </div>

                <!-- <small class="product-price text-muted ms-auto mt-auto mb-5">$45</small> -->
              </div>
            </div>
          </div>

          <div class="col-12 text-center">
            <a style="font-size: 20px;" href="products.html" class="view-all">Voir toute l'actualitee</a>
          </div>

        </div>
      </div>
    </section>

  </main>
</template>

<script>
export default {
  name: 'HelloWorld',
  mounted() {
    setInterval(this.nextImage, 5000); // Auto slide every 5 seconds
  },
  data() {
    return {
      currentIndex: 0,
      images: [
        { src: 'https://prod.cdn-medias.jeuneafrique.com/medias/2023/12/05/jad20231205-ass-cameroun-ordre-national-medecins.jpg', alt: 'Image 1' },
        { src: 'https://img.freepik.com/free-photo/medium-shot-doctor-using-disinfectant_23-2148814238.jpg?t=st=1729534657~exp=1729538257~hmac=4f1e6ba8b61717151d225ef9375b71db1faf1e329a95fe0f736ecabe74920274&w=1380', alt: 'Image 2' },
        { src: 'https://img.freepik.com/free-photo/africa-humanitarian-aid-doctor-taking-care-patient_23-2149117843.jpg?ga=GA1.1.712142728.1726075882&semt=ais_hybrid', alt: 'Image 3' },

      ]
    }
  },
  methods: {
    route1() { 
      // this.$router.push('/acceuilPage'); 
      alert('Page non disponible')
    },
    route2() { this.$router.push('/PersonnelPage'); },
    route3() { this.$router.push('/OffresPage2'); },
    // route4(){ this.$router.push('https://dossier.minsante.cm/'); },
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    prevImage() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.route {
  margin-left: 15%;
  margin-top: 70%;
  color: white;
  border: none;
  background-color: #007A5E;
  padding: 10px;
  width: 70%;
}

.carousel {
  position: relative;
  max-width: 100%;
  margin: auto;
  overflow: hidden;
  border: 1px solid #ddd;
}

.carousel-images {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-image {
  min-width: 100%;
  box-sizing: border-box;
}

.carousel img {
  width: 100%;
  height: 90vh;
}

.carousel-controls {
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
}

.control-btn {
  background-color: rgba(255, 255, 255, 0.7);
  border: none;
  cursor: pointer;
  padding: 10px;
  border-radius: 5px;
}

.slick-custom {
  width: 100%;
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

/*overlay*/
.containe {
  position: relative;
  width: 100%;
}

.containe::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9));
}

.containe img {
  display: block;
  width: 100%;
  height: 750px;
}

.text-overlay {
  position: absolute;
  top: 50%;
  left: 40%;
  text-align: left;
  width: 70%;
  transform: translate(-50%, -50%);
  color: #ffffff;
  font-size: 24px;
}

.cont {
  background-color: #007A5E;
}

form {
  width: 90%;
  margin: auto;
}

.inp-f {
  width: 100%;
  display: block;
  margin-top: 50px;
}

.inp-f label {
  font-size: 22px;
  font-family: Montserrat, sans-serif;
}

.inp-f input {
  border: none;
  outline: none;
  width: 100%;
  height: 35px;
}

.btns {
  background-color: white;
  border: none;
  width: 100%;
  margin-top: 70px;
  font-size: 22px;
  color: #007A5E;
  padding: 10px 0;
  font-weight: bold;
}

.inp-f0 {
  font-family: Montserrat, sans-serif;
  width: 50%;
  display: flex;
  justify-content: space-between;
  margin: 20px;
}

.inp-f0 label {
  color: white;
  width: 90%;
  margin-left: 10px;
  font-family: Montserrat, sans-serif;
}

.inp-f0 input {
  color: white;
  width: 10%;
  border: none;
}

.tlt {
  background-color: white;
  padding: 8px 0;
}

.s_menu .current {
  width: 24%;
  height: 400px;
  background-color: #007a5d23;

}

.current h1 {
  text-align: center;
}

.s_menu h1 {
  background-color: #007A5E;
  font-size: 25px;
  text-transform: uppercase;
  color: white;
  padding: 10px 0;
  padding-left: 10px;
  font-weight: 400;
}

.heath .cont {
  width: 35%;
}

.heath .containe {
  width: 100%;
}

.respond {
  display: none;
}

@media (max-width: 680px) {
  .inp-f0 label {
    color: white;
    margin-left: 10px;
    font-family: Montserrat, sans-serif;
    font-size: 13px;

  }

  .inp-f0 {
    width: 70%;
  }

  .respond {
    margin-top: 100px;
    display: block;
  }

  .s_menu {
    display: block !important;
  }

  .s_menu h1 {
    font-size: 15px;
  }

  .s_menu .current {
    width: 100% !important;
    margin-top: 30px;
  }

  .heath .cont,
  .heath .containe {
    width: 100%;
  }

  .heath {
    display: block;
  }

  .containe {
    display: none !important;
  }
}
</style>
