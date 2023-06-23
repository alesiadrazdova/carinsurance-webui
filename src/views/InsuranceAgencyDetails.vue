<script lang="ts" setup>
import { ref } from 'vue'
import { mockCases } from '@/mockData'
import type InsuranceCase from '@/types/InsuranceCase'
import InsuranceAgencyCaseList from '@/components/InsuranceAgencyCaseList.vue'

const cases = ref<InsuranceCase[]>(mockCases)

</script>

<template>
  <v-container>
    <div class="mt-10 mb-2 d-flex justify-space-between">
      <div color="secondary" class="text-h3 font-weight-medium">User cases</div>
    </div>
    <div class="d-flex align-center flex-column">
      <InsuranceAgencyCaseList :cases="cases" />
    </div>
  </v-container>
</template>
