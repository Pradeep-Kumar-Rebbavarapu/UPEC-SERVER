import os
from django.core.asgi import get_asgi_application
import django
from channels.routing import ProtocolTypeRouter,URLRouter

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'server.settings')
django_asgi_app = get_asgi_application()
from channels.auth import AuthMiddlewareStack
from channels.security.websocket import AllowedHostsOriginValidator
import api.routing


application = ProtocolTypeRouter(
    {
        "http":django_asgi_app,
        "websocket":AuthMiddlewareStack(URLRouter(api.routing.websocket_urlpatterns))
        
    }
)