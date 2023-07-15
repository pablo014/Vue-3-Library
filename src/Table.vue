<template>
    <table class="table">
        <thead>
        <tr>
            <th v-for="column in columns" :key="column.key">
                <slot :name="column.label">
                    <slot name="label">
                        {{ column.label }}
                    </slot>
                </slot>
            </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in items" :key="item.id">
            <td v-for="column in columns" :key="column.key">
                <slot :name="column.key">
                    <slot name="column">
                        {{ item[column.key] }}
                    </slot>
                </slot>
            </td>
        </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    props: {
        columns: {
            type: Array,
            required: true
        },
        items: {
            type: Array,
            required: true
        }
    }
};
</script>

<style>
.table {
    width: 100%;
    border-collapse: collapse;
}

.table th,
.table td {
    padding: 10px;
    border: 1px solid #ccc;
}

.table th {
    font-weight: bold;
    background-color: #f0f0f0;
}

.table tr:hover {
    background-color: #f9f9f9;
}

.table td {
    text-align: left;
}
</style>
