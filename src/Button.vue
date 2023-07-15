<template>
    <button :class="buttonClasses" @click="$emit('click')">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: {
        variant: {
            type: String,
            default: 'default',
            validator: (value) => ['default', 'primary', 'secondary'].includes(value)
        },
        size: {
            type: String,
            default: 'medium',
            validator: (value) => ['small', 'medium', 'large'].includes(value)
        }
    },
    computed: {
        buttonClasses() {
            return [
                'button',
                `button-${this.variant}`,
                `button-${this.size}`
            ];
        }
    }
};
</script>

<style>
.button {
    padding: 10px 20px;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
}

.button-default {
    background-color: #ccc;
    color: #333;
    border: none;
}

.button-primary {
    background-color: dodgerblue;
    color: white;
    border: none;
}

.button-secondary {
    background-color: white;
    color: dodgerblue;
    border: 1px solid dodgerblue;
}

.button-small {
    font-size: 12px;
    padding: 6px 12px;
}

.button-medium {
    font-size: 16px;
    padding: 10px 20px;
}

.button-large {
    font-size: 20px;
    padding: 14px 28px;
}
</style>