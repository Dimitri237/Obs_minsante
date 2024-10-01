<template>
    <main style="width: 80%; margin: auto;">
        <header class="site-header section-padding-img">
            <div class="hot">
                <div class="row">

                    <div class="col-lg-6 col-12 header-info">
                        <h1 class="titre">
                            <span class="d-block text-dark ">Formulaire de prise de <span
                                    class="text-primary">Service</span></span>
                        </h1>
                    </div>
                </div>
            </div>
        </header>
        <section
            style="width: 100%; margin-bottom: 150px; padding: 30px; margin-top: 50px; background-color: rgba(0, 0, 0, 0.1);"
            class="team format ">
            <div class="search">
                <input placeholder="Entre votre matricule / Nom" type="text" name="" id=""><button
                    @click="enregistrerPrise" class="prise">Prendre
                    Service</button>
            </div>
            <div class="insideAllA">
                <div v-for="priseService in priseServices" v-bind:key="priseService.id" class="insideAll">
                    <h3><i class="fa fa-user"></i>{{ priseService.nom_prenom }}</h3>
                    <h3>{{ priseService.sex }}</h3>
                    <h3>{{ priseService.specialite }}</h3>
                    <h3>{{ priseService.grade }}</h3>
                    <button>{{ priseService.status }}</button>
                </div>
                <!-- <h4>Cette requete a ete envoyé le 25-09-2024</h4> -->
            </div>
        </section>
    </main>

    <div class="containerLog" v-if="Enregistrement">
        <form @submit.prevent="createPriseServiceRepriseService" class="form">
            <div v-if="currentPart === 1" class="NewAnim">
                <h1 class="title">Fiche de prise de service</h1>

                <div class="headt">
                    <h1>1</h1>
                    <h2 style="width: 40%; height: 5px; background-color: #007A5E; margin-top: 30px;"></h2>
                    <h1 style="background-color: white; color: #007A5E; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);">2
                    </h1>
                </div>
                <div class="group">
                    <div class="form-group">
                        <label for="id_perso" class="label">N° Matricule / Service N°</label>
                        <input type="text" placeholder="N° Matricule / Service N°" id="id_perso"
                            v-model="priseServiceRepriseService.id_perso" class="input" />
                    </div>
                    <div class="form-group">
                        <label for="nom_prenom" class="label">Noms / Names</label>
                        <input type="text" placeholder="Entrez votre nom complet" id="nom_prenom"
                            v-model="priseServiceRepriseService.nom_prenom" class="input" />
                    </div>
                </div>
                <div class="group">
                    <div class="form-group">
                        <label for="sex" class="label">Sex / Gender</label>
                        <select id="sex" v-model="priseServiceRepriseService.sex" class="select">
                            <option value="">Sélectionnez votre sexe</option>
                            <option value="Masculin">Male</option>
                            <option value="Feminin">Female</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="situation_matri" class="label">Status Matrimonial / Marital Status</label>
                        <select id="situation_matri" v-model="priseServiceRepriseService.situation_matri"
                            class="select">
                            <option value="">Quelle est votre situation matrimoniale?</option>
                            <option value="Marié">Marié</option>
                            <option value="Celibataire">Celibataire</option>
                        </select>
                    </div>
                </div>
                <div class="group">
                    <div class="form-group">
                        <label for="region_origine" class="label">Region d’origine / Region of Origin</label>
                        <select id="region_origine" v-model="priseServiceRepriseService.region_origine">
                            <option value="">Quelle est votre région d'origine?</option>
                            <option value="Littoral">Littoral</option>
                            <option value="Centre">Centre</option>
                            <option value="Nord">Nord</option>
                            <option value="Ouest">Ouest</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="date_naissance">Date de naissance / Date of Birth</label>
                        <input type="date" id="date_naissance" v-model="priseServiceRepriseService.date_naissance" />
                    </div>
                </div>
                <div class="group">
                    <div class="form-group">
                        <label for="lieu_naissance" class="label">Lieu de naissance / Place of Birth</label>
                        <input type="text" placeholder="Où êtes-vous né?" id="lieu_naissance"
                            v-model="priseServiceRepriseService.lieu_naissance" class="input" />
                    </div>
                </div>
                <div class="group" style="display: flex; justify-content: space-between;">
                    <div class="form-group" style="display: flex; justify-content: space-between;">
                        <div></div>
                        <button class="button" type="button" @click="nextPart">Suivant</button>
                    </div>
                    <div></div>
                </div>
            </div>

            <!-- Deuxième partie du formulaire -->
            <div v-if="currentPart === 2" class="NewAnim">
                <h1 class="title">Fiche de prise de service</h1>
                <div class="headt">
                    <h1 style="background-color: white; color: #007A5E; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);">1
                    </h1>
                    <h2 style="width: 40%; height: 5px; background-color: #007A5E; margin-top: 30px;"></h2>
                    <h1>2</h1>
                </div>
                <div class="group">
                    <div class="form-group">
                        <label for="telephone" class="label">N° Telephone / Phone Number</label>
                        <input type="tel" placeholder="+237" id="telephone"
                            v-model="priseServiceRepriseService.telephone" class="input" />
                    </div>
                    <div class="form-group">
                        <label for="email" class="label">Adresse-mail / E-mail Address</label>
                        <input type="email" placeholder="Quelle est votre adresse-mail ?" id="email"
                            v-model="priseServiceRepriseService.email" class="input" />
                    </div>
                </div>
                <div class="group">
                    <div class="form-group">
                        <label for="corp" class="label">Corps / Corps</label>
                        <input type="text" placeholder="Quelle est votre corps?" id="corp"
                            v-model="priseServiceRepriseService.corp" class="input" />
                    </div>
                    <div class="form-group">
                        <label for="grade" class="label">Grade / Level</label>
                        <input type="text" placeholder="Quel est votre grade?" id="grade"
                            v-model="priseServiceRepriseService.grade" class="input" />
                    </div>
                </div>
                <div class="group">
                    <div class="form-group">
                        <label for="specialite" class="label">Spécialité / Speciality</label>
                        <input type="text" placeholder="Quelle est votre spécialité?" id="specialite"
                            v-model="priseServiceRepriseService.specialite" class="input" />
                    </div>
                    <div class="form-group">
                        <label for="type_recrutement" class="label">Type de Recrutement:</label>
                        <input type="text" id="type_recrutement" v-model="priseServiceRepriseService.type_recrutement"
                            class="input" />
                    </div>
                </div>
                <div class="group">
                    <div class="form-group">
                        <label for="justificatif" class="label">Justificatif:</label>
                        <input type="text" id="justificatif" v-model="priseServiceRepriseService.justificatif"
                            class="input" />
                    </div>
                </div>
                <div class="group" style="display: flex; justify-content: space-between;">
                    <div class="form-group" style="display: flex; justify-content: space-between;">
                        <button class="button" type="button" @click="prevPart">Precedent</button>

                    </div>
                    <div class="form-group" style="display: flex; justify-content: space-between;">
                        <div></div>
                        <input class="button" type="submit" value="Soumettre">

                    </div>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
