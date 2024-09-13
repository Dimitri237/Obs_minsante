<template>
    <main style="width: 80%; margin: auto;">
        <header class="site-header section-padding-img site-header-image">
            <div class="hot">
                <div class="row">

                    <div class="col-lg-6 col-12 header-info">
                        <h1 class="titre">
                            <span class="d-block text-dark ">Accéder à tous les informations concernant les <span class="text-primary">Formations</span></span>
                            
                        </h1>
                    </div>
                </div>
            </div>

            <img src="https://www.minsante.cm/site/sites/default/files/styles/slider__af_/public/field/image/IMG-20210505-WA0111.jpg?itok=cvCWACkI"
                class="header-image img-fluid" alt="">
        </header>
        <section class="serch1" style="width: 62%; padding: 50px 0; margin: auto">
            <div style="margin: auto; text-align: center;" class="col-12">
                <h2 class="s_titre"><span>Recherche</span></h2>
            </div>
            <div class="searchs" style="width: 70%; display: flex; margin: auto;">
                <select class="search" v-model="selectedRegion">
                    <option value="">Toutes les régions</option>
                    <option class="list" v-for="region in regions" :value="region.libelle" :key="region._id">
                        {{
                            region.libelle }}</option>
                </select>
                <select class="search" v-model="selectedType">
                    <option value="">Tous les types</option>
                    <option class="list" v-for="categorieActe in categorieActes" :value="categorieActe.libelle"
                        :key="categorieActe._id">
                        {{
                            categorieActe.libelle }}</option>
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
        <section class="team section-padding">
            <div class="container">
                <div style=" display: block" class="row">

                    <div style="margin: auto; text-align: center;" class="col-12">
                        <h2 class="mb-5 s_titre"><span>Mise en stage</span> &  <span>Fin de stage</span></h2>
                    </div>
                    <div style="width: 80%; margin: auto;" class="containActs col-lg-4 mb-4 col-12" v-for="acte in filteredActs"
                        v-bind:key="acte.id">
                        <div class="team-thumb d-flex align-items-center">

                            <div class="team-info">
                                <div style="width: 90%;">
                                    <h5 class="mb-0 s_text">{{ acte.nomConcerne }}
                                    </h5>
                                    <strong class="text-muted">{{ acte.titre }}</strong>

                                </div>
                                <button id="downloadButton"
                                    style="background-color: transparent; font-weight: bold; border: none; margin-left: 10%;">
                                    <a class="telechargement" style="color: #007A5E;" v-bind:href="acte.images[0].url"
                                        download><i class="bi bi-cloud-download-fill"></i>Télécharger</a>

                                </button>


                                <!-- Button trigger modal -->
                                <button type="button" class="btn custom-modal-btn" data-bs-toggle="modal"
                                    data-bs-target="#don" @click="showModal(acte.id)">
                                    <a href=""></a>
                                    <i class="bi-plus-circle-fill"></i>
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section style="margin-bottom: 200px;" class="team section-padding">
            <div class="container">
                <div style=" display: block" class="row">

                    <div style="margin: auto; text-align: center;" class="col-12">
                        <h2 class="mb-5 s_titre"><span>communication generale</span></h2>
                    </div>
                    <div style="width: 80%; margin: auto;" class="containActs col-lg-4 mb-4 col-12" v-for="acte in filteredActs"
                        v-bind:key="acte.id">
                        <div class="team-thumb d-flex align-items-center">

                            <div class="team-info">
                                <div style="width: 90%;">
                                    <h5 class="mb-0 s_text">{{ acte.nomConcerne }}
                                    </h5>
                                    <strong class="text-muted">{{ acte.titre }}</strong>

                                </div>
                                <button id="downloadButton"
                                    style="background-color: transparent; font-weight: bold; border: none; margin-left: 10%;">
                                    <a class="telechargement" style="color: #007A5E;" v-bind:href="acte.images[0].url"
                                        download><i class="bi bi-cloud-download-fill"></i>Télécharger</a>

                                </button>


                                <!-- Button trigger modal -->
                                <button type="button" class="btn custom-modal-btn" data-bs-toggle="modal"
                                    data-bs-target="#don" @click="showModal(acte.id)">
                                    <a href=""></a>
                                    <i class="bi-plus-circle-fill"></i>
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
                    <h3 class="modal-title" id="exampleModalLabel">{{ acte.nomConcerne }}</h3>

                    <h6 class="text-muted">{{ acte.poste }}</h6>

                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div class="modal-body">
                    <h5 class="mb-4">{{ acte.titre }}</h5>

                    <div class="row mb-4">
                        <div style="width: 100%;">
                            <p>{{ acte.descript }}</p>
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
            selectedRegion: '',
            selectedType: '',
            acte: '',
            actes: [],
            acts: [],
            loading: false,
            regions: [],
            region: '',
            categorieActes: [],
            categorieActe: '',

        }

    },
    computed: {
        filteredActs() {
            if (!this.selectedRegion) {
                return this.actes;
            }
            console.log(this.acte);
            return this.actes.filter(acte => acte.region === this.selectedRegion);
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
            getDocs(collection(firestore, 'type_actes')).then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    const categorieActe = { _id: doc.id, ...doc.data() };
                    this.categorieActes.push(categorieActe);
                });
            });
            getDocs(collection(db, 'actes_list')).then((querySnapshot) => {
                this.loading = true;
                querySnapshot.forEach((doc) => {
                    this.actes.push({ _id: doc.id, ...doc.data() });
                    this.loading = false;
                });

            });
        } catch (error) {
            console.error('Erreur lors de la récupération des actes :', error);
        }
    },
    methods: {
        // filterActs() {
        //     this.filteredActs = this.actes.filter(acte => {
        //         // Filtrer par région
        //         const regionMatch = this.selectedRegion === 'Toutes' || acte.region === this.selectedRegion;

        //         // Filtrer par type
        //         const typeMatch = this.selectedType === 'Tous' || acte.type === this.selectedType;

        //         // Retourner true si l'acte correspond aux critères de filtrage
        //         return regionMatch && typeMatch;
        //     });
        // },
        showModal(id) {
            const acteRef = doc(db, 'actes_list', id);
            getDoc(acteRef)
                .then((doc) => {
                    if (doc.exists()) {
                        // Assign the retrieved acte to a data property
                        this.acte = { _id: doc.id, ...doc.data() };
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
.telechargement {
    transition: all 0.3s;
}

.telechargement:hover {
    color: rgba(0, 0, 0, 0.575) !important;
}

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
</style>