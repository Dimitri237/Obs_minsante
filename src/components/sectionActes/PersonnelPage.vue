<template>
    <main style="width: 80%; margin: auto;">
        <header class="site-header section-padding-img site-header-image">
            <div class="hot">
                <div class="row">

                    <div class="col-lg-6 col-12 header-info">
                        <h1 class="titre">
                            <span class="d-block text-dark ">Accéder à tous les informations concernant le <span
                                    class="text-primary">personnel</span></span>

                        </h1>
                    </div>
                </div>
            </div>

            <img src="https://www.minsante.cm/site/sites/default/files/styles/slider__af_/public/field/image/Retouche%20de%20photos_UaLk0J_1.png?itok=RmuWkAFU"
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
        <section style="margin-bottom: 200px;" class="team section-padding">
            <div class="container">
                <div style=" display: block" class="row">
                    <div style="margin: auto; text-align: center;" class="col-12">
                        <h2 class="mb-5 s_titre">Les <span>affectations</span> & <span>nominations</span></h2>
                    </div>
                    <div style="width: 80%; margin: auto;" class="containActs col-lg-4 mb-4 col-12"
                        v-for="acte in actes" v-bind:key="acte.id">
                        <div class="team-thumb d-flex align-items-center">
                            <div class="team-info">
                                <div style="width: 90%;">
                                    <h5 class="mb-0 s_text">{{ acte.categorie }} numero <span style="color: red;">{{
                                        acte.numero }}</span> portante {{ acte.type }}</h5>
                                    <h5 style="color: rgba(0, 0, 0, 0.5);" class="mb-0 s_text">Signe par <span
                                            style="color: #007A5E;">{{ acte.signataire }}</span></h5>
                                </div>
                                <button id="downloadButton"
                                    style="background-color: transparent; font-weight: bold; border: none; margin-left: 10%;"
                                    @click="downloadPDF(acte.id)">
                                    <i class="bi bi-cloud-download-fill"></i>Télécharger
                                </button>
                                <!-- Button trigger modal -->
                                <button type="button" class="btn custom-modal-btn" data-bs-toggle="modal"
                                    data-bs-target="#don" @click="showModal(acte)">
                                    <i class="bi bi-plus-circle-fill"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <div class="modal fade" id="don" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="modalLabel">{{ selectedActe.categorie }} Détails</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p><strong>Le:</strong> {{ selectedActe.create_at }}</p>
                    <p><strong>Numéro:</strong> {{ selectedActe.numero }}</p>
                    <p><strong>Titre:</strong> {{ selectedActe.titre }}</p>
                    <p><strong>Type:</strong> {{ selectedActe.type }}</p>
                    <p><strong>signe le:</strong> {{ selectedActe.signature_date }}</p>
                    <p><strong>Signataire:</strong> {{ selectedActe.signataire }}</p>
                    <p><strong>Description:</strong> {{ selectedActe.description }}</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            actes: [],
            modalVisible: false,
            selectedActe: {},
        }

    },
    computed: {
    },
    mounted() {
        this.getActes();
    },
    methods: {
        async getActes() {
            try {
                const response = await axios.get('http://localhost:3001/actes');
                this.actes = response.data;
                console.log(this.actes);


            } catch (error) {
                console.error('Erreur lors de la récupération des actes:', error);
            }
        },
        showModal(acte) {
            this.selectedActe = acte; // Met à jour l'acte sélectionné
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
        async downloadPDF(id) {
            console.log('ID de l\'acte:', id); // Vérifiez que l'ID est correct
            try {
                // Appel API pour obtenir le PDF
                const pdfResponse = await axios.get(`http://localhost:3001/api/pdf/${id}`, {
                    responseType: 'blob',
                });

                // Utilisez le nom de fichier défini par le backend
                const contentDisposition = pdfResponse.headers['content-disposition'];
                const fileName = contentDisposition
                    ? contentDisposition.split('filename=')[1].replace(/"/g, '') // Récupérez le nom du fichier
                    : `${id}.pdf`; // Valeur par défaut si pas de nom

                const url = window.URL.createObjectURL(new Blob([pdfResponse.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', fileName); // Utilisez le nom du fichier du backend
                document.body.appendChild(link);
                link.click();
                link.remove();
            } catch (error) {
                console.error('Erreur lors du téléchargement du PDF', error);
            }
        }
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