import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { filterRecipes } from "./filters";

export interface RecipeState {
  searchTerm: string;
  isSearching: boolean;
  recipeArray: RecipeData[];
  condensedRecipe: RecipeData | {};
}

export interface RecipeData {
  link: string;
  imgSrc: string;
  name: string;
  source: string;
}

const initialState: RecipeState = {
  searchTerm: "",
  isSearching: false,
  recipeArray: [],
  condensedRecipe: {},
};

export const getRecipeData = createAsyncThunk(
  "recipe/getRecipeData",
  async (func: Function, thunkAPI: any) => {
    try {
      const { searchTerm } = thunkAPI.getState().recipe;
      const responseData = await func(searchTerm);
      return responseData;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

export const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    setRecipeArray: (state, action: PayloadAction<RecipeData[]>) => {
      const filteredRecipeArray = filterRecipes(action.payload);
      state.recipeArray = filteredRecipeArray;
    },
    setCondensedRecipe: (state, action: PayloadAction<RecipeData>) => {
      state.condensedRecipe = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getRecipeData.pending, (state) => {
      state.isSearching = true;
    });
    builder.addCase(
      getRecipeData.fulfilled,
      (state, action: PayloadAction<RecipeData[]>) => {
        state.recipeArray = action.payload;
        state.isSearching = false;
      }
    );
    builder.addCase(getRecipeData.rejected, (state) => {
      state.recipeArray = [];
      state.isSearching = false;
    });
  },
});

export const { setSearchTerm, setRecipeArray, setCondensedRecipe } =
  recipeSlice.actions;
export default recipeSlice.reducer;
