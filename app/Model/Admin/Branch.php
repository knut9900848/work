<?php

namespace App\Model\Admin;

use Illuminate\Database\Eloquent\Model;
use OwenIt\Auditing\Contracts\Auditable;

class Branch extends Model implements Auditable
{
    use \OwenIt\Auditing\Auditable;
}
