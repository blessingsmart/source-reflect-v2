# Use PHP 8.3 with Apache
FROM php:8.3-apache

# Set working directory
WORKDIR /var/www/html

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git curl unzip zip libpng-dev libonig-dev libxml2-dev libzip-dev npm \
    && docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath zip gd \
    && a2enmod rewrite

# Copy application files
COPY . .

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Install PHP dependencies
RUN composer install --optimize-autoloader --no-dev

# Create storage symlink EARLIER
RUN php artisan storage:link

# Install JS dependencies and build assets
RUN npm install && npm run build

# Fix permissions for storage and bootstrap/cache
RUN chown -R www-data:www-data storage bootstrap/cache public/storage
RUN chmod -R 775 storage bootstrap/cache
RUN chmod -R 755 public/storage

# Configure Apache to follow symlinks and allow access
RUN sed -i '/<Directory \/var\/www\/>/,/<\/Directory>/ s/Options Indexes FollowSymLinks/Options +FollowSymLinks/' /etc/apache2/apache2.conf
RUN sed -i '/<Directory \/var\/www\/>/,/<\/Directory>/ s/AllowOverride None/AllowOverride All/' /etc/apache2/apache2.conf

# Set Apache document root to public
RUN sed -i 's|/var/www/html|/var/www/html/public|g' /etc/apache2/sites-available/000-default.conf

# SQLite DB permissions (if using SQLite)
RUN chmod -R 775 database && chown -R www-data:www-data database

# Expose port 80
EXPOSE 80

# Start Apache
CMD ["apache2-foreground"]