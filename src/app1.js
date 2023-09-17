import React, { useEffect, useRef, useState } from 'react';
const sizes = ['512x512','800x600','600x800','1920x1080']

const App1 = () => {
  return (
    <Paintboard
      mode={'sketch'} // optional
      sizes={sizes} // :string[] if mode set to 'sketch', sizes prop must be passed 
      maxWidth={512}
      maxHeight={512}
      // default parameters
      drawingSettings={{
        brushWidth: 5, // :number (optional) (default: 5) - brush size for drawing
        background: false, // :boolean (optional) (default: false) - polkadot as background picture
        currentMode: modes.PENCIL, //
        currentColor: '#000000',
        brushWidth: 5,
        fill: false, // if true, square, rectangle, and triangle will be filled with current color
      }}
      // default controls
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
        ZOOM: true,
      }}
      settings={{
        zoom: 1,
        minZoom: 0.05,
        maxZoom: 9.99,
        contentJSON: null, // JSON to render in canvas
      }}
      fileInfo={{
        file: { name: 'Desk 1' },
        totalPages: 1,
        currentPageNumber: 0,
        currentPage: '',
      }}
      onObjectAdded={(addedObject) => {}}
      onObjectRemoved={(removedObject) => {}}
    //   onObjectAdded={(data, event, canvas) => {}}
    //   onObjectRemoved={(data, event, canvas) => {}}
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
};
export default App1;