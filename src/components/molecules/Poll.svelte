<script lang="ts">
    import type { PollConfig } from "src/common/models/types/PollConfig";
    import PollStore from "../../stores/PollStore";
    import Button from "../atoms/Button.svelte";
    import Container from "../atoms/Container.svelte";
    import Label from "../atoms/Label.svelte";
    import Title from "../atoms/Title.svelte";
    import AnswerBlock from "./AnswerBlock.svelte";
    import { tweened } from "svelte/motion";

    export let poll: PollConfig;
    $: totalVotes = poll.votesA + poll.votesB;
    $: percentA = Math.floor((100 / totalVotes) * poll.votesA) || 0;
    $: percentB = Math.floor((100 / totalVotes) * poll.votesB) || 0;

    const tweenedA = tweened(0);
    const tweenedB = tweened(0);
    $: tweenedA.set(percentA);
    $: tweenedB.set(percentB);
    // $: console.log($tweenedA, $tweenedB);

    const handleVote = (option: string, id: string) => {
        PollStore.update((currentPolls) => {
            let copiedPolls = [...currentPolls];
            let upvotedPoll = copiedPolls.find((poll) => poll.id === id);
            option === "a" ? upvotedPoll.votesA++ : upvotedPoll.votesB++;
            return copiedPolls;
        });
    };

    const handleDelete = (id: string) => {
        PollStore.update((currentPolls) => {
            return currentPolls.filter((poll) => poll.id !== id);
        });
    };
</script>

<Container variant="card">
    <Title text={poll.question} variant="question" />
    <Label variant="primary" text="Total Votes: {totalVotes}" />
    <AnswerBlock
        answer={poll.answerA}
        votes={poll.votesA}
        percent={$tweenedA}
        on:click={() => handleVote("a", poll.id)}
    />
    <AnswerBlock
        variant="percent-b"
        answer={poll.answerB}
        votes={poll.votesB}
        percent={$tweenedB}
        on:click={() => handleVote("b", poll.id)}
    />
    <Button
        variant="delete"
        text="Delete"
        on:click={() => handleDelete(poll.id)}
    />
</Container>
