<script lang="ts">
    import { fade, slide, scale } from "svelte/transition";
    import PollStore from "../../stores/PollStore";
    import Button from "../atoms/Button.svelte";
    import { v4 as uuidv4 } from "uuid";
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    let fields = {
        question: "",
        answerA: "",
        answerB: "",
    };
    let valid: boolean = false;
    let errors = {
        question: "",
        answerA: "",
        answerB: "",
    };

    const handleSubmit = () => {
        valid = true;
        if (fields.question.trim().length < 5) {
            valid = false;
            errors.question = "Question must be at least 5 characters long";
        } else {
            errors.question = "";
        }
        if (fields.answerA.trim().length < 1) {
            valid = false;
            errors.answerA = "Answer A cannot be empty";
        } else {
            errors.answerA = "";
        }
        if (fields.answerB.trim().length < 1) {
            valid = false;
            errors.answerB = "Answer B cannot be empty";
        } else {
            errors.answerB = "";
        }
        if (valid) {
            const newPoll = {
                ...fields,
                votesA: 0,
                votesB: 0,
                id: uuidv4(),
            };
            PollStore.update((currentPolls) => {
                return [newPoll, ...currentPolls];
            });
            dispatch("add-poll");
        }
    };
</script>

<div in:fade>
    <form on:submit|preventDefault={handleSubmit}>
        <div class="form-field">
            <label for="question">Poll Question</label>
            <input type="text" id="question" bind:value={fields.question} />
            <div class="error">{errors.question}</div>
        </div>
        <div class="form-field">
            <label for="answerA">Answer A:</label>
            <input type="text" id="answerA" bind:value={fields.answerA} />
            <div class="error">{errors.answerA}</div>
        </div>
        <div class="form-field">
            <label for="answerB">Answer B:</label>
            <input type="text" id="answerB" bind:value={fields.answerB} />
            <div class="error">{errors.answerB}</div>
        </div>
        <Button variant="submit" text="Add Poll" />
    </form>
</div>

<style>
    form {
        @apply w-[400px] mt-10 mx-auto;
    }
    .form-field {
        @apply flex flex-col mb-3;
    }
    input {
        @apply p-2 mb-1 w-full text-sm shadow-[0_0px_10px_-2px_rgba(0,0,0,0.4)] rounded;
    }

    label {
        @apply pb-2 pl-1 text-gray-600;
    }
    .error {
        @apply text-[#d91b42] text-xs;
    }
</style>
