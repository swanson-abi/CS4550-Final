import { createSlice } from "@reduxjs/toolkit";
import { recipes } from "../../Database";
const initialState = {
  recipes: recipes,
};
const recipeSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    setRecipes: (state, action) => {
      state.recipes = action.payload;
    },
    addRecipe: (state, { payload: recipes }) => {
      const newRecipe: any = {
        _id: new Date().getTime().toString(),
        lessons: [],
        name: recipes.name,
        cookbook: recipes.cookbook,
      };
      state.recipes = [...state.recipes, newRecipe] as any;
    },
    deleteRecipe: (state, { payload: moduleId }) => {
      state.recipes = state.recipes.filter(
        (m: any) => m._id !== moduleId);
    },
    updateRecipe: (state, { payload: module }) => {
      state.recipes = state.recipes.map((m: any) =>
        m._id === module._id ? module : m
      ) as any;
    },
    editRecipe: (state, { payload: moduleId }) => {
      state.recipes = state.recipes.map((m: any) =>
        m._id === moduleId ? { ...m, editing: true } : m
      ) as any;
    },
  },
});
export const { addRecipe, deleteRecipe, updateRecipe, editRecipe, setRecipes } =
recipeSlice.actions;
export default recipeSlice.reducer;