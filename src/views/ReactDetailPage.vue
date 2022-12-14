<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button default-href="/home"></ion-back-button>
          </ion-buttons>
          <ion-title>Aditional Controls</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-content :fullscreen="true">
        <ion-grid>

            <ion-row class="ion-text-center">
                <h4>Calendar</h4>
                <ion-col size="12">
                    <ion-datetime></ion-datetime>
                </ion-col>
            </ion-row>

            <ion-row class="ion-text-center">
                <h4>Checkbox</h4>
                <ion-col size="12">
                    <ion-item>
                        <ion-checkbox slot="start"></ion-checkbox>
                        <ion-label>Themed checkbox option</ion-label>
                    </ion-item>
                </ion-col>
            </ion-row>

            
            
        </ion-grid>
      </ion-content>

    </ion-page>
</template>
<script lang="ts">
    import { IonBackButton, IonHeader, IonDatetime, IonCheckbox, IonItem, IonLabel  } from '@ionic/vue';
    import { defineComponent } from 'vue';
  
    export default defineComponent({
      name: 'NewItem',
      components: {
        IonBackButton,
        IonHeader,
        IonDatetime,
        IonCheckbox,
        IonItem,
        IonLabel
      }
    });
</script>
<style>
  ion-checkbox {
    --size: 32px;
    --background-checked: green;
  }
  
  ion-checkbox::part(container) {
    border-radius: 6px;
    border: 2px solid green;
  }
</style>
