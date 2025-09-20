<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Testimonial;

class TestimonialSeeder extends Seeder
{
    public function run(): void
    {
        $testimonials = [
            [
                'name' => 'Jane Doe',
                'role' => 'Expat Client',
                'message' => 'Setudown made my international move stress-free and seamless.'
            ],
            [
                'name' => 'Michael Johnson',
                'role' => 'Corporate HR',
                'message' => 'They handled our staff relocation with professionalism and care.'
            ],
            [
                'name' => 'Amaka U.',
                'role' => 'Student',
                'message' => 'From housing to settling down, their team guided me every step of the way.'
            ],
        ];

        foreach ($testimonials as $testimonial) {
            Testimonial::create($testimonial);
        }
    }
}
