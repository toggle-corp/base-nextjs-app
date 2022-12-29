import React from 'react';
import Head from 'next/head';

import styles from './styles.module.css';

function Home() {
    return (
        <div className={styles.page}>
            <Head>
                <title>
                    Home
                </title>
            </Head>
            <div className={styles.navbar}>
                Navbar
            </div>
            <div className={styles.mainContent}>
                Content
            </div>
            <div className={styles.footer}>
                Footer
            </div>
        </div>
    );
}

export default Home;
