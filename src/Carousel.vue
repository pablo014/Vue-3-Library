<template>
    <div class="carousel">
        <div class="carousel-slides" :style="{ transform: `translateX(${translateX}px)` }">
            <div v-for="(slide, index) in slides" :key="index" class="carousel-slide">
                <img :src="slide.image" :alt="slide.alt" class="carousel-image" />
            </div>
        </div>
        <div class="carousel-controls">
            <button class="carousel-control" @click="previousSlide">&#8249;</button>
            <button class="carousel-control" @click="nextSlide">&#8250;</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentIndex: 0,
            translateX: 0
        };
    },
    props: {
        slides: {
            type: Array,
            required: true
        },
        interval: {
            type: Number,
            default: 5000
        }
    },
    mounted() {
        this.startCarousel();
    },
    beforeUnmount() {
        this.stopCarousel();
    },
    methods: {
        previousSlide() {
            this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
            this.updateTranslateX();
        },
        nextSlide() {
            this.currentIndex = (this.currentIndex + 1) % this.slides.length;
            this.updateTranslateX();
        },
        updateTranslateX() {
            this.translateX = -this.currentIndex * 100;
        },
        startCarousel() {
            this.carouselInterval = setInterval(this.nextSlide, this.interval);
        },
        stopCarousel() {
            clearInterval(this.carouselInterval);
        }
    }
};
</script>

<style>
.carousel {
    position: relative;
    overflow: hidden;
    width: 100%;
}

.carousel-slides {
    display: flex;
    transition: transform 0.3s ease;
}

.carousel-slide {
    flex-shrink: 0;
    width: 100%;
}

.carousel-image {
    width: 100%;
    height: auto;
}

.carousel-controls {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
}

.carousel-control {
    margin: 0 5px;
    padding: 5px 10px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.5);
    border: none;
    color: white;
    font-size: 16px;
    cursor: pointer;
}
</style>