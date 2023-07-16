<template>
    <div class="radio-group">
        <div v-for="option in options" :key="option.value">
            <radio-button
                    :id="`${name}-${option.value}`"
                    :name="name"
                    :value="option.value"
                    :label="option.label"
                    :checked="value"
                    @change="handleRadioChange"
            ></radio-button>
        </div>
    </div>
</template>

<script>
import RadioButton from './RadioButton.vue';

export default {
    components: {
        RadioButton
    },
    props: {
        name: {
            type: String,
            required: true
        },
        options: {
            type: Array,
            required: true
        },
        value: {
            type: [String, Number, Boolean],
            required: true
        }
    },
    methods: {
        handleRadioChange(newValue) {
            this.$emit('change', newValue);
        }
    }
};
</script>

<style>
.radio-group {
    margin-bottom: 10px;
}
</style>
