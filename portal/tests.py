from django.test import TestCase
from django.core.urlresolvers import reverse
from django.test import Client

class MethodTests(TestCase):

    def test_index_portal_on_get(self):
        response = self.client.get(reverse('index'))
        self.assertEquals(200, response.status_code)
        self.assertTemplateUsed(response, 'portal/index.html')

    def test_get_quotation_on_get(self):
    	response = self.client.get(reverse('get_quotation_code', kwargs={'code': 'USD'}))
        self.assertEquals(200, response.status_code)
        #self.assertTemplateUsed(response['Content-Type'], 'application/json')