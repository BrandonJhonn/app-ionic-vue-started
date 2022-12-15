<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons>
          <ion-back-button default-href="/home"></ion-back-button>
          <ion-title>Alerts and Toast</ion-title>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Alerts and Toast</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-grid>
        <ion-row class="ion-text-center">
          <ion-col size="12">
            <h4>Simple Alert</h4>
            <ion-button @click="presentAlert">Click Me</ion-button>
          </ion-col>
        </ion-row>

        <ion-row class="ion-text-center">
          <ion-col size="12">
            <h4>Alert with Options</h4>
            <ion-button @click="presentAlertOptions">Click Me</ion-button>
            <p>{{ handlerMessage }}</p>
            <p>{{ roleMessage }}</p>
          </ion-col>
        </ion-row>

        <ion-row class="ion-text-center">
          <ion-col size="12">
            <h4>Alert with Options</h4>
            <ion-button expand="inline" @click="presentToast('top')"
              >Toast-Top</ion-button
            >
            <ion-button expand="inline" @click="presentToast('middle')"
              >Toast-Middle</ion-button
            >
            <ion-button expand="inline" @click="presentToast('bottom')"
              >Toast-Bottom</ion-button
            >
          </ion-col>
        </ion-row>

        <!-- <ion-row class="ion-text-center">
                    <ion-fab horizontal="center">
                        <h4>Float</h4>
                        <ion-fab-button>
                            <ion-icon :icon="chevronUpCircle"></ion-icon>
                        </ion-fab-button>
                        <ion-fab-list side="top">
                            <ion-fab-button>
                            <ion-icon :icon="document"></ion-icon>
                            </ion-fab-button>
                            <ion-fab-button>
                            <ion-icon :icon="colorPalette"></ion-icon>
                            </ion-fab-button>
                            <ion-fab-button>
                            <ion-icon :icon="globe"></ion-icon>
                            </ion-fab-button>
                        </ion-fab-list>
                    </ion-fab>
                </ion-row> -->
      </ion-grid>
    </ion-content>
  </ion-page>
</template>
<script lang="ts">
import { ref } from "vue";
import {
  IonBackButton,
  IonHeader,
  alertController,
  toastController,
} from "@ionic/vue";
import {
  chevronDownCircle,
  chevronForwardCircle,
  chevronUpCircle,
  colorPalette,
  document,
  globe,
} from "ionicons/icons";
import { defineComponent } from "vue";

export default defineComponent({
  name: "NewItem",
  components: {
    IonBackButton,
    IonHeader,
    // IonFab,
    // IonFabButton,
    // IonIcon
  },
  setup() {
    const presentAlert = async () => {
      const alert = await alertController.create({
        header: "Alert",
        subHeader: "Important message",
        message: "This is an alert!",
        buttons: ["OK"],
      });

      await alert.present();
    };

    const handlerMessage = ref("");
    const roleMessage = ref("");

    const presentAlertOptions = async () => {
      const alert = await alertController.create({
        header: "Alert!",
        buttons: [
          {
            text: "Cancel",
            role: "cancel",
            handler: () => {
              handlerMessage.value = "Alert canceled";
            },
          },
          {
            text: "OK",
            role: "confirm",
            handler: () => {
              handlerMessage.value = "Alert confirmed";
            },
          },
        ],
      });

      await alert.present();

      const { role } = await alert.onDidDismiss();
      roleMessage.value = `Dismissed with role: ${role}`;
    };

    return {
      presentAlert,
      handlerMessage,
      roleMessage,
      presentAlertOptions,
      chevronDownCircle,
      chevronForwardCircle,
      chevronUpCircle,
      colorPalette,
      document,
      globe,
    };
  },
  methods: {
    async presentToast(position: "top" | "middle" | "bottom") {
      const toast = await toastController.create({
        message: "Hello World!",
        duration: 1500,
        position: position,
      });

      await toast.present();
    },
  },
});
</script>
