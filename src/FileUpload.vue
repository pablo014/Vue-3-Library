<template>
    <div class="file-upload">
        <label :for="id" class="file-upload-label">{{ label }}</label>
        <input
                :id="id"
                type="file"
                class="file-upload-input"
                @change="handleFileChange"
                :multiple="multiple"
        />
        <ul v-if="files.length > 0" class="file-list">
            <li v-for="file in files" :key="file.name" class="file-item">
                <span class="file-name">{{ file.name }}</span>
                <button class="file-remove" @click="removeFile(file)">
                    Remove
                </button>
            </li>
        </ul>
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
        multiple: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            files: []
        };
    },
    methods: {
        handleFileChange(event) {
            const newFiles = Array.from(event.target.files);
            this.files = this.multiple ? [...this.files, ...newFiles] : newFiles;
            this.$emit('input', this.files);
        },
        removeFile(file) {
            this.files = this.files.filter(f => f !== file);
            this.$emit('input', this.files);
        }
    }
};
</script>

<style>
.file-upload {
    margin-bottom: 20px;
}

.file-upload-label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
}

.file-upload-input {
    display: none;
}

.file-list {
    margin-top: 10px;
    list-style-type: none;
    padding: 0;
}

.file-item {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
}

.file-name {
    flex-grow: 1;
    margin-right: 10px;
}

.file-remove {
    padding: 5px 10px;
    background-color: #ccc;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    color: #333;
}
</style>
