# Guide to Accessibility-First Testing in React

- [Testing Library](https://testing-library.com/):
  - [Queries](https://testing-library.com/docs/dom-testing-library/api-queries)
  - [Jest matchers](https://github.com/testing-library/jest-dom)

## Link

<svg viewBox="0 0 144 44" width="144" height="44">
  <text text-anchor="left" x="10" y="28" style="font-size: 1.5rem; text-decoration: underline;">Edit profile</text>
</svg>

### Testing Library

```ts
fireEvent.click(
  rendered.getByText(/edit profile/i)
);
```

### Capybara

```ruby
click_link('Edit profile')
```

## Button

<svg viewBox="0 0 144 44" width="144" height="44">
  <rect x="1" y="1" width="142" height="42" rx="10" stroke-width="2" stroke="#444" fill="#6df" />
  <text text-anchor="middle" x="72" y="28" style="font-size: 1.25rem;">New post</text>
</svg>

### Testing Library

```ts
fireEvent.click(
  rendered.getByText(/new post/i)
);
```

### Capybara

```ruby
click_button('New post')
```

----

## Checkbox

<svg viewBox="0 0 160 44" width="160" height="44">
  <rect x="1" y="10" width="24" height="24" rx="6" stroke-width="2" stroke="#444" fill="white" />
  <text text-anchor="left" x="32" y="28" style="font-size: 1.25rem;">Send reminders</text>
</svg>

### Testing Library

```ts
const checkbox = rendered.getByText(/send reminders/i);

expect(checkbox).not.toBeChecked();

fireEvent.click(checkbox);

expect(checkbox).toBeChecked();
```

### Capybara

```ruby
expect(find_field('Send reminders')).to_not be_checked

check('Send reminders')

expect(find_field('Send reminders')).to be_checked
```

----

