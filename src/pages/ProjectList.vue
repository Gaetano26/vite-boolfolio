<template>
    <div v-if="!loading" class="container-fluid">
        <h1 class="text-white pt-4">Progetti</h1>
        <div  class="row">
            <CardComponent  v-for="(post, index) in posts" :key="post.id" :post="post" />
        </div>
        <div class="d-flex justify-content-center">
            <nav aria-label="Page navigation example">
                <ul class="pagination mt-5">
                    <li class="page-item"><button class="page-link" :class="currentPage === 1 ? 'd-none': ''" @click="getData(currentPage - 1)">Previous</button></li>
                    <li class="page-item" v-for="n in lastPage"><button  :class="{ 'page-link': true, 'active': currentPage === n }" @click="getData(n)">{{ n }}</button>
                    </li>
    
                    <li class="page-item"><button class="page-link" :class="currentPage === lastPage ? 'd-none': ''" @click="getData(currentPage + 1)">Next</button></li>
                </ul>
            </nav>
        </div>
       
    </div>
    <div v-else>
      <LoaderComponent />

    </div>
  </template>
  
  <script>

  import axios from 'axios';
import CardComponent from '../components/CardComponent.vue';
import LoaderComponent from '../components/LoaderComponent.vue';


  export default {
    name: "ProjectList",
    components: {
       CardComponent,
       LoaderComponent
    },
    data() {
        return {
            posts: [],
            apiUrl: "http://127.0.0.1:8000/api",
            currentPage: 1,
            lastPage: null,
            loading : true
        };
    },
    methods: {
        getData(numPage) {
            axios.get(`${this.apiUrl}/posts`, {
                params: {
                    "page": numPage
                }
            }).then((res) => {
                this.posts = res.data.results.data;
                console.log(this.posts);
                this.currentPage = res.data.results.current_page;
                this.lastPage = res.data.results.last_page;
                 this.loading = false;
            });
           
        }
    },
    mounted() {
        this.getData();
    },
   
}
  </script>
  
  <style lang="scss" scoped>

.container-fluid {
    
    background-image: url("/public/image/oen-source-cybersecurity.png");
    background-size: cover;
    background-position: center;
    height: 93vh;
}

nav {
    text-align: center;
}
</style>