<template>
    <main style="width: 80%; margin: auto;">
        <header class="site-header section-padding d-flex justify-content-center align-items-center">
            <div class="container">
                <div class="row">

                    <div class="col-lg-10 col-12">
                        <h1 class="titre">
                            <span class="d-block text-dark">Resultats des differents </span>
                            <span class="d-block text-primary ">Concours</span>
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
                <select class="search" v-model="selectedRegion" @change="filterActs">
                    <option value="">Toutes les régions</option>
                    <option class="list" v-for="region in regions" :value="region.libelle" :key="region._id">
                        {{
                            region.libelle }}</option>
                </select>
                <select class="search" v-model="selectedType" @change="filterActs">
                    <option value="">Tous les types</option>
                    <option class="list" v-for="categorieOffre in categorieOffres" :value="categorieOffre.libelle"
                        :key="categorieOffre._id">
                        {{
                            categorieOffre.libelle }}</option>
                </select>
                <input placeholder="Saisir des mots cles" class="search" name="" id="">
                <button class="b_search"><i style="color: white;" class="bi bi-search"></i></button>
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
        <section style="margin-bottom: 150px;" class="team section-padding">
            <div class="container">
                <div style=" display: block" class="row">

                    <div style="margin: auto; text-align: center;" class="col-12">
                        <h2 class="mb-5 s_titre">Infos Generales.</h2>
                    </div>

                    <div style="width: 80%; margin: auto;" class="col-lg-4 mb-4 col-12"
                        v-for="offre in filteredOffres" v-bind:key="offre.id">
                        <div class="team-thumb d-flex align-items-center">

                            <div class="team-info">
                                <div style="width: 90%;">
                                    <h5 class="mb-0 s_text">{{ offre.nomPromotionnaire }}
                                    </h5>
                                    <strong class="text-muted">{{ offre.titre }}</strong>

                                </div>
                                <button id="downloadButton"
                                    style="background-color: transparent; font-weight: bold; border: none; margin-left: 10%;">
                                    <a class="telechargement" style="color: #007A5E;"
                                        v-bind:href="offre.fichier[0].url" download><i
                                            class="bi bi-cloud-download-fill"></i>Télécharger</a>

                                </button>


                                <!-- Button trigger modal -->
                                <button type="button" class="btn custom-modal-btn" data-bs-toggle="modal"
                                    data-bs-target="#don" @click="showModal(offre.id)">
                                    <a href=""></a>
                                    <i class="bi bi-search"></i>
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <div class="modal fade" id="don" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content border-0">
                <div class="modal-header flex-column">
                    <h3 class="modal-title" id="exampleModalLabel">{{ offre.nomPromotionnaire }}</h3>

                    <h6 class="text-muted">{{ offre.poste }}</h6>

                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div class="modal-body">
                    <h5 class="mb-4">{{ offre.titre }}</h5>

                    <div class="row mb-4">
                        <div style="width: 100%;">
                            <p>{{ offre.descript }}</p>
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
            selectedType: '',
            selectedRegion: '',
            offre: '',
            offres: [],
            acts: [],
            loading: false,
            regions: [],
            region: '',
            categorieOffres: [],
            categorieOffre: '',

        }

    },
    computed: {
        filteredOffres() {
            if (!this.selectedRegion) {
                return this.offres;
            }
            console.log(this.offre);
            return this.offres.filter(offre => offre.region === this.selectedRegion);
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
            getDocs(collection(firestore, 'type_offres')).then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    const categorieOffre = { _id: doc.id, ...doc.data() };
                    this.categorieOffres.push(categorieOffre);
                });
            });
            getDocs(collection(db, 'offres_list')).then((querySnapshot) => {
                this.loading = true;
                querySnapshot.forEach((doc) => {
                    this.offres.push({ _id: doc.id, ...doc.data() });
                    this.loading = false;
                });

            });
        } catch (error) {
            console.error('Erreur lors de la récupération des offre :', error);
        }
    },
    methods: {
        showModal(id) {
            const offreRef = doc(db, 'offres_list', id);
            getDoc(offreRef)
                .then((doc) => {
                    if (doc.exists()) {
                        // Assign the retrieved offre to a data property
                        this.offre = { _id: doc.id, ...doc.data() };
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
.search {
    border: none;
    outline: none;
    width: 30%;
    border-right: 0.5px solid rgba(0, 0, 0, 0.1);
    padding: 20px;
}

.searchs {
    box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
}

.b_search {
    background-color: #007A5E;
    width: 10%;
    border: none;
}

.list {
    color: rgba(0, 0, 0, 1);
    border: none;
}

select {}
</style>