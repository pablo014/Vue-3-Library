<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "PreviewCard",
    props: {
        image: {
            type: String,
            default: ""
        },
        title: {
            type: String,
            default: "Preview"
        },
        summary: {
            type: String,
            default: "Preview"
        },
        url: {
            type: String,
            required: false
        }
    }
})
</script>

<template>
    <a id="container" :href="url">
        <img :src="image" :alt="title" id="image"/>
        <div id="title">
            {{ title }}
        </div>
        <div id="summary">
            {{ summary }}
        </div>
    </a>
</template>

<style scoped>
#container {
    border-radius: 10px;
    border-color: #9E9E9E;
    border-width: 3px;
    cursor: pointer;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 500ms;
}
#container:hover {
    scale: 110%;
    box-shadow: 0 10px 5px darkgray;
}
#image {
    border-radius: 10px;
}
#title {
    font-size: 30px;
}
#summary {
    font-size: 15px;
}
</style>