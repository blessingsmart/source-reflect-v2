<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Partner;

class PartnerSeeder extends Seeder
{
    public function run(): void
    {
        $partners = [
            ['name' => 'Global Movers Inc.', 'logo_url' => '/images/partners/global-movers.png'],
            ['name' => 'SafeHomes Ltd.', 'logo_url' => '/images/partners/safehomes.png'],
            ['name' => 'Logistics Hub', 'logo_url' => '/images/partners/logistics-hub.png'],
        ];

        foreach ($partners as $partner) {
            Partner::create($partner);
        }
    }
}
