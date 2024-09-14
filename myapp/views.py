from django.http import JsonResponse


def simple_api(request):
    data = {
        "message": "Hello, this is a simple API response!",
        "status": "success"
    }
    return JsonResponse(data)
