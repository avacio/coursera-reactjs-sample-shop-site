import { createSlice } from "@reduxjs/toolkit";
import { plants } from "./data/plants";

export const plantSlice = createSlice({
  name: "plant",
  initialState: [
    {
      category: "flowering",
      img: "/images/peace-lily-4286514_1280.jpg",
      name: "Peace Lilies",
      cost: 17,
      quantity: 0,
    },
    {
      category: "flowering",
      img: "/images/ai-generated-9004262_640.jpg",
      name: "Orchid",
      cost: 45,
      quantity: 0,
    },
    {
      category: "flowering",
      img: "/images/african-violet-5054649_640.jpg",
      name: "African Violets",
      cost: 6,
      quantity: 0,
    },
    {
      category: "succulent",
      img: "/images/aloe-vera-5157522_640.jpg",
      name: "Aloe Vera",
      cost: 35,
      quantity: 0,
    },
    {
      category: "succulent",
      img: "/images/jade-plant-6569195_640.jpg",
      name: "Jade Plant",
      cost: 29,
      quantity: 0,
    },
    {
      category: "cactus",
      img: "/images/plant-3101751_640.jpg",
      name: "Christmas Cactus",
      cost: 8,
      quantity: 0,
    },
    {
      category: "cactus",
      img: "/images/Potted-Old-Man-Cactus.jpg",
      name: "Old Man Cactus",
      cost: 10,
      quantity: 0,
    }
  
  ],
  reducers: {
   
    incrementQuantity: (state, action) => {
      const { payload: index } = action;
      if (state[index]) {
        state[index].quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const { payload: index } = action;
      if (state[index] && state[index].quantity > 0) {
        state[index].quantity--;
      }
    },
  },
});

export const { incrementQuantity, decrementQuantity } = plantSlice.actions;

export default plantSlice.reducer;
