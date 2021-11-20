import { RecipeData } from "./recipeSlice";

export const filterRecipes = (recipes: RecipeData[]) => {
  return recipes.filter((recipe) => {
    const recipeName = recipe.name.toLowerCase();
    if (
      !recipeName.includes("recipes") &&
      !recipeName.includes("roundup") &&
      !recipeName.includes("plan") &&
      !recipeName.includes("resources")
    ) {
      return recipe;
    }
    return null;
  });
};
