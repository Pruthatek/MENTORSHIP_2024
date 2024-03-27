"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function viewsl
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include, path
from django.views.generic import TemplateView

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include("api.urls")),
    path('', TemplateView.as_view(template_name='index.html')),
    path("Signup", TemplateView.as_view(template_name='index.html')),
    
    path("MainMentorship", TemplateView.as_view(template_name='index.html')),
    path("MainMentorship/", TemplateView.as_view(template_name='index.html')),
    path("MainMentorship/attendences", TemplateView.as_view(template_name='index.html')),
    path("MainMentorship/results", TemplateView.as_view(template_name='index.html')),
    path("MainMentorship/feesDetails", TemplateView.as_view(template_name='index.html')),
    path("MainMentorship/session", TemplateView.as_view(template_name='index.html')),
    path("MainMentorship/AddStudent", TemplateView.as_view(template_name='index.html')),
    path("MainMentorship/StudentForm", TemplateView.as_view(template_name='index.html')),
    path("MainMentorship/attendences/SubAttendence", TemplateView.as_view(template_name='index.html')),
    path("MainMentorship/results/SubResults", TemplateView.as_view(template_name='index.html')),
    path("MainMentorship/feesDetails/SubFeesDetails", TemplateView.as_view(template_name='index.html')),
    
    
    path("Hod", TemplateView.as_view(template_name='index.html')),
    path("Hod/", TemplateView.as_view(template_name='index.html')),
    path("Hod/attendancehod", TemplateView.as_view(template_name='index.html')),
    path("Hod/resultshod", TemplateView.as_view(template_name='index.html')),
    path("Hod/feeshod", TemplateView.as_view(template_name='index.html')),
    path("Hod/dashod", TemplateView.as_view(template_name='index.html')),
    path("Hod/MentorForm", TemplateView.as_view(template_name='index.html')),
    path("Hod/attendancehod/Attendence", TemplateView.as_view(template_name='index.html')),
    path("Hod/resultshod/Results", TemplateView.as_view(template_name='index.html')),
    path("Hod/feeshod/FeesDetails", TemplateView.as_view(template_name='index.html')),
    path("Hod/MentorForm/StudentForm", TemplateView.as_view(template_name='index.html')),
    path("Hod/attendancehod/Attendence/SubAttendence", TemplateView.as_view(template_name='index.html')),
    path("Hod/resultshod/Results/SubResults", TemplateView.as_view(template_name='index.html')),
    path("Hod/feeshod/FeesDetails/SubFeesDetails", TemplateView.as_view(template_name='index.html')),
    
    path("Principal", TemplateView.as_view(template_name='index.html')),
    path("Principal/", TemplateView.as_view(template_name='index.html')),
    path("Principal/attendanceprinciple", TemplateView.as_view(template_name='index.html')),
    path("Principal/resultspriciple", TemplateView.as_view(template_name='index.html')),
    path("Principal/feesprinciple", TemplateView.as_view(template_name='index.html')),
    path("Principal/universityprinciple", TemplateView.as_view(template_name='index.html')),
    path("Principal/dashprinciple", TemplateView.as_view(template_name='index.html')),
    path("Principal/MentorsOfClasses", TemplateView.as_view(template_name='index.html')),
    path("Principal/MentorForm", TemplateView.as_view(template_name='index.html')),
    path("Principal/attendanceprinciple/Attendence", TemplateView.as_view(template_name='index.html')),
    path("Principal/resultspriciple/Results", TemplateView.as_view(template_name='index.html')),
    path("Principal/feesprinciple/FeesDetails", TemplateView.as_view(template_name='index.html')),
    path("Principal/MentorForm/StudentForm", TemplateView.as_view(template_name='index.html')),
    path("Principal/attendanceprinciple/Attendence/SubAttendence", TemplateView.as_view(template_name='index.html')),
    path("Principal/resultspriciple/Results/SubResults", TemplateView.as_view(template_name='index.html')),
    path("Principal/feesprinciple/FeesDetails/SubFeesDetails", TemplateView.as_view(template_name='index.html')),

    path("Chairman", TemplateView.as_view(template_name='index.html')),
    path("Chairman/", TemplateView.as_view(template_name='index.html')),
    path("Chairman/attendanceChairman", TemplateView.as_view(template_name='index.html')),
    path("Chairman/resultsChairman", TemplateView.as_view(template_name='index.html')),
    path("Chairman/feesChairman", TemplateView.as_view(template_name='index.html')),
    path("Chairman/Departments", TemplateView.as_view(template_name='index.html')),
    path("Chairman/MentorsOfClasses", TemplateView.as_view(template_name='index.html')),
    path("Chairman/universitychairmain", TemplateView.as_view(template_name='index.html')),
    path("Chairman/notificationchairmain", TemplateView.as_view(template_name='index.html')),
    path("Chairman/MentorForm", TemplateView.as_view(template_name='index.html')),
    path("Chairman/attendenceChairman/Attendence", TemplateView.as_view(template_name='index.html')),
    path("Chairman/resultChairman/Results", TemplateView.as_view(template_name='index.html')),
    path("Chairman/fessChairman/FeesDetails", TemplateView.as_view(template_name='index.html')),
    path("Chairman/MentorForm/StudentForm", TemplateView.as_view(template_name='index.html')),
    path("Chairman/attendenceChairman/Attendence/SubAttendence", TemplateView.as_view(template_name='index.html')),
    path("Chairman/resultChairman/Results/SubResults", TemplateView.as_view(template_name='index.html')),
    path("Chairman/fessChairman/FeesDetails/SubFeesDetails", TemplateView.as_view(template_name='index.html')),
    
]
