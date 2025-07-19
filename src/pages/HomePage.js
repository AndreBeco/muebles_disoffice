import Header from './components/Header';
export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow p-6 bg-gray-100 text-gray-900">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">Bienvenido a Muebles DisOffice</h1>
          <p className="text-lg">
            Esta es tu página de inicio modularizada, con Tailwind CSS funcionando.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
