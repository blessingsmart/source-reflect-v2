FROM php:8.3-apache

# Install PHP extensions
RUN apt-get update && apt-get install -y \
    git curl unzip zip libpng-dev libonig-dev libxml2-dev libzip-dev npm \
    && docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath zip gd

# Enable Apache mod_rewrite
RUN a2enmod rewrite

# Set working directory
WORKDIR /var/www/html

# Copy application files
COPY . .

# Copy default Apache config to override DocumentRoot
RUN sed -i 's|/var/www/html|/var/www/html/public|g' /etc/apache2/sites-available/000-default.conf

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Install Laravel backend dependencies
RUN composer install --optimize-autoloader --no-dev

# Install frontend dependencies & build assets
RUN npm install && npm run build

# Set permissions
RUN chown -R www-data:www-data storage bootstrap/cache

# Expose port
EXPOSE 80

# Start Apache
CMD ["apache2-foreground"]
