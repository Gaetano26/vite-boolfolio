<template>
      <header>
        <nav class="navbar navbar-expand-lg ">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item" v-for="(link, index) in menu" :key="index">
                            <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
                            <router-link :to="{ name: link.routeName }" class="nav-link" active-class="active">
                                {{ link.label }}
                            </router-link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>

export default {
    data () {
        

        return {
            menu: [
                {
                    label: 'Home',
                    routeName: 'home'
                },
                {
                    label: 'Projects',
                    routeName: 'projects'
                },
            
               
            ]
        }
    }
}
</script>

<style lang="scss" scoped>



    .navbar{
        background: linear-gradient(to right, white, #0000FF);
        height: 7vh;
    }

    .active {
        color: yellow;
    }


</style>