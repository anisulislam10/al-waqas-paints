
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Colors array with names retained for data structure but not displayed
const colors = [
  { name: 'Vibrant Red', value: '#FF0000', images: [
    '/ideas/color_sugg/sherwin-williams-red-obsession-April122020-min.jpg',
    '/ideas/color_sugg/1718110501841-67997d.webp', 
    '/ideas/color_sugg/red-and-black-wall.jpg', 
    '/ideas/color_sugg/luminous-red-ral-3024-3.webp']
  },
  { name: 'Ocean Blue', value: '#0000FF', images: [
    '/ideas/color_sugg/3-tips-wall-colors.jpg', 
    '/ideas/color_sugg/summer-sky-blue-house-colour.webp', 
    '/ideas/color_sugg/ongriddesign_exterior_wall_colour_combination_3_1024x1024.webp', 
    '/ideas/color_sugg/2ebc4f5f52e3a46f322a0ee5fc569d39.jpg'] 
  },
  { name: 'Forest Green', value: '#008000', images: [
    '/ideas/color_sugg/popular-color-royal-hunter-green-63-89-72.jpg',
    '/ideas/color_sugg/interior-house-colors-2024-657cccbc5dec6.avif', 
    '/ideas/color_sugg/benjamin-moore-buffett-green-March302020-min.jpg', 
    '/ideas/color_sugg/teal-green-colored-living-room.jpg'
  ]},
  { name: 'Sunny Yellow', value: '#FFFF00', images: [
    '/ideas/color_sugg/5_paint_colours_that_attract_positive_energy_yellow.webp', 
    '/ideas/color_sugg/sunny-yellow-1642102052.jpg', 
    '/ideas/color_sugg/kendall0814_a_room_with_a_sunny_lemon_accent_wall_with_neutral__93f7b810-9b64-49f9-8e86-9fb74a675ae9.webp', 
    '/ideas/color_sugg/b4f81d6339899676d7fef42c5e0581c9.jpg'
  ]},
  { name: 'Mint Green', value: '#90EE90', images: [
    '/ideas/color_sugg/white-and-sage-green.webp', 
    '/ideas/color_sugg/ba34d67d7184dcf6b1b9eb267bdad9d4.jpg', 
    '/ideas/color_sugg/green-and-black.jpg', 
    '/ideas/color_sugg/green-colour-scheme.jpg'
  ]},
  { name: 'Slate Gray', value: '#808080', images: [
    '/ideas/color_sugg/dove-grey-color-1024x583.png', 
    '/ideas/color_sugg/grey-paint-colors-for-your-home-walls.jpg', 
    '/ideas/color_sugg/stunning-pale-grey-paint-colour.jpg', 
    '/ideas/color_sugg/27876_Sikes_sea_island_day1_471_FINAL_preview-1c0a0513efad4b4fb10b220a2121077b.jpg'
  ]},
  { name: 'Soft White', value: '#F5F5F5', images: [
    '/ideas/color_sugg/Screen-Shot-2021-07-27-at-9.53.31-PM.png', 
    '/ideas/color_sugg/Howth-Ventura_Colour_Collection_-_Paint_Online_1200x1200.webp', 
    '/ideas/color_sugg/Bedroom-paint-colours-Know-ways-to-bedazzle-your-room-with-shine-09.png', 
    '/ideas/color_sugg/Interior-Painting-Home-office-painted-off-white-ProTEK-Painters.webp'
  ]},
  { name: 'Warm Orange', value: '#FFA500', images: [
    '/ideas/color_sugg/thespruce-orangepaint-casawatkinsliving-ab6e6c7bc96e4fd8bb3c2ef33f7704bc.png', 
    '/ideas/color_sugg/orange-living-room-gray-couch-paintzen.jpg', 
    '/ideas/color_sugg/2IDG5-Orange-Colour-Family-Room-900x600-1.webp', 
    '/ideas/color_sugg/shutterstock_500051530_1.jpg'
  ]},
];

export default function DesignSugg() {
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <div className="min-h-screen  flex items-center justify-center p-4 sm:p-8">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-6xl bg-white/5 backdrop-blur-xl rounded-3xl  p-6 sm:p-8"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold text-black text-center mb-8 sm:mb-12 tracking-tight bg-clip-text  bg-gradient-to-r from-blue-200 to-purple-200">
          Color Palette Explorer
        </h1>
        
        {/* Color Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 mb-10 sm:mb-12">
          {colors.map((color) => (
            <motion.button
              key={color.value}
              className="relative p-6 rounded-xl overflow-hidden group shadow-md border border-white/10"
              style={{ backgroundColor: color.value }}
              onClick={() => setSelectedColor(color)}
              whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(255,255,255,0.3)' }}
              whileTap={{ scale: 0.95 }}
              title={color.value} // Show hex code on hover
            >
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-opacity" />
            </motion.button>
          ))}
        </div>

        {/* Selected Color Images */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedColor.value}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-6 sm:mb-8">
              Color {selectedColor.name} Inspiration
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {selectedColor.images.map((image, index) => (
                <motion.div
                  key={`${selectedColor.value}-${index}`}
                  className="relative w-full h-48 sm:h-64 rounded-xl overflow-hidden shadow-lg group"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.2 }}
                >
                  <img
                    src={image}
                    alt={`Color ${selectedColor.value} inspiration ${index + 1}`}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = 'https://via.placeholder.com/200';
                    }}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white text-sm font-medium">Inspiration #{index + 1}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}