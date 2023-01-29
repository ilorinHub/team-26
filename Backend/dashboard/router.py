from .middlewares import get_current_tenant

class TenantRouter:
    def db_for_read(self, model, **hints):
        return get_current_tenant()

    def db_for_write(self, model, **hints):
        return get_current_tenant()

    def allow_relation(self,  *args, **kwargs):
        return True