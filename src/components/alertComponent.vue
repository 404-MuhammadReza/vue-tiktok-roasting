<style scoped>
.error {
    width: 20%;
    min-width: 300px;
    padding: 12px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    border-radius: 50px;
    background: -webkit-linear-gradient(to right, var(--activeColor), var(--primaryColor));
    background: linear-gradient(to right, var(--activeColor), var(--primaryColor));
    box-shadow: 0 0px 10px #de1c3280;

    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1000;
}

.error__icon {
    width: 20px;
    height: 20px;
    transform: translateY(-2px);
    margin-right: 8px;
    filter: drop-shadow(2px 1px 2px rgb(0 0 0 / 0.4));
}

.error__icon path {
    fill: #fff;
}

.error__title {
    font-weight: 500;
    font-size: 14px;
    color: #fff;
}

.error__close {
    width: 20px;
    height: 20px;
    cursor: pointer;
    margin-left: auto;
    filter: drop-shadow(2px 1px 2px rgb(0 0 0 / 0.4));
}

.error__close path {
    fill: #fff;
}

.slide-up-enter-from,
.slide-up-leave-to {
    transform: translateY(100px);
    opacity: 0;
}

.slide-up-enter-active,
.slide-up-leave-active {
    transition: all 0.8s ease-out;
}

.slide-up-enter-to,
.slide-up-leave-from {
    transform: translateY(0);
    opacity: 1;
}
</style>

<template>
    <div class="error">
        <div class="error__icon">
            <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="m13 13h-2v-6h2zm0 4h-2v-2h2zm-1-15c-1.3132 0-2.61358.25866-3.82683.7612-1.21326.50255-2.31565 1.23915-3.24424 2.16773-1.87536 1.87537-2.92893 4.41891-2.92893 7.07107 0 2.6522 1.05357 5.1957 2.92893 7.0711.92859.9286 2.03098 1.6651 3.24424 2.1677 1.21325.5025 2.51363.7612 3.82683.7612 2.6522 0 5.1957-1.0536 7.0711-2.9289 1.8753-1.8754 2.9289-4.4189 2.9289-7.0711 0-1.3132-.2587-2.61358-.7612-3.82683-.5026-1.21326-1.2391-2.31565-2.1677-3.24424-.9286-.92858-2.031-1.66518-3.2443-2.16773-1.2132-.50254-2.5136-.7612-3.8268-.7612z"
                    fill="#393a37"></path>
            </svg>
        </div>
        <div class="error__title">{{ alert }}</div>
        <div class="error__close">
            <svg height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"
                @click="sendActionToParent">
                <path
                    d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z"
                    fill="#393a37"></path>
            </svg>
        </div>
    </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';
import { useAlertStore } from '@/stores/alertStore';

const alertStore = useAlertStore();
const alert = ref('');

alert.value = alertStore.value;

const emit = defineEmits(['clickAlert']);

const sendActionToParent = () => {
    emit('clickAlert');
};
</script>