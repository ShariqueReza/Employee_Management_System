from django.shortcuts import render




# Create your views here.
def index_page(request):
    print(request)
    context = {}
    return render(request, 'app/index.html', context)
