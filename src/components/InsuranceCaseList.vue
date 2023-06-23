<script lang="ts" setup>
import type InsuranceCase from '@/types/InsuranceCase'
import type { PropType } from 'vue'
import { formatDate } from '../dateUtils'

defineProps({
  cases: {
    type: Array as any as PropType<InsuranceCase[]>,
    required: true
  }
})
</script>

<template>
  <v-card
    v-for="item in cases"
    :key="item.id"
    variant="outlined"
    width="100%"
    class="my-4 pa-4 d-flex align-center"
  >
    <v-row class="justify-space-between fill-height align-center">
      <v-col cols="2" class="pl-8 d-flex flex-column">
        <div class="text-subtitle-1 font-weight-bold">CI-{{ item.id }}</div>
        <div class="text-body-2 text-inactiveColor">{{ formatDate(item.caseDate) }}</div>
      </v-col>
      <v-col cols="2">
        <span class="pl-2 text-subtitle-1">{{ item.carMake }} {{ item.carModel }}</span>
      </v-col>
      <v-col cols="2">
        <v-card-text>
          {{ item.agent }}
        </v-card-text>
      </v-col>
      <v-col cols="1" class="d-flex justify-center">
        <span v-show="item.amount !== 0" class="text-h6 font-weight-medium">${{ item.amount }}</span>
      </v-col>
      <v-col cols="2" class="pr-8 d-flex justify-end">
        <v-chip
          :color="item.status === 'pending' ? 'primary' : 'success'"
          class="w-75 justify-center"
        >{{ item.status }}</v-chip>
      </v-col>
    </v-row>
  </v-card>
</template>

<style scoped>
.v-card--variant-outlined {
  border: thin solid #e4e4e4;
}
</style>
