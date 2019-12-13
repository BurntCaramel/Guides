# Dovetail

- [GitHub](https://github.com/RoyalIcing/dovetail)
- [Documentiation]([Documentation]([![GoDoc](https://godoc.org/github.com/RoyalIcing/dovetail?status.svg)](https://godoc.org/github.com/RoyalIcing/dovetail)))

Friendly HTML Components for Go, inspired by SwiftUI, Elm, React.

- Produce ARIA-compliant HTML markup easily.
- Create components using functions.
- Supports ARIA and data attributes.
- Conveniently wrap elements in `<ul>` & `<li>` with `List()`

```go
Render(
  w,
  Div(
    Header(
      Nav(
        AriaLabel("Primary"),
        List(
          Link("/", Text("Home")),
          Link("/about", Text("About")),
          Link("/pricing", Text("Pricing")),
          Link("/sign-in", Text("Sign In")),
          Link("/join", Text("Join")),
        ),
      ),
    ),
    Main(
      Article(
        H(1, Text("Welcome")),
        Markdown(content),
      ),
    ),
  )
)
```
