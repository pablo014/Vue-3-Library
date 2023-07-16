<template>
    <div class="pagination">
        <button
                class="pagination-button"
                :disabled="currentPage === 1"
                @click="goToPage(currentPage - 1)"
        >
            <slot name="prev">
                Prev
            </slot>
        </button>

        <div class="pagination-pages">
            <button
                    v-for="page in totalPages"
                    :key="page"
                    :class="['pagination-page', { active: page === currentPage }]"
                    @click="goToPage(page)"
            >
                <slot :name="`${page}-page`" :page="page">
                    {{ page }}
                </slot>
            </button>
        </div>

        <button
                class="pagination-button"
                :disabled="currentPage === totalPages"
                @click="goToPage(currentPage + 1)"
        >
            <slot name="next">
                Next
            </slot>
        </button>
    </div>
</template>

<script>
export default {
    props: {
        currentPage: {
            type: Number,
            required: true
        },
        totalPages: {
            type: Number,
            required: true
        }
    },
    methods: {
        goToPage(page) {
            if (page >= 1 && page <= this.totalPages && page !== this.currentPage) {
                this.$emit('page-change', page);
            }
        }
    }
};
</script>

<style>
.pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}

.pagination-button {
    padding: 8px 12px;
    margin: 0 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: white;
    color: #333;
    cursor: pointer;
}

.pagination-button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.pagination-pages {
    display: flex;
}

.pagination-page {
    padding: 8px 12px;
    margin: 0 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: white;
    color: #333;
    cursor: pointer;
}

.pagination-page.active {
    background-color: dodgerblue;
    color: white;
}
</style>
