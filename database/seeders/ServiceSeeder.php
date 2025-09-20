<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Service;

class ServiceSeeder extends Seeder
{
    public function run(): void
    {
        $services = [
            [
                'title' => 'Relocation Support',
                'icon' => '✈️',
                'description' => 'End-to-end support for local and international relocations.'
            ],
            [
                'title' => 'Accommodation & Housing',
                'icon' => '🏠',
                'description' => 'Assistance in securing suitable and affordable housing options.'
            ],
            [
                'title' => 'Logistics & Setup',
                'icon' => '🚚',
                'description' => 'From moving personal effects to setting up utilities and local services.'
            ],
            [
                'title' => 'Advisory & Consultation',
                'icon' => '💼',
                'description' => 'Guidance on cultural integration, documentation, and settlement processes.'
            ],
        ];

        foreach ($services as $service) {
            Service::create($service);
        }
    }
}
