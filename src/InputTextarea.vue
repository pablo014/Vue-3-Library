<script>
import {defineComponent} from 'vue'
export default defineComponent({
    name: 'InputTextarea',
    data() {
        return {
            inputValue: ''
        };
    }
});
</script>

<template>
  <input type="textarea" v-model="inputValue" @input="$emit('inputValue', inputValue)"/>
</template>

<style scoped>

</style>