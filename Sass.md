# Let's learn sass

## 1. Normal css can also be written in sass

> Example : -

```scss
.header {
  background: red;
  display: flex;
  justify-content: center;
  align-items: center;
}
```

## 2. Css variables representation in sass

> Example :-

```scss
$primaryBtn: red;
$textColor: blue;
```

> Usage :-

```scss
nav {
  background: $primaryBtn;
}
```

## 3. Sass offers nesting of child elements styles

> Sass Representation :-

```scss
.header {
  background: red;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    padding: 2rem;
    color: black;
    background-color: orange;
  }

  p {
    font-size: 1.6rem;
  }
}
```

> CSS Representation of above : -

```css
.header button {
  padding: 2rem;
  color: black;
  background-color: orange;
}

.header p {
  font-size: 1.6rem;
}
```

## 4. Using psuedoclasses in sass

> Example :-

```scss
.header {
  background: red;

  button {
    background-color: orange;
    &:hover {
      background: green;
    }
    &::after {
      content: "";
    }
  }
}
```

## 5. Importing scss to another scss file.

> Naming Convention :-

```
_fileName.scss
```

> Usage :-

```scss
@import "./fileName";
```

## 6. Using Functions in sass (No parameters).

> Declaration :-

```scss
@mixin functionName {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

> Usage :-

```scss
.header {
  @include functionName();
  background: red;
  color: black;
}
```

## 7. Using Paramterized Functions in sass (Parametrized).

> Declaration :-

```scss
@mixin functionName($direction) {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: $direction;
}
```

> Usage :-

```scss
.header {
  @include functionName(column);
  background: red;
  color: black;
}
```

## 8. Copying scss of one element to other

> Usage :-

```scss
header {
  background: red;
  font-size: 1.2rem;
  color: skyblue;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.contact {
  @extend header;
  background: purple; // Overrides background property
}
```
