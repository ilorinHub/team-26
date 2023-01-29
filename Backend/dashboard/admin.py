from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(Profile)
admin.site.register(Letter)
admin.site.register(Memo)
admin.site.register(School)
admin.site.register(Bus)
admin.site.register(Review)
admin.site.register(Training)
admin.site.register(LeaveRequest)

#teacher admin page should be able to see all the teachers and their details 
class TeacherAdmin(admin.ModelAdmin):
    list_display = ('user', 'school','qualifications')
    list_filter = ('school', 'qualifications')   
    search_fields = ('user', 'email', 'phone')
    ordering = ('-created_at',)


admin.site.register(Teacher, TeacherAdmin)

