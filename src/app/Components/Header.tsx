import React from 'react'

function Header() {
    return (
        <header className="bg-green-600 py-4">
          <div className="container mx-auto px-4 flex items-center justify-between">
            <div>
            <h1 className="text-3xl font-bold text-white">
              Restez-Jeune
              <span className="text-red-600 ml-2">.</span>
            </h1>
            <p className="text-sm text-gray-300">Retrouvez forme et santé depuis chez vous !</p>
        </div>
            <div className="flex items-center">
              <img
                src="/img/bonnet.png"
                className="w-12 h-12 mr-4"
              />
              {/* Bouton non fonctionel, a implementer */}
              <button className="bg-white text-green-600 font-bold py-2 px-4 rounded hover:bg-green-200">
            S'inscrire 
          </button>
              
            </div>
          </div>
        </header>
      );
    }

export default Header