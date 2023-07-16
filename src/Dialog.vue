<template>
    <div class="dialog" :class="{ 'dialog-open': isOpen }">
        <div class="dialog-overlay" @click="closeDialog"></div>
        <div class="dialog-content">
            <div class="dialog-header">
                <h2 class="dialog-title">{{ title }}</h2>
                <button class="dialog-close" @click="closeDialog">X</button>
            </div>
            <div class="dialog-body">
                <slot></slot>
            </div>
            <div class="dialog-footer">
                <button class="dialog-button dialog-cancel" @click="closeDialog">{{ cancelText }}</button>
                <button class="dialog-button dialog-confirm" @click="confirmDialog">{{ confirmText }}</button>
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
    props: {
        title: {
            type: String,
            default: 'Dialog'
        },
        cancelText: {
            type: String,
            default: 'Cancel'
        },
        confirmText: {
            type: String,
            default: 'Confirm'
        }
    },
    methods: {
        openDialog() {
            this.isOpen = true;
            document.body.classList.add('dialog-open');
        },
        closeDialog() {
            this.isOpen = false;
            document.body.classList.remove('dialog-open');
        },
        confirmDialog() {
            this.$emit('confirm');
            this.closeDialog();
        }
    }
};
</script>

<style>
.dialog {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.5);
}

.dialog-open {
    display: flex;
    align-items: center;
    justify-content: center;
}

.dialog-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

.dialog-content {
    position: relative;
    background-color: #fff;
    padding: 20px;
    border-radius: 4px;
    width: 400px;
    max-width: 90%;
}

.dialog-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
}

.dialog-title {
    margin: 0;
}

.dialog-close {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    font-size: 18px;
}

.dialog-body {
    margin-bottom: 10px;
}

.dialog-footer {
    display: flex;
    justify-content: flex-end;
}

.dialog-button {
    padding: 8px 16px;
    margin-left: 10px;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;
}

.dialog-cancel {
    background-color: #ccc;
    color: #333;
    border: none;
}

.dialog-confirm {
    background-color: dodgerblue;
    color: white;
    border: none;
}
</style>
