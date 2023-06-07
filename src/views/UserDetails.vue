<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { mockCases } from '@/mockData'
import InsuranceCase from '@/types/InsuranceCase'
import InsuranceCaseList from '@/components/InsuranceCaseList.vue'

const cases = ref<InsuranceCase[]>(mockCases)
const router = useRouter()

const goToNewCase = () => {
  router.push('/cases/new')
}
</script>

<template>
  <v-container>
    <div class="mt-10 mb-2 d-flex justify-space-between">
      <div color="secondary" class="text-h3 font-weight-medium">List of claims</div>
      <v-btn rounded size="large" color="secondary" @click="goToNewCase">Create new claim</v-btn>
    </div>
    <div class="py-6 d-flex align-center flex-column">
      <InsuranceCaseList :cases="cases" />
    </div>
  </v-container>
</template>
