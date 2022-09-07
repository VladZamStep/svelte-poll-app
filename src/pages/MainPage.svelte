<script lang="ts">
    import CreatePollForm from "../components/organisms/CreatePollForm.svelte";
    import ButtonsContainer from "../components/molecules/ButtonsContainer.svelte";
    import Footer from "../components/molecules/Footer.svelte";
    import Header from "../components/molecules/Header.svelte";

    const textArr = ["Current Polls", "Add New Poll"];
    let activeItem = "Current Polls";

    const handleTab = (e: CustomEvent) => {
        activeItem = e.detail;
    };
</script>

<Header />
<main>
    <ButtonsContainer {textArr} {activeItem} on:change-tab={handleTab} />
    {#if activeItem === "Current Polls"}
        <p>Poll list component goes here</p>
    {:else if activeItem === "Add New Poll"}
        <CreatePollForm />
    {/if}
</main>
<Footer />

<style>
    main {
        @apply max-w-[960px] my-10 mx-auto;
    }
</style>
