<template>
    <label :for="id" class="radio-button">
        <input
                type="radio"
                :id="id"
                :name="name"
                :value="value"
                :checked="isChecked"
                @change="handleRadioChange"
        />
        <span class="radio-button-label">{{ label }}</span>
    </label>
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        value: {
            type: [String, Number, Boolean],
            required: true
        },
        label: {
            type: String,
            required: true
        },
        checked: {
            type: [String, Number, Boolean],
            default: null
        }
    },
    computed: {
        isChecked() {
            return this.value === this.checked;
        }
    },
    methods: {
        handleRadioChange() {
            this.$emit('change', this.value);
        }
    }
};
</script>

<style>
.radio-button {
    display: inline-block;
    margin-right: 10px;
    cursor: pointer;
}

.radio-button-label {
    margin-left: 5px;
}
</style>
