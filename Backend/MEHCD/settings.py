from pathlib import Path
import os
from datetime import timedelta

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-9i!_n+sm0718fobckhi)dz(3%eflkjxp__4ytq-71eca04_c)g'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ADMINS = (
     ('papycoda', 'opeyemi655@gmail.com'),
)

MANAGERS = ADMINS

ALLOWED_HOSTS = ['*']




# Application definition

# SHARED_APPS = [
#     'django_tenants',
#     'dashboard', 
#     'tenants',
#     'django.contrib.admin',
#     'django.contrib.auth',
#     'django.contrib.contenttypes',
#     'django.contrib.sessions',
#     'django.contrib.messages',
#     'django.contrib.staticfiles',
#     'rest_framework',
#     'django_filters',
#     'corsheaders',
# ]

# TENANT_APPS = [
#     'django.contrib.contenttypes',
#     'django.contrib.auth',
#     'django.contrib.sessions',
#     'django.contrib.messages',
#     'django.contrib.staticfiles',
#     'rest_framework',
#     'django_filters',
#     'corsheaders',
# ]

# INSTALLED_APPS = list(SHARED_APPS) + [app for app in TENANT_APPS if app not in SHARED_APPS]
INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "dashboard", 
    'rest_framework',
    'django_filters',
    'corsheaders',
    'rest_framework_simplejwt',
]

# TENANT_MODEL = "tenants.Tenant"

# TENANT_DOMAIN_MODEL = "tenants.Domain"


MIDDLEWARE = [
    # 'django_tenants.middleware.main.TenantMainMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'dashboard.middlewares.TenantMiddleware',
]

ROOT_URLCONF = 'MEHCD.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

CORS_ORIGIN_WHITELIST = [
    'http://localhost:3000',
]

WSGI_APPLICATION = 'MEHCD.wsgi.application'

REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.IsAuthenticatedOrReadOnly'
    ],
}


# Database
# https://docs.djangoproject.com/en/4.1/ref/settings/#databases

# DATABASES = {
#     'default': {
#         'ENGINE': 'django_tenants.postgresql_backend',
#         'NAME': 'mehcd',
#         'USER': 'postgres',
#         'PASSWORD': 'postgres',
#         'HOST': 'localhost',
#         'PORT': '5432',

#     }
# }

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / "db.sqlite3",
    },
    "orelope": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / "orelope.sqlite3",
    },
    "ojulore": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / "ojulore.sqlite3",
    },
    "grandex": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / "grandex.sqlite3",
    },
}

# DATABASE_ROUTERS = (
#     'django_tenants.routers.TenantSyncRouter',

# )#SETTINGS FOR POSTGRES DATABASE

DATABASE_ROUTERS = ["dashboard.router.TenantRouter"]#settings for sqlite3 database



# Password validation
# https://docs.djangoproject.com/en/4.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]




# Internationalization
# https://docs.djangoproject.com/en/4.1/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.1/howto/static-files/

STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, "static")

# Default primary key field type
# https://docs.djangoproject.com/en/4.1/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
SIMPLE_JWT = {
    'ACCESS_TOKEN_LIFETIME': timedelta(hours=20),
    'REFRESH_TOKEN_LIFETIME': timedelta(hours=20),
    'SIGNING_KEY': SECRET_KEY,
    "AUTH_HEADER_TYPES":["Bearer"],
}

REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES':[
        'rest_framework.permissions.IsAuthenticated'
    ],
    'DEFAULT_AUTHENTICATION_CLASSES': (
        "rest_framework.authentication.SessionAuthentication",
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ),
}