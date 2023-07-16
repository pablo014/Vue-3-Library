<template>
    <div class="accordion">
        <slot name="header" :onClick="toggleAccordion">
            <button class="accordion-header" @click="toggleAccordion">
                {{ header }}
            </button>
        </slot>
        <transition name="accordion-transition">
            <div v-if="isOpen" class="accordion-content">
                <slot name="content">{{ content }}</slot>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isOpen: false
        };
    },
    props: {
        header: {
            type: String,
            required: true
        },
        content: {
            type: String,
            default: ''
        }
    },
    methods: {
        toggleAccordion() {
            this.isOpen = !this.isOpen;
        }
    }
};
</script>

<style>
.accordion {
    border: 1px solid #ccc;
    border-radius: 4px;
}

.accordion-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #f0f0f0;
    border: none;
    cursor: pointer;
}

.accordion-content {
    padding: 10px;
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
}

.accordion-transition-enter-active,
.accordion-transition-leave-active {
    transition: max-height 0.3s ease-in-out;
}

.accordion-transition-enter,
.accordion-transition-leave-to {
    max-height: 0;
}
</style>
