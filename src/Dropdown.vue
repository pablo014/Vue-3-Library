<template>
    <div class="form-dropdown">
        <label :for="id" class="form-dropdown-label">{{ label }}</label>
        <select :id="id" class="form-dropdown-select" v-model="selectedOption">
            <option v-for="option in options" :value="option.value" :key="option.value">
                <slot name="options" :value="option.label">
                    {{ option.label }}
                </slot>
            </option>
        </select>
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            required: true
        },
        label: {
            type: String,
            required: true
        },
        options: {
            type: Array,
            required: true
        },
        value: {
            type: [String, Number],
            default: ''
        }
    },
    data() {
        return {
            selectedOption: this.value
        };
    },
    watch: {
        value(newValue) {
            this.selectedOption = newValue;
        }
    },
    mounted() {
        this.selectedOption = this.value;
    },
    computed: {
        selectedOptionLabel() {
            const selected = this.options.find(option => option.value === this.selectedOption);
            return selected ? selected.label : '';
        }
    },
    methods: {
        emitInput() {
            this.$emit('input', this.selectedOption);
        }
    }
};
</script>

<style>
.form-dropdown {
    margin-bottom: 20px;
}

.form-dropdown-label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
}

.form-dropdown-select {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
}
</style>