import { Injectable } from '@nestjs/common';
import { CreateRecipeInput } from './dto/create-recipe.input';
import { UpdateRecipeInput } from './dto/update-recipe.input';
import { Recipe } from './entities/recipe.entity';
import { create } from "domain";

@Injectable()
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'recipe-1',
      description: 'Recette vide',
      title: 'vide',
      ingredients: [],
      creationDate: new Date(),
    },
    {
      id: 'recipe-2',
      description: 'Tarte au thon',
      title: 'tarte',
      ingredients: [
        'Pate feuilleté',
        '4 oeufs',
        '250ml de lait',
        '1 boite de thon',
      ],
      creationDate: new Date(),
    },
  ];

  async create(createRecipeInput: CreateRecipeInput): Promise<Recipe> {
    const recipe: Recipe = {
      id: `recipe-${this.recipes.length}`,
      description: createRecipeInput.description ?? '',
      title: createRecipeInput.title,
      ingredients: createRecipeInput.ingredients,
      creationDate: new Date(),
    };
    this.recipes.push(recipe);
    return recipe;
  }

  async findAll(): Promise<Recipe[]> {
    return this.recipes;
  }

  findOne(id: number) {
    return `This action returns a #${id} recipe`;
  }

  update(id: number, updateRecipeInput: UpdateRecipeInput) {
    return `This action updates a #${id} recipe`;
  }

  remove(id: number) {
    return `This action removes a #${id} recipe`;
  }
}
