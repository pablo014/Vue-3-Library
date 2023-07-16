<template>
    <div :class="['navbar', { 'navbar-open': isOpen, 'navbar-left': position === 'left', 'navbar-right': position === 'right' }]">
        <button class="navbar-toggle" @click="toggleNavbar">&#9776;</button>
        <div class="navbar-content">
            <slot></slot>
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
    props: {
        position: {
            type: String,
            default: 'left',
            validator: value => ['left', 'right'].includes(value)
        }
    },
    methods: {
        toggleNavbar() {
            this.isOpen = !this.isOpen;
        }
    }
};
</script>

<style>
.navbar {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 60px;
    background-color: #333;
    color: #fff;
    overflow: hidden;
    transition: width 0.3s ease;
}

.navbar-left {
    left: 0;
}

.navbar-right {
    right: 0;
}

.navbar-open {
    width: 200px;
}

.navbar-toggle {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 5px;
    font-size: 20px;
    background-color: transparent;
    color: #fff;
    border: none;
    cursor: pointer;
}

.navbar-content {
    padding: 10px;
}

/* Additional responsive styles */
@media (max-width: 768px) {
    .navbar {
        width: 50px;
    }

    .navbar-open {
        width: 150px;
    }

    .navbar-toggle {
        top: 5px;
        right: 5px;
    }
}
</style>
