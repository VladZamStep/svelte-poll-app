<script lang="ts">
    import CreatePollForm from "../components/organisms/CreatePollForm.svelte";
    import ButtonsContainer from "../components/molecules/ButtonsContainer.svelte";
    import Footer from "../components/molecules/Footer.svelte";
    import Header from "../components/molecules/Header.svelte";
    import PollList from "../components/organisms/PollList.svelte";
    import Container from "../components/atoms/Container.svelte";

    const textArr = ["Current Polls", "Add New Poll"];
    let activeItem = "Current Polls";

    const handleTab = (e: CustomEvent) => {
        activeItem = e.detail;
    };

    const addPoll = () => {
        activeItem = "Current Polls";
    };
</script>

<Header />
<Container>
    <ButtonsContainer {textArr} {activeItem} on:change-tab={handleTab} />
    {#if activeItem === "Current Polls"}
        <PollList />
    {:else if activeItem === "Add New Poll"}
        <CreatePollForm on:add-poll={addPoll} />
    {/if}
</Container>
<Footer />
