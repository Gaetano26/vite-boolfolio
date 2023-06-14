<template>
    <div v-if="posts" class="container">
        <h1>{{ title }}</h1>
        <div  class="row">
            <CardComponent  v-for="(post, index) in posts" :key="post.id" :post="post" />
        </div>
        <nav aria-label="Page navigation example mt-2">
            <ul class="pagination">
                <li class="page-item"><button class="page-link" :class="currentPage === 1 ? 'd-none': ''" @click="getData(currentPage - 1)">Previous</button></li>
                <li class="page-item" v-for="n in lastPage"><button class="page-link" @click="getData(n)">{{ n }}</button>
                </li>
  
                <li class="page-item"><button class="page-link" :class="currentPage === lastPage ? 'd-none': ''" @click="getData(currentPage + 1)">Next</button></li>
            </ul>
        </nav>
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
            title: "Boolfolio",
            posts: [],
            apiUrl: "http://127.0.0.1:8000/api",
            currentPage: 1,
            lastPage: null,
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
            });
        }
    },
    mounted() {
        this.getData();
    },
   
}
  </script>
  
  <style lang="scss" scoped></style>