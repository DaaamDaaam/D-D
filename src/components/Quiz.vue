<template>
    <div>Quiz : {{ idQuiz }}</div>
</template>
<script>
import { getQuizAjax } from "../../data/ajax";

export default {
    name: "Quiz",
    props: ["idQuiz"],
    data: function() {
        return {};
    },
    computed: {
        quiz: function() {
            return getQuizAjax(this.idQuiz);
        }
    }
}
</script>