from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
import requests
import json

# Create your views here.
def index(request):
  return render(request, "portal/index.html", {})

def get_quotation(request, code):
	params =  {'from': code, 'to': 'BRL', 'dateStart':'2014-11-16', 'dateEnd': '2014-11-22'}
	per_day = requests.get('http://jsonrates.com/historical', params=params)
	return JsonResponse(per_day.content, safe=False)