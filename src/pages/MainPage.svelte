<script lang="ts">
    import CreatePollForm from "../components/organisms/CreatePollForm.svelte";
    import ButtonsContainer from "../components/molecules/ButtonsContainer.svelte";
    import Footer from "../components/molecules/Footer.svelte";
    import Header from "../components/molecules/Header.svelte";
    import PollList from "../components/molecules/PollList.svelte";
    import type { PollConfig } from "src/common/models/types/PollConfig";

    const textArr = ["Current Polls", "Add New Poll"];
    let activeItem = "Current Polls";
    let polls: PollConfig[] = [
        {
            id: "12345",
            question: "Hello?",
            answerA: "Yeah",
            answerB: "Naaah",
            votesA: 5,
            votesB: 8,
        },
    ];

    const handleTab = (e: CustomEvent) => {
        activeItem = e.detail;
    };

    const addPoll = (e: CustomEvent) => {
        const poll = e.detail;
        polls = [poll, ...polls];
        console.log(polls);
        activeItem = "Current Polls";
    };
</script>

<Header />
<main>
    <ButtonsContainer {textArr} {activeItem} on:change-tab={handleTab} />
    {#if activeItem === "Current Polls"}
        <PollList {polls} />
    {:else if activeItem === "Add New Poll"}
        <CreatePollForm on:add-poll={addPoll} />
    {/if}
</main>
<Footer />

<style>
    main {
        @apply max-w-[960px] my-10 mx-auto;
    }
</style>
