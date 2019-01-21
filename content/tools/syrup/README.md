# Syrup

<Badge text="alpha" type="warn" />

## Add Markdown

<form class="syrup-add-text-content-form" v-on:submit.prevent="addToStore">
  <p v-model="status"></p>
  <label>
    Markdown:
    <textarea v-model="textContent" rows="30"></textarea>
  </label>
  <button type="submit">Add</button>
</form>

<style lang="scss">
.syrup-add-text-content-form {
  label {
    display: block;
  }

  textarea {
    width: 100%;
    display: block;
  }

  button {
    display: block;
  }
}
</style>

<script>
export default {
  data() {
    return {
      status: "",
      textContent: "hello"
    };
  },
  methods: {
    addToStore(event) {
      const receiver = this;
      fetch("https://collected.systems/pipeline/1/Input.read%7C%3EStore.addTextMarkdown", {
        method: "post",
        body: this.textContent
      })
        .then(function(response) {
          return response.json();
        })
        .then(function(json) {
          receiver.status = json.data;
        });
    }
  }
};
</script>
