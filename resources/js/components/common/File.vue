<template>
  <v-card flat class="mb-3 wrap-component-table" outlined>
    <v-card-title>
      <h4>FILE UPLOAD</h4>
    </v-card-title>
    <v-divider></v-divider>
    <v-card-text>
      <v-form ref="form" v-model="valid">
        <v-simple-table>
          <template v-slot:default>
            <thead dark>
              <tr>
                <th class="text-center">No.</th>
                <th class="text-center">File Name</th>
                <th class="text-center">Download</th>
                <th class="text-center">Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="file in attachedFiles" :key="file.id">
                <td class="text-center">{{ file.id }}</td>
                <td>{{ file.origin_name }}</td>
                <td class="text-center">
                  <v-icon color="blue" @click="downloadFile(file.id)">mdi-cloud-download</v-icon>
                </td>
                <td class="text-center">
                  <v-icon color="red" @click="deleteFile(file)" :disabled="isDisabled">mdi-delete</v-icon>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="3">
                  <div>
                    <v-file-input
                      label="Upload Files"
                      v-model="files"
                      multiple
                      chips
                      @change="selectFiles"
                      accept="image/png, image/jpeg, application/pdf, application/vnd.ms-powerpoint, application/vnd.ms-excel, application/zip, application/msword"
                      :disabled="isDisabled"
                    ></v-file-input>
                  </div>
                </td>
                <td>
                  <v-btn @click="uploadFiles()" color="primary" :disabled="isDisabled">Upload</v-btn>
                </td>
              </tr>
              <tr>
                <td colspan="4">
                  <div
                    class="mt-3 mb-3"
                  >Allowed: pdf, png, jpeg, powerpoint, excel, msword, zip / File size should be less than 5 MB.</div>
                </td>
              </tr>
            </tfoot>
          </template>
        </v-simple-table>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import Axios from "axios";
export default {
  props: [
    "title",
    "model_id",
    "model",
    "storage",
    "currentStatus",
    "currentMode",
    "permissions"
  ],
  data: () => ({
    files: [],
    attachedFiles: [],
    selectedFiles: [],
    valid: false
  }),

  computed: {
    isDisabled() {
      if (
        this.permissions.includes("edit-quotation") &&
        this.currentMode === "view"
      ) {
        return false;
      } else {
        return true;
      }
    }
  },

  methods: {
    initFile() {
      Axios.get(
        "/api/files/model/" + this.model + "/model_id/" + this.model_id
      ).then(response => {
        this.attachedFiles = Object.assign([], response.data.files);
      });
    },

    selectFiles() {
      const formData = new FormData();
      for (var i = 0; i < this.files.length; i++) {
        let file = this.files[i];
        formData.append("files[" + i + "]", file);
      }

      formData.append("model", this.model);
      formData.append("model_id", this.model_id);
      formData.append("storage", this.storage);
      this.selectedFiles = formData;
    },

    uploadFiles() {
      Axios.post("/api/files", this.selectedFiles, {
        headers: { "Content-Type": "multipart/form-data" }
      })
        .then(response => {
          this.initFile();
        })
        .catch(error => {});
      this.selectedFiles = [];
      this.files = [];
    },

    downloadFile(fileId) {
      Axios.get(
        "/api/files/" + fileId + "/storage/" + this.storage + "/download",
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

    deleteFile(file) {
      Axios.delete("/api/files/" + file.id + "/storage/" + this.storage).then(
        response => {
          const index = this.attachedFiles.indexOf(file);
          this.attachedFiles.splice(index, 1);
        }
      );
    },

    // QT, PO 에서 resetComment()로 수정해야 함.
    reset() {
      this.attachedFiles = [];
    },

    resetFile() {
      this.attachedFiles = [];
    }
  }
};
</script>