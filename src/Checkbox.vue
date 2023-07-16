<template>
    <div class="checkbox">
        <label :for="id" class="checkbox-label">
            <input
                    :id="id"
                    type="checkbox"
                    class="checkbox-input"
                    v-model="isChecked"
                    @change="handleChange"
            />
            <span class="checkbox-custom"></span>
            <span class="checkbox-text">{{ label }}</span>
        </label>
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
        value: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            isChecked: this.value
        };
    },
    methods: {
        handleChange() {
            this.$emit('input', this.isChecked);
        }
    }
};
</script>

<style>
.checkbox {
    display: inline-block;
}

.checkbox-label {
    display: flex;
    align-items: center;
    cursor: pointer;
}

.checkbox-input {
    display: none;
}

.checkbox-custom {
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 2px solid #ccc;
    border-radius: 3px;
    margin-right: 5px;
    position: relative;
}

.checkbox-custom::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    background-color: #333;
    border-radius: 2px;
    opacity: 0;
    transition: opacity 0.3s;
}

.checkbox-text {
    font-size: 14px;
}

.checkbox-input:checked + .checkbox-custom::before {
    opacity: 1;
}
</style>
