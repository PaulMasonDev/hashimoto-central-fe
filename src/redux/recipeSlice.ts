import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { filterRecipes } from "./filters";

export interface RecipeState {
  searchTerm: string;
  isSearching: boolean;
  recipeArray: RecipeData[];
  isRecipeResults: boolean;
  condensedRecipe: CondensedRecipeData | { isLoading: boolean };
}

export interface RecipeData {
  link: string;
  imgSrc: string;
  name: string;
  source: string;
}

interface CondensedRecipeData {
  link: string;
  imgSrc: string;
  name: string;
  isLoading: boolean;
  ingredients: string[];
  instructions: string[];
}

const initialState: RecipeState = {
  searchTerm: "",
  isSearching: false,
  recipeArray: [],
  isRecipeResults: false,
  condensedRecipe: {
    link: "",
    imgSrc: "",
    name: "",
    isLoading: false,
    ingredients: [],
    instructions: [],
  },
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

export const getIngredientsAndInstructions = createAsyncThunk(
  "recipe/getIngredientsAndInstructions",
  async (func: Function, thunkAPI: any) => {
    try {
      const { link } = thunkAPI.getState().recipe.condensedRecipe;
      const responseData = await func(link);
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
    setCondensedRecipe: (state, action: PayloadAction<CondensedRecipeData>) => {
      state.condensedRecipe = action.payload;
    },
    resetRecipeResults: (state, action: PayloadAction<boolean>) => {
      state.searchTerm = "";
      state.recipeArray = [];
      state.isRecipeResults = false;
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
        state.isRecipeResults = true;
      }
    );
    builder.addCase(getRecipeData.rejected, (state) => {
      state.recipeArray = [];
      state.isSearching = false;
    });
    builder.addCase(getIngredientsAndInstructions.pending, (state) => {
      state.condensedRecipe.isLoading = true;
    });
    builder.addCase(
      getIngredientsAndInstructions.fulfilled,
      (state, action: PayloadAction<Partial<CondensedRecipeData>>) => {
        state.condensedRecipe = {
          ...state.condensedRecipe,
          ingredients: action.payload.ingredients,
          instructions: action.payload.instructions,
        };
        state.condensedRecipe.isLoading = false;
      }
    );
    builder.addCase(getIngredientsAndInstructions.rejected, (state) => {
      state.condensedRecipe.isLoading = false;
    });
  },
});

export const {
  setSearchTerm,
  setRecipeArray,
  setCondensedRecipe,
  resetRecipeResults,
} = recipeSlice.actions;
export default recipeSlice.reducer;
