# CollectedQL

<div>
  <Badge text="alpha" type="warn" />
  <a href="https://github.com/RoyalIcing/CollectedQL">Source on GitHub</a>
</div>

---

Store, present, and process content at the edge closest to your users with Cloudflare Workers.

## Run Query

<form class="collected-edge-form collected-edge-run-query-form">
  <p>{{ status }}</p>

  <fieldset>
    <label>
      Query:
      <textarea v-model="query" rows="8"></textarea>
    </label>
    <button type="submit" name="runQuery" @click.prevent="runQuery">Run</button>
    <p class="label">Result:</p>
    <div>{{ queryResult }}</div>
  </fieldset>
</form>

## Add Markdown

<form class="collected-edge-form collected-edge-add-text-content-form">
  <p>{{ status }}</p>

  <fieldset>
    <label>
      Markdown:
      <textarea v-model="textContent" rows="25"></textarea>
    </label>
    <button type="submit" name="add" @click.prevent="addToStore">Add</button>
  </fieldset>

  <fieldset>
    <label>
      SHA256:
      <input v-model="sha256">
    </label>
    <button type="submit" name="load" @click.prevent="loadFromStore" class="mr-3">Load</button>
    <a :href="previewURL" target="_blank">Preview HTML</a>
  </fieldset>
</form>

<style lang="scss">
.collected-edge-form {
  .mr-3 {
    margin-right: 0.75rem;
  }

  fieldset {
    padding: 0;
    margin: 0;
    margin-bottom: 2.1rem;
    border: none;
  }
  label, .label {
    display: block;
    margin-bottom: 0.7rem;
    font-weight: bold;
  }

  input, textarea {
    width: 100%;
    display: block;
    padding: 0.5rem;
    margin-top: 0.25rem;
    font-size: 1rem;
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
      query: "Viewer.ipAddress|>Digest.sha256",
      queryResult: null,
      textContent: `# This is an example of Syrup

Make changes, then press **Add** below to save this content.

Then click on **Preview HTML** below to see a preview inside a simple server-rendered HTML page.`,
      sha256: "465e79d70ce57dac6fb7fe93ce76a889a92f0967dc44dd03f4030e899f9ef613"
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
    runQuery(event) {
      const query = this.query;

      const receiver = this;
      fetch(`${this.baseURL}/pipeline/1/${encodeURIComponent(query)}`)
        .then(function(response) {
          console.log('result received', response.status);
          return response.text();
        })
        .then(function(text) {
          console.log('result text', text);
          receiver.queryResult = text;
        })
        .catch(function(error) {
          receiver.status = `Error: ${error.message}`;
        });
    },
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
