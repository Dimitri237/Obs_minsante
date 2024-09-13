<template>
    <div class="container">
        <nav class="navbar navbar-expand-lg">

            <a class="navbar-brand" href="index.html">
                <img style="width: 30px; margin-left: 20px;"
                    src="https://www.minsante.cm/site/sites/default/files/logo-minsante.png" alt="">
                <strong><span>MINSANTE</span></strong>
            </a>
            <input type="checkbox" id="check" v-model="showMobileMenu">
            <label for="check" class="checkbtn">
                <i class="fas fa-bars"></i>
            </label>
            <ul class="navbar-nav2 over">
                <li class="nav-item">
                    <router-link @click="closeMobileMenu" to="/">
                        <a :class="{ active: isActive('accueil') }" @click="setActive('accueil')" href="">Acceuil</a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link @click="closeMobileMenu" to="#">
                        <a :class="{ active: isActive('documentation') }" @click="setActive('documentation')"
                            href="">Documentation</a>
                    </router-link>
                    <ul class="submenu">
                        <li><a href="#"> <router-link @click="closeMobileMenu" to="/OrganigrammePage">Organigramme du
                                    MINESANTE</router-link>
                            </a></li>
                        <li><a href="#"> <router-link @click="closeMobileMenu" to="/StatuGeneral">Statut
                                    general</router-link> </a></li>
                        <li><a href="#"> <router-link @click="closeMobileMenu" to="/LoiTravail">Loi du
                                    travail</router-link> </a></li>
                        <li><a href="#"> <router-link @click="closeMobileMenu" to="/RecceuilTexte">Recceuil de textes
                                    juridiques</router-link></a></li>
                        <li><a href="#"> <router-link @click="closeMobileMenu" to="/StatuParticulier">Statut
                                    particulie</router-link></a>
                        </li>
                        <li><a href="#"> <router-link @click="closeMobileMenu" to="/GuideUtil">Guide de procedure</router-link></a></li>
                    </ul>
                </li>

                <li class="nav-item">
                    <router-link @click="closeMobileMenu" to="#">
                        <a :class="{ active: isActive('actes') }" @click="setActive('actes')" href="">Actes</a>
                    </router-link>
                    <ul class="submenu">
                        <li><a href="#"><router-link @click="closeMobileMenu"
                                    to="/PersonnelPage">Personnel</router-link></a></li>
                        <li><a href="#"><router-link @click="closeMobileMenu"
                                    to="/FormationPage">Formation</router-link></a></li>
                        <li><a href="#"><router-link @click="closeMobileMenu" to="/SoldePage">Solde</router-link></a>
                        </li>
                    </ul>
                </li>
                <li class="nav-item">
                    <router-link @click="closeMobileMenu" to="#">
                        <a :class="{ active: isActive('personnel') }" @click="setActive('personnel')"
                            href="">Personnel</a>
                    </router-link>
                    <ul class="submenu">
                        <li><a href="#"><router-link @click="closeMobileMenu" to="/FormulairePrise">Formulaire de prise
                                    de
                                    service</router-link></a></li>
                        <li><a href="#"><router-link @click="closeMobileMenu" to="/FormulaireReprise">Formulaire de
                                    reprise de
                                    service</router-link></a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <router-link @click="closeMobileMenu" to="#">
                        <a :class="{ active: isActive('formation') }" @click="setActive('formation')"
                            href="">Formation</a>
                    </router-link>
                    <ul class="submenu">
                        <li><a href="#"><router-link @click="closeMobileMenu" to="/OffresPage2">Offres</router-link></a>
                        </li>
                        <li><a href="#"><router-link @click="closeMobileMenu"
                                    to="/ResultatPage">Resultats</router-link></a></li>
                        <li><a href="#"><router-link @click="closeMobileMenu"
                                    to="/OuverturePage">Ouverture</router-link></a></li>
                        <li><a href="#"><router-link @click="closeMobileMenu" to="/FormulaireMiseStage">Formulaire mise
                                    en
                                    stage</router-link></a></li>
                        <li><a href="#"><router-link @click="closeMobileMenu" to="/FormulaireFinStage">Formulaire fin de
                                    stage</router-link></a></li>
                        <li><a href="#"><router-link @click="closeMobileMenu" to="/FormulaireAutoConcours">Formulaire
                                    autorisation de
                                    concours</router-link></a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <router-link @click="closeMobileMenu" to="#">
                        <a :class="{ active: isActive('solde') }" @click="setActive('solde')" href="">Solde</a>
                    </router-link>
                    <ul class="submenu">
                        <li><a href="#"><router-link @click="closeMobileMenu" to="/FormulairePrise2">Formulaire de prise
                                    en charge des
                                    salaires</router-link></a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a :class="{ active: isActive('aquarium') }" @click="setActive('aquarium')"
                        href="https://dossier.minsante.cm/">Aquarium</a>
                </li>
                <li class="nav-item">
                    <router-link @click="closeMobileMenu" to="/FeedbackPage">
                        <a :class="{ active: isActive('Feedback') }" @click="setActive('Feedback')" href="">Feedback</a>
                    </router-link>
                </li>
            </ul>
        </nav>
    </div>

