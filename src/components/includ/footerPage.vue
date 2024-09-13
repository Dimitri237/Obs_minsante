<template>
    <footer class="site-footer">
        <div class="container">
            <div class="row">

                <div class="col-lg-3 col-10 me-auto mb-4">
                    <h4 class="text-white mb-3"><a href="index.html">MINE</a>SANTE</h4>
                    <p class="copyright-text text-muted mt-lg-5 mb-4 mb-lg-0">Copyright © 2024
                        <strong>MINSANTE</strong>
                    </p>
                    <br>
                    <p class="copyright-text">Designed by <a href="https://www.tooplate.com/"
                            target="_blank">Flysoft</a></p>
                </div>

                <div class="col-lg-5 col-8">
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item">
                            <router-link to="/">
                                <a href="">Acceuil</a>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="#">
                                <a href="">Documentation</a>
                            </router-link>
                        </li>

                        <li class="nav-item">
                            <router-link to="/ActesPage">
                                <a href="">Actes</a>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="#">
                                <a href="">Personnel</a>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="#">
                                <a href="">Formation</a>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/#">
                                <a href="">Solde</a>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <a href="https://dossier.minsante.cm/">Aquarium</a>
                        </li>
                        <li class="nav-item">
                            <router-link to="/FeedbackPage">
                                <a href="">Feedback</a>
                            </router-link>
                        </li>
                    </ul>
                    <!-- <h5 class="text-white mb-3">Sitemap</h5> -->
                    
                </div>

                <div class="col-lg-3 col-4">
                    <h5 class="text-white mb-3">Social</h5>

                    <ul class="social-icon">

                        <li><a href="#" class="social-icon-link bi-youtube"></a></li>

                        <li><a href="#" class="social-icon-link bi-whatsapp"></a></li>

                        <li><a href="#" class="social-icon-link bi-instagram"></a></li>

                        <li><a href="#" class="social-icon-link bi-skype"></a></li>
                    </ul>
                </div>

            </div>
        </div>
    </footer>
</template>
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

.navbar-nav {
    width: 90%;
    display: flex;
    justify-content: space-between;
}

.container {
    width: 100% !important;

}

.nav-item:hover .submenu {
    display: block;
}
</style>