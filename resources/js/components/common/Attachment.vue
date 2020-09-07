<template>
  <v-card flat class="mb-3 wrap-component-table" outlined>
    <v-card-title>
      <h4>{{ title }}</h4>
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
              <tr v-for="attachmentFile in attachmentFiles" :key="attachmentFile.id">
                <td class="text-center">{{ attachmentFile.id }}</td>
                <td>{{ attachmentFile.origin_name }}</td>
                <td class="text-center">
                  <v-icon
                    color="blue"
                    @click="downloadAttachmentFile(attachmentFile.id)"
                  >mdi-cloud-download</v-icon>
                </td>
                <td class="text-center">
                  <v-icon color="red" @click="deleteAttachmentFile(attachmentFile)">mdi-delete</v-icon>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="4">
                  <div>
                    <v-file-input
                      label="Upload Files"
                      v-model="files"
                      multiple
                      chips
                      @change="selectFiles"
                      :disabled="isDisabled"
                      accept="application/pdf"
                    ></v-file-input>
                  </div>
                </td>
              </tr>
              <tr>
                <td colspan="4">
                  <div class="mt-3 mb-3">Allowed: pdf / File size should be less than 5 MB.</div>
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
    "permissions",
    "editPermission"
  ],
  data: () => ({
    files: [],
    valid: false
  }),

  computed: {
    ...mapState("attachments", ["attachmentFiles"]),

    isDisabled() {
      if (this.model === "SaleOrder" || this.model === "Wcc") {
        if (
          this.currentStatus === "OPEN" &&
          this.permissions.includes(this.editPermission) &&
          (this.currentMode === "edit" || this.currentMode === "create")
        ) {
          return false;
        } else {
          return true;
        }
      } else {
        if (
          this.currentStatus === "OPENED" &&
          this.permissions.includes(this.editPermission) &&
          (this.currentMode === "edit" || this.currentMode === "create")
        ) {
          return false;
        } else {
          return true;
        }
      }
    }
  },

  methods: {
    ...mapMutations("attachments", ["SET_SELECTED_ATTACHMENT_FILES"]),

    ...mapActions("attachments", [
      "DOWNLOAD_ATTACHMENT_FILE",
      "DELETE_ATTACHMENT_FILE"
    ]),

    selectFiles() {
      const formData = new FormData();
      for (var i = 0; i < this.files.length; i++) {
        let file = this.files[i];
        formData.append("attachments[" + i + "]", file);
      }
      formData.append("model", this.model);
      formData.append("model_id", this.model_id);
      formData.append("storage", this.storage);
      this.SET_SELECTED_ATTACHMENT_FILES(formData);
    },

    downloadAttachmentFile(attachmentFileId) {
      this.DOWNLOAD_ATTACHMENT_FILE({
        id: attachmentFileId,
        storage: this.storage
      });
    },

    deleteAttachmentFile(attachmentFile) {
      this.DELETE_ATTACHMENT_FILE({
        attachmentFile: attachmentFile,
        storage: this.storage
      });
    }
  }
};
</script>