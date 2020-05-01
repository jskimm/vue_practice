<template>
  <v-container>
    <div class="card-area" style="display:inline-block">
      <template v-for="(item, i) in this.items">
        <v-card :key="i" width="650" color="#ffffff" class="item">
          <v-card-title class="card-title">
            <input
              v-autowidth="{maxWidth: '960px', minWidth: '20px', comfortZone: 0}"
              v-model="item.title"
              color="#1565C0"
              required
              onfocus="this.select()"
              :disabled="!item.nowModify"
            />
            <v-btn small fab text color="gray" @click="fixTitle(item)">
              <v-icon v-show="!item.nowModify" color="#BDC1C6">mdi-lock-open-outline</v-icon>
              <v-icon v-show="item.nowModify" color="#BDC1C6">mdi-lock-outline</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
            <v-btn icon @click="item.show=!item.show">
              <v-icon>{{ item.show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
            </v-btn>
          </v-card-title>
          <v-divider />
          <v-expand-transition>
            <div v-show="item.show">
              <v-card-subtitle>
                <div class="sub-title">Add Image Samples:</div>
                <div class="button-area">
                  <v-btn width="80" height="60" color="#E3F2FD" large depressed claass="icon-btn">
                    <v-icon color="#1565C0">mdi-cloud-upload</v-icon>
                    <div class="text">Upload</div>
                  </v-btn>
                </div>
              </v-card-subtitle>
            </div>
          </v-expand-transition>
        </v-card>
      </template>

      <v-card-subtitle>
        <v-btn
          class="add_classes"
          color="rgba(0, 0, 0, 0.6)"
          text
          style="padding:30px; height:unset"
          @click="addClass"
        >
          <v-icon>mdi-plus-box</v-icon>
          <div class="sub-title" style="margin-left:5px">Add a class</div>
        </v-btn>
      </v-card-subtitle>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      titleRule: [
        v => !!v || "Name is required",
        v => (v && v.length <= 15) || "Name < 15 characters"
      ],
      items: [
        {
          title: "Class 1",
          nowModify: false,
          show: true
        },
        {
          title: "Class 2",
          nowModify: false,
          show: true

        }
      ]
    };
  },
  methods: {
    addClass: function() {
      this.items.push({
        title: `Class ${this.items.length + 1}`,
        nowModify: false,
        show: true
      });
    },
    fixTitle: function(item) {
      item.nowModify = !item.nowModify;
    }
  }
};
</script>

<style lang="scss">
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