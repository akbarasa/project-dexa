<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    use HasFactory;
    protected $table = 'data_karyawan';
    protected $primarykey = 'id';
    protected $fillable = ['id', 'nama_karyawan', 'tanggal_lahir', 'kota_kelahiran', 'jenis_kelamin',  'nomor_ktp'];
}
