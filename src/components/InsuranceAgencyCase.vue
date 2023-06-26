<script lang="ts" setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const tab = ref('Client contacts')
const route = useRoute()
const id = route.params.id

// Load card data by id here and display it
</script>

<template>
  <v-container class="pt-10">
    <div class="pb-10">
      <h1>User Case №{{ id }}.</h1>
      <!-- Displaying information about the card by id -->
    </div>
    <v-card height="500">
      <div class="d-flex flex-row">
        <v-tabs
          v-model="tab"
          direction="vertical"
          color="primary"
        >
          <v-tab value="option-1">
            <v-icon start>
              mdi-account
            </v-icon>
            Client contacts
          </v-tab>
          <v-tab value="option-2">
            <v-icon start>
              mdi-car-info
            </v-icon>
            Vehicle information
          </v-tab>
          <v-tab value="option-3">
            <v-icon start>
              mdi-car-cog
            </v-icon>
            Vehicle condition
          </v-tab>
          <v-tab value="option-4">
            <v-icon start>
              mdi-car-wrench
            </v-icon>
            Information for estimator
          </v-tab>
          <v-tab value="option-5">
            <v-icon start>
              mdi-shield-car
            </v-icon>
            Insurance agent information
          </v-tab>
        </v-tabs>
        <v-window v-model="tab">
          <v-window-item value="option-1">
            <v-card flat>
              <v-card-text>
                <p>
                  Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
                </p>
              </v-card-text>
            </v-card>
          </v-window-item>
          <v-window-item value="option-2">
            <v-card flat>
              <v-card-text>
                <p>
                  Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
                </p>
              </v-card-text>
            </v-card>
          </v-window-item>
          <v-window-item value="option-3">
            <v-card flat>
              <v-card-text>
                <p>
                  Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
                </p>
              </v-card-text>
            </v-card>
          </v-window-item>
          <v-window-item value="option-4">
            <v-card flat>
              <v-card-text>
                <p>
                  Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
                </p>
              </v-card-text>
            </v-card>
          </v-window-item>
          <v-window-item value="option-5">
            <v-card flat>
              <v-card-text>
                <p>
                  Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
                </p>
              </v-card-text>
            </v-card>
          </v-window-item>
        </v-window>
      </div>
    </v-card>
  </v-container>
</template>

<style scoped>
.v-card--variant-outlined {
  border: none;
}
</style>
