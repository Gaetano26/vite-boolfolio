<template>
      <div class="col mt-5">
                <div class="card show">
                    <div class="card-title ps-3 mt-2">
                        <h3>{{ post.title}}</h3>
                    </div>
                    <div class="card-img-top">
                        <img :src="post.image" :alt="post.title" class="img-fluid">
                    </div>
                    <div class="card-body">
                        <h6>category: {{ post.category.name }}</h6>
                        
                        <router-link :to="{name: 'project', params:{slug: post.slug}}" class="btn btn-info">Dettagli</router-link>
                    </div>
                </div>
            </div>
</template>

<script>
export default {
    name: 'CardComponent',
    props: ['post'],
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>