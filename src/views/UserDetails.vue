<script lang="ts" setup>
import { ref } from 'vue'
import { mockCases } from '@/mockData'
import InsuranceCase from '@/types/InsuranceCase'
import InsuranceCaseList from '@/components/InsuranceCaseList.vue'
import NewCase from '@/components/popups/NewCase.vue'

const cases = ref<InsuranceCase[]>(mockCases)

</script>

<template>
  <v-container>
    <div class="mt-10 mb-2 d-flex justify-space-between">
      <div color="secondary" class="text-h3 font-weight-medium">List of claims</div>
      <new-case :cases="cases" />
    </div>
    <div class="py-6 d-flex align-center flex-column">
      <InsuranceCaseList :cases="cases" />
    </div>
  </v-container>
</template>
