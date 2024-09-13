<template>
    <main style="width: 80%; margin: auto;">
        <header class="site-header section-padding-img site-header-image">
            <div class="hot">
                <div class="row">

                    <div class="col-lg-10 col-12 header-info">
                        <h1 class="titre">
                            <span class="d-block text-primary">Contacter le MINSANTE</span>
                            <span class="d-block text-dark">Nous sommes la pour vous</span>
                        </h1>
                    </div>
                </div>
            </div>

            <img src="https://actucameroun.com/wp-content/uploads/2020/03/manaouda-malachie-1.jpg"
                class="header-image hide img-fluid" alt="">
        </header>

        <section class="contact section-padding">
            <div class="container">
                <div class="row">

                    <div class="col-lg-6 col-12">
                        <h2 class="mb-4 s_titre">Vos <span>informations</span></h2>

                        <form class="contact-form me-lg-5 pe-lg-3" role="form">

                            <div class="form-floating">
                                <input type="text" name="name" id="name" class="form-control" placeholder="Full name"
                                    required>

                                <label for="name">Nom complet</label>
                            </div>

                            <div class="form-floating my-4">
                                <input type="email" name="email" id="email" pattern="[^ @]*@[^ @]*" class="form-control"
                                    placeholder="Email address" required>

                                <label for="email">address Email</label>
                            </div>

                            <div class="form-floating my-4">
                                <input type="subject" name="subject" id="subject" class="form-control"
                                    placeholder="Subject" required>

                                <label for="subject">Sujet</label>
                            </div>

                            <div class="form-floating mb-4">
                                <textarea id="message" name="message" class="form-control"
                                    placeholder="Leave a comment here" required style="height: 160px"></textarea>

                                <label for="message">Parlez nous de votre projet</label>
                            </div>

                            <div class="col-lg-5 col-6">
                                <button type="submit" class="form-control">Envoyer</button>
                            </div>
                        </form>
                    </div>

                    <div class="col-lg-6 col-12 mt-5 ms-auto">
                        <div class="row">
                            <div class="col-6 border-end contact-info">
                                <h6 class="mb-3">Nouveau Business</h6>

                                <a href="mailto:hello@company.com" class="custom-link">
                                    observatoire@cm-minsante-drh.org
                                    <i class="bi-arrow-right ms-2"></i>
                                </a>
                            </div>

                            <div class="col-6 contact-info">
                                <h6 class="mb-3">Main Studio</h6>

                                <a href="mailto:studio@company.com" class="custom-link">
                                    studio@company.com
                                    <i class="bi-arrow-right ms-2"></i>
                                </a>
                            </div>

                            <div class="col-6 border-top border-end contact-info">
                                <h6 class="mb-3">Nos bureaux</h6>

                                <p class="text-muted">Akershusstranda 20, 0150 Oslo, Norway</p>
                            </div>

                            <div class="col-6 border-top contact-info">
                                <h6 class="mb-3">Social</h6>

                                <ul class="social-icon">

                                    <li><a href="#" class="social-icon-link bi-messenger"></a></li>

                                    <li><a href="#" class="social-icon-link bi-youtube"></a></li>

                                    <li><a href="#" class="social-icon-link bi-instagram"></a></li>

                                    <li><a href="#" class="social-icon-link bi-whatsapp"></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </main>
</template>