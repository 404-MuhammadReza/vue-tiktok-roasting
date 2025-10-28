<script setup>
import loadingComponent from '@/components/loadingComponent.vue';
import { onMounted, onUnmounted, ref } from 'vue';
import axios from 'axios';

const dataRoast = ref();
const roastStatus = ref(null);
const loadingStatus = ref(true);
let intervalId = null;

const fetchData = async () => {
    try {
        const response = await axios.get('https://backend-tiktok-roaster.vercel.app/api/data');
        dataRoast.value = response.data;
    } catch (error) {
        console.error("Error:", error);
    }
    loadingStatus.value = false;
}

const roastData = (username) => {
    if(roastStatus.value !== username) {
        roastStatus.value = username;
    } else {
        roastStatus.value = null;
    }
}

onMounted(() => {
    fetchData();
    intervalId = setInterval(fetchData, 5000);
});

onUnmounted(() => {
    if (intervalId) {
        clearInterval(intervalId);
    }
});
</script>

<template>
    <loadingComponent v-if="loadingStatus"/>
    <table v-if="!loadingStatus">
        <thead>
            <tr>
                <th>No</th>
                <th>Username</th>
                <th>Nama</th>
                <th>Followers</th>
                <th>Following</th>
                <th>Like</th>
                <th>Video</th>
                <th>Timestamp</th>
            </tr>
        </thead>
        <tbody>
            <template v-if="dataRoast" v-for="(data, index) in dataRoast" :key="index">
                <tr @click="roastData(index)">
                    <td>{{ index + 1 }}</td>
                    <td>{{ data.username }}</td>
                    <td>{{ data.nama }}</td>
                    <td>{{ data.followers }}</td>
                    <td>{{ data.following }}</td>
                    <td>{{ data.like }}</td>
                    <td>{{ data.video }}</td>
                    <td>{{ data.timestamp }}</td>
                </tr>
                <tr v-if="roastStatus === index" @click="roastData(index)">
                    <td></td>
                    <td colspan="7">{{ data.roasting }}</td>
                </tr>
            </template>
            <tr v-else>
                <td colspan="8">Tidak Ada Data!</td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped>
table {
    width: 80%;
    border-spacing: 0;
    cursor: default;
    color: var(--whiteColor);
    transition: all .5s;
}

th,
td {
    padding: 10px;
}

th {
    font-weight: 500;
    background-color: var(--primaryColor);
}

table tbody {
    cursor: pointer;
}

table tbody tr td {
    font-weight: 300;
    border-bottom: 1px solid var(--primaryColor);
    border-right: 1px solid var(--primaryColor);
}

table tbody tr td[colspan="7"] {
    text-align: justify;
    font-size: 12px;
}

table tbody tr td[colspan="8"] {
    text-align: center;
    font-weight: 400;
}

td:first-child {
    border-left: 1px solid var(--primaryColor);
}

table thead tr th:first-child {
    border-top-left-radius: 10px;
}

table thead tr th:last-child {
    border-top-right-radius: 10px;
}

table tbody tr:last-child td:first-child {
    border-bottom-left-radius: 10px;
}

table tbody tr:last-child td:last-child {
    border-bottom-right-radius: 10px;
}

td:first-child,
td:nth-child(4),
td:nth-child(5),
td:nth-child(6),
td:nth-child(7),
td:nth-child(8) {
    text-align: center;
}
</style>