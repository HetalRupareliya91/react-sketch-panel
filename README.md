# React Sketch Panel

A powerful **React sketching and drawing library** built on top of **react-whiteboard-pdf**, featuring the new **Paintboard** component for interactive sketch creation, freehand drawing, image editing, and customizable canvas controls.

Designed for AI image generation tools, drawing applications, educational platforms, annotation systems, and creative web applications.

![React Sketch Panel](./app-example.png)

---

# 🚀 Live Demo

**Demo:** https://statuesque-muffin-fb224e.netlify.app/

---

# Overview

React Sketch Panel extends the functionality of **react-whiteboard-pdf** by introducing the **Paintboard** component with enhanced sketching capabilities.

The library provides an intuitive drawing experience with configurable tools, multiple canvas sizes, zoom controls, image export, and customizable drawing settings while remaining lightweight and easy to integrate into any React application.

---

# Features

- 🎨 Interactive Paintboard component
- ✏️ Freehand drawing
- 🩹 Eraser tool
- 🖌️ Adjustable brush size
- 🎨 Color picker
- 🖼️ Image upload
- 📤 Export canvas as image
- 📤 Export image without background
- 🔍 Zoom controls
- 📂 Save & restore canvas state using JSON
- 📏 Multiple canvas sizes
- ⚡ Built with Fabric.js
- 🧩 Highly customizable toolbar

---

# Technologies Used

- React 17+
- Fabric.js
- Styled Components
- Sass
- File Saver
- React PDF
- Babel

---

# Compatibility

- React 17 or later

---

# Installation

Using npm

```bash
npm install react-sketch-panel
```

Using Yarn

```bash
yarn add react-sketch-panel
```

---

# Basic Usage

```jsx
import { Paintboard } from "react-sketch-panel";

function App() {
  return <Paintboard />;
}

export default App;
```

---

# Advanced Usage

```jsx
import { Paintboard } from "react-sketch-panel";

const sizes = [
  "512x512",
  "800x600",
  "600x800",
  "1920x1080"
];

function App() {
  return (
    <Paintboard
      mode="sketch"
      sizes={sizes}
      maxWidth={512}
      maxHeight={512}
      drawingSettings={{
        brushWidth: 5,
        background: false,
        currentColor: "#000000",
        fill: false
      }}
      controls={{
        PENCIL: true,
        MOVE: true,
        ERASERDRAW: true,
        CLEAR: true,
        FILL: true,
        BRUSH: true,
        COLOR_PICKER: true,
        DEFAULT_COLORS: true,
        FILES: true,
        SAVE_AS_IMAGE: true,
        SAVE_AS_IMAGE_WITHOUT_BACKGROUNDIMAGE: true,
        ZOOM: true
      }}
      settings={{
        zoom: 1,
        minZoom: 0.05,
        maxZoom: 9.99,
        contentJSON: null
      }}
      onObjectAdded={(data, event, canvas) => {}}
      onObjectRemoved={(data, event, canvas) => {}}
      onZoom={(data, event, canvas) => {}}
      onImageUploaded={(data, event, canvas) => {}}
      onPDFUploaded={(data, event, canvas) => {}}
      onPDFUpdated={(data, event, canvas) => {}}
      onPageChange={(data, event, canvas) => {}}
      onOptionsChange={(data, event, canvas) => {}}
      onSaveCanvasAsImage={(data, event, canvas) => {}}
      onConfigChange={(data, event, canvas) => {}}
      onSaveCanvasState={(data, event, canvas) => {}}
    />
  );
}

export default App;
```

---

# Configuration

## Drawing Settings

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| brushWidth | Number | 5 | Drawing brush size |
| background | Boolean | false | Show dotted background |
| currentColor | String | #000000 | Active drawing color |
| fill | Boolean | false | Fill drawn shapes |

---

## Controls

Enable or disable toolbar buttons individually.

Available controls include:

- PENCIL
- MOVE
- ERASERDRAW
- CLEAR
- FILL
- BRUSH
- COLOR_PICKER
- DEFAULT_COLORS
- FILES
- SAVE_AS_IMAGE
- SAVE_AS_IMAGE_WITHOUT_BACKGROUNDIMAGE
- ZOOM

---

## Settings

| Property | Description |
|-----------|-------------|
| zoom | Initial zoom level |
| minZoom | Minimum zoom |
| maxZoom | Maximum zoom |
| contentJSON | Restore saved canvas state |

---

## Event Callbacks

The Paintboard component provides several callback functions.

```jsx
onObjectAdded()
onObjectRemoved()
onZoom()
onImageUploaded()
onPDFUploaded()
onPDFUpdated()
onPageChange()
onOptionsChange()
onSaveCanvasAsImage()
onConfigChange()
onSaveCanvasState()
```

Each callback receives:

```jsx
(data, event, canvas)
```

allowing complete access to the underlying Fabric.js canvas.

---

# Development

Clone the repository

```bash
git clone https://github.com/HetalRupareliya91/react-sketch-panel.git
```

Navigate to the project

```bash
cd react-sketch-panel
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm start
```

Build the project

```bash
npm run build
```

Run tests

```bash
npm test
```

---

# Project Structure

```text
src/
│
├── components/
├── lib/
├── styles/
└── index.js

dist/

README.md
package.json
```

---

# License

This project is intended for educational and commercial use.

---

# Credits

This project is based on **react-whiteboard-pdf** and extends it with the **Paintboard** component and additional sketching capabilities.
