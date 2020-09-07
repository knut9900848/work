<template>
  <div>
    <v-card class="mx-auto mb-3" outlined>
      <v-card-title>
        <h4>COMMENTS</h4>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text class="comment-list">
        <v-list three-line>
          <template v-for="(comment, index) in comments">
            <v-list-item :key="index">
              <v-list-item-avatar>
                <span v-if="comment.author_avatar">
                  <v-img :src="'../img/avatars/'+comment.author_avatar"></v-img>
                </span>
                <span v-else>
                  <v-img
                    :src="'../img/default-avatars/male-avatar.png'"
                    width="50"
                    v-show="comment.author_gender === 'Male'"
                  ></v-img>
                  <v-img
                    :src="'../img/default-avatars/female-avatar.png'"
                    width="50"
                    v-show="comment.author_gender === 'Female'"
                  ></v-img>
                </span>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="author">{{ comment.author_name }}</v-list-item-title>
                <v-list-item-subtitle>
                  <span class="date">{{ $moment(comment.updated_at).format('YYYY-MM-DD hh:mm') }}</span>
                </v-list-item-subtitle>
                <div class="comment-body" v-html="comment.body"></div>
                <div v-show="index === editedIndex">
                  <v-textarea
                    label="Comment"
                    filled
                    class="mt-3"
                    clearable
                    clear-icon="mdi-close-circle"
                    auto-grow
                    rows="1"
                    row-height="15"
                    v-model="editedItem.body"
                    rounded
                  ></v-textarea>
                  <div class="d-flex justify-end">
                    <v-btn color="blue darken-1" small text @click="save">Save</v-btn>
                    <v-btn color="blue darken-1" small text @click="cancel">Cancel</v-btn>
                  </div>
                </div>
              </v-list-item-content>
              <v-list-item-action>
                <v-menu bottom left>
                  <template v-slot:activator="{ on }">
                    <v-btn dark icon v-on="on">
                      <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                  </template>

                  <v-list v-show="user.id === comment.user_id">
                    <v-list-item>
                      <v-list-item-title>
                        <v-btn tile text small color="success" @click="editItem(comment)">
                          <v-icon left>mdi-pencil</v-icon>Edit
                        </v-btn>
                      </v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-title>
                        <v-btn tile text small color="success" @click="deleteItem(comment)">
                          <v-icon left>mdi-close</v-icon>Delete
                        </v-btn>
                      </v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-list-item-action>
            </v-list-item>
          </template>
        </v-list>
        <v-divider></v-divider>
        <div v-show="editedIndex === -1">
          <v-textarea
            label="Comment"
            filled
            class="mt-3"
            clearable
            clear-icon="mdi-close-circle"
            auto-grow
            rows="1"
            row-height="15"
            v-model="editedItem.body"
          ></v-textarea>
          <div class="d-flex justify-end">
            <v-btn color="yellow" outlined text @click="save">Save</v-btn>
          </div>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Axios from "axios";
export default {
  props: ["model", "model_id"],
  data: () => ({
    comments: [],
    editedIndex: -1,
    editedItem: {
      id: "",
      body: "",
      parent_id: "",
      user_id: "",
      commentable_id: "",
      commentable_type: "",
      created_at: "",
      updated_at: "",
      author_avatar: "",
      author_name: ""
    },
    reset_editedItem: {
      id: "",
      body: "",
      parent_id: "",
      user_id: "",
      commentable_id: "",
      commentable_type: "",
      created_at: "",
      updated_at: "",
      author_avatar: "",
      author_name: ""
    }
  }),

  computed: {
    ...mapState("auth", ["user"]),

    formTitle() {
      return this.editedIndex === -1 ? "Add Comment" : "Edit Comment";
    }
  },

  methods: {
    initComment() {
      Axios.get(
        "/api/comments/model/" + this.model + "/model_id/" + this.model_id
      ).then(response => {
        this.comments = response.data.data;
      });
    },
    editItem(item) {
      this.editedIndex = this.comments.indexOf(item);
      this.editedItem = Object.assign({}, item);
    },

    deleteItem(item) {
      var r = confirm("Do you want to delete comment?");
      if (r == true) {
        const index = this.comments.indexOf(item);
        Axios.delete("/api/comments/" + item.id).then(response => {
          this.comments.splice(index, 1);
        });
      }
    },

    cancel() {
      this.editedItem = Object.assign({}, this.reset_editedItem);
      this.editedIndex = -1;
    },

    save() {
      if (this.editedIndex > -1) {
        Axios.put("/api/comments/" + this.editedItem.id, {
          comment: this.editedItem.body,
          model: this.model,
          model_id: this.model_id,
          user_id: this.user.id
        })
          .then(response => {
            Object.assign(this.comments[this.editedIndex], response.data.data);
            this.editedItem = Object.assign({}, this.reset_editedItem);
            this.editedIndex = -1;
          })
          .catch(error => {
            this.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
              text: error.response.data.message,
              color: "red"
            });
          });
      } else {
        Axios.post("/api/comments", {
          comment: this.editedItem.body,
          model: this.model,
          model_id: this.model_id,
          user_id: this.user.id
        })
          .then(response => {
            this.comments.push(response.data.data);
            this.editedItem = Object.assign({}, this.reset_editedItem);
            this.editedIndex = -1;
          })
          .catch(error => {
            this.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
              text: error.response.data.message,
              color: "red"
            });
          });
      }
    },

    // QT, PO 에서 resetComment()로 수정해야 함.
    reset() {
      this.comments = [];
      this.errors = [];
      this.editedItem = Object.assign({}, this.reset_editedItem);
    },

    resetComment() {
      this.comments = [];
      this.errors = [];
      this.editedItem = Object.assign({}, this.reset_editedItem);
    }
  }
};
</script>
<style scoped>
.author {
  font-size: 13px;
  font-weight: bold;
}
.comment-body {
  line-height: 1.5;
  font-size: 13px;
}
.date {
  font-size: 11px;
  color: #999;
}
</style>