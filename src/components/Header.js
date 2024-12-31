import React from 'react';

const Header = () => {
  const navigation = [
    { name: 'Canecas', href: '/canecas' },
    { name: 'Camisetas', href: '/camisetas' },
    { name: 'Action Figures', href: '/action-figures' },
    { name: 'Fones de Ouvido', href: '/fones' },
    { name: 'Notebooks', href: '/notebooks' },
  ];

  return (
    <header className="bg-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-gray-700 lg:border-none">
          <div className="flex items-center">
            <a href="/">
              <span className="sr-only">Soberano Geek</span>
              {/* <img
                className="h-10 w-auto"
                src="/logo.svg"
                alt="Soberano Geek Logo"
              /> */}
            </a>
            <div className="hidden ml-10 space-x-8 lg:block">
              {navigation.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-white hover:text-gray-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="ml-10 space-x-4">
            <a
              href="/carrinho"
              className="inline-block bg-gray-700 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-gray-600"
            >
              Carrinho
            </a>
            <a
              href="/login"
              className="inline-block bg-indigo-600 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-indigo-500"
            >
              Login
            </a>
          </div>
        </div>
        <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
          {navigation.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-medium text-white hover:text-gray-300"
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
