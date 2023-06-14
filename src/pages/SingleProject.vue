<template>
    <div v-if="!loading">
       <h1>{{ project.title }}</h1>
       <img class="w-50" :src="project.image" :alt="project.title">
       <p  v-html="project.body"></p>
       <h3>{{ project.category.name }}</h3>
        <div class="d-flex gap-3">
            <p v-for=" tag in project.tags"  class="badge rounded-pill text-bg-primary py-2 px-2 mt-2">{{ tag.name }}</p>
        </div>
    </div>
    <div v-else>
        <LoaderComponent />
    </div>
</template>

<script>
import axios from 'axios';
import LoaderComponent from '../components/LoaderComponent.vue';
export default {
    components: {
       LoaderComponent
    },
    data () {
        

        return {
            loading: true,
            apiUrl: 'http://127.0.0.1:8000/api',
        }
    },
    methods: {
         getProject() {
            axios.get(`${this.apiUrl}/posts/${this.$route.params.slug}`).then((res)=>{
              if(res.data.success){
                this.project = res.data.results;
                this.loading = false;
              }else{
                 this.$router.push({name: 'not-found'})
              }
            })
         }
    },
    mounted() {
        this.getProject();
    }
}
</script>

<style lang="scss" scoped>

</style>