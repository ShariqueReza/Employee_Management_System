from django.shortcuts import render




# Create your views here.
def index_page(request):
    context = {}
    return render(request, 'app/index.html', context)

def contactus_page(request):
    context = {}
    return render(request, 'app/contactus.html', context)
