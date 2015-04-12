# Pixel-Grid

Customizable and lightweight library.

## What is it?

Pixel Grid was designed to act like a collection of enlarged pixels to demonstrates words or drawings. Everything about pixel grid made to be highly customizable to suit your needs.

## Getting Started
First, [Download](#) the latest minified version of pixel grid.

After downloading the files you must include the CSS and Javascript into your web page.
```html
<link rel="stylesheet" href="pixelgrid.min.css" type="text/css">
<script src="pixelgrid.min.js" type="text/javascript"></script>
```

### Creating the grid

To add a grid to your webpage, simply create a new `<div>` with a `id` of `Pixel-Grid` and inside the div call the `GenerateGrid` function with your desired settings.

```html
<div id="Pixel-Grid">
    <script>
        GenerateGrid({
           rows: 10,
           colums: 30,
           cell_highlighted: "#2ecc71"
        });
    </script>
</div>
``` 

### Drawing

To start adding words to your grid, call the `drawWord` function. `drawWord` accepts two parameters: startPoint, letters.

* **startPoint**: Array that contains an x and y coordinate that defines the starting position for where the object will be drawn upon
* **letters**: Letters that will be drawn

```javascript
drawWord([1,2], “Pixel”);
```

If you are interested in other drawing functions or are interested in drawing your own shapes, visit the documentation (Working on it).

## Contributing

Are you interested in contributing to `Pixel-Grid.js`? That’s awesome! I will try to keep the [issues](https://github.com/kirkbyo/Pixel-Grid/issues) updated with bugs that need fixing or possible features. If you have an idea for a possible feature add it to the [issues](https://github.com/kirkbyo/Pixel-Grid/issues/new) and we can discuss it there.

## License

This project is licensed under the [MIT License](#).

