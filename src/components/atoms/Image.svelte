<script lang="ts">
    export let src: string = "/images/car-service-1.svg";
    export let alt: string = "logo";
</script>

<img {src} {alt} />

<style>
    img {
        @apply max-w-[50px];
    }
</style>
