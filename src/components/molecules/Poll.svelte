<script lang="ts">
    import type { PollConfig } from "src/common/models/types/PollConfig";
    import { createEventDispatcher } from "svelte";
    import Container from "../atoms/Container.svelte";
    import Label from "../atoms/Label.svelte";
    import Title from "../atoms/Title.svelte";
    import AnswerBlock from "./AnswerBlock.svelte";

    const dispatch = createEventDispatcher();
    export let poll: PollConfig;
    $: totalVotes = poll.votesA + poll.votesB;
    $: percentA = Math.floor((100 / totalVotes) * poll.votesA) || 0;
    $: percentB = Math.floor((100 / totalVotes) * poll.votesB) || 0;

    const handleVote = (option: string, id: string) => {
        dispatch("upvote", { option, id });
    };
</script>

<Container variant="card">
    <Title text={poll.question} variant="question" />
    <Label variant="primary" text="Total Votes: {totalVotes}" />
    <AnswerBlock
        answer={poll.answerA}
        votes={poll.votesA}
        percent={percentA}
        on:click={() => handleVote("a", poll.id)}
    />
    <AnswerBlock
        variant="percent-b"
        answer={poll.answerB}
        votes={poll.votesB}
        percent={percentB}
        on:click={() => handleVote("b", poll.id)}
    />
</Container>
