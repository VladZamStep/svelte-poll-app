import { writable } from "svelte/store";

const PollStore = writable([
    {
        id: "12345",
        question: "Hello?",
        answerA: "Yeah",
        answerB: "Naaah",
        votesA: 5,
        votesB: 8,
    }
])
export default PollStore;