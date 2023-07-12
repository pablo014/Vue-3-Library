<template>
    <div class="input-container">
        <input
                type="text"
                v-model="inputValue"
                class="input-text"
                placeholder="Enter text..."
                @input="$emit('inputValue', inputValue)"
        />
    </div>
</template>

<script>
import {defineComponent} from 'vue'
export default defineComponent({
    name: 'InputText',
    data() {
        return {
            inputValue: ''
        };
    },
});
</script>

<style scoped>
.input-container {
    width: 300px;
}

.input-text {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
}

.input-text:focus {
    outline: none;
    border-color: dodgerblue;
}
</style>