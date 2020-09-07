<?php

namespace App\Http\Controllers\Api;

use App\Model\Project;
use App\Model\Company;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ProjectController extends Controller
{
    public function index()
    {
        $projects = Project::all();
        $companies = Company::where('is_active', true)->get();

        return response()->json([
            "projects" => $projects,
            "companies" => $companies,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|max:50',
            'display_name' => 'required|max:50',
            'status' => 'required',
            'company_id' => 'required',
            'code' => 'required|alpha_num|max:10:unique:projects,code',
            'description' => 'max:255',
            'is_active' => 'required'
        ]);

        $project = new Project;
        $project->name = $request->name;
        $project->display_name = $request->display_name;
        $project->status = $request->status;
        $project->company_id = $request->company_id;
        $project->code = strtoupper($request->code);
        $project->description = $request->description;
        $project->is_active = $request->is_active;
        $project->save();

        return response()->json([
            "project" => $project,
            "resullt" => "success",
            "message" => "Project has been created successfully."
        ]);
    }

    public function update(Request $request, $project_id)
    {
        $project = Project::findOrFail($project_id);

        $request->validate([
            'name' => 'required|max:50',
            'display_name' => 'required|max:50',
            'status' => 'required',
            'company_id' => 'required',
            'code' => 'required|alpha_num|max:10|unique:projects,code,' . $project->id,
            'description' => 'max:255',
            'is_active' => 'required'
        ]);

        $project->name = $request->name;
        $project->display_name = $request->display_name;
        $project->status = $request->status;
        $project->company_id = $request->company_id;
        $project->code = strtoupper($request->code);
        $project->description = $request->description;
        $project->is_active = $request->is_active;
        $project->save();

        return response()->json([
            "project" => $project,
            "resullt" => "success",
            "message" => "Project has been updated successfully."
        ]);
    }
}
