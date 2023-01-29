from django.db import connection

def get_hostname(request):
    return request.get_host().split(':')[0].lower()

def get_tenants_map():
    return {
        "orelope.library.local": "orelope",
        "ojulore.library.local": "ojulore",
        "grandex.library.local": "grandex",
    }

def get_db_name(request):
    hostname = get_hostname(request)
    tenants_map = get_tenants_map()
    return tenants_map.get(hostname, "default")