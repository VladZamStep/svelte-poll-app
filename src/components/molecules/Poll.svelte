<script lang="ts">
    import type { PollConfig } from "src/common/models/types/PollConfig";

    export let poll: PollConfig;
    $: totalVotes = poll.votesA + poll.votesB;
</script>

<div class="card">
    <div class="poll">
        <h3>{poll.question}</h3>
        <p>Total Votes: {totalVotes}</p>
        <div class="answer">
            <div class="percent percent-a" />
            <span>{poll.answerA} ({poll.votesA})</span>
        </div>
        <div class="answer">
            <div class="percent percent-b" />
            <span>{poll.answerB} ({poll.votesB})</span>
        </div>
    </div>
</div>

<style>
    .card {
        @apply mt-10 p-5 rounded shadow-[0_0px_10px_-2px_rgba(0,0,0,0.4)];
    }
    h3 {
        @apply pl-1 font-bold text-gray-600;
    }
    p {
        @apply pl-1 mt-2 mb-7 text-sm text-gray-400;
    }
    .answer {
        @apply relative bg-slate-100 cursor-pointer my-2;
    }
    .answer:hover {
        @apply opacity-60;
    }
    span {
        @apply inline-block py-2 px-5;
    }
</style>