import axios from 'axios';
import jsPDF from 'jspdf';
import 'jspdf-autotable'; // Assurez-vous d'installer cette dépendance

export default {
    data() {
        return {
            Enregistrement: false,
            currentPart: 1,
            priseServiceRepriseService: {
                id_perso: '',
                nom_prenom: '',
                sex: '',
                situation_matri: '',
                region_origine: '',
                date_naissance: '',
                lieu_naissance: '',
                telephone: '',
                corp: '',
                grade: '',
                specialite: '',
                type_recrutement: '',
                justificatif: '',
                status: 'En attente'
            },
            priseServices: [],
        };
    },
    mounted() {
        this.getPriseServiceRepriseService();
    },
    methods: {
        nextPart() {
            this.currentPart = 2; // Passe à la deuxième partie
        },
        prevPart() {
            this.currentPart = 1; // Passe à la deuxième partie
        },
        enregistrerPrise() {
            this.Enregistrement = true;
        },
        validateForm() {
            return this.priseServiceRepriseService.id_perso && this.priseServiceRepriseService.nom_prenom;
        },
        async getPriseServiceRepriseService() {
            try {
                const response = await axios.get('https://minsante-api-636b67309a26.herokuapp.com/priseService_repriseService');
                this.priseServices = response.data;
                console.log(this.priseServices);


            } catch (error) {
                console.error('Erreur lors de la récupération des prises de service:', error);
            }
        },
        createPriseServiceRepriseService() {
            if (!this.validateForm()) {
                alert('Veuillez remplir tous les champs requis.');
                return;
            }
            axios.post('https://minsante-api-636b67309a26.herokuapp.com/priseService_repriseService', this.priseServiceRepriseService)
                .then(response => {
                    console.log(response);
                    alert('Prise Service Reprise Service créée avec succès!');
                    this.generatePdf();
                })
                .catch(error => {
                    console.error(error);
                    alert('Erreur lors de la création de la Prise Service Reprise Service');
                });
        },
        generatePdf() {
            const doc = new jsPDF();
            const formData = this.priseServiceRepriseService;

            // Styles du titre
            doc.setFont("Helvetica", "bold");
            doc.setTextColor(0, 122, 94);
            doc.setFontSize(24);
            const title = 'Fiche de Prise de Service';
            const titleWidth = doc.getTextWidth(title);
            doc.text(title, (doc.internal.pageSize.getWidth() / 2) - (titleWidth / 2), 30); // Centre le titre

            // Ligne de séparation
            doc.setDrawColor(0, 122, 94);
            doc.line(10, 35, 200, 35);

            // Mappage des clés à des étiquettes personnalisées
            const labelMapping = {
                nom_prenom: "Nom & Prénom",
                id_perso: "Matricule",
                situation_matri: "Situation Matrimoniale",
                region_origine: "Région d'Origine",
                date_naissance: "Date de Naissance",
                lieu_naissance: "Lieu de Naissance",
                telephone: "Téléphone",
                specialite: "Spécialité",
                type_recrutement: "Type de Recrutement"
                // Ajoutez d'autres mappages selon vos besoins
            };

            // Préparation des données pour le tableau
            const tableData = Object.entries(formData).map(([key, value]) => {
                const label = labelMapping[key] || key.replace(/_/g, ' ').charAt(0).toUpperCase() + key.slice(1);
                return { label, value };
            });

            // Ajouter le tableau
            doc.autoTable({
                head: [['Champ', 'Valeur']],
                body: tableData.map(item => [item.label, item.value]),
                startY: 40,
                theme: 'grid',
                styles: { cellPadding: 2, fontSize: 12, minCellHeight: 5, halign: 'center' },
                headStyles: { fillColor: [0, 122, 94], textColor: [255, 255, 255], fontSize: 14, fontStyle: 'bold' },
                bodyStyles: { fillColor: [255, 255, 255], textColor: [0, 0, 0] },
                alternateRowStyles: { fillColor: [240, 240, 240] },
                margin: { top: 20 },
                columnStyles: { 0: { cellWidth: 81, halign: 'left' }, 1: { cellWidth: 100, halign: 'center' } }
            });

            // Ligne de séparation avant le pied de page
            const footerStartY = doc.autoTable.previous.finalY + 30;
            doc.setDrawColor(0, 122, 94);
            doc.line(10, footerStartY, 200, footerStartY);

            // Ajouter les informations dans le pied de page
            const footerY = footerStartY + 15;
            doc.setFontSize(12);
            doc.setTextColor(0, 0, 0);
            doc.text(`Matricule: ${formData.id_perso}`, 10, footerY + 10);
            doc.text(`Nom & Prénom: ${formData.nom_prenom}`, 10, footerY);
            doc.rect(150, footerY - 3, 40, 40); // Espace pour la photo
            doc.text('photo 4*4', 152, footerY + 10);

            // Ajouter "OBS-MINSANTE" au pied de page
            doc.text('OBS-MINSANTE', (doc.internal.pageSize.getWidth() / 2), footerY + 60, { align: 'center' });

            const pdfBlob = doc.output('blob');
            const url = URL.createObjectURL(pdfBlob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'prise_service_reprise_service.pdf';
            a.click();
        }

    }
};
</script>
<style scoped>
.headt {
    display: flex;
    justify-content: space-between;
    width: 30%;
    margin: auto;
}

.headt h1 {
    background-color: #007A5E;
    color: white;
    border-radius: 50%;
    font-size: 35px;
    width: 60px;
    height: 60px;
    text-align: center;
    padding-top: 10px;
    transition: all 0.3s;
}

.search {
    margin-bottom: 10px;
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.insideAll {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 15px;
    background-color: #fff;
    padding-left: 8px;

}

.insideAll h3 {
    font-weight: 300;
    margin-top: 10px;
    font-size: 15px;
    width: 30%;
}

.insideAll i {
    padding-right: 10px;
}

.insideAll h3:nth-child(1) {
    font-weight: bold;
    color: rgba(0, 0, 0, 0.6);
}

.insideAllA {
    width: 100%;
    display: block;
    background-color: transparent;
    margin-top: 30px;
}

.insideAllA button {
    font-weight: bold;
    font-size: 15px;
    border: none;
    background-color: green;
    color: white;
    width: 15%;
}

.search input {
    background-color: #FFFAFA;
    border: 1px solid rgba(0, 0, 0, 0.4);
    outline: none;
    height: 25px;
    font-size: 12px;
    width: 30%;
}

.search .prise {
    background-color: #007A5E;
    font-size: 17px;
    color: white;
    border: none;
    padding: 10px;
    width: 11%;
}

.insideAllA:hover {
    background-color: #f1f1f1;
}

.containerLog {
    width: 100%;
    z-index: 9999;
    height: 100vh;
    margin: 0;
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    left: 0;
}

.title {
    font-size: 35px;
    color: #187A5F;
    text-align: center;
    padding-bottom: 20px;
}

.NewAnim {
    display: block;
    width: 35%;
    margin: auto;
    justify-content: center;
    background-color: white;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    padding: 3% 0;
    margin-top: 10%;
}

.group {
    display: flex;
    justify-content: space-between;
    width: 85%;
    margin: auto;
    margin-top: 30px;
}

.form-group {
    width: 47%;
    display: block;
}

.form-group label,
.form-group input,
.form-group select {
    width: 100%;
    padding-left: 10px;
}

.form-group label {
    padding-bottom: 4px;
    color: #000000;
}

.form-group input,
.form-group select {
    height: 35px;
    border: 1px solid rgba(0, 0, 0, 0.4);
    border-radius: 5px;
    outline: none;
}

.button {
    border: 1.5px solid #187A5F !important;
    background-color: transparent;
    font-weight: bold;
    color: #187A5F;
    width: 35% !important;
    border-radius: 5px;
}

.button:hover {
    background-color: #3e8e41;
}
</style>