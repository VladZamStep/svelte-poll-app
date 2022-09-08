<script>
    import Title from "../atoms/Title.svelte";
</script>

<header>
    <img src="/images/car-service-1.svg" alt="logo" />
    <img src="/images/car-service-2.svg" alt="logo" />
    <img src="/images/car-service-3.svg" alt="logo" />
    <Title text="Poll App" />
    <img src="/images/car-service-5.svg" alt="logo" />
    <img src="/images/car-service-6.svg" alt="logo" />
    <img src="/images/car-service-7.svg" alt="logo" />
</header>

<style>
    header {
        @apply flex gap-10 justify-center items-center bg-gradient-to-b from-slate-200 to-white p-5;
        border-bottom: 1px solid #e2e8f0;
    }
    img {
        @apply max-w-[50px];
    }
</style>
