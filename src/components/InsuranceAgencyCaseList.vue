<script lang="ts" setup>
import type InsuranceCase from '@/types/InsuranceCase'
import type { PropType } from 'vue'
import { formatDate } from '../dateUtils'
import { useRouter } from 'vue-router'

defineProps({
  cases: {
      type: Array as any as PropType<InsuranceCase[]>,
      required: true
    }
})
const router = useRouter()

const headerClicked = (cardId: number) => {
  router.push({ name: 'InsuranceAgencyCase', params: { id: cardId.toString() } })
}

</script>

<template>
  <v-sheet :width="1200">
    <v-row class="mx-4 pt-10 justify-space-between fill-height align-center">
      <v-col cols="2">
        <h4 class="text-grey-darken-1">Case and date</h4>
      </v-col>
      <v-col cols="2" class="px-0">
        <h4 class="text-grey-darken-1">Client fullname</h4>
      </v-col>
      <v-col cols="3">
        <h4 class="text-grey-darken-1">Insurance expiry date</h4>
      </v-col>
      <v-col cols="2" class="d-flex justify-center">
        <h4 class="text-grey-darken-1">Paid amount</h4>
      </v-col>
      <v-col cols="2" class="pl-6 d-flex justify-center">
        <h4 class="text-grey-darken-1">Status</h4>
      </v-col>
    </v-row>
    <v-card
      v-for="item in cases"
      :key="item.id"
      variant="outlined"
      width="100%"
      class="my-4 pa-4 d-flex align-center insurance-case"
      @click="() => headerClicked(item.id)"
    >
      <v-row class="justify-space-between fill-height align-center">
        <v-col cols="2" class="pl-8 d-flex flex-column">
          <div class="text-subtitle-1 font-weight-bold">№{{ item.id }}</div>
          <div class="text-body-2 text-inactiveColor">{{ formatDate(item.caseDate) }}</div>
        </v-col>
        <v-col cols="2">
          <span class="text-subtitle-1 font-weight-bold">{{ item.firstName }} {{ item.lastName }}</span>
        </v-col>
        <v-col cols="3">
          <v-card-text>
            {{ formatDate(item.insuranceExpiryDate) }}
          </v-card-text>
        </v-col>
        <v-col cols="2" class="d-flex justify-center">
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
  </v-sheet>
</template>

<style scoped>
.insurance-case {
  cursor: pointer;
}
.v-card--variant-outlined {
  border: thin solid #e4e4e4;
}
</style>
