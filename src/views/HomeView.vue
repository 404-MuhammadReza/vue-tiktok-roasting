<script setup>
import { ref, watch } from 'vue';
import axios from 'axios';
import inputComponent from '@/components/inputComponent.vue';
import loadingComponent from '@/components/loadingComponent.vue';
import outputCardComponent from '@/components/outputCardComponent.vue';
import sosmedComponent from '@/components/sosmedComponent.vue';
import AlertComponent from '@/components/alertComponent.vue';
import { useInputStore } from '@/stores/inputStore';
import { useOutputStore } from '@/stores/outputStore';
import { useAlertStore } from '@/stores/alertStore';

const inputStore = useInputStore();
const outputStore = useOutputStore();
const alertStore = useAlertStore();
const inputUsername = ref('');

const formStatus = ref(true);
const outputStatus = ref(false);
const loadingStatus = ref(false);
const alertStatus = ref(false);

const clickButtons = async () => {
  inputUsername.value = inputStore.value;

  if (!inputUsername.value) {
    alertStore.value = 'ERROR : Masukkan Username!'
    alertStatus.value = true;
    return;
  }

  formStatus.value = false;
  loadingStatus.value = true;

  const tiktokScrapper = {
    method: 'POST',
    url: 'https://backend-tiktok-roaster.vercel.app/api/request',
    data: {
      username: inputUsername.value
    }
  };

  try {
    const response = await axios.request(tiktokScrapper);
    console.log(response);

    outputStore.value = response.data.roast;
    loadingStatus.value = false;
    outputStatus.value = true;
    alertStatus.value = false;

  } catch (error) {
    alertStore.value = 'ERROR : Gagal Mengambil Data!'

    loadingStatus.value = false;
    alertStatus.value = true;
    formStatus.value = true;
    console.error("Error:", error);
  }
  inputUsername.value = null;
  inputStore.value = null;
};
</script>

<template>
  <inputComponent v-if="formStatus" @clickButton="clickButtons" />
  <loadingComponent v-if="loadingStatus" />
  <div class="ouputContainer" v-if="outputStatus">
    <outputCardComponent @clickBack="outputStatus = false; formStatus=true"/>
    <sosmedComponent/>
  </div>
  
  <Transition name="slide-up"> 
    <AlertComponent v-if="alertStatus" @clickAlert="alertStatus=false"/>
  </Transition>
</template>

<style scoped>
.ouputContainer {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>