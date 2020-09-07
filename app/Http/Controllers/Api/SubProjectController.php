<?php

namespace App\Http\Controllers\Api;

use App\Model\SubProject;
use App\Model\Project;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SubProjectController extends Controller
{
  public function index($project_id)
  {
    $project = Project::findOrFail($project_id);
    $subProjects = $project->sub_projects;

    return response()->json([
      "subProjects" => $subProjects,
    ]);
  }

  public function store(Request $request, $project_id)
  {
    $request->validate([
      'name' => 'required|max:50',
      'display_name' => 'required|max:50',
      'status' => 'required',
      'company_id' => 'required',
      'code' => 'required|alpha_num|max:10:unique:projects,code',
      'description' => 'max:255'
    ]);

    $subProject = new SubProject;
    $subProject->name = $request->name;
    $subProject->display_name = $request->display_name;
    $subProject->project_id = $project_id;
    $subProject->company_id = $request->company_id;
    $subProject->description = $request->description;
    $subProject->code = strtoupper($request->code);
    $subProject->is_active = $request->is_active;
    $subProject->save();

    return response()->json([
      "result" => "success",
      "message" => "New Sub Project registered successfully.",
      "subProject" => $subProject,
    ]);
  }

  public function update(Request $request, $project_id, $sub_project_id)
  {
    $subProject = SubProject::findOrFail($sub_project_id);

    $request->validate([
      'name' => 'required|max:50',
      'display_name' => 'required|max:50',
      'status' => 'required',
      'company_id' => 'required',
      'code' => 'required|alpha_num|max:10:unique:projects,code,' . $subProject->id,
      'description' => 'max:255'
    ]);

    $subProject->name = $request->name;
    $subProject->display_name = $request->display_name;
    $subProject->project_id = $project_id;
    $subProject->company_id = $request->company_id;
    $subProject->description = $request->description;
    $subProject->code = strtoupper($request->code);
    $subProject->is_active = $request->is_active;
    $subProject->save();

    return response()->json([
      "result" => "success",
      "message" => "New Sub Project updated successfully.",
      "subProject" => $subProject,
    ]);
  }
}
