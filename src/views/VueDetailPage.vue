<template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-buttons>
            <ion-back-button default-href="/home"></ion-back-button>
            <ion-title>Form Controls</ion-title>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>

      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">Form Controls</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-list>
            <ion-item>
                <ion-label>Default input</ion-label>
                <ion-input></ion-input>
            </ion-item>

            <ion-item>
                <ion-label>Input with placeholder</ion-label>
                <ion-input placeholder="Enter company name"></ion-input>
            </ion-item>

            <ion-item>
                <ion-label>Number input</ion-label>
                <ion-input type="number" placeholder="000"></ion-input>
            </ion-item>

            <ion-item>
                <ion-label>Password input</ion-label>
                <ion-input type="password" value="password"></ion-input>
            </ion-item>

            <ion-item>
                <ion-label>Email input</ion-label>
                <ion-input type="email" placeholder="email@domain.com"></ion-input>
            </ion-item>

            <ion-item>
                <ion-label>Telephone input</ion-label>
                <ion-input type="tel" placeholder="888-888-8888"></ion-input>
            </ion-item>

            <ion-item counter="true">
                <ion-label position="floating">Default Counter</ion-label>
                <ion-input maxlength="20"></ion-input>
            </ion-item>

            <ion-item>
                <ion-label>Select Input</ion-label>
                <ion-select placeholder="Select options">
                    <ion-select-option value="option-1">Option 1</ion-select-option>
                    <ion-select-option value="option-2">Option 2</ion-select-option>
                    <ion-select-option value="option-3">Option 3</ion-select-option>
                </ion-select>
            </ion-item>
        </ion-list>
      </ion-content>
    </ion-page>
</template>
<script lang="ts">
    import { IonBackButton, IonHeader, IonItem, IonList, IonSelect, IonSelectOption } from '@ionic/vue';
    import { defineComponent } from 'vue';
  
    export default defineComponent({
      name: 'NewItem',
      components: {
        IonBackButton,
        IonHeader,
        IonItem, 
        IonList, 
        IonSelect, 
        IonSelectOption
      }
    });
</script>
