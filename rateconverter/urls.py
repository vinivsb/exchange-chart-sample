from django.conf.urls import patterns, include, url
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = patterns('',
    # Examples:
    url(r'^$', 'portal.views.index', name='home'),
    # url(r'^blog/', include('blog.urls')),
    url(r'^home/', include('portal.urls')),
    url(r'^admin/', include(admin.site.urls)),
    ) + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
