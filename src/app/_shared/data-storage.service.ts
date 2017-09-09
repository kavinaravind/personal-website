import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import "rxjs/Rx";

import { Recipe } from "../personal/cuisine/recipes/recipe.model";
import { Blog } from "../public/blog/blog.model";

import { AuthService } from "../_services/auth.service";
import { StartupService } from "../_services/startup.service";
import { RecipeService } from "../_services/recipe.service";
import { BlogService } from "../_services/blog.service";

@Injectable()
export class DataStorageService {
    
    constructor(private http: Http,
                private authService: AuthService,
                private startupService: StartupService,        
                private blogService: BlogService,
                private recipeService: RecipeService) {}

    storeBlogs() {
        const token = this.authService.getToken();
        return this.http.put(this.startupService.startupData.databaseURL + '/blogs.json?auth=' + token, this.blogService.getBlogs());
    }

    getBlogs() {
        const token = this.authService.getToken();
        this.http.get(this.startupService.startupData.databaseURL + '/blogs.json?auth=' + token)
            .map(
                (response: Response) => {
                    const blogs: Blog[] = response.json();
                    return blogs;
                }
            )
            .subscribe(
                (blogs: Blog[]) => {
                    this.blogService.setBlogs(blogs);
                },
                err => console.log(err)
            );
    }

    storeRecipes() {
        const token = this.authService.getToken();
        return this.http.put(this.startupService.startupData.databaseURL + '/recipes.json?auth=' + token, this.recipeService.getRecipes());
    }

    getRecipes() {
        const token = this.authService.getToken();
        this.http.get(this.startupService.startupData.databaseURL + '/recipes.json?auth=' + token)
            .map(
                (response: Response) => {
                    const recipes: Recipe[] = response.json();
                    for (let recipe of recipes) {
                        if (!recipe['ingredients']) {
                            recipe['ingredients'] = [];
                        }
                    }
                    return recipes;
                }
            )
            .subscribe(
                (recipes: Recipe[]) => {
                    this.recipeService.setRecipes(recipes);
                },
                err => console.log(err)
            );
    }
}