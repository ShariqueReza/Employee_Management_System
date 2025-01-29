from django.shortcuts import render,redirect
from app.models import feedback
from app.forms import FeedbackForm



# Create your views here.
def index_page(request):
    context = {}
    return render(request, 'app/index.html', context)

def contactus_page(request):
    feedbacks=feedback.objects.all()[0:10]
    form=FeedbackForm()
    if request.method == 'POST':
        form = FeedbackForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("/")
        else:
            form = FeedbackForm()

    context={'form':form,'feedback':feedbacks}
    return render(request, 'app/contactus.html', context)

def employee_page(request):
    context = {}
    return render(request, 'app/employees.html', context)
