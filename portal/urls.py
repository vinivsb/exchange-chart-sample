from django.conf.urls import patterns, url
from portal import views

urlpatterns = patterns('',
  url(r'^$', views.index, name='index'),
  url(r'^get_quotation$', views.get_quotation, name='get_quotation'),
  url(r'^get_quotation/(?P<code>\w+)/$', views.get_quotation, name='get_quotation_code'),
  )