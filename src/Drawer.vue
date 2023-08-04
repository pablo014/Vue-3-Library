<template>
    <div>
        <div @click="toggleDrawer">
            <slot name="drawer-header" :toggle="toggleDrawer" :isOpen="isOpen"></slot>
        </div>
        <div
                :style="{ transform: isOpen ? 'translateY(0)' : 'translateY(-100%)' }"
                class="drawer"
        >
            <!-- Drawer content goes here -->
            <div class="drawer-content">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isOpen: false
        };
    },
    methods: {
        openDrawer() {
            this.isOpen = true;
        },
        closeDrawer() {
            this.isOpen = false;
        },
        toggleDrawer() {
            this.isOpen = !this.isOpen;
        },
        handleClickOutside(event) {
            if (this.isOpen && !this.$refs.drawer.contains(event.target)) {
                this.closeDrawer();
            }
        }
    },
    mounted() {
        window.addEventListener('click', this.handleClickOutside);
    },
    beforeUnmount() {
        window.removeEventListener('click', this.handleClickOutside);
    }
};
</script>

<style>
.drawer {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 250px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;
}

.drawer-content {
    padding: 20px;
}

/* Add any custom styles for the drawer component here */
</style>
