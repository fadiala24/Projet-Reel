<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'suma1' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '_GpkeHK(/Bj3<8E[D9@Yql>xB6LWgaF~eKeo?P#b(WDxcyoZxhncvTl17]|&!_oq' );
define( 'SECURE_AUTH_KEY',  'T.]}We`_8ql[i`|bs0:k9CG?ZeNhPEy<tI&;IpV0U+ Iin{U+.)k#g<W IQ6E}Y}' );
define( 'LOGGED_IN_KEY',    'NIFDOPBYR2M1<>|RdV&x1(@(1S*{I4~:T|-zt)(owYI@WzEjIHZ+D]0:aS1vf+uO' );
define( 'NONCE_KEY',        'QUr;KLj#i~S=-IUEgBY$^.R]2#oZ-B+1>L:uU1ONQmN:2I]sC)xPJWJ ^~R?) @y' );
define( 'AUTH_SALT',        '*}_|0J5d4Zc5iK.n%ys}H[y>B7,S*9@v8-%Fyv5<A$H6a1K_hbL5_x_ ;W]$|gtL' );
define( 'SECURE_AUTH_SALT', 'Oc]64c,P,BQyGx9)UM*oqFvStR!Bs#HfLiSn:=hgF24vHFD,WG4*ayk2nr#nN-)%' );
define( 'LOGGED_IN_SALT',   '{hZyrTo*nZgpq8AMKMrvCpm#$f9]JgeV2$-zPh{a}]Frx#K~lW*-Qg7gd)^NA(w;' );
define( 'NONCE_SALT',       '/-mJqhuNsVEux E;/jhXp)P@_Xg2K8W!f$;dtR>N=-ia_P8.O&vi: j`Y:Yq/VES' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
