<script lang="ts">
    import CreatePollForm from "../components/organisms/CreatePollForm.svelte";
    import ButtonsContainer from "../components/molecules/ButtonsContainer.svelte";
    import Footer from "../components/molecules/Footer.svelte";
    import Header from "../components/molecules/Header.svelte";
    import PollList from "../components/organisms/PollList.svelte";
    import type { PollConfig } from "src/common/models/types/PollConfig";
    import Container from "../components/atoms/Container.svelte";

    const textArr = ["Current Polls", "Add New Poll"];
    let activeItem = "Current Polls";
    let polls: PollConfig[] = [];

    const handleTab = (e: CustomEvent) => {
        activeItem = e.detail;
    };

    const addPoll = (e: CustomEvent) => {
        const poll = e.detail;
        polls = [poll, ...polls];
        console.log(polls);
        activeItem = "Current Polls";
    };

    const addVote = (e: CustomEvent) => {
        const { option, id } = e.detail;
        let copiedPolls = [...polls];
        let upvotedPoll = copiedPolls.find((poll) => poll.id === id);
        if (option === "a") {
            upvotedPoll.votesA++;
        }
        if (option === "b") {
            upvotedPoll.votesB++;
        }
        polls = copiedPolls;
    };
</script>

<Header />
<Container>
    <ButtonsContainer {textArr} {activeItem} on:change-tab={handleTab} />
    {#if activeItem === "Current Polls"}
        <PollList on:upvote={addVote} />
    {:else if activeItem === "Add New Poll"}
        <CreatePollForm on:add-poll={addPoll} />
    {/if}
</Container>
<Footer />
