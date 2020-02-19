# Useful TypeScript Patterns

## Define type variations

The common property `type` is used to pivot.

```typescript
type DeskItem =
  | { type: "lamp" }
  | { type: "notebook"; size: "A5" | "A4" }
  | { type: "pen"; penType: "ballpoint" | "rollerball" | "fountain" };
```

Other suggested pivot property names:

- `base`
- `action` — params are then the other properties
- `kind` — if the name `type` has some other important meaning

## Extracting a single variation (subset of another type)

```typescript
type DeskItem =
  | { type: "lamp" }
  | { type: "notebook"; size: "A5" | "A4" }
  | { type: "pen"; penType: "ballpoint" | "rollerball" | "fountain" };

type Pen = Extract<DeskItem, { type: "pen" }>; // { type: "pen"; penType: "ballpoint" | "rollerball" | "fountain" }
type PenType = Pen["penType"]; // "ballpoint" | "rollerball" | "fountain"
```

## More readable discriminated unions

https://github.com/RoyalIcing/pivots

## Borrowing the types of a third-party library

```typescript
import { render } from "@testing-library/react";

type Rendered = ReturnType<typeof render>;
```

## Testing TypeScript types

- [Testing static types in TypeScript](https://2ality.com/2019/07/testing-static-types.html)