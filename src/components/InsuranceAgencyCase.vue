<script lang="ts" setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const tab = ref(null)
const route = useRoute()
const id = route.params.id

// Здесь загрузить данные о карточке по id и отобразить их
</script>

<template>
  <v-container>
    <div class="pt-10">
      <h1>User Case {{ id }}</h1>
      <!-- Отображение информации о карточке по id -->
    </div>
    <v-card class="pt-10" variant="outlined">
      <v-tabs
        v-model="tab"
        color="primary"
        class="px-4"
      >
        <v-tab :value="1">Landscape</v-tab>
        <v-tab :value="2">City</v-tab>
        <v-tab :value="3">Abstract</v-tab>
      </v-tabs>
      <v-window v-model="tab">
        <v-window-item
          v-for="n in 3"
          :key="n"
          :value="n"
        >
          <v-container fluid>
            <v-row>
              <v-col
                v-for="i in 6"
                :key="i"
                cols="12"
                md="4"
              >
                <v-img
                  :src="`https://picsum.photos/500/300?image=${i * n * 5 + 10}`"
                  :lazy-src="`https://picsum.photos/10/6?image=${i * n * 5 + 10}`"
                  aspect-ratio="1"
                ></v-img>
              </v-col>
            </v-row>
          </v-container>
        </v-window-item>
      </v-window>
    </v-card>
  </v-container>
</template>

<style scoped>
.v-card--variant-outlined {
  border: none;
}
</style>