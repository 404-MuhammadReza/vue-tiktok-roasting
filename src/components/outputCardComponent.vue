<script setup>
import { useInputStore } from '@/stores/inputStore';
import { useOutputStore } from '@/stores/outputStore';
import { ref, defineEmits } from 'vue';

const inputStore = useInputStore();
const outputStore = useOutputStore();
const input = ref('');
const output = ref('');

const emit = defineEmits(['clickBack']);

const sendActionToParent = () => {
    emit('clickBack');
};

input.value = inputStore.value;
output.value = outputStore.value;
</script>

<style scoped>
  @import url("s://fonts.googleapis.com/css2?family=Fira+Code&display=swap");

  .container {
    width: 400px;
    font-family: "Fira Code", monospace;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(33, 33, 33, 0.75);
  }

  .terminal_toolbar {
    display: flex;
    height: 30px;
    align-items: center;
    padding: 0 8px;
    box-sizing: border-box;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background: linear-gradient(145deg, #2c2c2c, #1a1a1a);
    justify-content: space-between;
    box-shadow: inset 0 -1px 0 rgba(255, 255, 255, 0.05);
  }

  .butt {
    display: flex;
    align-items: center;
  }

  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin-right: 5px;
    font-size: 8px;
    height: 12px;
    width: 12px;
    box-sizing: border-box;
    border: none;
    border-radius: 100%;
    background: radial-gradient(circle at 30% 30%, #6c6c6c, #3b3b3b);
    text-shadow: 0px 1px 0px rgba(255, 255, 255, 0.2);
    box-shadow:
      0px 0px 1px 0px #41403a,
      0px 1px 1px 0px #474642;
    transition: transform 0.2s ease;
  }

  .btn-color {
    background: radial-gradient(circle at 30% 30%, #ff5f56, #bf2e2e);
  }

  .btn:hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  .btn:focus {
    outline: none;
  }

  .butt--exit {
    background: linear-gradient(#f37458 0%, #de4c12 100%);
  }

  .add_tab {
    border: 1px solid #fff;
    color: #fff;
    padding: 0 6px;
    border-radius: 4px 4px 0 0;
    border-bottom: none;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.05);
    transition: background 0.2s;
  }

  .add_tab:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  .user {
    color: #d5d0ce;
    margin-left: 6px;
    font-size: 14px;
    line-height: 15px;
  }

  .terminal_body {
    background: rgba(0, 0, 0, 0.4);
    height: calc(100% - 30px);
    padding-top: 8px;
    margin-top: -1px;
    font-size: 13px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    line-height: 1.4;
  }

  .terminal_promt {
    display: flex;
    flex-wrap: wrap;
  }

  .terminal_promt span {
    margin-left: 4px;
  }

  .terminal_user {
    color: #ff0000;
    text-shadow: 0 0 4px #ec1800;
  }

  .terminal_location {
    color: #ff8c00;
    text-shadow: 0 0 4px #ff9d00;
  }

  .terminal_bling {
    color: #ffffff;
    text-shadow: 0 0 3px #ffffff;
  }

  .terminal_cursor {
    display: block;
    height: 14px;
    width: 5px;
    margin-left: 10px;
    background: #ffffff;
    animation: curbl 800ms steps(2) infinite;
    border-radius: 1px;
  }

  @keyframes curbl {
    0%,
    49% {
      background: #ffffff;
    }
    60%,
    99% {
      background: transparent;
    }
    100% {
      background: #ffffff;
    }
  }
  .btn-red {
    background: radial-gradient(circle at 30% 30%, #ff5f56, #bf2e2e);
  }

  .btn-yellow {
    background: radial-gradient(circle at 30% 30%, #ffbd2e, #b4820e);
  }

  .btn-green {
    background: radial-gradient(circle at 30% 30%, #27c93f, #199f2c);
  }
</style>

<template>
  <div class="container glass">
    <div class="terminal_toolbar">
      <div class="butt">
        <button class="btn btn-red" @click="sendActionToParent"></button>
        <button class="btn btn-yellow"></button>
        <button class="btn btn-green"></button>
      </div>
      <p class="user">{{input}}</p>
      <div class="add_tab">+</div>
    </div>
    <div class="terminal_body">
      <div class="terminal_promt">
        <span class="terminal_user">roasting@admin:</span>
        <span class="terminal_location">~</span>
        <span class="terminal_bling">$ {{output}}</span>
        <span class="terminal_cursor"></span>
      </div>
    </div>
  </div>
</template>
