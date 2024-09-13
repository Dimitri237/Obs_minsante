<template>
    <main>
        <header class="site-header section-padding d-flex justify-content-center align-items-center">
            <div class="container">
                <div class="row">

                    <div class="col-lg-10 col-12">
                        <h1 class="titre">
                            <span class="d-block text-dark">Nous oeuvrons chaque jour pour</span>
                            <span class="d-block text-primary ">la sante de nos populations</span>
                        </h1>
                    </div>
                </div>
            </div>
        </header>
        <section style="width: 62%; padding: 50px 0; margin: auto">
            <div style="margin: auto; text-align: center;" class="col-12">
                <h2 class="s_titre"><span>Recherche</span></h2>
            </div>
            <div class="searchs" style="width: 70%; display: flex; margin: auto;">
                <select  class="search" v-model="selectedRegion">
                    <option  value="">Toutes les régions</option>
                    <option class="list" v-for="region in regions" :value="region.libelle" :key="region._id">
                        {{
                            region.libelle }}</option>
                </select>
                <select  class="search" v-model="selectedType">
                    <option value="">Tous les types</option>
                    <option class="list" v-for="categorieRealisation in categorieRealisations" :value="categorieRealisation.libelle"
                        :key="categorieRealisation._id">
                        {{
                            categorieRealisation.libelle }}</option>
                </select>
                <input placeholder="Saisir des mots cles"  class="search" name="" id="">
                <button class="b_search"><i
                        style="color: white;" class="bi bi-search"></i></button>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="team-list">
                        <!-- <div v-for="acte in filteredActs" :key="acte.id">
                            <h1>{{ acte.id }}</h1>
                        </div> -->
                    </div>
                </div>
            </div>
        </section>
        <section class="team section-padding">
            <div class="container">
                <div style=" display: block" class="row">

                    <div style="margin: auto; text-align: center;" class="col-12">
                        <h2 class="mb-5 s_titre">Infos Generales.</h2>
                    </div>

                    <div style="width: 80%; margin: auto;" class="col-lg-4 mb-4 col-12" v-for="realisation in filteredRealisations"
                        v-bind:key="realisation.id">
                        <div class="team-thumb d-flex align-items-center">

                            <div class="team-info">
                                <div style="width: 90%;">
                                    <h5 class="mb-0 s_text">{{ realisation.nomActeur }}
                                    </h5>
                                    <strong class="text-muted">{{ realisation.titre }}</strong>

                                </div>
                                <button id="downloadButton"
                                    style="background-color: transparent; font-weight: bold; border: none; ;">
                                    <a class="telechargement" style="color: #007A5E;" v-bind:href="realisation.fichier[0].url"
                                        download><i class="bi bi-cloud-download-fill"></i>Télécharger</a>

                                </button>


                                <!-- Button trigger modal -->
                                <button type="button" class="btn custom-modal-btn" data-bs-toggle="modal"
                                    data-bs-target="#don" @click="showModal(realisation.id)">
                                    <a href=""></a>
                                    <i class="bi bi-search"></i>
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="faq section-padding">
            <div class="container">
                <div class="row">

                    <div class="col-lg-8 col-12">


                        <!-- <div class="accordion" id="accordionGeneral">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordionGeneralOne" aria-expanded="true" aria-controls="accordionGeneralOne">
                                        What is this Little Fashion?
                                        </button>
                                    </h2>

                                    <div id="accordionGeneralOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionGeneral">

                                        <div class="accordion-body">
                                            <p class="large-paragraph"><strong>Little Fashion</strong> is free Bootstrap 5 website template for everyone. There are 8 HTML pages included in this template and you can expand more pages as you need.</p>

                                            <p class="large-paragraph">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordionGeneralTwo" aria-expanded="false" aria-controls="accordionGeneralTwo">
                                        What is Tooplate website?
                                        </button>
                                    </h2>

                                    <div id="accordionGeneralTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionGeneral">

                                        <div class="accordion-body">
                                            <p class="large-paragraph"><a href="https://www.tooplate.com/free-templates" target="_blank">Tooplate</a> is a great website to download free HTML website templates for your business or personal use. Tooplate website has been online for almost 8 years now. Thank you for visiting our website.</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordionGeneralThree" aria-expanded="false" aria-controls="accordionGeneralThree">
                                        How do I support your website?
                                        </button>
                                    </h2>

                                    <div id="accordionGeneralThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionGeneral">

                                        <div class="accordion-body">
                                            <p class="large-paragraph">You can support our Tooplate website by sharing it to your friends or colleagues on the web or social media.</p>
                                        </div>
                                    </div>
                                </div>

                            </div> -->

                        <h2 class="mt-5 s_titre">A propos de<span>notre objectif</span></h2>

                        <!-- <div class="accordion" id="accordionProduct">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingFour">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordionProductOne" aria-expanded="true" aria-controls="accordionProductOne">
                                        What is Fashion Design?
                                        </button>
                                    </h2>

                                    <div id="accordionProductOne" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionProduct">

                                        <div class="accordion-body">
                                            <p class="large-paragraph"><strong>Lorem ipsum dolor</strong> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                                            <p class="large-paragraph">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingFive">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordionProductTwo" aria-expanded="false" aria-controls="accordionProductTwo">
                                        How do I use the product?
                                        </button>
                                    </h2>

                                    <div id="accordionProductTwo" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionProduct">

                                        <div class="accordion-body">
                                            <p class="large-paragraph">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                                        </div>
                                    </div>
                                </div>

                            </div> -->

                    </div>

                </div>
            </div>
        </section>

    </main>
    <div class="modal fade" id="don" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content border-0">
                <div class="modal-header flex-column">
                    <h3 class="modal-title" id="exampleModalLabel">{{ realisation.nomActeur }}</h3>

                    <h6 class="text-muted">{{ realisation.poste }}</h6>

                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div class="modal-body">
                    <h5 class="mb-4">{{ realisation.titre }}</h5>

                    <div class="row mb-4">
                        <div style="width: 100%;">
                            <p>{{ realisation.descript }}</p>
                        </div>
                    </div>

                    <ul class="social-icon">
                        <li class="me-3"><strong>Where to find?</strong></li>

                        <li><a href="#" class="social-icon-link bi-youtube"></a></li>

                        <li><a href="#" class="social-icon-link bi-whatsapp"></a></li>

                        <li><a href="#" class="social-icon-link bi-instagram"></a></li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
