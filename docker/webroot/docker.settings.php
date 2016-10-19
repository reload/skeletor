<?php
$databases['default']['default'] = array(
  'driver' => 'mysql',
  'database' => 'db',
  'username' => 'db',
  'password' => 'db',
  'host' => 'db',
  'prefix' => '',
  'namespace' => 'Drupal\\Core\\Database\\Driver\\mysql',
);

$settings['hash_salt'] = 'SKELETOR';
$settings['update_free_access'] = FALSE;

/**
 * Enable services.
 */
$settings['container_yamls'][] = __DIR__ . '/services.yml';
// We need the development.services.yml file to be able to set caching services
// to use "cache.backend.null".
$settings['container_yamls'][] = DRUPAL_ROOT . '/sites/development.services.yml';
// Add the possibility to provide custom local service file.
if (file_exists(__DIR__ . '/services.local.yml')) {
 $settings['container_yamls'][] = __DIR__ . '/services.local.yml';
}

$config_directories = [
  CONFIG_SYNC_DIRECTORY => __DIR__ . '/../../../configuration/',
];

$settings['install_profile'] = 'minimal';

// Allow *.docker and *.ngrok.io domains
$settings['trusted_host_patterns'] = ['^.*\.docker$', '.*\.ngrok\.io$'];

// Assertions.
assert_options(ASSERT_ACTIVE, TRUE);
\Drupal\Component\Assertion\Handle::register();

// Show all error messages, with backtrace information.
$config['system.logging']['error_level'] = 'verbose';

// Disable CSS and JS aggregation.
$config['system.performance']['css']['preprocess'] = FALSE;
$config['system.performance']['js']['preprocess'] = FALSE;

// Disable the render cache (this includes the page cache).
$settings['cache']['bins']['render'] = 'cache.backend.null';

// Disable Dynamic Page Cache.
$settings['cache']['bins']['dynamic_page_cache'] = 'cache.backend.null';

// Allow test modules and themes to be installed.
$settings['extension_discovery_scan_tests'] = TRUE;

// Enable access to rebuild.php.
$settings['rebuild_access'] = TRUE;

/**
 * Include environment-specific local overrides
 */
if (file_exists(__DIR__ . '/settings.local.php')) {
 include __DIR__ . '/settings.local.php';
}
