
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageCircle, Star, Moon, Sun } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface UserProfile {
  full_name: string;
  gender: string;
  birth_date: string;
  birth_place: string;
  looking_for: string;
}

interface CompatibleProfile {
  id: string;
  name: string;
  age: number;
  sign: string;
  gender: string;
  compatibility: number;
  location: string;
  lookingFor: string;
  description: string;
}

const Home = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [compatibleProfiles] = useState<CompatibleProfile[]>([
    {
      id: "1",
      name: "Luna",
      age: 28,
      sign: "Piscis",
      gender: "mujer",
      compatibility: 92,
      location: "Madrid, España",
      lookingFor: "conexion-especial",
      description: "Alma creativa que encuentra magia en los pequeños momentos. Le encanta la astrología y la meditación."
    },
    {
      id: "2",
      name: "Sofía",
      age: 26,
      sign: "Cáncer",
      gender: "mujer",
      compatibility: 88,
      location: "Barcelona, España",
      lookingFor: "relacion-seria",
      description: "Profesora de yoga con una conexión profunda con la naturaleza. Busca una relación auténtica y duradera."
    },
    {
      id: "3",
      name: "Alejandro",
      age: 30,
      sign: "Escorpio",
      gender: "hombre",
      compatibility: 85,
      location: "Valencia, España",
      lookingFor: "conexion-especial",
      description: "Artista y músico que vive intensamente cada experiencia. Cree en las conexiones kármicas."
    },
    {
      id: "4",
      name: "Diego",
      age: 32,
      sign: "Tauro",
      gender: "hombre",
      compatibility: 90,
      location: "Sevilla, España",
      lookingFor: "relacion-seria",
      description: "Emprendedor apasionado por la vida. Busca construir algo hermoso y duradero con alguien especial."
    }
  ]);

  useEffect(() => {
    loadUserProfile();
  }, []);

  const loadUserProfile = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        toast({
          title: "Acceso denegado",
          description: "Debes completar tu perfil primero",
          variant: "destructive"
        });
        navigate("/onboarding");
        return;
      }

      const { data: profile, error } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('user_id', user.id)
        .single();

      if (error || !profile) {
        toast({
          title: "Perfil incompleto",
          description: "Completa tu perfil cósmico primero",
          variant: "destructive"
        });
        navigate("/onboarding");
        return;
      }

      setUserProfile(profile);
    } catch (error) {
      console.error('Error loading profile:', error);
      navigate("/onboarding");
    }
  };

  const getCompatibilityColor = (percentage: number) => {
    if (percentage >= 90) return "bg-green-500";
    if (percentage >= 80) return "bg-cosmic-gold";
    if (percentage >= 70) return "bg-orange-500";
    return "bg-red-500";
  };

  const getSignIcon = (sign: string) => {
    const icons: { [key: string]: JSX.Element } = {
      "Piscis": <Moon className="w-4 h-4" />,
      "Cáncer": <Moon className="w-4 h-4" />,
      "Escorpio": <Star className="w-4 h-4" />,
      "Tauro": <Sun className="w-4 h-4" />
    };
    return icons[sign] || <Star className="w-4 h-4" />;
  };

  const translateLookingFor = (lookingFor: string) => {
    const translations: { [key: string]: string } = {
      "relacion-seria": "Relación seria",
      "conexion-especial": "Conexión especial",
      "amistad-profunda": "Amistad profunda",
      "explorar": "Explorar"
    };
    return translations[lookingFor] || lookingFor;
  };

  if (!userProfile) {
    return (
      <div className="min-h-screen bg-cosmic-blue flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cosmic-gold mx-auto mb-4"></div>
          <p className="text-white">Cargando tu perfil cósmico...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cosmic-blue">
      {/* Header */}
      <div className="bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">✨ AlmaEstelar</h1>
              <p className="text-cosmic-gold">Bienvenida, {userProfile.full_name}</p>
            </div>
            <Button
              variant="ghost"
              onClick={() => supabase.auth.signOut()}
              className="text-white hover:bg-white/10"
            >
              Cerrar sesión
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            🌟 Tus Conexiones Cósmicas
          </h2>
          <p className="text-gray-300 text-lg">
            Hemos encontrado estas almas compatibles basadas en tu carta natal
          </p>
        </div>

        {/* Compatible Profiles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {compatibleProfiles.map((profile) => (
            <Card key={profile.id} className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <CardContent className="p-6">
                {/* Profile Header */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{profile.name}</h3>
                    <p className="text-gray-300">{profile.age} años</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-cosmic-gold mb-1">
                      {getSignIcon(profile.sign)}
                      <span className="text-sm font-medium">{profile.sign}</span>
                    </div>
                    <Badge className={`${getCompatibilityColor(profile.compatibility)} text-white border-0`}>
                      {profile.compatibility}% compatible
                    </Badge>
                  </div>
                </div>

                {/* Profile Info */}
                <div className="space-y-2 mb-4">
                  <p className="text-gray-300 text-sm">📍 {profile.location}</p>
                  <p className="text-gray-300 text-sm">💫 Busca: {translateLookingFor(profile.lookingFor)}</p>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-6 line-clamp-3">
                  {profile.description}
                </p>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button 
                    className="flex-1 bg-cosmic-magenta hover:bg-cosmic-magenta/80 text-white"
                    onClick={() => toast({
                      title: "💫 Mensaje enviado",
                      description: `Has iniciado una conversación con ${profile.name}`,
                    })}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chatear
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon"
                    className="border-white/20 text-white hover:bg-white/10"
                    onClick={() => toast({
                      title: "💖 ¡Like enviado!",
                      description: `Le has dado like a ${profile.name}`,
                    })}
                  >
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State if no profiles */}
        {compatibleProfiles.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔮</div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Buscando tu conexión perfecta...
            </h3>
            <p className="text-gray-300">
              Las estrellas están alineándose para encontrar tu alma gemela
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
