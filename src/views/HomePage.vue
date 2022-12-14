<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Home</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <ion-card>
        <ion-card-header>
          <ion-card-title>
            <ion-img style="width:50px" src="https://cdn.icon-icons.com/icons2/2415/PNG/96/vuejs_original_wordmark_logo_icon_146305.png" alt=""/>
          </ion-card-title>
          <ion-card-subtitle>Ionic Integration</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          <p>Here's a small text description for the card content. Nothing more, nothing less.</p>
          <ion-grid>
            <ion-row>
              <ion-col></ion-col>
              <ion-col></ion-col>
              <ion-col>
                <ion-button href="/vue">More</ion-button>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-card-header>
          <ion-card-title>
            <ion-img style="width:50px" src="https://cdn.icon-icons.com/icons2/2699/PNG/96/angular_logo_icon_169595.png" alt=""/>
          </ion-card-title>
          <ion-card-subtitle>Ionic Integration</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          <p>Here's a small text description for the card content. Nothing more, nothing less.</p>
          <ion-grid>
            <ion-row>
              <ion-col></ion-col>
              <ion-col></ion-col>
              <ion-col><ion-button href="/angular">More</ion-button></ion-col>
            </ion-row>
          </ion-grid>
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-card-header>
          <ion-card-title>
            <ion-img style="width:50px" src="https://cdn.icon-icons.com/icons2/2415/PNG/96/react_original_wordmark_logo_icon_146375.png" alt=""/>
          </ion-card-title>
          <ion-card-subtitle>Ionic Integration</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          <p>Here's a small text description for the card content. Nothing more, nothing less.</p>
          <ion-grid>
            <ion-row>
              <ion-col></ion-col>
              <ion-col></ion-col>
              <ion-col><ion-button href="/react">More</ion-button></ion-col>
            </ion-row>
          </ion-grid>
        </ion-card-content>
      </ion-card>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonCard, 
  IonCardContent, 
  IonCardHeader, 
  IonCardSubtitle,
  IonImg,
  IonCol, 
  IonGrid, 
  IonRow,
  IonCardTitle } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCard, 
    IonCardContent, 
    IonCardHeader, 
    IonCardSubtitle,
    IonImg,
    IonCol, 
    IonGrid, 
    IonRow,
    IonCardTitle
  }
});
</script>

<style scoped>
#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
