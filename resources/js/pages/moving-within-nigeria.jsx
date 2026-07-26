import { Link } from '@inertiajs/react';

export default function MovingWithinNigeria() {
    return (
        <main className="min-h-screen bg-white py-24">
            <div className="mx-auto max-w-5xl px-6 text-center">
                <h1 className="mb-6 text-4xl font-bold text-gray-900">Moving Within Nigeria</h1>
                <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-700">
                    City-to-city relocation for individuals, families and businesses. Trusted logistics, safe transport coordination and local setup support.
                </p>
                <div className="flex justify-center gap-4">
                    <a href="http://wa.me/2348165608778" target="_blank" rel="noopener noreferrer" className="rounded-lg bg-green-600 px-6 py-3 font-semibold text-white">Talk to an Expert</a>
                    <Link href="/contact" className="rounded-lg border-2 border-green-600 px-6 py-3 font-semibold text-green-600">Start My Move</Link>
                </div>
            </div>
        </main>
    );
}
