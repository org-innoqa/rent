import React from 'react';
import { Car, Phone, Mail, MapPin, Calendar } from 'lucide-react';

const cars = [
  { id: 1, name: 'Renault Clio', price: '850 TL', image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=800&q=80' },
  { id: 2, name: 'Fiat Egea', price: '950 TL', image: 'https://images.unsplash.com/photo-1583121274602-3e2820c66888?auto=format&fit=crop&w=800&q=80' },
  { id: 3, name: 'Volkswagen Polo', price: '1100 TL', image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=800&q=80' }
];

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm p-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">RentACar</h1>
          <a href="#iletisim" className="bg-blue-600 text-white px-4 py-2 rounded-lg">İletişim</a>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto p-6">
        <section className="py-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Hayalinizdeki Aracı Kiralayın</h2>
          <p className="text-gray-600">Modern, güvenilir ve uygun fiyatlı araç seçeneklerimizle yolculuğunuza başlayın.</p>
        </section>

        <section className="grid md:grid-cols-3 gap-8 mb-16">
          {cars.map((car) => (
            <div key={car.id} className="bg-white rounded-xl shadow-md overflow-hidden">
              <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{car.name}</h3>
                <p className="text-blue-600 font-bold mt-2">Günlük {car.price}</p>
              </div>
            </div>
          ))}
        </section>

        <section id="iletisim" className="bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-6">Rezervasyon Talebi Oluşturun</h2>
          <form className="grid md:grid-cols-2 gap-6">
            <input type="text" placeholder="Adınız Soyadınız" className="p-3 border rounded-lg" />
            <input type="email" placeholder="E-posta Adresiniz" className="p-3 border rounded-lg" />
            <select className="p-3 border rounded-lg">
              <option>Araç Seçiniz</option>
              {cars.map(c => <option key={c.id}>{c.name}</option>)}
            </select>
            <input type="date" className="p-3 border rounded-lg" />
            <textarea placeholder="Mesajınız" className="md:col-span-2 p-3 border rounded-lg h-32"></textarea>
            <button className="md:col-span-2 bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700">Talebi Gönder</button>
          </form>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-4">
          <div className="flex items-center gap-2"><Phone size={18}/> 0555 000 00 00</div>
          <div className="flex items-center gap-2"><Mail size={18}/> info@rentacar.com</div>
          <div className="flex items-center gap-2"><MapPin size={18}/> İstanbul, Türkiye</div>
        </div>
      </footer>
    </div>
  );
}