<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { mockCases } from './mockData' // adjust the path as needed
import CaseInsurance from '@/types/CaseInsurance' // adjust the path as needed

const cases = ref<CaseInsurance[]>(mockCases)
const isLoading = ref(false)  // add this line
const router = useRouter()

const goToNewCase = () => {
    router.push('/cases/new')
}
</script>

<template>
    <div>
    <v-btn color="primary" @click="goToNewCase">Create New Case</v-btn>
    <v-progress-circular
        v-if="isLoading"
        indeterminate
        color="primary"
    ></v-progress-circular>
    <div v-else>
        <div v-for="insuranceCase in cases" :key="insuranceCase.id">
        <!-- Display the case here -->
        {{ insuranceCase.clientFirstName }} - {{ insuranceCase.agent }}
        </div>
    </div>
    </div>
</template>
