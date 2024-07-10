
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
import Logo from '../assets/logo';
import { FaShoppingCart, FaUser, FaSearch } from 'react-icons/fa';
import { useState } from 'react';


const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchSubmit = (e: any) => {
        e.preventDefault();
        // Implement your search logic here
        console.log('Search query:', searchQuery);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarContainer}>
                <div className={styles.leftSection}>
                    <div className={styles.logo}>
                        <Link href="/">
                            <div className={styles.navLink}><Logo/></div>
                        </Link>
                    </div>
                    <Link href="/shop" className={styles.textLink}>
                        <div className={styles.navLink}>SHOP</div>
                    </Link>
                </div>
                
                <div className={styles.centerSection}>
                    <form onSubmit={handleSearchSubmit} className={styles.searchForm}>
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className={styles.searchInput}
                        />
                        <button type="submit" className={styles.searchButton}>
                            <FaSearch />
                        </button>
                    </form>
                </div>

                <div className={styles.rightSection}>
                    <Link href="/cart" className={styles.iconLink}>
                        <div className={styles.navLink}><FaShoppingCart /></div>
                    </Link>
                    <Link href="/profile" className={styles.iconLink}>
                        <div className={styles.navLink}><FaUser /></div>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;