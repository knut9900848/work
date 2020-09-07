<template>
  <v-card class="wrap-component-table">
    <v-toolbar flat>
      <v-toolbar-title>
        <v-badge color="error" bordered :content="itemCount" offset-x="15" offset-y="20">
          <v-chip dark color="blue">
            <v-icon dark>mdi-clipboard-text</v-icon>
          </v-chip>
        </v-badge>&nbsp;
        Purchase Order Terms and Conditions
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn fab small text color="primary" @click="openDialog">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-dialog v-model="dialog" max-width="500px">
        <v-card>
          <v-toolbar flat color="blue-grey darken-1">
            <v-toolbar-title>Purchase Order Terms and Conditions</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn fab small text color="primary" @click="closeDialog">
              <v-icon>mdi-window-close</v-icon>
            </v-btn>
          </v-toolbar>
          <v-card-text>
            <div class="mt-5">
              <v-text-field
                v-model="editedItem.name"
                label="Display Name"
                outlined
                :error-messages="errors.name"
              ></v-text-field>

              <v-file-input
                accept="application/pdf"
                label="File input"
                @change="selectFile()"
                chips
              ></v-file-input>

              <v-textarea v-model="editedItem.description" label="Description" outlined></v-textarea>

              <v-checkbox v-model="editedItem.is_active" label="Activate"></v-checkbox>
            </div>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text color="primary" class="mr-3" @click="save">SAVE</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-toolbar>
    <v-card-text>
      <v-simple-table height="350" fixed-header>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-center">ID</th>
              <th class="text-center">Name</th>
              <th class="text-center">Download</th>
              <th class="text-center">Activation</th>
              <th class="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in data" :key="item.id">
              <td class="text-center">{{ item.id }}</td>
              <td class="text-center">{{ item.name }}</td>
              <td class="text-center">
                <v-icon color="blue" @click="downloadFile(item.id)">mdi-cloud-download</v-icon>
              </td>
              <td class="text-center">
                <v-chip
                  color="primary"
                  v-if="item.is_active === true || item.is_active === 1"
                >Active</v-chip>
                <v-chip v-else>Active</v-chip>
              </td>
              <td class="text-center">
                <!-- <v-btn small text @click="openDialog(item)">
                  <v-icon color="blue lighten-2">mdi-pencil-circle</v-icon>
                </v-btn>-->
                <v-btn small text @click="deleteItem(item)">
                  <v-icon color="blue lighten-2">mdi-delete-circle</v-icon>
                </v-btn>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card-text>
  </v-card>
</template>

<script>
import Axios from "axios";
export default {
  props: ["data"],
  data() {
    return {
      selectedFile: "",
      editedIndex: -1,
      errors: [],
      dialog: false,
      editedItem: {
        id: "",
        name: "",
        file_name: null,
        file_origin_name: null,
        extension: null,
        mime_type: null,
        is_active: false
      },
      resetEditedItem: {
        id: "",
        name: "",
        file_name: null,
        file_origin_name: null,
        extension: null,
        mime_type: null,
        is_active: false
      }
    };
  },

  computed: {
    itemCount() {
      return this.data.length;
    }
  },

  methods: {
    openDialog(item) {
      this.editedIndex = this.data.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    closeDialog() {
      this.dialog = false;
      this.errors = [];
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.resetEditedItem);
        this.editedIndex = -1;
      }, 300);
    },

    save() {
      // edit
      if (this.editedIndex > -1) {
        // Axios.put('/api/purchase-order-terms-and-conditions/' + this.editedItem.id, this.editedItem)
        // .then(response => {
        //   Object.assign(this.data[this.editedIndex], response.data.purchaseOrderTermsAndConditions)
        //   this.$store.dispatch('SHOW_GLOBAL_SNACKBAR',{ text: response.data.message })
        //   this.errors = []
        //   this.closeDialog()
        // })
        // .catch(error => {
        //   this.errors = error.response.data.errors
        //   this.$store.dispatch('SHOW_GLOBAL_SNACKBAR',{text: error.response.data.message, color: "red"})
        // })
      } else {
        let formData = new FormData();
        formData.append("file", this.selectedFile);
        formData.append("id", this.editedItem.id);
        formData.append("name", this.editedItem.name);
        formData.append("description", this.editedItem.description);
        formData.append("is_active", JSON.stringify(this.editedItem.is_active));
        Axios.post("/api/admin/purchase-order-terms-and-conditions", formData, {
          headers: { "Content-Type": "multipart/form-data" }
        })
          .then(response => {
            this.data.push(response.data.purchaseOrderTermsAndConditions);
            this.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
              text: response.data.message
            });
            this.errors = [];
            this.closeDialog();
          })
          .catch(error => {
            this.errors = error.response.data.errors;
            this.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
              text: error.response.data.message,
              color: "red"
            });
          });
      }
    },

    deleteItem(item) {
      const index = this.data.indexOf(item);
      if (confirm("Do you really want to delete?") === true) {
        Axios.delete(
          "/api/admin/purchase-order-terms-and-conditions/" + item.id
        ).then(response => {
          console.log(response.data);
          if (response.data.result === "success") {
            this.data.splice(index, 1);
            this.errors = [];
          }
          this.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
            text: "[" + response.data.result + "]" + response.data.message
          });
        });
      }
    },

    downloadFile(file_id) {
      Axios.get(
        "/api/admin/purchase-order-terms-and-conditions/" +
          file_id +
          "/download",
        { responseType: "arraybuffer" }
      ).then(response => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", response.headers.filename); //or any other extension
        document.body.appendChild(link);
        link.click();
      });
    },

    selectFile(e) {
      this.selectedFile = event.target.files[0];
    }
  }
};
</script>