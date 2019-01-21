# Syrup

<Badge text="alpha" type="warn" />

## Add Markdown

<form class="syrup-add-text-content-form">
  <p>{{ status }}</p>

  <fieldset>
    <label>
      SHA256:
      <input v-model="sha256">
    </label>
    <button type="submit" name="load" @click.prevent="loadFromStore" class="mr-3">Load</button>
    <a :href="previewURL" target="_blank">Preview HTML</a>
  </fieldset>
  
  <fieldset>
    <label>
      Markdown:
      <textarea v-model="textContent" rows="30"></textarea>
    </label>
    <button type="submit" name="add" @click.prevent="addToStore">Add</button>
  </fieldset>
</form>

<style lang="scss">
.syrup-add-text-content-form {
  .mr-3 {
    margin-right: 0.75rem;
  }

  fieldset {
    padding: 0;
    margin: 0;
    margin-bottom: 2.1rem;
    border: none;
  }
  label {
    display: block;
    margin-bottom: 0.7rem;
  }

  input, textarea {
    width: 100%;
    display: block;
    padding: 0.5rem;
  }
  input {
    padding: 0.25rem 0.5rem;
  }

  button {
    display: inline-block;
    padding: 0.25rem 0.5rem;
    font-size: 1rem;
    color: white;
    background: #222;
    border: none;
    border-radius: 0.25em;
  }
}
</style>

<script>
export default {
  data() {
    return {
      isDev: false,
      status: "",
      textContent: "hello",
      sha256: "2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824" // sha256 of "hello"
    };
  },
  computed: {
    baseURL() {
      return this.isDev ? "http://localhost:5533" : "https://collected.systems"
    },
    previewURL() {
      return `${this.baseURL}/pipeline/1/"${this.sha256}"%7C%3EStore.readTextMarkdown%7C%3EMarkdown.toHTML%7C%3EHTML.wrapInPage`
    }
  },
  beforeMount() {
    const isDev = window.location.hostname === "localhost";
    this.isDev = isDev;
  },
  methods: {
    loadFromStore(event) {
      const sha256 = (this.sha256 || "").trim();
      if (!sha256) {
        return;
      }

      const receiver = this;
      fetch(`${this.baseURL}/pipeline/1/"${sha256}"%7C%3EStore.readTextMarkdown`)
        .then(function(response) {
          return response.text();
        })
        .then(function(text) {
          receiver.textContent = text;
        })
        .catch(function(error) {
          receiver.status = `Error: ${error.message}`;
        });
    },
    addToStore(event) {
      const receiver = this;
      fetch(`${this.baseURL}/pipeline/1/Input.read%7C%3EStore.addTextMarkdown`, {
        method: "post",
        body: this.textContent
      })
        .then(function(response) {
          return response.json();
        })
        .then(function(json) {
          receiver.sha256 = json.data;
        })
        .catch(function(error) {
          receiver.status = `Error: ${error.message}`;
        });
    }
  }
};
</script>
