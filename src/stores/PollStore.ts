import { writable } from "svelte/store";

const PollStore = writable([
    {
        id: "12345",
        question: "Hello?",
        answerA: "Yeah",
        answerB: "Naaah",
        votesA: 5,
        votesB: 8,
    },
    {
        id: "121234345",
        question: "Hello?",
        answerA: "Yeah",
        answerB: "Naaah",
        votesA: 5,
        votesB: 8,
    },
    {
        id: "1254345",
        question: "Hello?",
        answerA: "Yeah",
        answerB: "Naaah",
        votesA: 5,
        votesB: 8,
    },
    {
        id: "12334645",
        question: "Hello?",
        answerA: "Yeah",
        answerB: "Naaah",
        votesA: 5,
        votesB: 8,
    },
])
export default PollStore;