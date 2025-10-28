<script setup>
import { defineEmits } from 'vue';
import { useInputStore } from '@/stores/inputStore';

const inputStore = useInputStore();


const emit = defineEmits(['clickButton']);

const sendActionToParent = () => {
    emit('clickButton'); 
};
</script>

<template>
    <div class="container">
        <form>
            <div class="form-section">
                <input type="text" name="" v-model="inputStore.value" required>
                <label>Username TikTok</label>
            </div>
            <a href="#" @click="sendActionToParent">Roasting!<span></span></a>
        </form>
    </div>
</template>

<style scoped>

.container {
    width: 80%;
    max-width: 300px;
}

.container .form-section {
    position: relative;
    width: 100%;
}

.container .form-section input {
    width: 100%;
    padding: 10px 0;
    font-size: 16px;
    color: var(--whiteColor);
    margin-bottom: 30px;
    border: none;
    border-bottom: 1px solid var(--whiteColor);
    outline: none;
    background: transparent;
    transition: .5s;
}

.container .form-section input:focus, 
.container .form-section input:valid {
    border-bottom: 1px solid var(--primaryColor);
}

.container .form-section label {
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    pointer-events: none;
    transition: .5s;
}

.container .form-section input:focus~label,
.container .form-section input:valid~label {
    top: -20px;
    left: 0;
    font-size: 12px;
}

.container form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.container form a {
    position: relative;
    padding: 10px 20px;
    color: #ffffff;
    font-size: 16px;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    transition: .5s;
    margin-top: 20px;
    letter-spacing: 4px
}

.container a:hover {
    background: var(--primaryColor);
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px var(--primaryColor),
        0 0 25px var(--primaryColor),
        0 0 50px var(--primaryColor),
        0 0 100px var(--primaryColor);
}

.container a span {
    position: absolute;
    display: block;
}

@keyframes btn-anim1 {
    0% {
        left: -100%;
    }

    50%,
    100% {
        left: 100%;
    }
}

.container a span {
    bottom: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--primaryColor));
    animation: btn-anim1 2s linear infinite;
}
</style>
