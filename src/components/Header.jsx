import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
           <header className="p-5 border-b-3 border-red-600">
             <Link className="text-4xl p-5 text-green-600" href={'/'}>Dev Story</Link> 
        
        <nav>
             <Link href={'/About'}> About
             </Link>
        </nav>

        </header>
    );
};

export default Header;