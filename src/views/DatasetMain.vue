<template>
  <v-container>
    <grid
      :draggable="draggable"
      :sortable="true"
      :items="datasets"
      :cellWidth="212"
      :cellHeight="272"
      :gridWidth="1100"
    >
      <template slot="cell" scope="props">
        <template v-if="props.item.type === 'add'">
          <v-row
            justify="center"
            align-content="center"
            id="add-button"
            class="add-button"
            style="height: 100%; padding: 12px;"
            @mousedown="handleMousedown(props.item)"
          >
            <v-btn fab color="#42b983" @click="addDataset">
              <v-icon color="white">mdi-plus</v-icon>
            </v-btn>
          </v-row>
        </template>
        <template v-else>
          <gridcard @mousefunction="handleMousedown" :item="props.item"></gridcard>
        </template>
      </template>
    </grid>

    <!-- <div class="card-area" style="display:inline-block">
        <v-row style="min-width:800px">
          <v-col v-for="(item, i) in datasets" :key="i" cols="3">
            <v-card class="mx-auto" max-width="200" height="260px">
              <v-img :src="item.src" height="150px" />
              <v-card-title class="headline">  
              <v-card-title>{{item.title}}</v-card-title>
              <v-card-subtitle class="text-left">{{item.subtitle}}</v-card-subtitle>
            </v-card>
          </v-col>
          <v-col cols="3" align-self="center" style="height:260px;padding:12px">
                <v-btn fab color="#42b983" @click="addDataset">
                  <v-icon color="white">mdi-plus</v-icon>
                </v-btn>
          </v-col>
        </v-row>
    </div>-->
  </v-container>
</template>

<script>
import GridCard from "../components/GridCard.vue";
export default {
  components: {
    gridcard: GridCard
  },
  data() {
    return {
      draggable: false,
      datasets: [
        {
          type: "add",
        },
        {
          src: "https://miro.medium.com/max/245/1*nlfLUgHUEj5vW7WVJpxY-g.png",
          title: "MNIST",
          subtitle: "handwritten digits"
        },
        {
          src:
            "https://storage.googleapis.com/kaggle-competitions/kaggle/3362/media/woof_meow.jpg",
          title: "Cats vs Dogs",
          subtitle: "Ellie Goulding"
        }
      ]
    };
  },
  methods: {
    addDataset: function() {
      this.datasets.push({
        src: `https://storage.googleapis.com/kaggle-competitions/kaggle/3362/media/woof_meow.jpg`,
        title: "Test",
        subtitle: "subtitle Test"
      });
      // #TODO: 서버에서 데이터 가져오기
    },
    handleMousedown: function(item) {
      if(item.type === "add") {
        this.draggable = false;
      }
      else {
        this.draggable = true;
      }
    }
  }
};
</script>

<style lang="scss">
.add-button {
  height: 100%;
  padding: 12px;
}
.add_dataset {
  position: relative;
  cursor: pointer;
  width: 100%;
  outline: 0;
  border: 1.5px dashed #bdc1c6;
  border-radius: 4px;
  background: transparent;
  overflow: hidden;
  text-transform: none !important;
}
</style>