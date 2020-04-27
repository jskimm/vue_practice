<template>
  <div class="card-area">
    <template v-for="(item, i) in items">
      <v-card :key="i" width="600" color="#ffffff" class="item">
        <v-card-title class="card-title">
          <div class="text">{{item.title}}</div>
          <v-btn small fab tile text color="gray">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-card-title>
        <v-divider />
        <v-card-subtitle>
          <div class="sub-title">Add Image Samples:</div>
          <div class="button-area">
            <!-- <v-btn width="80" height="60" color="#E3F2FD" large depressed class="icon-btn">
              <v-icon color="#1565C0">videocam</v-icon>
              <div class="text">Webcam</div>
            </v-btn> -->
            <v-btn width="80" height="60" color="#E3F2FD" large depressed class="icon-btn">
              <v-icon color="#1565C0">mdi-cloud-upload</v-icon>
              <div class="text">Upload</div>
            </v-btn>
          </div>
        </v-card-subtitle>
      </v-card>
    </template>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        title: "Class 1"
      },
      {
        title: "Class 2"
      }
    ]
  })
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
</style>