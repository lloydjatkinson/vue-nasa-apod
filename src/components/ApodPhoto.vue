<template>
    <section>
        <h1>NASA Astronomy Photo of the Day</h1>

        <h2 v-if="loading">Loading...</h2>
        <div v-else>
            <img :src="imageUrl">
        </div>
    </section>
</template>

<script>
import { fetchImage } from './apod-client';

export default {
    name: 'ApodPhoto',

    data () {
        return {
            loading: false,
            imageUrl: ''
        };
    },

    async created () {
        this.loading = true;

        const image = await fetchImage();
        this.imageUrl = image.data.url;

        this.loading = false;
    },
}
</script>