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
        <section style="width: 100%; margin-bottom: 150px; background-color: transparent;"
            class="team format section-padding">
            <div class="search">
                <input placeholder="Entre votre matricule / Nom" type="text" name="" id=""><i class="fa fa-search"></i>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Prénom</th>
                        <th>Sex</th>
                        <th>Date de soumission</th>
                        <th>Statut</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Dupont</td>
                        <td>Jean</td>
                        <td>Masculin</td>
                        <td>25-09-2024</td>
                        <td style="background-color: #319800; color: white; font-weight: bold; text-align: center;">Approuvé</td>
                    </tr>
                    <tr>
                        <td>Martin</td>
                        <td>Claire</td>
                        <td>Inactif</td>
                        <td>25-09-2024</td>
                        <td style="background-color: rgba(0, 0, 0, 0.4); color: white; font-weight: bold; text-align: center;">En attente</td>
                    </tr>
                    <tr>
                        <td>Moreau</td>
                        <td>Philippe</td>
                        <td>Actif</td>
                        <td>25-09-2024</td>
                        <td style="background-color: #F90000; color: white; font-weight: bold; text-align: center;">Rejetté</td>
                    </tr>
                </tbody>
            </table>
            <!-- <div class="container">
                <h1 class="title">Prise Service</h1>
                <form @submit.prevent="createPriseServiceRepriseService" class="form">
                    <div class="form-group">
                        <label for="id_perso" class="label">Matricule:</label>
                        <input type="text" id="id_perso" v-model="priseServiceRepriseService.id_perso" class="input" />
                    </div>
                    <div class="form-group">
                        <label for="nom_prenom" class="label">Nom Prénom:</label>
                        <input type="text" id="nom_prenom" v-model="priseServiceRepriseService.nom_prenom"
                            class="input" />
                    </div>
                    <div class="form-group">
                        <label for="sex" class="label">Sex:</label>
                        <select id="sex" v-model="priseServiceRepriseService.sex" class="select">
                            <option value="">Select</option>
                            <option value="M">Male</option>
                            <option value="F">Female</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="situation_matri" class="label">Situation Matrimoniale:</label>
                        <input type="text" id="situation_matri" v-model="priseServiceRepriseService.situation_matri"
                            class="input" />
                    </div>
                    <div class="form-group">
                        <label for="region_origine" class="label">Région d'Origine:</label>
                        <input type="text" id="region_origine" v-model="priseServiceRepriseService.region_origine"
                            class="input" />
                    </div>
                    <div class="form-group">
                        <label for="date_naissance" class="label">Date de Naissance:</label>
                        <input type="date" id="date_naissance" v-model="priseServiceRepriseService.date_naissance"
                            class="input" />
                    </div>
                    <div class="form-group">
                        <label for="lieu_naissance" class="label">Lieu de Naissance:</label>
                        <input type="text" id="lieu_naissance" v-model="priseServiceRepriseService.lieu_naissance"
                            class="input" />
                    </div>
                    <div class="form-group">
                        <label for="telephone" class="label">Téléphone:</label>
                        <input type="tel" id="telephone" v-model="priseServiceRepriseService.telephone" class="input" />
                    </div>
                    <div class="form-group">
                        <label for="corp" class="label">Corp:</label>
                        <input type="text" id="corp" v-model="priseServiceRepriseService.corp" class="input" />
                    </div>
                    <div class="form-group">
                        <label for="grade" class="label">Grade:</label>
                        <input type="text" id="grade" v-model="priseServiceRepriseService.grade" class="input" />
                    </div>
                    <div class="form-group">
                        <label for="specialite" class="label">Spécialité:</label>
                        <input type="text" id="specialite" v-model="priseServiceRepriseService.specialite"
                            class="input" />
                    </div>
                    <div class="form-group">
                        <label for="type_recrutement" class="label">Type de Recrutement:</label>
                        <input type="text" id="type_recrutement" v-model="priseServiceRepriseService.type_recrutement"
                            class="input" />
                    </div>
                    <div class="form-group">
                        <label for="justificatif" class="label">Justificatif:</label>
                        <input type="text" id="justificatif" v-model="priseServiceRepriseService.justificatif"
                            class="input" />
                    </div>
                    <div class="form-group">
                        <label for="status" class="label">Status:</label>
                        <input type="text" id="status" v-model="priseServiceRepriseService.status" class="input" />
                    </div>
                    <button type="submit" class="button">Envoyer</button>
                </form>
            </div> -->
        </section>

    </main>
</template>
<script>
import axios from 'axios';
import jsPDF from 'jspdf';
import 'jspdf-autotable'; // Assurez-vous d'installer cette dépendance

export default {
    data() {
        return {
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
                status: ''
            }
        };
    },
    methods: {
        validateForm() {
            return this.priseServiceRepriseService.id_perso && this.priseServiceRepriseService.nom_prenom;
        },
        createPriseServiceRepriseService() {
            if (!this.validateForm()) {
                alert('Veuillez remplir tous les champs requis.');
                return;
            }
            axios.post('http://localhost:3001/priseService_repriseService', this.priseServiceRepriseService)
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
.search{
    margin-bottom: 10px;
    width: 100%;
    display: flex;
}
.search input{
    background-color: #FFFAFA;
    border: 1px solid rgba(0, 0, 0, 0.4);
    border-radius:  5px;
    outline: none;
    height: 25px;
    font-size: 12px;
    width: 30%;
}
.search i{
    background-color: transparent;
    font-size: 20px;
    margin-left: 5px;
    color: rgba(0, 0, 0, 0.4);
}
table {
    width: 100%;
    margin: auto;
    background-color: #D9D9D9;
}

th,
td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #ddd;
    border: 11px solid #D9D9D9;
}

td {
    background-color: #ffffff;
    color: #000000;
    padding: 6px;
    border: 11px solid #D9D9D9;
    /* border-bottom: 10px solid red; */
}

tr {
    background-color: #E4E4E4;
}

td:hover {
    background-color: #f1f1f1;
}

@media (max-width: 600px) {

    th,
    td {
        font-size: 14px;
    }
}

.container {
    max-width: 600px;
    margin: 40px auto;
    background-color: #f9f9f9;
    border: 1px solid #ccc;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.title {
    font-size: 24px;
    margin-bottom: 10px;
}

.form {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.form-group {
    margin-bottom: 20px;
}

.label {
    display: block;
    margin-bottom: 10px;
}

.input,
.select {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
}

.button {
    background-color: #4CAF50;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.button:hover {
    background-color: #3e8e41;
}
</style>