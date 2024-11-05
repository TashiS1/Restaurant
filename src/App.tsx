import React from 'react';
import { MapPin, Clock, Phone, Utensils, ScrollText, ChefHat } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div 
        className="h-screen relative bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1567337710282-00832b415979?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
            <h1 className="text-6xl font-bold text-white mb-6">3ème Pôle</h1>
            <p className="text-2xl text-white mb-8">Cuisine Tibétaine & Buffet Asiatique</p>
            <div className="flex items-center space-x-4 text-white">
              <MapPin className="w-6 h-6" />
              <p className="text-lg">2219 Rue de la Libération, 62700 Bruay-la-Buissière</p>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Notre Histoire</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Découvrez l'authenticité de la cuisine tibétaine au cœur de Bruay-la-Buissière. 
              Notre restaurant vous propose un voyage culinaire unique à travers les saveurs 
              des hauts plateaux de l'Himalaya et une sélection raffinée de spécialités asiatiques.
            </p>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Nos Spécialités</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Momos Traditionnels",
                image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80",
                description: "Raviolis tibétains faits maison"
              },
              {
                title: "Buffet Asiatique",
                image: "https://images.unsplash.com/photo-1583967447099-1bc0531a0697?auto=format&fit=crop&q=80",
                description: "Large sélection de plats asiatiques"
              },
              {
                title: "Thé au Beurre",
                image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80",
                description: "Boisson traditionnelle tibétaine"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <Clock className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Horaires</h3>
              <p className="text-gray-600">
                Dimanche - Jeudi : 12:00 - 14:00<br />
                18h00 - 22h00<br />
                Vendredi - Samedi : 12:00 - 14:00<br />
                18:00 - 22:30
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <Utensils className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Buffet</h3>
              <p className="text-gray-600">
                Déjeuner(Dimanche - Jeudi): 18,90€<br />
                Dîner(Dimanche - Jeudi): 25,90€<br />
                Enfants (-10 ans): 9,90€<br />
                Déjeuner(Vendredi - Samedi): 18,90€<br />
                Dîner(Vendredi - Samedi): 25,90€<br />
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <Phone className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Réservations</h3>
              <p className="text-gray-600">
                Tél: 06 64 34 07 22<br />
                Réservation conseillée<br />
                les week-ends
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h4 className="text-xl font-bold mb-2">3ème Pôle</h4>
              <p className="text-gray-400">Restaurant Tibétain & Buffet Asiatique</p>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="w-5 h-5" />
              <p className="text-gray-400">2219 Rue de la Libération, 62700 Bruay-la-Buissière</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;