</template>
<script>
export default {
    data() {
        return {
            activeLink: 'accueil',
            menuVisible: false,
            showMobileMenu: false,
        };
    },
    methods: {
        isActive(link) {
            return this.activeLink === link;
        },
        setActive(link) {
            this.activeLink = link;
        },
        afficherMenu() {
            this.menuVisible = !this.menuVisible;
        },
        closeMobileMenu() {
            this.showMobileMenu = false;
        }
    }
};
</script>
<style scoped>
.nav-item a.active {
    color: #007A5E;
    font-weight: bold;
}

.submenu {
    display: none;
    position: absolute;
    margin: 0;
    padding: 0;
    /* margin-top: 15px!important; */
    background-color: rgba(0, 0, 0, 0.7);
    padding: 10px;
}

.submenu li {
    list-style: none;
    font-size: 25px;
    color: white;
}

.submenu li a {
    list-style: none;
    color: white;
}

.submenu li a:hover {
    color: orange;
}


.nav-item a {
    color: var(--p-color);
    font-size: 16px;
    padding: 0;
    transition: all 0.3s;
    width: 100%;
}

.navbar-nav2 {
    width: 50%;
    margin: auto;
    display: flex;
    justify-content: space-between;
}

.container {
    width: 100% !important;

}

.nav-item:hover .submenu {
    display: block;
}

.menu {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    padding: 12px 16px;
}

/*NavBar*/
* {
    padding: 0;
    margin: 0;
    text-decoration: none;
    list-style: none;
    box-sizing: border-box;
}

body {
    font-family: montserrat;
}

nav {
    background: white;
    height: 80px;
    width: 100%;
}

label.logo {
    color: white;
    font-size: 35px;
    line-height: 80px;
    padding: 0 100px;
    font-weight: bold;
}

nav ul {
    float: right;
    margin-right: 20px;
}

nav ul li {
    margin: 0 5px;
}

nav ul li a {
    color: white;
    font-size: 17px;
    padding: 0px 13px;
    border-radius: 3px;
    text-transform: uppercase;
}

a.active,
a:hover {
    transition: .5s;
}

.checkbtn {
    font-size: 30px;
    color: #007A5E;
    float: right;
    line-height: 80px;
    margin-right: 20px;
    cursor: pointer;
    display: none;
}

#check {
    display: none;
}

@media (max-width: 952px) {
    label.logo {
        font-size: 30px;
        padding-left: 50px;
    }

    nav ul li a {
        font-size: 16px;
    }
}

@media (max-width: 858px) {
    .checkbtn {
        display: block;

    }

    .submenu {
        width: 50%;
        margin: auto;
        float: left;
    }

    .over {
        position: fixed;
        width: 100%;
        height: 100vh;
        background: #2c3e50;
        display: block;
        top: 80px;
        left: -100%;
        text-align: center;
        transition: all .5s;
    }

    nav ul li {
        line-height: 20px;
        margin-top: 50px;
        font-size: 30px;
    }

    nav ul li a {
        font-size: 20px;
    }

    a:hover,
    a.active {
        background: none;
        color: #007A5E;
    }

    #check:checked~ul {
        left: 0;
    }
}

section {
    background-size: cover;
    height: calc(100vh - 80px);
}
</style>