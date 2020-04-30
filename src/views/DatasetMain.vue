<template>
  <v-container>
    <div class="card-area" style="display:inline-block">
      <!-- <v-card>
            <v-card-title>
                test
            </v-card-title>
        </v-card>
      <template v-for="(item, i) in this.items">
        <v-card :key="i" width="650" color="#ffffff" class="item">
          <v-card-title class="card-title">
            <v-btn small fab text color="gray" @click="fixTitle(item)">
              <v-icon v-show="!item.nowModify" color="#BDC1C6">mdi-lock-open-outline</v-icon>
              <v-icon v-show="item.nowModify" color="#BDC1C6">mdi-lock-outline</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </v-card-title>
      </v-card>-->
      <v-container>
        <v-row dense>
          <v-col cols="6">
            <v-card color="#385F73" dark max-width="650"
      class="mx-auto">
              <v-card-title class="headline">Unlimited music now</v-card-title>

              <v-card-subtitle>Listen to your favorite artists </v-card-subtitle>

              <v-card-actions>
                <v-btn text>Listen Now</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col v-for="(item, i) in items" :key="i" cols="6">
            <v-card :color="item.color" dark max-width="650"
      class="mx-auto">
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-title class="headline" v-text="item.title"></v-card-title>

                  <v-card-subtitle v-text="item.artist"></v-card-subtitle>
                </div>

                <v-avatar class="ma-3" size="125" tile>
                  <v-img :src="item.src"></v-img>
                </v-avatar>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          color: "#1F7087",
          src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
          title: "Supermodel",
          artist: "Foster the People"
        },
        {
          color: "#952175",
          src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
          title: "Halcyon Days",
          artist: "Ellie Goulding"
        }
      ],

      items2: [
        {
          title: "Class 1",
          nowModify: false
        },
        {
          title: "Class 2",
          nowModify: false
        }
      ]
    };
  },
  methods: {}
};
</script>

<style lang="scss">
.v-text-field {
  width: 4000px;
}

.card-area {
  .v-card.item {
    border-radius: 12px;
    margin: 20px;
  }
  .card-title {
    padding: 8px 16px;
    font-size: 20px;
    font-weight: 500;
  }
}
.sub-title {
  font-size: 16px;
  font-weight: 500;
}
.button-area {
  margin-top: 15px;
  .v-btn__content {
    flex-direction: column;
  }
  .icon-btn {
    margin: 0 3px;
    &:first-of-type {
      margin-left: 0px;
    }
    &:last-of-type {
      margin-right: 0px;
    }
  }
  .text {
    color: #1565c0;
    font-size: 12px;
    text-transform: capitalize;
    margin-top: 5px;
  }
}
.add_classes {
  position: relative;
  cursor: pointer;
  width: 100%;
  outline: 0;
  border: 1.5px dashed #bdc1c6;
  border-radius: 12px;
  background: transparent;
  overflow: hidden;
  text-transform: none !important;
}
</style>