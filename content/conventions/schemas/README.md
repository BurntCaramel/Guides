# Collected Schemas

Community shared GraphQL schemas.

Posts are modelled after blogs, tweets, and chat messages such as those in Slack.

Users may post writing, images, code snippets, links.

A tweet requires some sort of content: text and/or images and/or links and/or video. Tweets may reference other tweets, either by replying to them, quoting them, or linking to them.

## Relay Base Interfaces

```graphql
interface Node {
  id: ID!
}

interface Edge {
  cursor: ID
  node: Node
}

interface Connection {
  pageInfo: PageInfo!
  edges: [Edge]
}
```

## Primitives

```graphql
type UTCTime {
  iso8601: String
}
```

## User

```graphql
type User implements Node {
  id: ID!

  emails: [String]
  username: String
}
```

## Assets

```graphql
enum MediaBaseType {
  TEXT
  IMAGE
  AUDIO
  VIDEO
  APPLICATION
}

# See https://www.iana.org/assignments/media-types/media-types.xhtml
type MediaType {
  baseType: String
  subtype: String
  parameters: [String]
}

interface Asset {
  mediaType: MediaType!
}

type AssetReference implements Node {
  id: ID!

  asset: Asset
}

type MarkdownDocument implements Asset {
  mediaType: MediaType!
  source: String

  assetReferences: [AssetReference]
}

type Image implements Node, Asset {
  id: ID!

  mediaType: MediaType!
  viewableURL: ID
}
```

## Post

```graphql
type PostsConnection {
  edges: [PostEdge]
}

type PostEdge {
  node: Post
  cursor: ID
}

type Post implements Node {
  id: ID!

  authors: [User]
  title: String
  content: MarkdownDocument
  createdAt: UTCTime
  updatedAt: UTCTime
}
```

## Discussion

```graphql
type Discussion implements Node {
  id: ID!

  posts(first: Int!, before: ID): PostsConnection
}
```

## Channel

```graphql
type Channel implements Node {
  id: ID!

  slug: String
  description: String

  recentMessages(last: Int!, before: ID): ChannelMessagesConnection
}

type ChannelMessagesConnection {
  edges: [ChannelMessageEdge]
}

type ChannelMessageEdge {
  node: ChannelMessage
  cursor: ID
}

type ChannelMessage implements Node {
  id: ID!
  channelID: ID!

  author: User
  publishedOn: Int
}
```

## Publication

```graphql
type PublicationsConnection {
  edges: [PublicationEdge]
}

type PublicationEdge {
  node: Publication
  cursor: ID
}

type Publication implements Node {
  id: ID!
  slug: String
  description: String

  recentPosts(last: Int! before: ID): PublicationPostsConnection
}
```

## Query

```graphql
type Query {
  publications(first: Int!, after: ID): PublicationsConnection
}
``
