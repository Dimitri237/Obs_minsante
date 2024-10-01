import { createApp } from 'vue';
import App from './App.vue';
import * as lucideIcons from 'lucide-vue-next';
import { createRouter, createWebHistory } from 'vue-router';
import ActesPage from './components/ActesPage.vue';
import FeedbackPage from './components/FeedbackPage.vue';
import HomePage from './components/HomePage.vue';
import OffresPage from './components/OffresPage.vue';
import OrganigrammePage from './components/sectionsDoc/OrganigrammePage';
import RecceuilTexte from './components/sectionsDoc/RecceuilTexte';
import StatuParticulier from './components/sectionsDoc/StatuParticulier';
import StatuGeneral from './components/sectionsDoc/StatuGeneral';
import LoiTravail from './components/sectionsDoc/LoiTravail';
import GuideUtil from './components/sectionsDoc/GuideUtil';
import ConnexionPage from './components/ConnexionPage.vue';
import RealisationPage from './components/RealisationPage.vue';
import PersonnelPage from './components/sectionActes/PersonnelPage.vue';
import FormationPage from './components/sectionActes/FormationPage.vue';
import SoldePage from './components/sectionActes/SoldePage.vue';
import FormulairePrise from './components/sectionPersonnel/FormulairePrise.vue';
import FormulairePrise2 from './components/sectionSolde/FormulairePrise.vue';
import FormulaireReprise from './components/sectionPersonnel/FormulaireReprise.vue';
import FormulaireAutoConcours from './components/sectionFormation/FormulaireAutoConcours.vue';
import FormulaireFinStage from './components/sectionFormation/FormulaireFinStage.vue';
import FormulaireMiseStage from './components/sectionFormation/FormulaireMiseStage.vue';
import OffresPage2 from './components/sectionFormation/OffresPage.vue';
import OuverturePage from './components/sectionFormation/OuverturePage.vue';
import ResultatPage from './components/sectionFormation/ResultatPage.vue';

const routes = [
    { path: '/ActesPage', component: ActesPage },
    {
        path: '/OrganigrammePage',
        component: OrganigrammePage
    },
    { path: '/RecceuilTexte', component: RecceuilTexte },
    { path: '/OffresPage2', component: OffresPage2 },
    { path: '/OuverturePage', component: OuverturePage },
    { path: '/ResultatPage', component: ResultatPage },
    { path: '/FormulaireAutoConcours', component: FormulaireAutoConcours },
    { path: '/FormulaireFinStage', component: FormulaireFinStage },
    { path: '/FormulaireMiseStage', component: FormulaireMiseStage },
    { path: '/FormulaireReprise', component: FormulaireReprise },
    { path: '/FormulairePrise', component: FormulairePrise },
    { path: '/FormulairePrise2', component: FormulairePrise2 },
    { path: '/PersonnelPage', component: PersonnelPage },
    { path: '/FormationPage', component: FormationPage },
    { path: '/SoldePage', component: SoldePage },
    { path: '/StatuParticulier', component: StatuParticulier },
    { path: '/StatuGeneral', component: StatuGeneral },
    { path: '/LoiTravail', component: LoiTravail },
    { path: '/GuideUtil', component: GuideUtil },
    { path: '/FeedbackPage', component: FeedbackPage },
    { path: '/ConnexionPage', component: ConnexionPage },
    { path: '/', component: HomePage },
    { path: '/OffresPage', component: OffresPage },
    { path: '/RealisationPage', component: RealisationPage },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');

