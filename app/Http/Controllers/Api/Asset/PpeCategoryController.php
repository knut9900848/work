<?php

namespace App\Http\Controllers\Api\Asset;

use App\Model\Asset\PpeCategory;
use App\Model\Asset\PpeSubCategory;
use App\Model\Asset\PpeSize;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PpeCategoryController extends Controller
{
    public function index()
    { }

    public function getCategory()
    {
        $categories = PpeCategory::all();

        return response()->json([
            "categories" => $categories
        ]);
    }

    public function getSubCategory($category_id)
    {
        $category = PpeCategory::findOrFail($category_id);

        return response()->json([
            "subCategories" => $category->ppe_sub_categories
        ]);
    }

    public function getSize($sub_category_id)
    {
        $subCategory = PpeSubCategory::findOrFail($sub_category_id);

        return response()->json([
            "sizes" => $subCategory->ppe_sizes
        ]);
    }

    public function addCategory(Request $request)
    {
        $request->validate([
            'name' => 'required|max:50'
        ]);

        $category = new PpeCategory;
        $category->name = $request->name;
        $category->save();

        return response()->json([
            "category" => $category,
            "message" => "New Category added successfully."
        ]);
    }


    public function addSubCategory(Request $request, $category_id)
    {
        $request->validate([
            'name' => 'required|max:50',
        ]);

        $subCategory = new PpeSubCategory;
        $subCategory->name = $request->name;
        $subCategory->ppe_category_id = $category_id;
        $subCategory->save();

        return response()->json([
            "subCategory" => $subCategory,
            "message" => "New sub category added successfully."
        ]);
    }

    public function addSize(Request $request, $sub_category_id)
    {
        $request->validate([
            'name' => 'required|max:50',
        ]);

        $size = new PpeSize;
        $size->name = $request->name;
        $size->ppe_sub_category_id = $sub_category_id;
        $size->save();

        return response()->json([
            "size" => $size,
            "message" => "New size added successfully."
        ]);
    }

    public function updateCategory(Request $request, $category_id)
    {
        $request->validate([
            'name' => 'required|max:50'
        ]);

        $category = PpeCategory::findOrFail($category_id);
        $category->name = $request->name;
        $category->save();

        return response()->json([
            "category" => $category,
            "message" => "Category updated successfully."
        ]);
    }

    public function updateSubCategory(Request $request, $sub_category_id)
    {
        $request->validate([
            'name' => 'required|max:50',
        ]);

        $subCategory = PpeSubCategory::findOrFail($sub_category_id);
        $subCategory->name = $request->name;
        $subCategory->save();

        return response()->json([
            "subCategory" => $subCategory,
            "message" => "Sub category updated successfully."
        ]);
    }

    public function updateSize(Request $request, $size_id)
    {
        $request->validate([
            'name' => 'required|max:50',
        ]);

        $size = PpeSize::findOrFail($size_id);
        $size->name = $request->name;
        $size->save();

        return response()->json([
            "size" => $size,
            "message" => "Size updated successfully."
        ]);
    }
}
