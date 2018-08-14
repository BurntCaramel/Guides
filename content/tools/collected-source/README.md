# Collected Source

This open source service lets you source content from your content stores: GitHub, Trello, S3.

Root GraphQL Endpoint: <https://1.source.collected.design/graphql>

## GitHub

Currently works with public repos only.

### Query all files in the RoyalIcing/lofi-bootstrap repo

```graphql
{
  gitHubRepo(owner: "RoyalIcing", repoName: "lofi-bootstrap") {
    owner,
    files {
      path
      content
    }
  }
}
```

### Query all Node.js subprojects in the zendeskgarden/react-components monorepo

```graphql
{
  gitHubRepo(owner: "zendeskgarden", repoName: "react-components") {
    npmProjects {
      directoryPath
      name
      version
      private
      license
      homepage
      npmOrgURL
      dependencies {
        items {
          name
          rule
        }
      }
    }
  }
}
```

## Trello

Currently works with public boards only.

### Query lists and their associated cards in a specific Trello board

```graphql
{
  trelloBoard(id: "580710faeb62c4f7a6fa7786") {
    name
    id
    lists {
      id
      name
      cards {
        id
        name {
          text
        }
        desc {
          source
        }
      }
    }
  }
}
```

## S3

(To come)