import { collection, getDocs, getDoc, doc } from 'firebase/firestore';
import { db, firestore } from './firebaseConfig';
export default {
    data() {
        return {
            selectedType:'',
            selectedRegion: '',
            realisation: '',
            realisations: [],
            acts: [],
            loading: false,
            regions: [],
            region: '',
            categorieRealisations: [],
            categorieRealisation: '',

        }

    },
    computed: {
        filteredRealisations() {
            if (!this.selectedRegion) {
                return this.realisations;
            }
            console.log(this.realisation);
            return this.realisations.filter(realisation => realisation.region === this.selectedRegion);
        },

    },
    mounted() {
        try {
            getDocs(collection(firestore, 'regions')).then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    const regions = { _id: doc.id, ...doc.data() };
                    this.regions.push(regions);
                });
            });
            getDocs(collection(firestore, 'type_realisations')).then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    const categorieRealisation = { _id: doc.id, ...doc.data() };
                    this.categorieRealisations.push(categorieRealisation);
                });
            });
            getDocs(collection(db, 'realisations_list')).then((querySnapshot) => {
                this.loading = true;
                querySnapshot.forEach((doc) => {
                    this.realisations.push({ _id: doc.id, ...doc.data() });
                    this.loading = false;
                });

            });
        } catch (error) {
            console.error('Erreur lors de la récupération des rea :', error);
        }
    },
    methods: {
        showModal(id) {
            const realisationRef = doc(db, 'realisations_list', id);
            getDoc(realisationRef)
                .then((doc) => {
                    if (doc.exists()) {
                        // Assign the retrieved realisation to a data property
                        this.realisation = { _id: doc.id, ...doc.data() };
                    } else {
                        console.log('No such document!');
                    }
                })
                .catch((error) => {
                    console.log('Error getting document:', error);
                });
        },

        formatDate(dateString) {
            if (!dateString) {
                return ''; // Retourne une chaîne vide si dateString n'est pas défini
            }

            const date = new Date(dateString);
            if (isNaN(date.getTime())) {
                return ''; // Retourne une chaîne vide si dateString n'est pas une date valide
            }

            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear();

            return `${day}/${month}/${year}`;
        },
    },
}
</script>
<style scoped>
.search{
    border: none;
    outline: none;
    width: 30%;
    border-right: 0.5px solid rgba(0, 0, 0, 0.1);
    padding: 20px ;
}
.searchs{
    box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
}
.b_search{
    background-color: #007A5E;
    width: 10%;
    border: none;
}
.list{
    color: rgba(0, 0, 0, 1);
    border: none;
}
select{
}
</style>