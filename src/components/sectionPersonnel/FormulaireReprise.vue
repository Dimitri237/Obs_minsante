<template>
    <main style="width: 80%; margin: auto;">
        <header class="site-header section-padding-img site-header-image">
            <div class="hot">
                <div class="row">

                    <div class="col-lg-6 col-12 header-info">
                        <h1 class="titre">
                            <span class="d-block text-dark ">Formulaire de reprise de <span
                                    class="text-primary">Service</span></span>
                        </h1>
                    </div>
                </div>
            </div>

            <!-- <img src="https://www.investiraucameroun.com/images/news/1708-9252-cameroun-vers-un-deploiement-dans-les-plus-brefs-delais-du-sigipes-ii-qui-permettra-de-toiletter-le-fichier-solde-de-l-etat_L.jpg"
                class="header-image img-fluid" alt=""> -->
        </header>
        <section style="margin-top: 50px!important; width: 53%; margin: auto; margin-bottom: 150px;" class="team format section-padding">
            <div class="container">
                <div style=" display: block" class="row">

                    <div style="margin: auto; text-align: center;" class="col-12">
                        <h2 class="mb-5 s_titre">Fiche de reprise de service</h2>
                    </div>
                    <form action="">
                        <div class="first">
                            <div class="int1">
                                    <label for="">N° Matricule / <span>Serve N°</span></label>
                                    <input type="text" name="" id="">
                            </div>
                            <div class="int1">
                                <label for="">Noms / <span>Names</span></label>
                                <div style="display: flex; justify-content: space-between; width: 100%;">
                                    <input placeholder="Noms" style="width: 48%;" type="text" name="" id="">
                                    <input placeholder="Prenoms" style="width: 48%;" type="text" name="" id="">
                                </div>
                            </div>
                        </div>
                        <div class="form_sub" style="margin: auto; width: 25%;">
                            <input type="submit" value="Soumettre" name="" id="">
                        </div>

                    </form>
                </div>
            </div>
        </section>

    </main>
</template>
<script>
</script>
<style scoped>
.first .int1 label {
    width: 97%;
    font-size: 20px;
    text-align: left;
}

.third {
    margin-top: 30px !important;
    width: 100%;
}

.third span {
    font-style: italic;
    font-weight: 500;
}

.third li {
    display: flex;
    justify-content: space-between;
    width: 100%;
    text-align: left;
    list-style: none;
}

.third label {
    color: rgba(0, 0, 0, 0.842);
    font-weight: bold;
}

.second {
    margin-top: 40px;
}

.second .sec label {
    width: 50%;
    font-size: 16px;
    color: rgba(0, 0, 0, 1);
    text-align: left;
    display: flex;
    justify-content: space-between;
    font-weight: 300;
}

form {
    /* background-color: red; */
    width: 97%;
    margin: auto;
}

.second .sec {
    margin-top: 7px;
    display: flex;
    justify-content: space-between;
}

.second .sec input {
    width: 48%;
    background-color: white;
    border: none;
    border: none;
    border-radius: 5px;
}

input[type="date"] {
    width: 40% !important;
    height: 35px;
    text-align: center;
    background-color: transparent;
    border: 1px solid rgba(0, 0, 0, 0.5);
}

input[type="submit"] {
    border: 1px solid white;
    color: white;
    font-size: 25px;
    padding: 10px;
    margin-top: 30px;
    background-color: transparent;
    width: 100%;
}

input[type="checkbox"] {
    width: 2%;
}


.first .int1 span {
    font-size: 18px;
    font-style: italic;
}

.first .int2 span {
    font-size: 18px;
    font-style: italic;
}

.first .int1 input {
    width: 100%;
    height: 35px;
    margin-top: 5px;
    background-color: transparent;
    border: none;
    background-color: white;
    border-radius: 5px;
    outline: none;
}

.first label {
    font-weight: bold;
}

.first .int1 {
    display: block;
    width: 100%;
}

.first .int2 {
    width: 100%;
}

.first .int2 label {
    width: 100%;
    font-size: 20px;
    text-align: left;
}

.team {
    background-color: #007A5E !important;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}

.int1,
.int2 {
    margin-top: 10px;
}

.play {
    width: 30%;
}
</style>